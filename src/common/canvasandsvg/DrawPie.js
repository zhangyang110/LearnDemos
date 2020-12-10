// 构建实体类  给类添加属性和方法

/*知识点-----*/
// 周长为2*π*r
// 一周为360度
// 一弧度为 弧度长度与半径相等时
// 1 π 为 180度
// js中获取π值方法为Math.PI
// 1 弧度 为 π / 180
// Math.cos  Math.sin  入参为弧度  出参为长度

export default function DrawPie(ctx) {
  this.ctx = ctx || document.querySelector("canvas").getContext("2d");
  let canvasWidth = this.ctx.canvas.width;
  let canvasHeight = this.ctx.canvas.height;
  this.singlePI = Math.PI / 180;// 一度对应的弧度的值
  this.r = 100;
  this.outLineL = 20;
  this.descDistanceW = 30;
  this.descDistanceH = 20;
  this.centerPoint = {
    x: canvasWidth / 2,
    y: canvasHeight / 2
  }
}
DrawPie.prototype.init = function (data) {
  let total = data.reduce((total, next) => {
    return total + next.num;
  }, 0);// 总数据量
  let PreEndEngle = -Math.PI / 2;  // 圆的 右侧端为0 起始点   -Math.PI/2 为定点 以定点为 初始点开始绘画
  data.forEach((item, i) => {
    let randomColor = this.randomFill();
    this.ctx.beginPath();// 每次开启新路径
    this.ctx.moveTo(this.centerPoint.x, this.centerPoint.y);// 移动到整个canvas的中心；
    let curEngle = ((item.num) / total) * 360 * this.singlePI;// 当前弧度值；
    let curEndEngle = PreEndEngle + curEngle;//本次弧度的终点是 上次 终点加上次的弧度
    this.ctx.arc(this.centerPoint.x, this.centerPoint.y, this.r, PreEndEngle, curEndEngle)// 上一个的终点就是本次的起点
    this.ctx.stroke();
    this.ctx.fillStyle = randomColor;
    this.ctx.fill();
    //开始绘画label
    this.drawLabel(PreEndEngle, curEngle, randomColor, item.name);
    //开始绘画 说明
    this.drawDesc(item.name, i);
    PreEndEngle = curEndEngle;
  })
};
DrawPie.prototype.randomFill = function () {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`
};
DrawPie.prototype.drawLabel = function (PreEndEngle, curEngle, randomColor, title) {
  let labelLineEngle = PreEndEngle + curEngle / 2;
  let outLineL = this.r + this.outLineL;// 整个
  let outX = outLineL * Math.cos(labelLineEngle) + this.centerPoint.x;
  let outY = outLineL * Math.sin(labelLineEngle) + this.centerPoint.y;
  this.ctx.beginPath();
  this.ctx.moveTo(this.centerPoint.x, this.centerPoint.y);
  this.ctx.strokeStyle = randomColor;
  this.ctx.lineTo(outX, outY);
  this.ctx.stroke();
  this.drawTitle(title, outX, outY);
};
DrawPie.prototype.drawTitle = function (title, outX, outY) {
  let textL = this.ctx.measureText(title).width;
  this.ctx.beginPath();
  this.ctx.moveTo(outX, outY);
  if (outX > this.centerPoint.x) {
    this.ctx.lineTo(outX + textL, outY);
    this.ctx.textAlign = "left";
  } else {
    this.ctx.lineTo(outX - textL, outY);
    this.ctx.textAlign = "right";
  }
  this.ctx.textBaseline = "bottom";
  this.ctx.font = "12px  MicrosoftYaHei";
  this.ctx.fillText(title, outX, outY);
  this.ctx.stroke();
};
DrawPie.prototype.drawDesc = function (title, index) {
  // descDistance
  this.ctx.beginPath();
  // this.ctx.moveTo(this.descDistanceW, this.descDistanceH * index*1.5 + 30);
  this.ctx.fillRect(this.descDistanceW, this.descDistanceH * index * 1.5 + 30, this.descDistanceW, this.descDistanceH);
  // this.ctx.moveTo(this.descDistanceW+this.descDistanceW+20, this.descDistanceH * index*1.5 + 30);
  this.ctx.textBaseline = "middle";
  this.ctx.textAlign = "left";
  this.ctx.fillText(title, this.descDistanceW + this.descDistanceW + 20, this.descDistanceH * index * 1.5 + 30 + this.descDistanceH / 2);
};


