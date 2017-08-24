'use strict';

var orderArray = [];

var form = document.getElementById('form');
form.addEventListener('submit', sendToCart);

function sendToCart(event){
  event.preventDefault();
  var newOrder = new Order;
  newOrder.name = this.elements['firstname'].value + ' ' + this.elements['lastname'].value;
  console.log(newOrder.name);
  form.reset();
}

function Order() {
  this.name = name;
  orderArray.push(this);
};

localStorage.setItem('orders', JSON.stringify(orderArray));
