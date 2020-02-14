var videoObj = document.getElementById('videoALL'); // video
videoObj.ontimeupdate = function() {
  setTimeout(function() {
    toFullVideo(videoObj)
  }, 1000)
}

function toFullVideo(doc) {
	if (doc.requestFullscreen) {
		return doc.requestFullscreen();
	} else if (doc.webkitRequestFullScreen) {
		return doc.webkitRequestFullScreen();
	} else if (doc.mozRequestFullScreen) {
		return doc.mozRequestFullScreen();
	} else {
		return doc.msRequestFullscreen();
	}
}
