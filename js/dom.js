// Javascript Document

var foundYou = document.getElementById('myForm');
console.log(foundYou);

var selectArray = foundYou.getElementsByTagName('input');
console.log(selectArray);

for (i=0; i<selectArray.length; i++) {
    console.log(selectArray[i].value);
}
























/*
1
var newOptions = ['Orange','Red','Blue'];

var foundYou = document.getElementById('myForm');
console.log(foundYou);

var selectArray = foundYou.getElementsByTagName('option');
console.log(selectArray);

for (i = 0; i < selectArray.length; i++) {
    selectArray[i].innerText = newOptions[i];
}

*/

