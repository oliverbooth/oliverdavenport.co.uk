var KEY_CTRL = 17;
var KEY_CMD  = 91;

$(function () {
    "use strict";
    $("[data-toggle=\"tooltip\"]").tooltip();
    
    var ctrl = false;
    $(document).keydown(function (e) {
        if (e.keyCode === KEY_CTRL || e.keyCode === KEY_CMD) {
            ctrl = true;
        }
    }).keyup(function (e) {
        if (e.keyCode === KEY_CTRL || e.keyCode === KEY_CMD) {
            ctrl = false;
        }
    });
    
    $("*").keydown(function (e) {
        if (ctrl && (e.keyCode === 85 /* U */)) {
            e.stopPropagation();
            e.preventDefault();
            
            window.open("https://github.com/oliverlukedavenport/oliverdavenport.co.uk", "_blank");
        }
    });
});
