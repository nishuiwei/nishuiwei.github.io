var videoObj = document.querySelector('video'); // video
var expand = document.querySelector('.video-expand');
// play()
videoObj.addEventListener('click', function(){
  videoObj.play()
})
expand.addEventListener('click', function() {
  videoObj.webkitRequestFullScreen()
})