// var grayButton = document.getElementById('grayButton');


$(document).ready(function(){
  initMap();
	// $(".readmore a").click(showHidenP);
});
function initMap() {
       var uluru = {lat: 33.8479634, lng: -117.2270496};
      //  var uluru = {lat: -25.363, lng: 131.044};
       var map = new google.maps.Map(document.getElementById('google-map'),
        {
         zoom: 8,
         center: uluru
       });
       var marker = new google.maps.Marker({
  position: uluru,
  map: map
});
}
// var grayClick = function(){
// 	document.body.style.backgroundColor = 'gray';
// }

// grayButton.onclick = grayClick;

// var whiteButton = document.getElementById('whiteButton');

// var whiteClick = function(){
// 	document.body.style.backgroundColor = 'black';
// 	document.querySelector('h1').style.color = 'white';
// 	document.querySelector('p').style.color = 'white';
// }

// whiteButton.onclick = whiteClick;

// $(window).load(function(){
//  $('.container').find('img').each(function(){
//   var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
//   $(this).addClass(imgClass);
//  })
// })
