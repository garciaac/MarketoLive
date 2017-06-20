console.log("Running");

/**************************************************************************************
 *
 *  This popup script contains all of the functionality needed to support the
 *  extension's popup window.
 *
 *  @Author Brian Fisher
 *
 *  @namespace
 *
 **************************************************************************************/

var URL_PATH = "m3",

background = chrome.extension.getBackgroundPage(),

mktoLiveClassicMatch = "https://marketolive.com/*",
mktoLiveClassicUriDomain = ".marketolive.com",
mktoDomainMatch = "https://www.marketo.com/*",
mktoUriDomain = ".marketo.com",
mktoDesignerMatch = "https://www.marketodesigner.com/*",
mktoDesignerUriDomain = ".marketodesigner.com",
clearbitDomain = "https://logo.clearbit.com/",

currToggleState = true,
currSaveEditsToggleState = settingsOpen = helpOpen = false,

privilegesToggleCookieMarketo = {
  "url": mktoDomainMatch,
  "name": "toggleState",
  "value": "",
  "domain": mktoUriDomain
},
privilegesToggleCookieDesigner = {
  "url": mktoDesignerMatch,
  "name": "toggleState",
  "value": "",
  "domain": mktoDesignerUriDomain
},
saveEditsToggleCookieDesigner = {
  "url": mktoDesignerMatch,
  "name": "saveEditsToggleState",
  "value": "",
  "domain": mktoDesignerUriDomain
},
companyLogoCookieMarketoLive = {
  "url": mktoLiveClassicMatch,
  "name": "logo",
  "value": "",
  "domain": mktoLiveClassicUriDomain
},
companyLogoCookieDesigner = {
  "url": mktoDesignerMatch,
  "name": "logo",
  "value": "",
  "domain": mktoDesignerUriDomain
},

POPUP = POPUP || {};

/**************************************************************************************
 *
 *  For whatever reason, Chrome does not allow the opening of links from inside
 *  popup.html. The workaround for this is contained below. We select all of the
 *  <a> tags, and then add a click listener that calls window.open() on the <a>
 *  tag's target URL. Jquery is also not allowed by Chrome in this context.
 *
 *  @Author Andrew Garcia
 *
 *  @function
 *
 **************************************************************************************/

POPUP.addLinkClickListeners = function (links) {
  for (var ii = 0; ii < links.length; ii++) {
    links[ii].onclick = function () {
      chrome.tabs.create({
        url: this.href,
        selected: true
      });
    }
  }
};

/**************************************************************************************
 *
 *  This function flashes the border of the given input field red for the given number
 *  of times using the given ms as a timeout.
 *
 *  @Author Brian Fisher
 *
 *  @function
 *
 *  @param {Object} field - HTML input element
 *  @param {Integer} numOfTimes - number of times to flash the element's border
 *  @param {Integer} ms - time in milliseconds for delta time interval
 *
 **************************************************************************************/

POPUP.flashBorder = function (field, numOfTimes, ms) {
  var count = 1,
  redBorder,
  restoreBorder,
  origBorderColor = field.style.getPropertyValue("border-color");
  //origBorderColor = window.getComputedStyle(field).getPropertyValue("border-color");
  
  redBorder = function (field) {
    window.setTimeout(function () {
      field.style.setProperty("border-color", "red");
      restoreBorder(field);
    }, ms);
  };
  
  restoreBorder = function (field) {
    window.setTimeout(function () {
      field.style.setProperty("border-color", origBorderColor);
      
      if (count < numOfTimes) {
        count++;
        redBorder(field);
      }
    }, ms);
  };
  
  redBorder(field);
};

/**************************************************************************************
 *
 *  This function validates the given input field is not blank or null, then returns
 *  true, else it will execute POPUP.flashBorder, then return false.
 *
 *  @Author Brian Fisher
 *
 *  @function
 *
 *  @param {Array} fields - [HTML input elements]
 *
 **************************************************************************************/

POPUP.validateFields = function (fields) {
  var isValid = true;
  
  for (var ii = 0; ii < fields.length; ii++) {
    var field = fields[ii];
    
    if (!field.value) {
      POPUP.flashBorder(field, 3, 500);
      isValid = false;
    }
  }
  
  if (isValid) {
    
    return true;
  } else {
    
    return false;
  }
};

/**************************************************************************************
 *
 *  This function sets an onkeyup event listener for the given input fields in order
 *  that on pressing the Enter key the given submit function executes.
 *
 *  @Author Brian Fisher
 *
 *  @function
 *
 *  @param {Array} fields - [HTML input elements]
 *  @param {Function} submitFunc - function to execute when the Enter key is pressed
 *  @param {Boolean} isContext - true, then pass this.value to submitFunc (optional)
 *
 **************************************************************************************/

POPUP.submitOnEnter = function (fields, submitFunc, isContext) {
  for (var ii = 0; ii < fields.length; ii++) {
    var field = fields[ii];
    
    field.onkeyup = function (e) {
      if (e.keyCode == 13
         && typeof(submitFunc) === "function") {
        
        if (isContext) {
          if (POPUP.validateFields([this])) {
            submitFunc(this.value);
          }
        } else {
          submitFunc();
        }
        
        return;
      } else {
        
        return;
      }
    };
  }
};

/**************************************************************************************
 *
 *  This function formats and corrects the given company domain submitted, then opens
 *  the color-picker page passing the company domain as the company URL parameter.
 *
 *  @Author Brian Fisher
 *
 *  @function
 *
 *  @param {String} companyNameSubmitted - company domain submitted (e.g. marketo.com)
 *
 **************************************************************************************/

POPUP.openColorPicker = function (companyNameSubmitted) {
  if (companyNameSubmitted) {
    companyNameSubmitted = companyNameSubmitted.toLowerCase();
    
    if (companyNameSubmitted.search("\\.[a-z0-9-]+$") == -1) {
      if (companyNameSubmitted.search("\\.$") == -1) {
        companyNameSubmitted = companyNameSubmitted + ".com";
      } else {
        companyNameSubmitted = companyNameSubmitted + "com";
      }
    }
    window.open("https://marketolive.com/" + URL_PATH + "/apps/color-picker.html?company=" + companyNameSubmitted);
  }
};

/**************************************************************************************
 *
 *  Main
 *
 **************************************************************************************/

background.heapTrack({
  name: "Popup",
  app: "Extension",
  area: "Popup",
  version: chrome.app.getDetails().version
});

window.onload = function () {
  var help = document.getElementById("help"),
  settings = document.getElementById("settings"),
  clearCache = document.getElementById("clear-cache"),
  privilegesToggle = document.getElementById("privilegesToggle"),
  saveEditsToggle = document.getElementById("saveEditsToggle"),
  company = document.getElementById("name-entered"),
  submit = document.getElementById("company-submit"),
  clear = document.getElementById("clear-submit");
  
  background.getCookie(privilegesToggleCookieMarketo, function (cookie) {
    if (cookie == null
       || cookie.value == null) {
      console.log("Getting: " + privilegesToggleCookieMarketo.name + " Cookie for " + privilegesToggleCookieMarketo.url + " = null");
      currToggleState = true;
      privilegesToggleCookieMarketo.value = "true";
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Enabled";
      document.getElementById("privilegesToggle").src = "../images/toggle-on.png";
      background.setCookie(privilegesToggleCookieMarketo);
    } else if (cookie.value == "true") {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      currToggleState = true;
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Enabled";
      document.getElementById("privilegesToggle").src = "../images/toggle-on.png";
    } else {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      currToggleState = false;
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Disabled";
      document.getElementById("privilegesToggle").src = "../images/toggle-off.png";
    }
  });
  
  background.getCookie(privilegesToggleCookieDesigner, function (cookie) {
    if (cookie == null
       || cookie.value == null) {
      console.log("Getting: " + privilegesToggleCookieDesigner.name + " Cookie for " + privilegesToggleCookieDesigner.url + " = null");
      currToggleState = true;
      privilegesToggleCookieDesigner.value = "true";
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Enabled";
      document.getElementById("privilegesToggle").src = "../images/toggle-on.png";
      background.setCookie(privilegesToggleCookieDesigner);
    } else if (cookie.value == "true") {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      currToggleState = true;
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Enabled";
      document.getElementById("privilegesToggle").src = "../images/toggle-on.png";
    } else {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      currToggleState = false;
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Disabled";
      document.getElementById("privilegesToggle").src = "../images/toggle-off.png";
    }
  });
  
  background.getCookie(saveEditsToggleCookieDesigner, function (cookie) {
    if (cookie == null
       || cookie.value == null) {
      console.log("Getting: " + saveEditsToggleCookieDesigner.name + " Cookie for " + saveEditsToggleCookieDesigner.url + " = null");
      currSaveEditsToggleState = false;
      saveEditsToggleCookieDesigner.value = "false";
      document.getElementById("saveEditsToggleText").innerHTML = "Save Edits Disabled";
      document.getElementById("saveEditsToggle").src = "../images/toggle-off.png";
      background.setCookie(saveEditsToggleCookieDesigner);
    } else if (cookie.value == "true") {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      currSaveEditsToggleState = true;
      document.getElementById("saveEditsToggleText").innerHTML = "Save Edits Enabled";
      document.getElementById("saveEditsToggle").src = "../images/toggle-on.png";
    } else {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      currSaveEditsToggleState = false;
      document.getElementById("saveEditsToggleText").innerHTML = "Save Edits Disabled";
      document.getElementById("saveEditsToggle").src = "../images/toggle-off.png";
    }
  });
  
  background.getCookie(companyLogoCookieMarketoLive, function (cookie) {
    if (cookie == null
       || cookie.value == null) {
      console.log("Getting: " + companyLogoCookieMarketoLive.name + " Cookie for " + companyLogoCookieMarketoLive.url + " = null");
    } else {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      company.value = cookie.value.toLowerCase().split(clearbitDomain)[1].split("?")[0];
    }
  });
  
  background.getCookie(companyLogoCookieDesigner, function (cookie) {
    if (cookie == null
       || cookie.value == null) {
      console.log("Getting: " + companyLogoCookieDesigner.name + " Cookie for " + companyLogoCookieDesigner.url + " = null");
    } else {
      console.log("Getting: " + cookie.name + " Cookie for " + cookie.domain + " = " + cookie.value);
      company.value = cookie.value.toLowerCase().split(clearbitDomain)[1].split("?")[0];
    }
  });
  
  POPUP.addLinkClickListeners(document.getElementsByClassName("link"));
  
  help.onclick = function () {
    if (!helpOpen) {
      helpOpen = true;
      document.getElementById("help-container").style.display = "block";
    } else {
      helpOpen = false;
      document.getElementById("help-container").style.display = "none";
    }
  };
  
  settings.onclick = function () {
    if (!settingsOpen) {
      settingsOpen = true;
      document.getElementById("settings-container").style.display = "block";
    } else {
      settingsOpen = false;
      document.getElementById("settings-container").style.display = "none";
    }
  };
  
  clearCache.onclick = function () {
    chrome.browsingData.removeCache({
      since: 0
    }, function () {
      var clearCacheText = document.getElementById("clear-cache-text");
      
      background.reloadTabs("*://*.marketo.com/*");
      background.reloadTabs("*://*.marketodesigner.com/*");
      background.reloadTabs("*://*.marketolive.com/*");
      background.reloadTabs("*://250ok.com/*");
      background.reloadTabs("*://marketo.invisionapp.com/*");
      clearCacheText.innerText = "Cache Cleared";
      setTimeout(function () {
        window.close();
        clearCacheText.innerText = "Clear Cache";
      }, 1100);
    });
  };
  
  privilegesToggle.onclick = function () {
    if (!currToggleState) {
      currToggleState = true;
      privilegesToggleCookieMarketo.value = "true";
      privilegesToggleCookieDesigner.value = "true";
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Enabled";
      this.src = "../images/toggle-on.png";
    } else {
      currToggleState = false;
      privilegesToggleCookieMarketo.value = "false";
      privilegesToggleCookieDesigner.value = "false";
      document.getElementById("privilegesToggleText").innerHTML = "Privileges Disabled";
      this.src = "../images/toggle-off.png";
    }
    background.setCookie(privilegesToggleCookieMarketo);
    background.setCookie(privilegesToggleCookieDesigner);
    background.reloadTabs("*://*.marketo.com/*");
    setTimeout(function () {
      window.close();
    }, 1500);
  };
  
  saveEditsToggle.onclick = function () {
    if (!currSaveEditsToggleState) {
      currSaveEditsToggleState = true;
      saveEditsToggleCookieDesigner.value = "true";
      document.getElementById("saveEditsToggleText").innerHTML = "Save Edits Enabled";
      this.src = "../images/toggle-on.png";
      background.getCookie(companyLogoCookieDesigner, function (cookie) {
        if (cookie != null
           && cookie.value != null) {
          background.reloadTabs("*://*" + mktoDesignerUriDomain + "/*");
        }
      });
    } else {
      currSaveEditsToggleState = false;
      saveEditsToggleCookieDesigner.value = "false";
      document.getElementById("saveEditsToggleText").innerHTML = "Save Edits Disabled";
      this.src = "../images/toggle-off.png";
      background.reloadCompany();
    }
    background.setCookie(saveEditsToggleCookieDesigner);
    setTimeout(function () {
      window.close();
    }, 1500);
  };
  
  submit.onclick = function (e) {
    if (POPUP.validateFields([company])) {
      POPUP.openColorPicker(company.value);
    }
  };
  
  POPUP.submitOnEnter([company], submit.onclick);
  
  clear.onclick = function () {
    company.value = null;
    background.removeCookie(companyLogoCookieMarketoLive);
    background.removeCookie(companyLogoCookieDesigner);
    background.removeCookie({
      "url": mktoLiveClassicMatch,
      "name": "color",
      "value": "",
      "domain": mktoLiveClassicUriDomain
    });
    background.removeCookie({
      "url": mktoDesignerMatch,
      "name": "color",
      "value": "",
      "domain": mktoDesignerUriDomain
    });
    background.removeCookie({
      "url": mktoLiveClassicMatch,
      "name": "heroBackground",
      "value": "",
      "domain": mktoLiveClassicUriDomain
    });
    background.removeCookie({
      "url": mktoDesignerMatch,
      "name": "heroBackground",
      "value": "",
      "domain": mktoDesignerUriDomain
    });
    background.removeCookie({
      "url": mktoLiveClassicMatch,
      "name": "heroBackgroundRes",
      "value": "",
      "domain": mktoLiveClassicUriDomain
    });
    background.removeCookie({
      "url": mktoDesignerMatch,
      "name": "heroBackgroundRes",
      "value": "",
      "domain": mktoDesignerUriDomain
    });
    
    background.getCookie(saveEditsToggleCookieDesigner, function (cookie) {
      if (cookie != null
         && cookie.value == "false") {
        background.reloadTabs(background.mktoDesignerMatchPattern);
      }
    });
    
    setTimeout(function () {
      window.close();
      //settingsOpen = false;
      //document.getElementById("settings-container").style.display = "none";
    }, 1100);
  };
};