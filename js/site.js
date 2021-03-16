// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});


function myFunction() {
  var x = document.getElementById("demo");
  x.style.fontSize = "25px"; 
  x.style.color = "red"; 
}
