'use strict';

var form = document.getElementById('form');
form.addEventListener('submit', sendToCart);

function sendToCart(event){
  event.preventDefault();
  var newOrder = new Order;
  newOrder.name = this.elements['firstname'].value + this.elements['lastname'].value;
  console.log(newOrder.name);
}

function Order() {
  this.name = name;
};
