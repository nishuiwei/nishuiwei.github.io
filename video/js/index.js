var videoObj = document.getElementById('videoALL'); // video
var videoContainer = document.getElementById('container');
videoObj.ontimeupdate = function() {
	setTimeout(function() {
		// videoContainer.classList.add('play_container');
		toFullVideo(videoObj);
	}, 1000);
};

videoObj.onended = function() {
	console.log(123);
	// videoContainer.classList.remove('play_container');
	exitFullscreen(videoObj);
};

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
		doc.exitFullscreen();
	} else if (doc.mozCancelFullScreen) {
		doc.mozCancelFullScreen();
	} else if (doc.webkitCancelFullScreen) {
		doc.webkitCancelFullScreen();
	}
}
