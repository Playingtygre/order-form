'use strict';

var name = JSON.parse(localStorage.getItem('orders'));

var orderSpot = document.getElementById('ordersSection');
var newP = document.createElement('p');
newP.innerText = name[0];
orderSpot.appendChild(newP);
