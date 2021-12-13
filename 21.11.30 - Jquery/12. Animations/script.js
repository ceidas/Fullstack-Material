$(document).ready(function(){
    $("#button1").click(function(){
        $("p").fadeOut();
    });

    $("#button2").click(function(){
        $("p").fadeIn();
    });

    $("#button3").click(function(){
        $("img").animate(
        {
            opacity: '0.2',
            left:'250px'
        });

    });

    $("#button4").click(function(){
        $('img').hide("slow");
    })

    $("#button5").click(function(){
        $('img').show("fast");
    })
});