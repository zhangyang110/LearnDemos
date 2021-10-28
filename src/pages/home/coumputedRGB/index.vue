<template>
  <div>
    <ul class="c" ref="container">
      <li v-for="(item,i) in list" :key="i"> {{ i }}</li>
    </ul>
<!--    <div class="d">red</div>-->
<!--    <div class="e">blue</div>-->
<!--    <div class="f">yellow</div>-->
    <div class="mylinear">mylinear</div>
  </div>
</template>

<script>
export default {
  name: "computedRGB",
  data() {
    return {
      total: 5,
      // 起点对应的色值
      // 终点对应的 rgb 色值
      startRGB: [
        255, 255, 0
      ],
      endRGB: [
        255, 0,0,
      ],
    }
  },
  computed: {
    list() {
      return Array(this.total).fill(1);
    },
  },
  mounted() {
    this.setBackground();
  },
  methods: {
    commonFn(start, end, total, N) {
      let result = start + (end - start) / total * N;
      return result
    },
    computedRGB() {
      let {total, startRGB, endRGB, commonFn} = this;
      let rgblist = [];
      for (let i = 0; i < this.total; i++) {
        let R = commonFn(startRGB[0], endRGB[0], total, i + 1);
        let G = commonFn(startRGB[1], endRGB[1], total, i + 1);
        let B = commonFn(startRGB[2], endRGB[2], total, i + 1);
        let itemRGB = `rgb(${R},${G},${B})`
        rgblist.push(itemRGB)
      }
      return rgblist
    },
    setBackground() {
      let container = this.$refs.container
      let RGBList = this.computedRGB();
      console.log(RGBList);
      console.log(container.children);
      Array.from(container.children).map((item, i,self) => {
        // item.style.backgroundColor = RGBList[i] // 每个格子是单一色
        if(i===(self.length-1)){
          item.style.backgroundColor = RGBList[i]
        }else{
          item.style.background = `linear-gradient(to left,${RGBList[i]},${RGBList[i+1]})`// 每个格子是渐变色
        }
      })

    }
  }
}
</script>

<style scoped lang="less">
.c {
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #e7e1cd;
  box-sizing: border-box;
}

li {
  height: 100%;
  width: 30px;
  border: 1px solid black;
  border-radius: 5px;
  //background-color: #9a6e3a;

}
.a,.b,.c{
  width:100%;
  height: 100px;
}
.d {
  background-color: red;
}
.e {
  background-color: blue;
}
.f {
  background-color: yellow;
}
.mylinear{
  width: 160px;
  height: 100px;
  background: linear-gradient(to left, red , yellow);
}
</style>