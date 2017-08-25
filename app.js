'use strict';

var itemArray = [];

function TestItem (name, filePath, itemID) {
  this.name = name;
  this.filePath = filePath;
  this.itemID = itemID;
  this.timesShown = 0;
  this.timesVoted = 0;
  itemArray.push(this);
}

var bag = new TestItem ('rolling R2D2 suitcase', 'img/bag.jpg', 'bag');
var banana = new TestItem ('banana slicer', 'img/banana.jpg', 'banana');
var bathroom = new TestItem ('tablet & toilet paper holder', 'img/bathroom.jpg', 'bathroom');
var boots = new TestItem ('yellow rain boots', 'img/boots.jpg', 'boots');
var breakfast = new TestItem ('multi-breakfast cooker', 'img/breakfast.jpg', 'breakfast');
var bubblegum = new TestItem ('meatball bubblegum', 'img/bubblegum.jpg', 'bubblegum');
var chair = new TestItem ('red chair', 'img/chair.jpg', 'chair');
var cthulhu = new TestItem ('cthulhu action figure', 'img/cthulhu.jpg', 'cthulhu');
var dogDuck = new TestItem ('dog ducklips', 'img/dog-duck.jpg', 'dogDuck');
var dragon = new TestItem ('dragon meat', 'img/dragon.jpg', 'dragon');
var pen = new TestItem ('pen utensils', 'img/pen.jpg', 'pen');
var petSweep = new TestItem ('pet sweeper shoes', 'img/pet-sweep.jpg', 'petSweep');
var scissors = new TestItem ('pizza scissors', 'img/scissors.jpg', 'scissors');
var shark = new TestItem ('shark sleeping bag', 'img/shark.jpg', 'shark');
var sweep = new TestItem ('baby sweeper suit', 'img/sweep.png', 'sweep');
var tauntaun = new TestItem ('tauntaun sleeping bag', 'img/tauntaun.jpg', 'tauntaun');
var unicorn = new TestItem ('unicorn meat', 'img/unicorn.jpg', 'unicorn');
var usb = new TestItem ('tentacle usb drive', 'img/usb.gif', 'usb');
var waterCan = new TestItem ('self-watering can', 'img/water-can.jpg', 'waterCan');
var wineGlass = new TestItem ('wine glass', 'img/wine-glass.jpg', 'wineGlass');

function createDropdown(){
  var dropdown = document.getElementById('stuff');
  for (var i = 0; i < itemArray.length; i++) {
    var newOption = document.createElement('option');
    newOption.innerText = itemArray[i].name;
    newOption.value = itemArray[i].filePath;
    dropdown.appendChild(newOption);
  }
};
createDropdown();

var orderArray = [];

var form = document.getElementById('form');
form.addEventListener('submit', sendToCart);

function Order(name, addy, phone, imgPath, qty) {
  this.name = name;
  this.addy = addy;
  this.phone = phone;
  this.imgPath = imgPath;
  this.qty = qty;
};

function sendToCart(event){
  event.preventDefault();
  var newOrder = new Order();
  newOrder.name = this.elements['firstname'].value + ' ' + this.elements['lastname'].value;
  newOrder.addy = this.elements['street'].value + ' ' + this.elements['city'].value + ', ' + this.elements['state'].value + ' ' + this.elements['zip'].value;
  newOrder.phone = this.elements['phone'].value;
  newOrder.imgPath = this.elements.dropdown.value;
  newOrder.qty = this.elements['qty'].value;
  if (localStorage.getItem('orders')) {
    orderArray = JSON.parse(localStorage.getItem('orders'));
  }
  orderArray.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orderArray));
  form.reset();
};
