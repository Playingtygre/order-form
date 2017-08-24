'use strict';

var orderName = JSON.parse(localStorage.getItem('orders'));

var orderSpot = document.getElementById('ordersSection');
for (var i = 0; i < orderName.length; i++) {
  var newP = document.createElement('p');
  newP.innerText = orderName[i].name;
  orderSpot.appendChild(newP);
}
