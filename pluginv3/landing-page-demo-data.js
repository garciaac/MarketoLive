console.log("Landing Page > Script: Loaded");

if (typeof(MktoForms2) !== "undefined") {
    MktoForms2.whenReady(function(form) {
        var demoMailBox = "mktodemosvcs+",
            usernameCookieName = "onelogin_username",
            firstNameCookieName = "onelogin_first_name",
            lastNameCookieName = "onelogin_last_name",
            emailCookieName = "onelogin_email",
            jobTitleCookieName = "attrib_job_title",
            companyNameCookieName = "attrib_company_name",
            industryCookieName = "attrib_industry",
            leadSourceCookieName = "attrib_lead_source",
            checkBoxes = ["yes", "no"],
            answer,
            getCookie;
        
        getCookie = function(cookieName) {
            console.log("Landing Page > Getting: Cookie " + cookieName);
            
            var name = cookieName + '=',
                cookies = document.cookie.split(';'),
                currCookie;
            
            for (var ii = 0; ii < cookies.length; ii++) {
                currCookie = cookies[ii].trim();
                if (currCookie.indexOf(name) == 0) {
                    return currCookie.substring(name.length, currCookie.length);
                }
            }
            console.log("Landing Page > Getting: Cookie " + cookieName + " not found");
            return null;
        }
        
        if (typeof(form.getValues().FirstName) != "undefined") {
            var firstName = getCookie(firstNameCookieName);
            
            if (firstName != null) {
                form.vals({FirstName : firstName});
            }
        }
        
        if (typeof(form.getValues().LastName) != "undefined") {
            var lastName = getCookie(lastNameCookieName);
            
            if (lastName != null) {
                form.vals({LastName : lastName});
            }
        }
        
        if (typeof(form.getValues().Email) != "undefined") {
            var email = demoMailBox + getCookie(usernameCookieName) + "@gmail.com";
            
            if (email != null) {
                form.vals({Email : email});
            }
        }
        
        if (typeof(form.getValues().Title) != "undefined") {
            var jobTitle = getCookie(jobTitleCookieName);
            
            if (jobTitle != null) {
                form.vals({Title : jobTitle});
            }
        }
        
        if (typeof(form.getValues().Company) != "undefined") {
            var company = getCookie(companyNameCookieName);
            
            if (company != null) {
                form.vals({Company : company});
            }
        }
        
        if (typeof(form.getValues().Industry) != "undefined") {
            var industry = getCookie(industryCookieName);
            
            if (industry != null) {
                form.vals({Industry : industry});
            }
        }
        
        if (typeof(form.getValues().LeadSource) != "undefined") {
            var leadSource = getCookie(leadSourceCookieName);
            
            if (leadSource != null) {
                form.vals({LeadSource : leadSource});
            }
        }
        
        if (typeof(form.getValues().subscribedToNewsletter) != "undefined") {
            if ((Math.random()) <= 0.80) {
                answer = checkBoxes[0];
            }
            else {
                answer = checkBoxes[1];
            }
            
            form.vals({subscribedToNewsletter : answer});
        }
        
        if (typeof(form.getValues().subscribedToEventInvitations) != "undefined") {
            if ((Math.random()) <= 0.80) {
                answer = checkBoxes[0];
            }
            else {
                answer = checkBoxes[1];
            }
            
            form.vals({subscribedToEventInvitations : answer});
        }
        
        if (typeof(form.getValues().subscribedToWebinarInvitations) != "undefined") {
            if ((Math.random()) <= 0.80) {
                answer = checkBoxes[0];
            }
            else {
                answer = checkBoxes[1];
            }
            
            form.vals({subscribedToWebinarInvitations : answer});
        }
        
        if (typeof(form.getValues().subscribedToAppMessages) != "undefined") {
            if ((Math.random()) <= 0.80) {
                answer = checkBoxes[0];
            }
            else {
                answer = checkBoxes[1];
            }
            
            form.vals({subscribedToAppMessages : answer});
        }
        
        if (typeof(form.getValues().subscribedToSms) != "undefined") {
            if ((Math.random()) <= 0.80) {
                answer = checkBoxes[0];
            }
            else {
                answer = checkBoxes[1];
            }
            
            form.vals({subscribedToSms : answer});
        }
        
        if (typeof(form.getValues().Unsubscribed) != "undefined") {
            if ((Math.random()) <= 0.05) {
                answer = checkBoxes[0];
            }
            else {
                answer = checkBoxes[1];
            }
            
            form.vals({Unsubscribed : answer});
        }
        
        //console.log(JSON.stringify(form.vals(), null, 2));
        //form.submit();
    });
}