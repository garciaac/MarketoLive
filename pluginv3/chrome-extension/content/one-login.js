console.log("OneLogin > Running");

/**************************************************************************************
 *
 *  This module contains all of the functionality needed for loading external scripts
 *  on 250ok for Email Deliverability.
 *
 *  @Author Brian Fisher
 *
 *  @namespace
 *
 **************************************************************************************/

var URL_PATH = "m3",

ONE_LOGIN = "https://marketolive.com/" + URL_PATH + "/pluginv3/one-login.min.js",

APP = APP || {};

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

APP.loadScript = function (scriptSrc) {
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

window.onload = function () {
  APP.loadScript(ONE_LOGIN);
};