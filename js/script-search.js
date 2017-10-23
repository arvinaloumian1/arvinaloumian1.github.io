var maxscreensize=1000;
$(document).ready(function(){
   getmaxwidth();
   // alert(maxscreensize);
});
// Event.preventDefault();
function getmaxwidth() {
    maxscreensize=screen.width;
}
 
 window.onresize=function(){
 	var minwidthsidebar=maxscreensize*.71*.25;
 	// var minwidthmain=maxscreensize*.71*.75;
  $("#side-content").css('width',minwidthsidebar);
  // $("#main-result").css('width',minwidthmain);
 };