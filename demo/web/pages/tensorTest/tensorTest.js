tensorTest = {
	include: [
		{path: '/web/pages/tensorTest/tensorTest.html', type:'html', var: 'html'},
		{path: '/web/pages/tensorTest/tensorTest.css', type:'css'},
		{path: '/web/ml/extension/tf.min.js', type:'js'}
	],
	inserial: true,
	open: function(value) {
		if (!tensorTest.loaded) {
			$('.content').html(tensorTest.html);
			tensorTest.loaded = true;
		}
	},
	close: function() {
        	$('.tensorTest').remove();
        	tensorTest.loaded = false;
	},
	loaded: false,
	multiload: true
}