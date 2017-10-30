/*jslint browser:true */
/*global $*/

$(function () {
    "use strict";
    $("[data-toggle=\"tooltip\"]").tooltip();

    $(".social-links li.animated").each(function (i, v) {
        $(v).css("animation-delay", (0.05 * i) + "s");
    });

    anime({
        targets: '#svg-logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) {
            return i * 250;
        },
        direction: 'alternate',
        loop: true
    });

});
