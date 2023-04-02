//console.log(document.domain);
//console.dir(document);
//console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'List all of your Items';
// let headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'goodbye';
 
// let mainHeader = document.getElementById('main-header');
// mainHeader.style.borderBottom = 'solid 3px red';

// let items = document.getElementsByClassName('list-group-item');
// //items[1].style.backgroundColor ='yellow';
// for(var i =0;i<items.length;i++){
//     items[i].style.backgroundColor = 'yellow';
// }
// let li = document.getElementsByTagName('li');
// li[0].style.backgroundColor = 'orange';
// li[1].style.backgroundColor = 'white';
// li[2].style.backgroundColor = 'green';
// let submit = document.querySelector('input[type ="submit"]');
// submit.value = "SEND";


//-----------Nodes creation and Dom Modification------------//
// creating a div
var newDiv = document.createElement('div');
// add class 
newDiv.className = 'hello';
// Add id to the div
newDiv.id = 'hello1'

// Add Attribute 

//newDiv.setAttribute('title','hello div');

//console.log(newDiv.outerHTML);
//console.log(newDiv);

// create TextNode

// var newDivText = document.createTextNode('Hello World!');

// //Add text to the div

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');

// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

// newDiv.style.fontSize = '30px';

// console.log(newDiv.outerHTML);


//  let form = document.getElementById('addForm');
//     let itemList = document.getElementById('item');

 //addform.style.backgroundColor = 'red';
 //form submit event

//  form.addEventListener('submit', addItem);
// function addItem(e){
//     //Add Item
//     e.preventDefault();
//     console.log('1');

    //Get input Value

    //var newItem = document.getElementById('item').value;

      // create new li element

    // var li = document.createElement('li');

    // // Add classname to it

    // li.className = "list-group-item";

    // //Add textNode with input value
    // li.appendChild(document.createTextNode('newItem'));
    // itemList.appendChild(li);
    //----------------------Form element-------------------

    var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');

    //-------form submit event 
    form.addEventListener('submit', addItem);

    //Add Item

     function addItem (e){
    e.preventDefault();
    
    // Get input value

    var newItem = document.getElementById('item');

  // creat new li element
  var li = document.createElement('li');
  //Add classname to it

  li.className = list-group-item;
  console.log(li);
   }





