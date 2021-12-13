document.getElementById("myForm").addEventListener("submit",function(event){
    
    var coursename = document.getElementById("coursename");
    var stream = document.getElementById("stream");
    var password = document.getElementById("password");
    var startdate = document.getElementById("startdate");
    var enddate = document.getElementById("enddate");

    var emptyMessage = "Όλα τα πεδία με αστερίσκο πρέπει να συμπληρωθούν";

    if(coursename.value === "" || stream.value === "" || password.value === "" ||
    startdate.value === "" || enddate.value === ""){
        document.getElementById("emptyinputs").innerHTML = emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById("emptyinputs").innerHTML = "";

        var now = new Date();
        var startdateObject = new Date(startdate.value);
        
        if((now.getFullYear() - startdateObject.getFullYear()) > 2){
            var dateError = "Το coding bootcamp έχει δύο χρόνια παρουσίας. Μη εγκυρη ημερομηνία";
            document.getElementById("startdateValidation").innerHTML = dateError;
            event.preventDefault();
        }else{            
            document.getElementById("startdateValidation").innerHTML = "";
        }

        if(password.value.length < 6){
            var passwordError = "Το password θα πρέπει να αποτελείται τουλάχιστον απο 6 χαρακτήρες";
            document.getElementById("passwordValidation").innerHTML = passwordError;
            event.preventDefault();
        }else{
            document.getElementById("passwordValidation").innerHTML = "";
        }

        var pattern = /^CB/;
        var isCourseNameMatchesThePattern = pattern.test(coursename.value);

        if(isCourseNameMatchesThePattern !== true){
            var message = "Το όνομα πρέπει να ξεκινάει με το πρόθεμα CB";
            document.getElementById("coursenameValidation").innerHTML = message;
            event.preventDefault();
        }else{
            document.getElementById("coursenameValidation").innerHTML = "";
        }


    }

});