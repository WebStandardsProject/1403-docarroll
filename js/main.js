$(document).ready(function(){

	//Changing all cursor hovers on Nav to Pointer
	$('.uxBut').css('cursor', 'pointer');
	$('.assignBut').css('cursor', 'pointer');
	$('.projectBut').css('cursor', 'pointer');
	$('.adiBut').css('cursor', 'pointer');

	//Hiding all boxes on ready
	$('.uxBox').hide();
	$('.assignBox').hide();
	$('.projectBox').hide();
	$('.adiBox').hide();

	//UX Plan Box Navigation
	$('.uxBut').click(function(){
		$('.uxBox').slideToggle('slow/400/fast', function() {
		
		});
	});

	//WSP Assignments Navigation
	$('.assignBut').click(function(){
		$('.assignBox').slideToggle('slow/400/fast', function() {
			
		});
	});

	//WSP Projects Navigation
	$('.projectBut').click(function(){
		$('.projectBox').slideToggle('slow/400/fast', function() {
			
		});
	});

	//ADI Navigation
	$('.adiBut').click(function(){
		$('.adiBox').slideToggle('slow/400/fast', function() {
			
		});
	});

});