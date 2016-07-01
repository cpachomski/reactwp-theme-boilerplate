$(document).ready(function(){
	var $body = $('body');
	var $loader = $('loader');
	$body.imagesLoaded().done(function(){
		setTimeout(function(){
			$loader.addClass('hidden')
		}, 3000);
	})

})