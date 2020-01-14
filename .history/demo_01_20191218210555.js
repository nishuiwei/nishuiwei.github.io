var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = 'bg.jpg';
var pixels = []; // 存储像素
var imgData;
img.onload = function() {
  ctx.drawImage(img, 200, 100, 200, 100);
  imgData = ctx.getImageData(200, 100, 200, 100);
  getPixels();
  drawPic();
}

function getPixels() {
  var pos = 0;
  var data = imgData.data;
  for(var i = 0; i< 200; i++){
    for(var j = 1; j<=200; j++){
      pos = [(i - 1) * 200 + (j - 1)]*4;
      if(data[pos] >= 0){
        var pixel = {
          x: 200 + J + Math.random() * 20,
          y: 100 + i + Math.random() * 20,
          fillStyle: `rgba(${data[pos + 1]}, ${data[pos] + 2}, ${data[pos] + 3})`
        }
        pixels.push(pixel);
      }
    }
  }
}

function drawPic() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 600, 400);
  var len = pixels.length,
    curr_pixel = null;
  for(var i = 0; i < len; i++) {
    curr_pixel = pixels;
    ctx.fillStyle = curr_pixel.fillStyle;
    ctx.fillRect(curr_pixel.x, curr_pixel.y, 1, 1);
  }
}