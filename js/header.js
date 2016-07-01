$(document).ready(function() {
	$window = $(window);
	$header = $('header');

	$window.scroll(function() {
		checkScrollPosition();
	})

	function checkScrollPosition() {
		if ($window.scrollTop() > 25) {
			if (!$header.hasClass('scrolled')) {
				$header.addClass('scrolled');
			}
		} else {
			$header.removeClass('scrolled');
		}
	};
})