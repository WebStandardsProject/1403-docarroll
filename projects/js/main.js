$(document).ready(function(){
$('.searchBox').hide();
$( ".searchBtn" ).click(function() {
  $( ".searchBox" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});


});