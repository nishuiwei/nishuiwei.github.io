var videoObj = document.querySelector('video'); // video
var expand = document.querySelector('.video-expand');
var play = document.querySelector('.video-play-pause');
play.addEventListener('click', function() {
  videoObj.play()
  videoObj.webkitRequestFullScreen()
})
expand.addEventListener('click', function() {
  videoObj.webkitRequestFullScreen()
})