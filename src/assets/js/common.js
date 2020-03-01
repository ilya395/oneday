window.addEventListener('load', function(){
	// instagram
	(function(){
	    new InstagramFeed({
	        'username': '1dayinrome',
	        'container': document.getElementById("instagram-feed"),
	        'display_profile': false,
	        'display_biography': false,
	        'display_gallery': true,
	        'callback': null,
	        'styling': false,
	        'items': 8,
	        'items_per_row': 4,
	        'margin': 1 
	    });
	})();
});