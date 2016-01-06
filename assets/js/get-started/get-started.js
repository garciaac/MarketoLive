$(document).ready(function(){
    $('#fullpage').fullpage();

    $('.down-arrow-bkg').click(function(){
      $.fn.fullpage.moveSectionDown();
      
    });

    $('.up-arrow-bkg').click(function(){
      $.fn.fullpage.moveSectionUp();
    });
      
  
  var driveWords = {
    "drive1" : {
      "title" : "Search Optimization" ,
      "words" : "Marketo Search Engine Optimization (SEO) is an easy-to-use tool that helps marketers without specialized knowledge drive more quality traffic to their website and landing pages."
    },
    "drive2" : {
      "title" : "Social Promotions",
      "words" : "Social marketing makes it easy for your prospects and customers to share your message. According to a recent Forrester research report, 70% of consumers trust recommendations from a friend, whereas only 10% trust advertising."
    },
    "drive3" : {
      "title" : "Personalization",
      "words" : "Marketo Real-Time Personalization creates meaningful, real-time interactions with targeted individuals through dynamically generated, personalized communication across email, web, ads and mobile – with any content management system (CMS) and with no IT involvement."
    },
    "engage1" : {
      "title" : "Automate",
      "words" : "Automated programs use triggers which provide you with the ability to listen in real-time for specific behaviors and respond immediately with an appropriate action (or set of actions), such as sending an email, alerting a sales rep or automating the customer lifecycle."
    },
    "engage2" : {
      "title" : "Batch",
      "words" : "When it comes to traditional email marketing efforts, a batch email program is easy to create and execute in Marketo. From the control panel, you can define your audience, choose your content and schedule your batch email program in minutes. Marketo provides you with the flexibility to work in the order that best fits your business needs."
    },
    "engage3" : {
      "title" : "Drip",
      "words" : "Drip email marketing is used to send a series of emails over a specified period of time. With Marketo, a drip email program is easy to create and execute. From the campaign wizard, you can define your audience, create your content workflow and execute your drip email program in minutes."
    },
    "engage4" : {
      "title" : "Nurture",
      "words" : "Nurturing is the process of building relationships with your customers across various channels. The goal of nurturing is to provide the right content to compel your prospect to move through the customer journey. 95% of the prospects visiting your website today are there to research and as many as 70% of them will eventually buy from you or from your competitor."
    },
    "engage5" : {
      "title" : "Events",
      "words" : "Events give you the unique opportunity to engage directly with prospects and customers, whether it's a traditional event, like a tradeshow or an online event, like a webinar."
    },
    "engage6" : {
      "title" : "Calendar",
      "words" : "It’s hard to coordinate all of your marketing programs in flight across teams and regions. The Marketo Marketing Calendar makes it easy for marketing teams to efficiently plan, coordinate and share the many great things happening in marketing."
    },
    "align1" : {
      "title" : "Lead Scoring",
      "words" : "Lead scoring is a shared sales and marketing methodology for ranking leads in order to determine their sales-readiness. You score leads based on the interest they show in your business, their current stage in the buying cycle and their fit in regards to your business."
    },
    "align2" : {
      "title" : "Sales Notification",
      "words" : "Automated programs use triggers which provide you with the ability to listen in real-time for specific behaviors and respond immediately with an appropriate action (or set of actions), such as sending an email, alerting a sales rep or automating the customer lifecycle."
    },
    "align3" : {
      "title" : "Sales Insight",
      "words" : "Many other products force you to follow a rigid and inflexible process for creating a simple batch email program. This inflexible process prevents you from working efficiently or the way that is best for your business."
    },
    "measure1" : {
      "title" : "Executive Dashboard",
      "words" : "Most CRMs and marketing automation software only capture attribution metrics with a single touch (e.g. a lead source). Don’t limit yourself to a single-touch attribution model with Marketo."
    },
    "measure2" : {
      "title" : "Content Analysis",
      "words" : "Identifying email engagement can be a challenge because opens and clicks are not a direct indicator of what drives a successful conversion. Because of this, Marketo formulated an algorithm to calculate the end-to-end engagement of your content. Even conversions that are further downstream from the initial email will be calculated as part of this 'Engagement Score'."
    },
    "measure3" : {
      "title" : "Flexible Reporting",
      "words" : "Analytics and reporting provide an integral aspect of any decision making process. As such, it is imperative to identify how your marketing efforts are performing, and to analyze their performance from different perspectives."
    },
    "acquire1" : {
      "title" : "Search Optimization",
      "words" : "Marketo Search Engine Optimization (SEO) is an easy-to-use tool that helps marketers without specialized knowledge drive more quality traffic to their website and landing pages."
    },
    "acquire2" : {
      "title" : "Adbridge",
      "words" : "Ad bridge connects marketo’s rich behavioral data with facebook, google, linkedin and other advertising platforms, so marketers can target the right potential customers with meaningful, relevant ads."
    },
    "acquire3" : {
      "title" : "Segmentation",
      "words" : "Powered by a smart marketing database, you’ll have a single view of each consumer across channels, including behavioral demographic, and transactional data."
    },
    "test1" : {
      "title" : "Engagement Engine",
      "words" : "Easily create personas and/or segments and add relevant content to send over a configurable cadence to each audience. The engagement engine has your back and will automatically check with pieces of content a person has received before sending the next message."
    },
    "test2" : {
      "title" : "Message Testing",
      "words" : "A/B/N test your content based on subject line, from name, time sent, or template. automatically configure the “champion” settings based on open rate, click rate, or custom conversions like a purchase or download."
    },
    "test3" : {
      "title" : "Cadence Testing",
      "words" : "Split your audiences into different drip campaigns and nurtures to test the performance and optimal cadence for each set of messaging."
    },
    "report1" : {
      "title" : "Email Performance",
      "words" : "Use the email performance dashboard to visually analyze common email metrics like opens, clicks, and unsubscribes, as well as the marketo engagement score which automatically combines this metrics in to a single score that can be benchmarked against other emails."
    },
    "report2" : {
      "title" : "Test Reporting",
      "words" : "Understand all of the key metrics behind your a/b/n test including any custom conversions that you can configure across all of your variants."
    },
    "report3" : {
      "title" : "Campaign Reporting",
      "words" : "Use this four-dimensional analyzer to holistically understand which campaigns and channels are working best. Include revenue metrics and attribution to close the loop on your campaigns."
    }
  }
  $(".section-bubble, .section-small-bubble").hover(function(e){
    var bubbleEle = '#'+e.currentTarget.id,
        bubbleClass = '.'+e.currentTarget.className.split(" ", 1)[0],
        number = e.currentTarget.id.slice(-1),
        ele = e.currentTarget.id.substring(0, (e.currentTarget.id.length - 1)),
        imageEle = "#"+ele+"-img"+number;
    document.getElementById(ele+'-sub-title').innerHTML = driveWords[e.currentTarget.id].title;
    document.getElementById(ele+'-words').innerHTML = driveWords[e.currentTarget.id].words;
    $('.'+ele).css('display','none');
    $(imageEle).css('display','block');
    $(bubbleClass).css({'color':'#5a54a4','background-color':'#fff'});
    $(bubbleEle).css({'color': '#fff', 'background-color': '#5a54a4'});
    /*
    else if(e.currentTarget.id.indexOf("engage") > -1){
      document.getElementById('engage-and-test-sub-title').innerHTML = driveWords[e.currentTarget.id].title;
      document.getElementById('engage-and-test-img').src = "../assets/img/"+e.currentTarget.id+".png";
      document.getElementById('engage-and-test-words').innerHTML = driveWords[e.currentTarget.id].words;
      $(eleClass).css({'color':'#5a54a4','background-color':'#fff'});
      $(ele).css({'color': '#fff', 'background-color': '#5a54a4'});
    }
    else if(e.currentTarget.id.indexOf("report") > -1){
      document.getElementById('report-and-iterate-sub-title').innerHTML = driveWords[e.currentTarget.id].title;
      document.getElementById('report-and-iterate-img').src = "../assets/img/"+e.currentTarget.id+".png";
      document.getElementById('report-and-iterate-words').innerHTML = driveWords[e.currentTarget.id].words;
      $(eleClass).css({'color':'#5a54a4','background-color':'#fff'});
      $(ele).css({'color': '#fff', 'background-color': '#5a54a4'});
    }
    else if(e.currentTarget.id.indexOf("batch") > -1){
      document.getElementById('drive-more-awareness-sub-title').innerHTML = driveWords[e.currentTarget.id].title;
      document.getElementById('drive-more-awareness-img').src = "../assets/img/"+e.currentTarget.id+".png";
      document.getElementById('drive-more-awareness-words').innerHTML = driveWords[e.currentTarget.id].words;
      $(eleClass).css({'color':'#5a54a4','background-color':'#fff'});
      $(ele).css({'color': '#fff', 'background-color': '#5a54a4'});
    }
    else if(e.currentTarget.id.indexOf("automate") > -1){
      document.getElementById('engage-your-customers-sub-title').innerHTML = driveWords[e.currentTarget.id].title;
      document.getElementById('engage-your-customers-img').src = "../assets/img/"+e.currentTarget.id+".png";
      document.getElementById('engage-your-customers-words').innerHTML = driveWords[e.currentTarget.id].words;
      $(eleClass).css({'color':'#5a54a4','background-color':'#fff'});
      $(ele).css({'color': '#fff', 'background-color': '#5a54a4'});
    }
    else if(e.currentTarget.id.indexOf("nurture") > -1){
      document.getElementById('align-with-sales-sub-title').innerHTML = driveWords[e.currentTarget.id].title;
      document.getElementById('align-with-sales-img').src = "../assets/img/"+e.currentTarget.id+".png";
      document.getElementById('align-with-sales-words').innerHTML = driveWords[e.currentTarget.id].words;
      $(eleClass).css({'color':'#5a54a4','background-color':'#fff'});
      $(ele).css({'color': '#fff', 'background-color': '#5a54a4'});
    }
    else{
      document.getElementById('measure-your-success-sub-title').innerHTML = driveWords[e.currentTarget.id].title;
      document.getElementById('measure-your-success-img').src = "../assets/img/"+e.currentTarget.id+".png";
      document.getElementById('measure-your-success-words').innerHTML = driveWords[e.currentTarget.id].words;
      $(eleClass).css({'color':'#5a54a4','background-color':'#fff'});
      $(ele).css({'color': '#fff', 'background-color': '#5a54a4'});
    }
    */
  });
});