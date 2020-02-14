var videoObj = document.getElementById('videoALL'); // video
var videoContainer = document.getElementById('container');

videoObj.addEventListener('play', function() {
	setTimeout(function() {
		$('#container').addClass('play_container');
		videoObj.style.width = '100%';
		videoObj.style.height = '100%';
		toFullVideo(videoObj);
	}, 1000);
});

// videoObj.onended = function() {
//   console.log(123);
//   $("#container").removeClass("play_container");
// 	videoObj.style.width = '200px';
// 	videoObj.style.height = '300px';
// 	exitFullscreen(videoObj);
// };

videoObj.addEventListener(
	'ended',
	function() {
		console.log($('#container'));
		$('#container').removeClass('play_container');
		videoObj.style.width = '200px';
		videoObj.style.height = '300px';
		exitFullscreen(videoObj);
	},
	true
);

function toFullVideo(doc) {
	if (doc.webkitRequestFullScreen) {
		return doc.webkitRequestFullScreen();
	} else if (doc.mozRequestFullScreen) {
		return doc.mozRequestFullScreen();
	} else {
		return doc.msRequestFullscreen();
	}
}

function exitFullscreen(doc) {
	if (doc.exitFullscreen) {
		return doc.exitFullscreen();
	} else if (doc.mozCancelFullScreen) {
		return doc.mozCancelFullScreen();
	} else if (doc.webkitCancelFullScreen) {
		return doc.webkitCancelFullScreen();
	}
}
