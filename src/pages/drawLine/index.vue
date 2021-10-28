<template>
  <div id="canvasCLine">

  </div>
</template>

<script>

import DrawLine from "@/common/canvasandsvg/DrawLine";
import {mapState} from "vuex"

export default {
  name: "DrawLine",
  data() {
    return {
      lineData: [
        {
          x: 100,
          y: 50,
        },
        {
          x: 150,
          y: 90,
        },
        {
          x: 200,
          y: 200,
        },
        {
          x: 260,
          y: 300,
        },
        {
          x: 400,
          y: 200,
        },
        {
          x: 500,
          y: 100,
        },
        {
          x: 600,
          y: 20,
        },
        {
          x: 700,
          y: 300,
        },
        {
          x: 800,
          y: 100,
        },
      ]
    }
  },
  computed: {
    ...mapState({
      contentHeight: state => state.contentHeight,
      contentWidth: state => state.contentWidth,
    }),
    canvasW: function () {
      if (this.contentWidth !== 0) {
        return this.contentWidth - 200 - 40
      } else {
        return 400
      }
    },
    canvasH: function () {
      if (this.contentHeight !== 0) {
        return this.contentHeight - 40 || 200
      } else {
        return 400
      }
    },
  },
  mounted() {
    this.drawLine();
  },
  watch: {
    'canvasW'() {
      this.drawLine();
    },
    'canvasH'() {
      this.drawLine();
    },
  },

  methods: {
    drawLine() {
      let canvasC = document.getElementById('canvasCLine');
      canvasC.innerHTML = '';
      let canvasEl = document.createElement('canvas');
      canvasEl.setAttribute('width',this.canvasW)
      canvasEl.setAttribute('height',this.canvasH);
      canvasC.append(canvasEl);

      let ctx = canvasEl.getContext("2d");
      let PieVm = new DrawLine(ctx);
      PieVm.init(this.lineData)
    }
  }

}
</script>

<style scoped>

</style>