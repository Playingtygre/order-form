'use strict';

var orderArray = JSON.parse(localStorage.getItem('orders'));

var orderSpot = document.getElementById('ordersSection');
for (var i = 0; i < orderArray.length; i++) {
  var pic = document.createElement('img');
  pic.src = orderArray[i].imgPath;
  pic.className = 'itemPic';
  orderSpot.appendChild(pic);
  var newP = document.createElement('p');
  newP.innerHTML = orderArray[i].name + ', ' + orderArray[i].addy + ', ' + orderArray[i].phone;
  orderSpot.appendChild(newP);
  var button = document.createElement('button');
  button.innerHTML = '<img src="img/delete.png" id="button">';
  orderSpot.appendChild(button);
  var clear = createElement('div');
  clear.className = 'clearFix';
  orderSpot.appendChild(clear);
}
