'use strict';

var orderArray = JSON.parse(localStorage.getItem('orders'));

var orderSection = document.getElementById('ordersSection');
for (var i = 0; i < orderArray.length; i++) {
  var orderSpot = document.createElement('div');
  orderSpot.setAttribute('orderIndex', i);
  orderSection.appendChild(orderSpot);
  var pic = document.createElement('img');
  pic.src = orderArray[i].imgPath;
  pic.className = 'itemPic';
  orderSpot.appendChild(pic);
  var newP = document.createElement('p');
  newP.innerHTML = orderArray[i].name + ', ' + orderArray[i].addy + ', ' + orderArray[i].phone;
  orderSpot.appendChild(newP);
  var qtyP = document.createElement('p');
  qtyP.innerText = orderArray[i].qty;
  orderSpot.appendChild(qtyP);
  var button = document.createElement('button');
  button.innerHTML = '<img src="img/delete.png" id="button">Delete this item';
  orderSpot.appendChild(button);
  var clear = document.createElement('div');
  clear.className = 'clearFix';
  orderSpot.appendChild(clear);
}
var delButton = document.getElementById('button');
delButton.addEventListener('click', delOrder);

function delOrder(event) {
  var orderIndex = parseInt(event.target.getAttribute('orderIndex'));
  var clickedOrder = orderArray[orderIndex];
};
