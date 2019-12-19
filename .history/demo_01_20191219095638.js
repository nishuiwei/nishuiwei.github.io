const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0, 640, 860)
}
img.src = './bg1.jpg';