$(document).ready(function () {

    // animations
    // TweenMax.to(".header .col-sm-6 h1", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
    TweenMax.staggerTo(".header .col-sm-6 h1", .9, { delay: .5, transform: "translateY(0)", opacity: 1 }, .3);
    TweenMax.to(".header .col-sm-6 .header-img-1", .5, { delay: 2.3, transform: "translate(-80%,50%)scale(1)", opacity: 1 });
    TweenMax.to(".header .col-sm-6 .header-img-2", .5, { delay: 1.8, transform: "translate(-50%,-40%)scale(1)", opacity: 1 });


    var about = new Waypoint({
        element: document.getElementById('about'),
        handler: function (down) {
            TweenMax.staggerTo(".features .col-6", 1.2, { transform: "translateY(0)", opacity: 1 }, .3);
            TweenMax.to(".features .col-md-6:nth-child(2) h1", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".features .col-md-6:nth-child(2) p", .5, { delay: 2.5, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var feature = new Waypoint({
        element: document.getElementById('feature'),
        handler: function (down) {
            TweenMax.to(".features-2 .image-logo", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".features-2 h1", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".features-2 p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".features-2 .col-sm-6:nth-child(2) img", .5, { delay: 1.5, transform: "rotate(-10deg) skew(10deg, 10deg) scale(1)", opacity: 1 });
        },
        offset: '60%'
    })

    var feature3 = new Waypoint({
        element: document.getElementById('feature-3'),
        handler: function (down) {
            TweenMax.to(".features-3 .col-sm-6:nth-child(1) img", .5, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".features-3 .image-logo", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".features-3 h1", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".features-3 p", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var test = new Waypoint({
        element: document.getElementById('test'),
        handler: function (down) {
            TweenMax.to(".test-user h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".test-user p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".test-user .col-sm-6 .row", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".test-user .col-sm-6:nth-child(2) img", .5, { delay: 1.5, transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })


    // TweenMax.to(".header .header-content h1", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
    // TweenMax.to(".header .header-content .header-p2", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });
    // TweenMax.to(".header .header-content .hire-me-btn", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });



});