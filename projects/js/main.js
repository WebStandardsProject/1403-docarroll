$(document).ready(function(){
$('.searchBox').hide();
$('.loginBox').hide();
$('.detailsBox').hide();	
$('.signUpBox').hide();
$('.contactBox').hide();

//Btn Toggles
$(".searchBtn" ).click(function() {
	//Hide other Boxes on show
	$('.loginBox').hide();
	$('.detailsBox').hide();
	$('.signUpBox').hide();
  $( ".searchBox" ).slideToggle( "slow", function() {
    // Animation complete.
    
  });
});

$(".contactBtn" ).click(function() {
	//Hide other Boxes on show
	$('.loginBox').hide();
	$('.detailsBox').hide();
	$('.signUpBox').hide();
	$('.searchBox').hide();
  $( ".contactBox" ).slideToggle( "slow", function() {
    // Animation complete.
    
  });
});

$(".signUpBtn" ).click(function() {
	//Hide other Boxes on show
	$('.loginBox').hide();
	$('.detailsBox').hide();
	$('.searchBox').hide();
	$('.contactBox').hide();
  $( ".signUpBox" ).slideToggle( "slow", function() {
    // Animation complete.
    
  });
});

$( ".loginBtn" ).click(function() {
	//Hide other Boxes on show
	$('.detailsBox').hide();
	$('.searchBox').hide();
	$('.signUpBox').hide();
	$('.contactBox').hide();
  $( ".loginBox" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$( ".detailsBtn" ).click(function() {
	//Hide other Boxes on show
	$('.loginBox').hide();
	$('.searchBox').hide();
	$('.signUpBox').hide();
  $( ".detailsBox" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$('.cancel').click(function(){
	$('.loginBox').hide();
	$('.signUpBox').hide();
	$('.contactBox').hide();
});
$('.back').click(function(){
	$('.detailsBox').hide();
	$(".searchBox").show();
})


});