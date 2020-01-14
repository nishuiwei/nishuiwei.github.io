const canvas = document.getElementById('cavsElem');
if (!canvas.getContext) return;
const ctx = canvas.getContext('2d');

var img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0);
}
img.src = 'bg.jpg';
