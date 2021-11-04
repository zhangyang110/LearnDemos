<template>
  <div class="container">
    <div class="left">
      <div id="svgC" style="width: 100%; height: 100%"></div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import DrawSvg from "@/common/canvasandsvg/DrawSvg";

export default {
  name: "drawSvg",
  data() {
    return {
      svgData: [
        {
          date: "星期一",
          count: 300,
        },
        {
          date: "星期二",
          count: 600,
        },
        {
          date: "星期三",
          count: 800,
        },
        {
          date: "星期四",
          count: 1200,
        },
        {
          date: "星期五",
          count: 700,
        },
        {
          date: "星期六",
          count: 444,
        },
        {
          date: "星期日",
          count: 333,
        },
      ],
    };
  },
  mounted() {
    this.drawSvgFn();
    window.addEventListener("resize", this.reDraw);
   
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.reDraw);
  },
  methods: {
    reDraw() {
      let _svgEl = document.getElementsByTagName("svg")[0];
      if (_svgEl) {
        document.getElementById("svgC").removeChild(_svgEl);
      }
      this.drawSvgFn();
    },
    drawSvgFn() {
      let svgC = document.querySelector("#svgC");
      let svgVm = new DrawSvg(svgC);
      svgVm.init(this.svgData);
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
.left,.right{
  display: inline-block;
  width:50%;
  height: 100%;
}
</style>