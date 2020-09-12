mTest = {
	include: [
		{path: '/web/pages/mTest/mTest.html', type:'html', var: 'html'},
		{path: '/web/pages/mTest/mTest.css', type:'css'},
		{path: '/web/ml/extension/tf.min.js', type:'js'},

		{path: '/web/ml/core/mArray.js', type:'js'},
		{path: '/web/ml/core/mMath.js', type:'js'},
		{path: '/web/ml/core/naive/costFunc.js', type:'js'},
		{path: '/web/ml/core/naive/regression.js', type:'js'},

		{path: '/web/ml/core/naive/activation.js', type:'js'},
		{path: '/web/ml/core/naive/mnn.js', type:'js'},
		{path: '/web/ml/core/naive/layers/dense.js', type:'js'},
	],
	inserial: true,
	open: function(value) {
		if (!mTest.loaded) {
			$('.content').html(mTest.html);
			mTest.loaded = true;
		}
	},
	close: function() {
        	$('.mTest').remove();
        	mTest.loaded = false;
	},
	loaded: false,
	multiload: true
}