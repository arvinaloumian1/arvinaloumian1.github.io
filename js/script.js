// var grayButton = document.getElementById('grayButton');


$(document).ready(function(){
  // initMap();
	// $(".readmore a").click(showHidenP);
var searchbuttonID = document.getElementById("submit-btn");

console.log(searchbuttonID);

searchbuttonID.onclick=function(e){
  // e.preventDefault();
  var searchValue=$("#serach-box").val();
  
  if (searchValue.trim()=="")
   {
    alert("Please Enter a City Name!");    
   }
   else if(searchValue.trim().toLowerCase()=="los angeles"
    || searchValue.trim().toLowerCase()=="la"){
    window.open("search-result.html","_self");
   }
      else if(searchValue.trim().toLowerCase()=="new york"
    || searchValue.trim().toLowerCase()=="ny"){
    window.open("search-result-NY.html","_self");
   }
 }
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

// var searchValue_=document.getElementById("serach-box").value;
// // Get the submit button
// var searchbutton = document.getElementsByClassName("submit-buttond")[0];
// var searchbuttonID = document.getElementById("submit-btn");

// searchbuttonID.onclick=function(){
//   alert(searchValue_);
// }

// searchbutton.onclick=function(){
//   //alert(searchValue_);
//  //document.getElementById("p1").innerHTML = searchValue_;
// //  if (true) {}
// //window.open("search-result.html","_self");
// }

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
 