// 构建实体类  给类添加属性和方法
export default function DrawKeyframes(ctx) {
  this.ctx = ctx || document.querySelector("canvas").getContext("2d");
  this.srcList = ['/canvasImage/1.png', '/canvasImage/2.png', '/canvasImage/3.png', '/canvasImage/4.png', '/canvasImage/5.png']
  this.canvasWidth = this.ctx.canvas.width;
  this.canvasHeight = this.ctx.canvas.height;
 };
// 实体类初始化
DrawKeyframes.prototype.init = function (data) {
  let img = new Image();
  img.onload = () => {
    this.ctx.drawImage(img, 0, 0);
  };
  let index = 0;
  setInterval(() => {
    if (index < 5) {
      index++
    } else {
      index = 0
    }
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    img.src = this.srcList[index];
  }, 200);
};



