//console.log(document.domain);
//console.dir(document);
//console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'itemsst all of your Items';
// let headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'goodbye';
 
// let mainHeader = document.getElementById('main-header');
// mainHeader.style.borderBottom = 'soitemsd 3px red';

// let items = document.getElementsByClassName('itemsst-group-item');
// //items[1].style.backgroundColor ='yellow';
// for(var i =0;i<items.length;i++){
//     items[i].style.backgroundColor = 'yellow';
// }
// let items = document.getElementsByTagName('items');
// items[0].style.backgroundColor = 'orange';
// items[1].style.backgroundColor = 'white';
// items[2].style.backgroundColor = 'green';
// let submit = document.querySelector('input[type ="submit"]');
// submit.value = "SEND";


//-----------Nodes creation and Dom Modification------------//
// creating a div
//var newDiv = document.createElement('div');
// add class 
//newDiv.className = 'hello';
// Add id to the div
//newDiv.id = 'hello1'

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
//     let itemitemsst = document.getElementById('item');

 //addform.style.backgroundColor = 'red';
 //form submit event

//  form.addEventitemsstener('submit', addItem);
// function addItem(e){
//     //Add Item
//     e.preventDefault();
//     console.log('1');

    //Get input Value

    //var newItem = document.getElementById('item').value;

      // create new items element

    // var items = document.createElement('items');

    // // Add classname to it

    // items.className = "itemsst-group-item";

    // //Add textNode with input value
    // items.appendChild(document.createTextNode('newItem'));
    // itemitemsst.appendChild(items);
    //----------------------Form element-------------------

    //var form = document.getElementById('addForm');
    //var itemitemsst = document.getElementById('items');

    //-------form submit event 
    //form.addEventitemsstener('submit', addItem);

    //Add Item

     //function addItem (e){
    //e.preventDefault();
    
    // Get input value

    //var newItem = document.getElementById('item');

  // creat new items element
  //var items = document.createElement('items');
  //Add classname to it

 // items.className = itemsst-group-item;
  //console.log(items);
   //}

   //====================selectors========
   //1>GETELEMENTBYID
   
  //  var header = document.getElementById('header-title');
  //  header.style.color = 'blue';

   //2>GETELEMENTSBYCLASSNAME
  //  var items = document.getElementsByTagName('items')
  //  console.log(items);
  //  console.log(items[1]);
  //  items[1].textContent = 'Hello 2';
  //  items[1].style.fontWeight = 'bold';
  //  items[1].style.backgroundColor = 'yellow';
  //  for(var i =0;i<items.length;i++){
  //    items[i].style.backgroundColor = '#f4f4f4'
   //}
   // GETELEMENTSBYTAGNAME
    // var li = document.getElementsByTagName('li')
    // console.log(li);
    // console.log(li[1]);
    // li[1].textContent = 'Hello 2';
    // li[1].style.fontWeight = 'bold';
    // li[1].style.backgroundColor = 'yellow';
    // for(var i =0;i<items.length;i++){
    //   li[i].style.backgroundColor = '#f4f4f4'
    // }
    //QuerySelector && QuerySelectorALL

    // var header = document.querySelector('#main-header');
    // header.style.borderBottom = 'solid 4px red';

    // var input = document.querySelector('input');
    // input.value = 'Hello World 2';

    // var submit = document.querySelector('input[type = "submit"]');
    // submit.style.backgroundColor = 'blue';

    // var item = document.querySelector('.list-group-item');
    // item.style.color = 'blue'
    // var lastItem = document.querySelector('.list-group-item:last-child');
    // lastItem.style.color = 'red';
    // var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
    // thirdItem.style.color = 'yellow';

    //QUERYSELECTORALL

  //   var titles = document.querySelectorAll('.title');
  // titles[0].textContent = 'Hello';

  // var odd = document.querySelectorAll('li:nth-child(odd)');
   
  // for(var i =0;i<odd.length;i++){
  //   odd[i].style.backgroundColor = '#00FFFF'
  // }

  // var even = document.querySelectorAll('li:nth-child(even)');

  // for(var i =0;i<even.length;i++){
  //   even[i].style.backgroundColor ='#faebd7';
  // }
//ASSIGNMENT
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';




