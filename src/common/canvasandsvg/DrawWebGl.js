// 构建实体类  给类添加属性和方法

export default function DrawWebGl(ctx) {
  this.ctx = ctx || document.querySelector("canvas").getContext("experimental-webgl");
  console.log(this.ctx);

};



