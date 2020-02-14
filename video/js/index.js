var videoObj = document.getElementById('videoALL'); // video
var videoContainer = document.getElementById('container');
videoObj.ontimeupdate = function() {
	setTimeout(function() {
		videoContainer.classList.add('play_container');
		toFullVideo(videoObj);
	}, 1000);
};

videoObj.onended = function() {
	console.log(123);
	// alert(123);
	setTimeout(() => {
    // videoContainer.classList.remove('play_container');
    videoContainer.classList.remove("play_container");
	}, 1000);
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
