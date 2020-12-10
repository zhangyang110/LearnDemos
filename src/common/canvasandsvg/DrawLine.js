// 构建实体类  给类添加属性和方法
export default function DrawLine(ctx) {
  //设置属性
  this.ctx = ctx || document.querySelector('canvas').getContext("2d");
  this.ctx.strokeStyle = "#80ee1c";// 路径描边颜色；
  this.gridSize = 5;//网格大小
  this.distance = this.gridSize * 5;//左边系 距离四周的距离 默认为5个网格大小
  this.canvasWidth = this.ctx.canvas.width;
  this.canvasHeight = this.ctx.canvas.height;
  this.arrowSize =  this.gridSize*2;
  this.dottedSize =  this.gridSize*2;
};
// 实体类初始化
DrawLine.prototype.init = function (data) {
  this.drawGrid();// 网格
  this.axes();
  this.dotted(data);
};

// 原型构建 网格
DrawLine.prototype.drawGrid = function () {

  /*首先绘制x轴方向的 线*/
  let xLineTotal = Math.floor(this.canvasHeight / this.gridSize);
  let yLineTotal = Math.floor(  this.canvasWidth / this.gridSize);
  // 绘制x轴线条
  for (let i = 0; i <= xLineTotal; i++) {
    this.ctx.beginPath();// 开启新路径
    this.ctx.moveTo(0, i * this.gridSize - 0.5);
    this.ctx.lineTo(this.canvasWidth, i * this.gridSize - 0.5);
    this.ctx.stroke();
  }
  // 绘制y轴线条
  for (let i = 0; i <= yLineTotal; i++) {
    this.ctx.beginPath();// 开启新路径
    this.ctx.moveTo(i * this.gridSize - 0.5, 0);
    this.ctx.lineTo(i * this.gridSize - 0.5, this.canvasHeight);
    this.ctx.stroke();
  };
};

// 原型构建 坐标系
DrawLine.prototype.axes = function () {
  /*绘制x 轴坐标系*/
  this.ctx.beginPath();
  this.ctx.moveTo(this.distance,this.canvasHeight-this.distance);// 坐标原点
  this.ctx.lineTo(this.canvasWidth-this.distance-0.5,this.canvasHeight-this.distance-0.5);// x 轴 右测定点
  this.ctx.lineTo(this.canvasWidth-this.distance-this.arrowSize ,this.canvasHeight-this.distance+this.arrowSize/2 );// 三角下点
  this.ctx.lineTo(this.canvasWidth-this.distance-this.arrowSize ,this.canvasHeight-this.distance-this.arrowSize/2 );//
  this.ctx.lineTo(this.canvasWidth-this.distance,this.canvasHeight-this.distance );// 回到原点
  this.ctx.strokeStyle="#000";
  this.ctx.stroke();
  this.ctx.fill();

  /*绘制y轴*/
  this.ctx.beginPath();
  this.ctx.moveTo(this.distance,this.canvasHeight-this.distance);// 坐标原点
  this.ctx.lineTo(this.distance-0.5,this.distance-0.5);// y轴 定点
  this.ctx.lineTo(this.distance+this.arrowSize/2,this.distance+this.arrowSize);// y轴 右测点
  this.ctx.lineTo(this.distance-this.arrowSize/2,this.distance+this.arrowSize);// y轴 左测点
  this.ctx.lineTo(this.distance-0.5,this.distance-0.5);// y轴 左测点
  this.ctx.stroke();
  this.ctx.fill();

};

// 原型构建 点 并且链接点 foreach
DrawLine.prototype.dotted = function (data) {
  // this.ctx.moveTo(this.distance,this.canvasHeight-this.distance);// 坐标原点
  let preDotted={
    x:this.distance,
    y:this.canvasHeight-this.distance,
  };
  //以data point 为中心绘制矩形并连线
  data.forEach((item,i)=>{
    // 先绘制矩形s
    this.ctx.beginPath();
    this.ctx.moveTo(item.x-this.dottedSize/2,item.y-this.dottedSize/2);
    this.ctx.lineTo(item.x+this.dottedSize/2,item.y-this.dottedSize/2);
    this.ctx.lineTo(item.x+this.dottedSize/2,item.y+this.dottedSize/2);
    this.ctx.lineTo(item.x-this.dottedSize/2,item.y+this.dottedSize/2);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.moveTo(preDotted.x,preDotted.y);
    this.ctx.lineTo(item.x,item.y);
    preDotted={
      x:item.x,
      y:item.y,
    };
    this.ctx.stroke();
  })
};


