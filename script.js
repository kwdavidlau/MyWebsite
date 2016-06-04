/*
$(document).ready(function() {	
	$('.images').hover(
		function (){
			$(this).fadeTo('fast',0.5);
		},
		function(){
			$(this).fadeTo('fast',1);	
		}
	);	
});
*/

$(document).ready(function(){
	$('.images').click(function(){
		$(this).hide();
	});
});

$(document).ready(function() {	
	$('.box').click(function(){
		$(this).fadeTo('slow',0.3);
	});
});

$(document).ready(function(){
	$('.mark').click(function(){
		$(this).css('background-color','#FFFFE0');
	});
});


/*
Users can mark an ingredient after they buy it.
Users can keep their place in the directions list as they cook.
Users can hide all photos.
*/