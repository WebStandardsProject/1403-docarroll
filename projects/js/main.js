$(document).ready(function(){
$('.searchBox').hide();
$('.loginBox').hide();
$('.detailsBox').hide();	
$
( ".searchBtn" ).click(function() {
  $( ".searchBox" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$( ".loginBtn" ).click(function() {
  $( ".loginBox" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$( ".deatilsBtn" ).click(function() {
  $( ".detailsBox" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});


});