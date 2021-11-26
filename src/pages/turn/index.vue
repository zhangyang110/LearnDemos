<template>
  <div id="magazine" ref="magazine">
    <div :style="{ background: `url(${img1})` }"></div>
    <div :style="{ background: `url(${img2})` }"></div>
    <div :style="{ background: `url(${img3})` }"></div>
    <div :style="{ background: `url(${img4})` }"></div>
    <div :style="{ background: `url(${img5})` }"></div>
    <div :style="{ background: `url(${img6})` }"></div>
  </div>
</template>

<script>
import img1 from "@/assets/turnjsImg/01.jpg";
import img2 from "@/assets/turnjsImg/02.jpg";
import img3 from "@/assets/turnjsImg/03.jpg";
import img4 from "@/assets/turnjsImg/04.jpg";
import img5 from "@/assets/turnjsImg/05.jpg";
import img6 from "@/assets/turnjsImg/06.jpg";
// import turn from "./turn.min.js"
export default {
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    };
  },

  components: {},

  computed: {},

  mounted() {
    let $ = window.$;
    console.log($("#magazine"));
    $("#magazine").turn({
      display: "double",
      acceleration: true,
      gradients: !$.isTouch,
      elevation: 50,
      when: {
        turned: function (e, page) {
          console.log(e);
          console.log(page);
          /*console.log('Current view: ', $(this).turn('view'));*/
        },
      },
    });

    $(window).bind("keydown", function (e) {
      if (e.keyCode == 37) $("#magazine").turn("previous");
      else if (e.keyCode == 39) $("#magazine").turn("next");
    });
  },

  methods: {},
};
</script>
<style lang='less' scoped>
#magazine {
  // width: 1152px;
  // height: 752px;
  width: 550px;
  height: 380px;
}
#magazine .turn-page {
  background-color: #ccc;
  background-size: 100% 100%;
}
</style>