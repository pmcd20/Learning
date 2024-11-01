const box2div = document.getElementById('box2');

box2div.addEventListener('click', (e) => handleboxClick(e, 'This is a regular function'));

function handleboxClick(e, message) {
    //alert('Hey Box 2 was clicked');
    console.log('Regular Function Test');
    console.log(this); //selected element
    console.log(e);
    console.log(message);

};


const handleClickArrowFunction = (e, message) => {
    console.log('Arrow Function Test');
    console.log(this); //window 
    console.log(e);
    console.log(message);

}

box2div.addEventListener('click', (e) => handleClickArrowFunction(e, 'This is a arrow function'));

