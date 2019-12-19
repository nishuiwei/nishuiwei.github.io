const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0, 100, 100)
}
img.src = './background.jpg';