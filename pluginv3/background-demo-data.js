var mktoLiveLandingPageHost = "na-sjdemo1.marketo.com",
mktoLiveDevMunchkinId = "685-BTN-772",
mktoLiveProdMunchkinId = "185-NGX-811",
mktoLiveMunchkinId = mktoLiveDevMunchkinId,
mktoLiveDevHost = "www.marketolive-dev.com",
mktoLiveProdHost = "www.marketolive.com",
mktoLiveHost = mktoLiveProdHost,
landingPageType = "landing",
webPageType = "web",
signupPageIndex = 0;
webPages = {
    0 : {
        name : "signup",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Lead-Capture_Landing-Page.html",
        dependentOn : [],
        visitationRate : 0.5,
        conversionRate : 1.0
    },
    1 : {
        name : "preferenceCenter",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Subscription-Management_Preference-Center.html",
        dependentOn : ["signup"],
        visitationRate : 0.05,
        conversionRate : 1.0
    },
    2 : {
        name : "notYouPreferenceCenter",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Subscription-Management_Not-You-Preference-Center.html",
        dependentOn : ["signup"],
        visitationRate : 0.01,
        conversionRate : 1.0
    },
    3 : {
        name : "webinarRegistration",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Webinar_Registration.html",
        dependentOn : ["signup"],
        visitationRate : 0.10,
        conversionRate : 1.0
    },
    4 : {
        name : "webinarCheckIn",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Webinar_CheckIn.html",
        dependentOn : ["signup", "webinarRegistration"],
        visitationRate : 0.80,
        conversionRate : 1.0
    },
    5 : {
        name : "liveEventRegistration",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Live-Event_Registration-Page.html",
        dependentOn : ["signup"],
        visitationRate : 0.10,
        conversionRate : 1.0
    },
    6 : {
        name : "liveEventCheckIn",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Live-Event_Check-In.html",
        dependentOn : ["signup", "liveEventRegistration"],
        visitationRate : 0.80,
        conversionRate : 1.0
    },
    7 : {
        name : "rewardsSignup",
        type : landingPageType,
        url : "http://" + mktoLiveLandingPageHost + "/lp/" + mktoLiveMunchkinId + "/Rewards-for-Champions_Rewards-Page.html",
        dependentOn : ["signup"],
        visitationRate : 0.05,
        conversionRate : 1.0
    },
    8 : {
        name : "whyUs",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/why-us",
        dependentOn : [],
        visitationRate : 0.33,
        conversionRate : 1.0
    },
    9 : {
        name : "integrations",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/integrations",
        dependentOn : [],
        visitationRate : 0.50,
        conversionRate : 1.0
    },
    10 : {
        name : "contactUs",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/contact-us",
        dependentOn : [],
        visitationRate : 0.05,
        conversionRate : 1.0
    },
    11 : {
        name : "community",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/community",
        dependentOn : ["signup", "rewardsSignup"],
        visitationRate : 0.03,
        conversionRate : 1.0
    },
    12 : {
        name : "liveEvent",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/live-event",
        dependentOn : ["signup", "liveEventRegistration"],
        visitationRate : 0.50,
        conversionRate : 1.0
    },
    13 : {
        name : "webinar",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/webinar",
        dependentOn : ["signup", "webinarRegistration"],
        visitationRate : 0.50,
        conversionRate : 1.0
    },
    14 : {
        name : "products",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/products",
        dependentOn : [],
        visitationRate : 0.75,
        conversionRate : 1.0
    },
    15 : {
        name : "pricing",
        type : webPageType,
        url : "http://" + mktoLiveHost + "/info/pricing",
        dependentOn : [],
        visitationRate : 0.80,
        conversionRate : 1.0
    }
},
jobTitles = [
    "Account Director",
    "Account Executive",
    "Account Management",
    "Account Manager",
    "Account Specialist",
    "Area Vice President, Corporate Sales",
    "Business Operations",
    "Business Systems Analyst",
    "Campaign Analyst",
    "Channels Manager",
    "Chief Marketing Officer",
    "Computer Software Professional",
    "Corporate Marketing Manager",
    "Corporate Sales, Media & Communications",
    "Customer Success Manager",
    "Customer Success Manager, Media & Communications",
    "Delivery Engagment Manager",
    "Development Manager",
    "Director, Alliances Central",
    "Director, International Marketing",
    "Director, Marketing",
    "Director, Purchasing",
    "Director, Sales",
    "Director, User Experience",
    "Director, World Wide Field Operations",
    "Engagement Manager",
    "Founding Partner",
    "General Manager",
    "Key Account Manager",
    "Managing Editor",
    "Market Research Analyst",
    "Marketing",
    "Marketing Communications Manager",
    "Marketing Communications Specialist",
    "Marketing Coordinator",
    "Marketing Executive",
    "Marketing Lead",
    "Marketing Manager",
    "Marketing Professional",
    "Marketing Programs Manager",
    "Marketing Specialist",
    "Marketing Writer",
    "Online Marketing Manager",
    "Partner Program Manager",
    "Principal Architect",
    "Product Marketing Manager",
    "Public Relations Manager",
    "Purchasing",
    "Purchasing & Logistics Coordinator",
    "Purchasing Manager",
    "Regional Account Executive, Non-profits & Education",
    "Regional Vice President",
    "Regional Vice President, Corporate Sales",
    "Sales Engineer",
    "Sales Manager",
    "Sales Manager, Financial Services",
    "Sales Representative, Mid Market",
    "Search Marketing Analyst",
    "Search Marketing Strategist",
    "Senior Account Executive",
    "Senior Account Executive, Technology",
    "Senior Account Manager",
    "Senior Customer Success Manager",
    "Senior Director, Partner Success",
    "Senior Marketing Manager",
    "Senior Organic Search Marketing Strategist",
    "Senior Segment Analyst",
    "Senior Vice President, World Wide Sales & Marketing",
    "Vice President",
    "Vice President, Corporate Sales",
    "Vice President, Marketing",
    "Vice President, Sales",
    "Vice President, Sales Engineering",
    "Vice President, World Wide Marketing & Corporate Strategy",
    "Web Marketing Manager"
],
companies = [
    ["Healthy4Life", "Healthcare"],
    ["Investo Banking", "Financial Services"],
    ["Kinetic Therapy", "Healthcare"],
    ["LexCorp Industries", "Manufacturing"],
    ["Luxury Escapes", "Travel & Leisure"],
    ["Marketing College", "Higher Education"],
    ["Rainmaker Investments", "Financial Services"],
    ["Scale.io", "Technology"],
    ["Travel4Life", "Travel & Leisure"],
    ["Turner Technologies", "Technology"],
    ["University of Marketing", "Higher Education"],
    ["Utah Instruments", "Manufacturing"]
],
leadSources = [
    "Inbound Call",
    "LinkedIn",
    "List Import",
    "Live Event",
    "Online Ad",
    "Other",
    "Partner",
    "PPC",
    "Referral",
    "Sales Outbound",
    "Webinar",
    "Website"
],
usAreaCodes = [201, 202, 203, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 218, 219, 224, 225, 228, 229, 231, 234, 239, 240, 248, 251, 252, 253, 254, 256, 260, 262, 267, 269, 270, 272, 276, 281, 301, 302, 303, 304, 305, 307, 308, 309, 310, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 323, 325, 330, 331, 334, 336, 337, 339, 340, 346, 347, 351, 352, 360, 361, 385, 386, 401, 402, 404, 405, 406, 407, 408, 409, 410, 412, 413, 414, 415, 417, 419, 423, 424, 425, 430, 432, 434, 435, 440, 442, 443, 458, 469, 470, 475, 478, 479, 480, 484, 501, 502, 503, 504, 505, 507, 508, 509, 510, 512, 513, 515, 516, 517, 518, 520, 530, 531, 534, 539, 540, 541, 551, 559, 561, 562, 563, 567, 570, 571, 573, 574, 575, 580, 585, 586, 601, 602, 603, 605, 606, 607, 608, 609, 610, 612, 614, 615, 616, 617, 618, 619, 620, 623, 626, 630, 631, 636, 641, 646, 650, 651, 657, 660, 661, 662, 667, 669, 670, 671, 678, 681, 682, 684, 701, 702, 703, 704, 706, 707, 708, 712, 713, 714, 715, 716, 717, 718, 719, 720, 724, 725, 727, 731, 732, 734, 737, 740, 747, 754, 757, 760, 762, 763, 765, 769, 770, 772, 773, 774, 775, 779, 781, 785, 786, 787, 801, 802, 803, 804, 805, 806, 808, 810, 812, 813, 814, 815, 816, 817, 818, 828, 830, 831, 832, 843, 845, 847, 848, 850, 856, 857, 858, 859, 860, 862, 863, 864, 865, 870, 872, 878, 901, 903, 904, 906, 907, 908, 909, 910, 912, 913, 914, 915, 916, 917, 918, 919, 920, 925, 928, 929, 931, 936, 937, 938, 939, 940, 941, 947, 949, 951, 952, 954, 956, 970, 971, 972, 973, 978, 979, 980, 984, 985, 989],
frMobile = "+33 06 55 55 55 55",
ukMobile = "+44 070 5555 5555",
deMobile = "+49 0151 5555555",
auMobile = "+61 04011 555 555",
jpMobile = "+81 070 5555  5555",
frPhone = "+33 01 55 55 55 55",
ukPhone = "+44 020 5555 5555",
dePhone = "+49 030 5555 5555",
auPhone = "+61 02 5555 5555",
jpPhone = "+81 03 5555 5555",
mobileNumbers = [frMobile, ukMobile, deMobile, auMobile, jpMobile],
phoneNumbers = [frPhone, ukPhone, dePhone, auPhone, jpPhone],
mobileNumberConversionRate = 0.25,
phoneNumberConversionRate = 0.5,
usNumberRate = 0.75,
webPageX,
webPageXvisitationRate,
companyX,
cookieExpiresInDays = 365,
jobTitleCookieName = "attrib_job_title",
companyNameCookieName = "attrib_company_name",
industryCookieName = "attrib_industry",
leadSourceCookieName = "attrib_lead_source",
mobileNumberCookieName = "attrib_mobile_number",
phoneNumberCookieName = "attrib_phone_number",
hasUsernameCookie,
usernameCookieName = "onelogin_username";
visitedPagesCookieMarketoLive = {
    url : mktoLiveDomainMatch,
    domain : mktoLiveUriDomain,
    name : "visitedPages",
    expiresInDays : cookieExpiresInDays
},
visitedPagesCookie; ;

/**************************************************************************************
 *
 *  Main
 *
 **************************************************************************************/

console.log("Selecting: Web Page to Visit & Lead Attributes for Form Fill");

webPageX = webPages[Math.floor((Math.random() * Object.keys(webPages).length))];
webPageXvisitationRate = webPageX.visitationRate * Object.keys(webPages).length;
companyX = companies[Math.floor((Math.random() * companies.length))];

getCookie({
    url : mktoAppDomainMatch,
    name : jobTitleCookieName
}, function (cookie) {
    if (!cookie
         || !cookie.value) {
        console.log("Initializing: " + jobTitleCookieName + " Cookie");
        
        var jobTitleX = jobTitles[Math.floor((Math.random() * jobTitles.length))];
        
        setCookie({
            url : mktoLiveDomainMatch,
            domain : mktoLiveUriDomain,
            name : jobTitleCookieName,
            value : jobTitleX,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoLiveClassicDomainMatch,
            domain : mktoLiveClassicUriDomain,
            name : jobTitleCookieName,
            value : jobTitleX,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoAppDomainMatch,
            domain : mktoAppUriDomain,
            name : jobTitleCookieName,
            value : jobTitleX,
            expiresInDays : cookieExpiresInDays
        });
    }
});

getCookie({
    url : mktoAppDomainMatch,
    name : companyNameCookieName
}, function (cookie) {
    if (!cookie
         || !cookie.value) {
        console.log("Initializing: " + companyNameCookieName + " Cookie");
        
        var companyName = companyX[0];
        
        setCookie({
            url : mktoLiveDomainMatch,
            domain : mktoLiveUriDomain,
            name : companyNameCookieName,
            value : companyName,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoLiveClassicDomainMatch,
            domain : mktoLiveClassicUriDomain,
            name : companyNameCookieName,
            value : companyName,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoAppDomainMatch,
            domain : mktoAppUriDomain,
            name : companyNameCookieName,
            value : companyName,
            expiresInDays : cookieExpiresInDays
        });
    }
});

getCookie({
    url : mktoAppDomainMatch,
    name : industryCookieName
}, function (cookie) {
    if (!cookie
         || !cookie.value) {
        console.log("Initializing: " + industryCookieName + " Cookie");
        
        var industry = companyX[1];
        
        setCookie({
            url : mktoLiveDomainMatch,
            domain : mktoLiveUriDomain,
            name : industryCookieName,
            value : industry,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoLiveClassicDomainMatch,
            domain : mktoLiveClassicUriDomain,
            name : industryCookieName,
            value : industry,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoAppDomainMatch,
            domain : mktoAppUriDomain,
            name : industryCookieName,
            value : industry,
            expiresInDays : cookieExpiresInDays
        });
    }
});

getCookie({
    url : mktoAppDomainMatch,
    name : leadSourceCookieName
}, function (cookie) {
    if (!cookie
         || !cookie.value) {
        console.log("Initializing: " + leadSourceCookieName + " Cookie");
        
        var leadSourceX = leadSources[Math.floor((Math.random() * leadSources.length))];
        
        setCookie({
            url : mktoLiveDomainMatch,
            domain : mktoLiveUriDomain,
            name : leadSourceCookieName,
            value : leadSourceX,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoLiveClassicDomainMatch,
            domain : mktoLiveClassicUriDomain,
            name : leadSourceCookieName,
            value : leadSourceX,
            expiresInDays : cookieExpiresInDays
        });
        setCookie({
            url : mktoAppDomainMatch,
            domain : mktoAppUriDomain,
            name : leadSourceCookieName,
            value : leadSourceX,
            expiresInDays : cookieExpiresInDays
        });
    }
});

getCookie({
    url : mktoAppDomainMatch,
    name : mobileNumberCookieName
}, function (cookie) {
    if (!cookie
         || !cookie.value) {
        
        if ((Math.random()) <= mobileNumberConversionRate) {
            console.log("Initializing: " + mobileNumberCookieName + " Cookie");
            
            var mobileNumberX;
            if ((Math.random()) <= usNumberRate) {
                mobileNumberX = "+1-" + usAreaCodes[Math.floor((Math.random() * usAreaCodes.length))] + "-555-" + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10));
            } else {
                mobileNumberX = mobileNumbers[Math.floor((Math.random() * mobileNumbers.length))];
            }
            
            setCookie({
                url : mktoLiveDomainMatch,
                domain : mktoLiveUriDomain,
                name : mobileNumberCookieName,
                value : mobileNumberX,
                expiresInDays : cookieExpiresInDays
            });
            setCookie({
                url : mktoLiveClassicDomainMatch,
                domain : mktoLiveClassicUriDomain,
                name : mobileNumberCookieName,
                value : mobileNumberX,
                expiresInDays : cookieExpiresInDays
            });
            setCookie({
                url : mktoAppDomainMatch,
                domain : mktoAppUriDomain,
                name : mobileNumberCookieName,
                value : mobileNumberX,
                expiresInDays : cookieExpiresInDays
            });
        } else {
            console.log("NOT Initializing: " + mobileNumberCookieName + " Cookie due to conversion rate " + mobileNumberConversionRate);
        }
    }
});

getCookie({
    url : mktoAppDomainMatch,
    name : phoneNumberCookieName
}, function (cookie) {
    if (!cookie
         || !cookie.value) {
        
        if ((Math.random()) <= phoneNumberConversionRate) {
            console.log("Initializing: " + phoneNumberCookieName + " Cookie");
            
            var phoneNumberX;
            if ((Math.random()) <= usNumberRate) {
                phoneNumberX = "+1-" + usAreaCodes[Math.floor((Math.random() * usAreaCodes.length))] + "-555-" + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10));
            } else {
                phoneNumberX = phoneNumbers[Math.floor((Math.random() * phoneNumbers.length))];
            }
            
            setCookie({
                url : mktoLiveDomainMatch,
                domain : mktoLiveUriDomain,
                name : phoneNumberCookieName,
                value : phoneNumberX,
                expiresInDays : cookieExpiresInDays
            });
            setCookie({
                url : mktoLiveClassicDomainMatch,
                domain : mktoLiveClassicUriDomain,
                name : phoneNumberCookieName,
                value : phoneNumberX,
                expiresInDays : cookieExpiresInDays
            });
            setCookie({
                url : mktoAppDomainMatch,
                domain : mktoAppUriDomain,
                name : phoneNumberCookieName,
                value : phoneNumberX,
                expiresInDays : cookieExpiresInDays
            });
        } else {
            console.log("NOT Initializing: " + phoneNumberCookieName + " Cookie due to conversion rate " + phoneNumberConversionRate);
        }
    }
});

if (webPageX.type == landingPageType) {
    getCookie({
        url : mktoAppDomainMatch,
        name : usernameCookieName
    }, function (cookie) {
        if (cookie
             && cookie.value) {
            hasUsernameCookie = true;
        } else {
            hasUsernameCookie = false;
        }
    });
} else if (webPageX.type == webPageType) {
    getCookie({
        url : mktoLiveDomainMatch,
        name : usernameCookieName
    }, function (cookie) {
        if (cookie
             && cookie.value) {
            hasUsernameCookie = true;
        } else {
            hasUsernameCookie = false;
        }
    });
}

getCookie(visitedPagesCookieMarketoLive, function (cookie) {
    if (cookie
         && cookie.value) {
        visitedPagesCookie = cookie;
    }
});

if (hasUsernameCookie) {
    var tabId;
    
    function visitPage(visit) {
        chrome.tabs.create({
            url : webPageX.url + "?" + submitParam,
            active : false,
            selected : false,
            pinned : true
        });
        
        window.setTimeout(function () {
            chrome.tabs.remove(tabId);
        }, 10000);
        
        console.log("Response: " + webPageX.url + "?" + submitParam);
        if (visit == "initial") {
            visitedPagesCookieMarketoLive.value = webPageX.name;
        } else {
            visitedPagesCookieMarketoLive.value = visitedPagesCookie.value + ", " + webPageX.name;
        }
        setCookie(visitedPagesCookieMarketoLive);
    }
    
    if (visitedPagesCookie
         && visitedPagesCookie.value) {
        var submitParam;
        
        if (webPageXvisitationRate >= 1.0
             || (Math.random()) <= webPageXvisitationRate) {
            var proceed = false;
            
            if (webPageX.dependentOn.length > 0) {
                for (var ii = 0; ii < webPageX.dependentOn.length; ii++) {
                    if (visitedPagesCookie.value.search("(, )\?" + webPageX.dependentOn[ii] + "(,)\?") != -1) {
                        proceed = true;
                    } else {
                        proceed = false;
                        break;
                    }
                }
            } else {
                proceed = true;
            }
            
            if (proceed) {
                console.log("Visiting: " + webPageX.url);
                
                if (webPageX.type == landingPageType
                     && (webPageX.conversionRate >= 1.0
                         || (Math.random()) <= webPageX.conversionRate)) {
                    
                    submitParam = "submit=true";
                } else {
                    submitParam = "submit=false";
                }
                
                visitPage();
            } else {
                console.log("NOT Visiting: " + webPageX.url + " due to dependencies not being met (" + webPageX.dependentOn.toString() + ")");
            }
        } else {
            console.log("NOT Visiting: " + webPageX.url + " due to web page visitation rate (" + webPageXvisitationRate + ")");
        }
    } else {
        webPageX = webPages[signupPageIndex];
        
        if ((Math.random()) <= webPageX.visitationRate) {
            console.log("Visiting Initial Page: " + webPageX.url);
            
            if (webPageX.type == landingPageType
                 && (webPageX.conversionRate >= 1.0
                     || (Math.random()) <= webPageX.conversionRate)) {
                
                submitParam = "submit=true";
            } else {
                submitParam = "submit=false";
            }
            
            visitPage("initial");
        } else {
            console.log("NOT Visiting: " + webPageX.url + " due to web page visitation rate (" + webPageX.visitationRate + ")");
        }
    }
} else {
    console.log("NOT Visiting: " + webPageX.url + " due to " + usernameCookieName + " cookie is null");
}