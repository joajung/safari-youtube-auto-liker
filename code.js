// ==UserScript==
// @name        NewScript-8x2zu
// @description This is your new userscript, start writing code
// @match       *://*.*
// ==/UserScript==

(function() {
    b_only_subscribed_channel = false;
  
    b_print = false;
    if (b_print) console.log("userscript's function called");

    is_youtube = window.location.host.search("www.youtube.com") >= 0;
    if (b_print) console.log("is_youtube? " + is_youtube);

    if (is_youtube) {
      
        t_interval = 10000;

        f = (function() {
            is_watching = window.location.pathname == "/watch";
            if (b_print) console.log("is_watching? " + is_watching);
            
            if (is_watching) {
                is_subscribed = !b_only_subscribed_channel || document.querySelector("#top-row .ytd-subscribe-button-renderer").attributes.subscribed != undefined ;
                if (b_print) console.log("is_subscribed? " + is_subscribed);

                if (is_subscribed) {
                    
                    var elements = document.querySelectorAll(".ytd-toggle-button-renderer #text[aria-label]");
                    var like_btn = elements[elements.length-2];

                    not_liked_yet = like_btn.attributes.class.value.search("style-default-active") < 0;
                    if (b_print) console.log("not_liked_yet? " + not_liked_yet);

                    if (not_liked_yet) {

                        like_btn.click();
                        if (b_print) console.log("like it");
                    }
                }
              
            }

        })

        setInterval(f, t_interval);
    }
}());

