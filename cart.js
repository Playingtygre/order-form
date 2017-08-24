'use strict';

var orderArray = JSON.parse(localStorage.getItem('orders'));

var orderSpot = document.getElementById('ordersSection');
for (var i = 0; i < orderArray.length; i++) {
  var newP = document.createElement('p');
  newP.innerText = orderArray[i].name;
  orderSpot.appendChild(newP);
}
