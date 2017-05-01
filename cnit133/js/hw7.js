$(document).ready(function () {
    $('.summary').hide();

    // Attach a click handler to the h2 elements.
    $(".main h2").click(function () {
        // Save the h2 element that was clicked
        // as well as the following answer element.
        var h2 = $(this);
        var answer = h2.next(".summary");

        if (answer.css("display") == "none") {
            // If the answer is currently not displayed,
            // display it with a sliding down motion,
            // and when done, add the "close" class to the h2 element.
            answer.slideDown(function () {
                h2.addClass("close");
            });
        } else {
            // Otherwise, fade the answer out, and when done,
            // remove the "close" class from the h2 element.
            answer.slideUp(function () {
                h2.removeClass("close");
            });
        }
    });
}); // end ready