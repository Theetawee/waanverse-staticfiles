$(document).ready(function () {
	var $image = $("#image");

	$image.cropper({
		aspectRatio: 1 / 1,
		crop: function (event) {
			console.log(event.detail.x);
			// ...
		},
	});

	// Get the Cropper.js instance after initialized
	var cropper = $image.data("cropper");
});
