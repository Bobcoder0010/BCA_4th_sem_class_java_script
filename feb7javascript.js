var redElement = document.getElementsByTagName('h4')[0];

var greenElement = document.getElementsByClassName('green')[0];

var blueElement = document.getElementById('blue');

var yellowElement = document.querySelector('.yello#yello');

var tealElements = document.querySelectorAll('.teal');

console.log("Red:", redElement.textContent);
console.log("Green:", greenElement.textContent);
console.log("Blue:", blueElement.textContent);
console.log("Yellow:", yellowElement.textContent);
tealElements.forEach(function(element, index) {
    console.log("Teal " + (index+1) + ":", element.textContent);
});
