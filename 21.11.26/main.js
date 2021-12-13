//function myFunction () {
document.getElementById('myFunc').addEventListener('click', () => {
    
    //access child node
    const child = document.body.children[0].children[1];
    console.log(child)
    
    //change color
    const firstElem = document.body.children[0].children[1].style.color = 'red';
    const fourthElem = document.body.children[0].children[3].style.color = 'red';

    //change font
    const newFont = document.body.children[0].children[0].style.fontFamily = 'Helvetica';

    // create New Li
    const newListItem = document.createElement('li');

    //assign the text value to LI
    newListItem.textContent = 'FFF';

    //Add in list
    document.body.children[0].insertBefore(newListItem, document.body.children[0].children[4])

    //bold font
    const boldNewElement = document.body.children[0].children[4].style.fontWeight = '900'

    //Invisible 
    const invElement = document.body.children[0].children[4].style.visibility = 'hidden'

    //Change Text 
    var textToChange = document.getElementById('tex')
    var oneMoreA = textToChange.childNodes[0];
    oneMoreA.nodeValue = 'aaaa';

})
//}