$(document).ready(function () {
    $('.summary').hide();

    // Attach a click handler to the h2 elements.
    $('.main h2').click(function () {
        // Save the h2 element that was clicked
        // as well as the following answer element.
        var h2 = $(this);
        var answer = h2.next('.summary');

        if (answer.css('display') == 'none') {
            // If the answer is currently not displayed,
            // display it with a sliding down motion,
            // and when done, add the "close" class to the h2 element.
            answer.slideDown(function () {
                h2.addClass('close');
            });
        } else {
            // Otherwise, fade the answer out, and when done,
            // remove the "close" class from the h2 element.
            answer.slideUp(function () {
                h2.removeClass('close');
            });
        }
    });
}); // end ready

$(document).ready(function () {
    $('#inputTable :radio').click(function () {
        $('#summary').css($(this).attr('name'), $(this).val());
    });

    $('#fontSize').change(function () {
        $('#summary').css($(this).attr('name'), $(this).val());
    });

    $('#inputTable :checkbox').change(function () {
        if(this.checked) {
            $('#summary').css($(this).attr('name'), $(this).val());
        } else {
            $('#summary').css($(this).attr('name'), '');
        };
    });

    $('#themeTable :radio').change(function () {
        $('#summary').removeClass().addClass($(this).val());
    });
})

$(document).ready(function () {
    // Attach a click handler to the element: <p id="open">
    $('#open').click(function () {
        // Save the <p id="open"> and <form> elements in local variables.
        var openElem = $(this);
        var loginForm = $('#login form');

        if (loginForm.css("display") == "none") {
            // If the form is currently not displayed,
            // slide it down into view, and when done add the "close" class to the
            // <p id="open"> element.
            loginForm.slideDown(300, function () {
                openElem.addClass("close");
            })
        } else {
            // Otherwise, fade the login form out, and when done,
            // remove the "close" class from the <p id="open"> element.
            loginForm.fadeOut(600, function () {
                openElem.removeClass("close");
            })
        }
    });
}); // end ready


function checkPassword() {
    var frm = document.forms['passForm'];
    var password = frm.elements['password'].value;

    if(password === 'obama') {
        window.open('part2cont.html');
    } else {
        document.getElementById('message').innerHTML = 'ERROR: Incorrect password (try obama)';
    };
}

function res() {
    document.getElementById('message').innerHTML = '';
}

$(document).ready(function() {
    try {
        $("#nav").navPlugin({
        'itemWidth': 150,
        'itemHeight': 30,
        'navEffect': "slide",
        'speed': 250
        });
    } catch(e) {
        // handle error
    };

}); // end ready

$(document).ready(function() {
    try {
        $('.fancybox').fancybox();
    } catch(e) {
        // handle error
    };
});