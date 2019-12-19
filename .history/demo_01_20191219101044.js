const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = document.createElement("img");
img.src = './bg2.jpg';
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  getImgData(imgData);
  drawData();
};

const dots = [];
const Dot = function(centerX, centerY, radius, fillStyle) {
  this.x = centerX;
  this.y = centerY;
  this.radius = radius;
  this.fillStyle = fillStyle;
};
Dot.prototype = {
  paint: function() {
    ctx.save();
    ctx.beginPath();
    // arc(x, y, r, startAngle, endAngle, anticlockwise) 以x,y为圆心，以r为半径，从startAngle弧度开始到endAngle弧度结束，anticlosewise是布尔值，true表示逆时针，false表示顺时针，默认是顺时针
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.restore();
  }
};

function getImgData(imgData) {
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
function drawData() {
  dots.forEach(function(item) {
    item.paint();
  });
}
