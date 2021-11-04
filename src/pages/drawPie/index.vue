<template>
  <div class="container">
    <div class="left">
      <div id="canvasC">
        <!--    <canvas :width="canvasW" :height="canvasH">如果您看到这段话，说明您的浏览器版本过低，不支持canvas！</canvas>-->
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DrawPie from "@/common/canvasandsvg/DrawPie";
import { mapState } from "vuex";

export default {
  name: "drawPie",
  data() {
    return {
      pieData: [
        {
          name: "周杰伦",
          num: 10000,
        },
        {
          name: "林俊杰",
          num: 8000,
        },
        {
          name: "邓紫棋",
          num: 5000,
        },
        {
          name: "毛不易",
          num: 3000,
        },
        {
          name: "庄心妍",
          num: 6000,
        },
        {
          name: "刘德华",
          num: 11000,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      contentHeight: (state) => state.contentHeight,
      contentWidth: (state) => state.contentWidth,
    }),
    canvasW: function () {
      if (this.contentWidth !== 0) {
        return this.contentWidth - 200 - 40;
      } else {
        return 400;
      }
    },
    canvasH: function () {
      if (this.contentHeight !== 0) {
        return this.contentHeight - 40 || 200;
      } else {
        return 400;
      }
    },
  },
  mounted() {
    this.drawPie();
  },
  watch: {
    canvasW() {
      this.drawPie();
    },
    canvasH() {
      this.drawPie();
    },
  },

  methods: {
    drawPie() {
      let canvasC = document.getElementById("canvasC");
      canvasC.innerHTML = "";
      let canvasEl = document.createElement("canvas");
      canvasEl.setAttribute("width", this.canvasW);
      canvasEl.setAttribute("height", this.canvasH);
      canvasC.append(canvasEl);

      let ctx = canvasEl.getContext("2d");
      let PieVm = new DrawPie(ctx);
      PieVm.init(this.pieData);
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
.left,
.right {
  display: inline-block;
  width: 50%;
  height: 100%;
}
</style>