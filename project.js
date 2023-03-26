$(document).ready(function() {
    // Check to see if the class bxslider is on the page
    var bxContainer = $(".bxslider");
    if(bxContainer.length) {
        var bx = bxContainer.bxSlider({
            auto: true,
            mode: "fade",
            captions: true
        });
        // Load the json and fill in the div.bxslider on the index.html page
        $.getJSON("homejson.json", function (data) {
            $.each(data, function () {
                for (var i = 0; i < data.header.imgCarousel.length; i++) {
                    $("div.bxslider").append(
                        "<div><img src='" + data.header.imgCarousel[i].image + "' alt='" + data.header.imgCarousel[i].alt + "'></div>"
                    );
                };
                bx.reloadSlider();
            });
        });
    };

    // Check to see if the id accordion is on the page
    var acrdn = $("#accordion");
    if(acrdn.length) {
        acrdn.accordion({
            collapsible:true,
            active:false,
            heightStyle:"content"
        });
        // Load the json and fill in the div with id accordion on the FAQ.html page
        $.getJSON("FAQjson.json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("div#accordion").append(
                        "<h3>" + value.question + "</h3>" +
                        "<div id='" + value.id + "'>" + value.answer + "</div>"
                    );
                });
            });
            acrdn.accordion("refresh");
        });
    };

    // The animsition plugin 
    $(".animsition").animsition({
        inClass: 'fade-in-down',
        outClass: 'fade-out-down',
        inDuration: 500,
        outDuration: 200,
        linkElement: '.animsition-link',
        timeout: false,
        timeoutCountdown: 5000,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });




});

