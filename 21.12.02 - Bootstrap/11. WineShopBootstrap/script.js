$(document).ready(function(){
    $(".add").click(function(){
        toastr.success("The product added to cart");
    })

    $(".myBox img").click(function(){
        toastr.error("You must click the add to cart button!")
    })
})