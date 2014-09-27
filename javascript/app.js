(function(){
	//alert("Hello!");
	var images = [
		'bear.jpg',
		'brick.jpeg',
		'bridge.jpg',
		'sky.jpg',
		'water.jpg',
	];
	$('.site-wrapper').css({
		"background-image":"url(images/" + images[Math.floor((Math.random() * images.length))]+ ")",
		"background-size":"100% 100%"
	})

	$('#address').on({
		click:function( ){
			// alert("hello!");
			$.getJSON("http://www.jsonip.com", function(data) {
			console.log(data.ip);
			$(".cover-heading").html(data.ip)
			$('.tlt').textillate();

			});
		}
	})
})();