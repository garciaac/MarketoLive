var URL_PATH = "m3",
HEAP_ANALYTICS_SCRIPT_LOCATION = "https://marketolive.com/" + URL_PATH + "/pluginv3/heap-analytics-ext.min.js",
devExtensionId = "dokkjhbgengdlccldgjnbilajdbjlnhm",
prodExtensionId = "onibnnoghllldiecboelbpcaeggfiohl",
extensionId = prodExtensionId,
getOneLoginUser;

/**************************************************************************************
 *
 *  This function retrieves the username, first name, last name, and email address of
 *  the current OneLogin user.
 *
 *  @Author Brian Fisher
 *
 *  @function
 *
 **************************************************************************************/

getOneLoginUser = function () {
    var isOneLoginUser = window.setInterval(function () {
            if (typeof(Application) !== "undefined"
                 && Application.user) {
                console.log("OneLogin > Getting: User");
                
                window.clearInterval(isOneLoginUser);
                
                var oneLoginUser = {
                    username : Application.user.username,
                    firstName : Application.user.firstname,
                    lastName : Application.user.lastname,
                    email : Application.user.email
                },
                isHeapAnalyticsForOneLogin;
                
                oneLoginUser.action = "setOneLoginUser";
                chrome.runtime.sendMessage(extensionId, oneLoginUser, function (response) {
                    console.log("OneLogin > Receiving: Message Response from Background: " + response);
                    
                    return response;
                });
            } else {
                console.log("OneLogin > NOT Getting: User");
            }
        }, 0);
};

/**************************************************************************************
 *
 *  Main
 *
 **************************************************************************************/

console.log("OneLogin > Script Loaded");

getOneLoginUser();