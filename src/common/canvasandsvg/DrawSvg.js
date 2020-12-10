export default function DrawSvg(container) {
  this.contaier = container;
  this.gridSize = 5;
  this.svgWidth = this.contaier.clientWidth;
  this.svgHeight = this.contaier.clientHeight;
  this.svgC = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
}
DrawSvg.prototype.init = function (data) {
  this.svgData = data;
  this.svgC.setAttribute('width', `${this.svgWidth}`);
  this.svgC.setAttribute('height', `${this.svgHeight}`);
  this.svgC.style = 'border:1px solid #eee';
  this.drawGrid();
  this.drawAxes();
  this.drawPillar();
  this.contaier.appendChild(this.svgC);
};
// 绘制网格
DrawSvg.prototype.drawGrid = function () {
  let xTotal = Math.floor(this.svgHeight / this.gridSize);
  let yTotal = Math.floor(this.svgWidth / this.gridSize);
  let gridC = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  gridC.setAttribute('id', 'gridC');
  for (let i = 0; i < xTotal; i++) {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', `${i * this.gridSize}`);

    line.setAttribute('x2', `${this.svgWidth}`);
    line.setAttribute('y2', `${i * this.gridSize}`);
    line.setAttribute('stroke', '#e8eed5');
    gridC.appendChild(line);
  }
  for (let j = 0; j < yTotal; j++) {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', `${j * this.gridSize}`);
    line.setAttribute('y1', `0`);
    line.setAttribute('x2', `${j * this.gridSize}`);
    line.setAttribute('y2', `${this.svgHeight}`);
    line.setAttribute('stroke', '#e8eed5');
    gridC.appendChild(line);
  }
  this.svgC.appendChild(gridC);

};
// 绘制坐标
DrawSvg.prototype.drawAxes = function () {
  let AxesX = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  let AxesY = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  AxesX.setAttribute('d',
    `M ${this.gridSize * 5} ${this.svgHeight - this.gridSize * 5} 
   L ${this.svgWidth - this.gridSize * 5} ${this.svgHeight - this.gridSize * 5} 
   L ${this.svgWidth - this.gridSize * 5 - this.gridSize} ${this.svgHeight - this.gridSize * 5 + this.gridSize} 
   L ${this.svgWidth - this.gridSize * 5 - this.gridSize} ${this.svgHeight - this.gridSize * 5 - this.gridSize} 
   L ${this.svgWidth - this.gridSize * 5} ${this.svgHeight - this.gridSize * 5}  
   `);
  AxesX.style.fill = "black";
  AxesX.style.stroke = "black";
  // x轴画刻度线
  this.xScaleL = (this.svgWidth - this.gridSize * 5 - this.gridSize * 5 - this.gridSize * 10) / this.svgData.length;//刻度线x轴的长度 再预留10个网格线的长度
  let xScaleG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  for (let m = 1; m <= this.svgData.length; m++) {
    let xScale = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let xScaleText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xScaleText.innerHTML = `${this.svgData[m - 1]['date']}`;
    xScaleText.setAttribute('x', `${m * this.xScaleL}`);
    xScaleText.setAttribute('y', `${this.svgHeight - this.gridSize * 5} `);
    xScaleText.setAttribute('style', 'transform:translate(-15px,12px);font-size:12px');
    xScaleText.setAttribute('fill', 'red');// 文本填充样式
    xScale.setAttribute('d',
      `
    M ${m * this.xScaleL} ${this.svgHeight - this.gridSize * 5} 
    L ${m * this.xScaleL} ${this.svgHeight - this.gridSize * 5 - this.gridSize} 
    `);
    xScale.style.fill = "black";
    xScale.style.stroke = "black";
    xScaleG.appendChild(xScale)
    xScaleG.appendChild(xScaleText)
  }
  this.svgC.appendChild(xScaleG);
  AxesY.setAttribute('d',
    `M ${this.gridSize * 5} ${this.svgHeight - this.gridSize * 5} 
   L ${this.gridSize * 5} ${this.gridSize * 5} 
   L ${this.gridSize * 5 - this.gridSize} ${this.gridSize * 5 + this.gridSize} 
   L ${this.gridSize * 5 + this.gridSize} ${this.gridSize * 5 + this.gridSize} 
   L ${this.gridSize * 5} ${this.gridSize * 5}
   `);
  AxesY.style.fill = "black";
  AxesY.style.stroke = "black";
  // Y轴画刻度线
  let yL = this.svgHeight - this.gridSize * 5 - this.gridSize * 5 - this.gridSize * 10;// y轴总像素长度
  let maxCount = JSON.parse(JSON.stringify(this.svgData)).sort((pre, next) => {
    return next.count - pre.count
  })[0]['count'];
  this.yScaleL = yL / 5;//单个刻度线的长度
  this.yScaleCount = maxCount / 5;//单个刻度线的长度
  let yScaleG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  for (let f = 1; f <= 5; f++) {
    let yScale = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let yScaleText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yScale.setAttribute('d',
      `
    M ${this.gridSize * 5} ${this.svgHeight - this.gridSize * 5 - f * this.yScaleL}
    L ${this.gridSize * 5 + this.gridSize} ${this.svgHeight - this.gridSize * 5 - f * this.yScaleL}
    `);
    yScaleText.innerHTML = `${this.yScaleCount * f}`;
    yScaleText.setAttribute('x', `0`);
    yScaleText.setAttribute('y', `${this.svgHeight - this.gridSize * 5 - f * this.yScaleL}`);
    yScaleText.setAttribute('style', 'transform:translateY(4px);font-size:12px');
    yScaleText.setAttribute('fill', 'red');// 文本填充样式
    yScale.style.fill = "black";
    yScale.style.stroke = "black";
    yScaleG.appendChild(yScaleText)
    yScaleG.appendChild(yScale)
  }
  this.svgC.appendChild(xScaleG);
  this.svgC.appendChild(yScaleG);
  this.svgC.appendChild(AxesX);
  this.svgC.appendChild(AxesY);
};
// 绘制柱状图
DrawSvg.prototype.drawPillar = function () {
  let rectG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  this.svgData.forEach((item, index) => {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', `${(index + 1) * this.xScaleL - this.gridSize * 3}`);
    rect.setAttribute('y', `${this.svgHeight - this.gridSize * 5 - this.yScaleL * (item.count / this.yScaleCount)}`);// svgHeight减去留白减去柱子的高度
    rect.setAttribute('width', `${this.gridSize * 6}`);
    rect.setAttribute('height', `${this.yScaleL * (item.count / this.yScaleCount)}`);
    rect.style.fill=this.randomColor();
    rectG.appendChild(rect)
  })
  this.svgC.appendChild(rectG);
};
DrawSvg.prototype.randomColor = function () {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`
};
DrawSvg.prototype.gradient = function () {

};