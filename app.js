'use strict';

var orderArray = [];

var form = document.getElementById('form');
form.addEventListener('submit', sendToCart);

function Order(name) {
  this.name = name;
};

function sendToCart(event){
  event.preventDefault();
  var newOrder = new Order();
  newOrder.name = this.elements['firstname'].value + ' ' + this.elements['lastname'].value;
  form.reset();
  orderArray.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orderArray));
};
