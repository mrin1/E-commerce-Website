// $(document).ready(function(){
//     $('.ico-bars').click(function(){
//         $('.ico-bars').toggleClass('fa-xmark');
//         $('.nav-menu').slideToggle();
//     });
//     $(window).resize(function(){
//         if($(window).width() <= 1192){
//             $('.nav-menu').hide();
//         }
//         if($(window).width() > 1192){
//             $('.nav-menu').show();
//         }
//     });
// });


$(document).ready(function(){
    function handleNavMenu() {
        if ($(window).width() <= 1192) {
            $('.nav-menu').hide(); // Hide menu on smaller screens
            $('.ico-bars').removeClass('fa-xmark'); // Ensure icon is reset
        } else {
            $('.nav-menu').show(); // Show menu on larger screens
        }
    }

    // Initial check when page loads
    handleNavMenu();

    $('.ico-bars').click(function(){
        $('.ico-bars').toggleClass('fa-xmark');
        $('.nav-menu').slideToggle(1000);
    });

    $(window).resize(function(){
        handleNavMenu();
    });
});
