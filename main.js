$(document).ready(function () {
    $('.mycaret').on('click', function (e) {
        if ($('.mycaret').hasClass('active')) {
            $('.mycaret').removeClass('active');
        }
        $(this).addClass('active');
    });

    $(".dropdown").on("hidden.bs.dropdown", function (event) {
        $('.mycaret').removeClass('active');
    });


    /*for checkboxes*/
   /* $(".checkstation").on('click', function (e) {

        if ($(this).parent().children().find("label").hasClass('active')) {
            $(this).parent().children().find("label").removeClass('active');
        } else {
            $(this).parent().children().find("label").addClass('active');
        }
    });*/
/**/ 
/* for radiobuttons*/ 
    $(".checkstation").on('click', function (e) {

        if ($(".state>label").hasClass('active')) {
            $(".state>label").removeClass('active');
        } else {
            $(this).parent().children().find("label").addClass('active');
        }
    });

/**/ 




    $(".checkstation").hover(
        function () {

            $(this).parent().children().find("label").addClass('hover');
        },
        function () {

            $(this).parent().children().find("label").removeClass('hover');
        }
    );

    $(".info").hover(
        function (e) 
        {
            $(this).css('background-image', 'url("svg/info_active.svg")');
            $(this).css('z-index',10);
            $(this).parent().find(".hint").removeAttr('hidden');
            
        },
        function () {
            $(this).css('background-image', 'url("svg/info.svg")');
            $(this).css('z-index',1);
            $(this).parent().find(".hint").attr('hidden', true);
        }

    );

});