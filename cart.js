'use strict';

var orderArray = JSON.parse(localStorage.getItem('orders'));

var orderSpot = document.getElementById('ordersSection');
for (var i = 0; i < orderArray.length; i++) {
  var pic = document.createElement('img');
  pic.src = orderArray[i].imgPath;
  pic.className = 'itempic';
  orderSpot.appendChild(pic);
  var newP = document.createElement('p');
  newP.innerHTML = orderArray[i].name + ', ' + orderArray[i].addy + ', ' + orderArray[i].phone;
  orderSpot.appendChild(newP);
}
