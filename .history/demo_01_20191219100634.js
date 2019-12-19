const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = document.createElement('img');
img.src = require("./bg1.jpg");
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const dots = [];
function getImageData(imgData) {
  for (var x = 0; x < imgData.width; x += 4) {
    for (var y = 0; y < imgData.height; y += 4) {
      var i = (y * imgData.width + x) * 4;
      if (
        !(
          imgData.data[i] >= 200 &&
          imgData.data[i + 1] >= 200 &&
          imgData.data[i + 2] >= 200
        ) &&
        imgData.data[i + 3] >= 128
      ) {
        // 有颜色值就渲染
        var dot = new Dot(
          x - 3,
          y - 3,
          2,
          `rgba(${imgData.data[i]},${imgData.data[i + 1]},${
            imgData.data[i + 2]
          },${imgData.data[i + 3]})`
        );
        dots.push(dot);
      }
    }
  }
}
