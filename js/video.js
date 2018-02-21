////////////////////
// VIDEO THINGS
////////////////////

$(document).ready(function() {

	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    $splash = $("#splash");
    $video = $("#fs-video");
    $spinner = $("#spinner");

	// first visit and not mobile
	if (!localStorage.noFirstVisit && width >= 768) {
        // https://stackoverflow.com/questions/21159301/quotaexceedederror-dom-exception-22-an-attempt-was-made-to-add-something-to-st
        // Safari, in Private Browsing Mode, looks like it supports localStorage but all calls to setItem throw QuotaExceededError.
        try {
            localStorage.noFirstVisit = "1";
        } catch(e) {
            console.log('localStorage not supported', e);
        }
        $("#fs-container").remove();
        $splash.css("visibility", "visible");
        $splash.css("opacity", 1)
	} else {
        $("#fs-container").remove();
        $splash.css("visibility", "visible");
        $splash.css("opacity", 1)
	}

});
