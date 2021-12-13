//1.////////////////////////////////////////
// function validate() {
//     let n1 = document.getElementById("num1")
//     let n2 = document.getElementById('num2')

//     if(n1.value!=''&& n2.value!=''&& n1.value===n2.value){
//     return true;
//     }else{ alert("Invalid input")}
// }


//2./////////////////////////////////////////
function lessThanOrEqualToZero(number){
    if(number>0){
        return false;

    }
    else
    {
        return true;

    }
}
var userInput = prompt("Enter a number");
while(isNaN(userInput))
{
    userInput = prompt("Enter a number");
}

alert(lessThanOrEqualToZero(userInput)); 



