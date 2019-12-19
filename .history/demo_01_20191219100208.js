const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var img = new Image();
img.src = './bg1.jpg';
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}