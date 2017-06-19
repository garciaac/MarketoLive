console.log("Marketo Global App > Running");

/**************************************************************************************
 *
 *  This script contains all of the functionality needed for loading external scripts
 *  on MarketoLive environments.
 *
 *  @Author Brian Fisher
 *
 *  @namespace
 *
 **************************************************************************************/

var URL_PATH = "m3-dev",

MARKETO_LIVE_APP = "https://marketolive.com/" + URL_PATH + "/pluginv3/marketo-app.min.js",
MARKETO_LIVE_APP_ADMIN = "https://marketolive.com/" + URL_PATH + "/pluginv3/marketo-app-admin.min.js",
MARKETO_DEMO_APP = "https://marketolive.com/" + URL_PATH + "/pluginv3/marketo-demo-app.min.js",
POD_SCRIPT = "https://marketolive.com/" + URL_PATH + "/pluginv3/pods.min.js",
DASHBOARD_DATA = "https://marketolive.com/" + URL_PATH + "/pluginv3/dashboards/remote-data.min.js",
HEAP_ANALYTICS = "https://marketolive.com/" + URL_PATH + "/pluginv3/heap-analytics.min.js",
HEAP_ANALYTICS_DEMO = "https://marketolive.com/" + URL_PATH + "/pluginv3/heap-analytics-demo.min.js",

currentUrl = window.location.href,
mktoDemoAccountMatch = "^(scdynamics1|mktodemoaccount3[0-9][0-9]|mktodemoaccount232|mktodemoaccount264|mktodemoinfor01)$",
mktoAccountStringsMatch106 = "^(mktodemoaccount106|mktodemoaccount106d)$",
mktoAccountStringsMatch106andMaster = "^(mktodemoaccount106|mktodemoaccount106d|mktodemolivemaster)$",
mktoAccountStringsMatch106andQe = "^(mktodemoaccount106|mktodemoaccount106d|globalsales)$",
mktoAccountStringsMatch = "^(mktodemoaccount106|mktodemoaccount106d|mktodemolivemaster|globalsales)$",
mktoWizardDomain = "^https://app-[a-z0-9]+\.marketo\.com/m#",

adminUserNamesMatch = "^(mktodemolivemaster@marketo\.com$|admin(\.[a-z]{0,2})?@(marketolive.com$|mktodemoaccount)|mktodemoaccount[a-z0-9]*@marketo\.com$|marketodemo.*@gmail\.com$)",

GLOBAL_APP = GLOBAL_APP || {};

/**************************************************************************************
 *
 *  This function loads the given script source.
 *
 *  @Author Brian Fisher
 *
 *  @function
 *
 *  @param {String} scriptSrc - The URL of the desired script.
 *
 **************************************************************************************/

GLOBAL_APP.loadScript = function (scriptSrc) {
  console.log("Loading: Script: " + scriptSrc);
  
  var scriptElement = document.createElement("script");
  scriptElement.async = true;
  scriptElement.src = scriptSrc;
  document.getElementsByTagName("head")[0].appendChild(scriptElement);
};

/**************************************************************************************
 *
 *  Main
 *
 **************************************************************************************/

var isMktoPageGlobal = window.setInterval(function () {
    if (typeof(MktPage) !== "undefined"
       && MktPage.savedState
       && MktPage.savedState.custPrefix
       && MktPage.userid
       && MktPage.userid != "") {
      console.log("Marketo Global App > Location: Marketo Page");
      
      window.clearInterval(isMktoPageGlobal);
      
      var accountString = MktPage.savedState.custPrefix;
      
      if (accountString.search(mktoAccountStringsMatch) != -1) {
        console.log("Marketo Global App > Location: MarketoLive Instance");
        
        if (MktPage.userid.toLowerCase().search(adminUserNamesMatch) != -1) {
          console.log("Marketo Global App > User: Admin");
          
          GLOBAL_APP.loadScript(MARKETO_LIVE_APP_ADMIN);
          return;
        } else {
          console.log("Marketo Global App > User: Normal");
          
          GLOBAL_APP.loadScript(MARKETO_LIVE_APP);
        }
        
        if (accountString.search(mktoAccountStringsMatch106andMaster) != -1) {
          GLOBAL_APP.loadScript(HEAP_ANALYTICS);
        }
        
        if (accountString.search(mktoAccountStringsMatch106) != -1) {
          GLOBAL_APP.loadScript(POD_SCRIPT);
        }
        
        if (accountString.search(mktoAccountStringsMatch106andQe) != -1
           && currentUrl.search(mktoWizardDomain) == -1) {
          GLOBAL_APP.loadScript(DASHBOARD_DATA);
        }
      } else if (accountString.search(mktoDemoAccountMatch) != -1) {
        console.log("Marketo Global App > Location: Marketo Demo Instance");
        
        GLOBAL_APP.loadScript(MARKETO_DEMO_APP);
        GLOBAL_APP.loadScript(HEAP_ANALYTICS_DEMO);
        
        if (currentUrl.search(mktoWizardDomain) == -1) {
          GLOBAL_APP.loadScript(DASHBOARD_DATA);
        }
      }
    }
  }, 0);