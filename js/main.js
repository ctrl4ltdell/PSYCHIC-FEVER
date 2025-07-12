(function ($) {
    "use strict";
   
/*what i add*/

if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    window.addEventListener('load', function() {
        alert("Welcome to my website, Sir Fatih!");
    });
}

window.findBias = function() {
    const name = document.getElementById("userName").value.trim();
    const color = document.getElementById("favColor").value.trim().toLowerCase();
    const resultBox = document.getElementById("biasResult");

    if (name === "" || color === "") {
        resultBox.innerText = "Please enter both your name and favorite color!";
        resultBox.style.color = "red";
        return;
    }

    let member = "";

    if (color === "red") {
        member = "WEESA";
    } else if (color === "blue") {
        member = "RYOGA";
    } else if (color === "yellow") {
        member = "TSURUGI";
    } else if (color === "green") {
        member = "JIMMY";
    } else if (color === "purple") {
        member = "KOKORO";
    } else if (color === "black") {
        member = "REN";
    } else {
        member = "RYUSHIN (wild card!)";
    }

    resultBox.innerText = `Hey ${name}, your Psychic Fever bias is: 💫 ${member}!`;
    resultBox.style.color = "#154734";
}
/*end of what i add*/

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

