var grayButton = document.getElementById('grayButton');

var grayClick = function(){
	document.body.style.backgroundColor = 'gray';
}

grayButton.onclick = grayClick;

var whiteButton = document.getElementById('whiteButton');

var whiteClick = function(){
	document.body.style.backgroundColor = 'black';
	document.querySelector('h1').style.color = 'white';
	document.querySelector('p').style.color = 'white';
}

whiteButton.onclick = whiteClick;