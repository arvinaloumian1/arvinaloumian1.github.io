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

// Get the modal
var modal1 = document.getElementById('modal-main');

// Get the button that opens the modal
var btn = document.getElementById("promo-btn-pop");
// var btn = document.getElementById("promo-link-pop-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];
//var span = document.getElementById("modal-close");

var cancelbtn=document.getElementsByClassName("input-cancel-btn")[0];

btn.onclick = function() {
   //alert("w");
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

cancelbtn.onclick = function() {
    modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  //alert("clicked captr");
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
// $("#promo-link-pop" ).click(function() {
//   alert( "Handler for .click() called." );
// });

// $("#promo-link-pop").click(function(){
//  $("sign-up-pop_wrapper").css("display", "block");

//  alert("fe");
// });

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
