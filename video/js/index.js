var videoObj = document.querySelector('video'); // video
var expand = document.querySelector('.video-expand');
// play()

expand.addEventListener('click', function() {
  videoObj.webkitRequestFullScreen()
})