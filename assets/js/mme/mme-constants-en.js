var MME = MME || {};

MME.imagePath = "../assets/img/";
MME.defaultPush = "Summer's here! Stay cool in the heat with this discount!";
MME.getCookie = function(cookieField) {
    var name = cookieField + "=",
        cookies = document.cookie.split(';'),
        currentCookie;
    for (var ii = 0; ii < cookies.length; ++ii) {
        var currentCookie = cookies[ii].trim();
        if (currentCookie.indexOf(name) == 0)
            return currentCookie.substring(name.length, currentCookie.length);
    }
    return null;
};

pod = MME.getCookie("userPod");
console.log("MME > Reading User Pod: " + pod);

switch (pod) {
    case "app-sjp":
        console.log("MME > Deeplinking: 106");
        $("#demo-in-marketo").click(function() {
            location.replace("https://" + pod + ".marketo.com/#SC21914B2");
        });
        break;
    case "app-ab07":
        console.log("MME > Deeplinking: 106a");
        $("#demo-in-marketo").click(function() {
            location.replace("https://" + pod + ".marketo.com/#SC20920B2");
        });
        break;
    case "app-ab08":
        console.log("MME > Deeplinking: 106b");
        $("#demo-in-marketo").click(function() {
            location.replace("https://" + pod + ".marketo.com/#SC19745B2");
        });
        break;
    default:
        console.log("MME > Invalid userPod cookie: " + pod);
        $("#demo-in-marketo").click(function() {
            location.replace("https://login.marketo.com");
        });
        break;
}