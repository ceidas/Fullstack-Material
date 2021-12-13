$(document).ready(function () {
    $(".fill").click(function () {
        $(this).parent().parent().css({
            "background-color": "blue",
            "color": "white"
        });
    });
    $(".delete").click(function () {
        $(this).parent().parent().fadeOut();
    });

    //parents            
    var parent = $(".child").parent();
    var parents = $(".grandchild").parents();
    // var parentsUntil = $(".grandchild").parentsUntil(".parent");            
    var parentsUntil = $(".grandchild").parentsUntil("body");
    // children            
    var children = $(".parent").children();
    //find            
    var findChildElementsOnParent = $(".parent").find(".child");
    var findGrandChildElementsOnParent = $(".parent").find(".grandchild");

    //siblings
    var siblings = $(".child").siblings();
    var siblings2 = $("body").siblings();
    var next = $("table").next();
    var nextAll = $('#sibling1').nextAll();
    var nextUntil = $("table").nextUntil("script");

    //same logic 
    //prev()
    //prevAll()
    //prevUntil()
    var closestDiv = $(".grandchild").closest("div");

    //wrap
    $("#button1").click(function () {
        $("p").wrap("<strong></strong>");
    })

    console.log(parent);
    console.log(parents);
    console.log(parentsUntil);
    console.log(children);
    console.log(findChildElementsOnParent);
    console.log(findGrandChildElementsOnParent);
    console.log(siblings);
    console.log(siblings2);
    console.log(next);
    console.log(nextAll);
    console.log(nextUntil);
    console.log("Elissaios")
    console.log(closestDiv)

});