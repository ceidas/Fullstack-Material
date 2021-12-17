//AJAX it's  a set of webtechnologies allow us recieve data asnycronoysly
//Doesn't interfere with current page
//Asynchronously Javascript XML
//JSON has replaced  XML for the most part  

//JS Calls =>AJAX ENGINE =>XHTML Request => SERVER
//Server Response in XML/JSON =>AJAX ENGINE=>HTML RESPONSE

//HTTP STATUSES
//HTTP
//XHR OBJECT
//Provided by  the browser/Methods for transfer/Can be used with other protocols than HTTP


//Libraries simillar to AJAX are
//Fetch API ,  Axios, SuperAgent, Jquery, Node Http


document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //Create an XHR Oject

    const xhr = new XMLHttpRequest();

    //OPEN METHOD

    xhr.open('GET','data.txt',true);

   //Optional - Usedfor spinners/loaders

   xhr.onprogress = function () {
       console.log('READYSTATE',xhr.readyState)
   }

   xhr.onload = function() {
       console.log('READYSTATE', xhr.readyState)

       if(this.status === 200) {
           document.getElementById('output').innerHTML = 
           `<h1>${this.responseText}</h1>`
       }
       
   }
   
//Handling all errors
   xhr.onerror = function() {
       console.log('Requested error..')
   }
   xhr.send();
}



//4 STATES FOR XML OBJECT