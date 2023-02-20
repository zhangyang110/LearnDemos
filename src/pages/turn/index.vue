<template>
  <div id="magazine" ref="magazine">
    <div
      v-for="(img, i) in imgList"
      :key="i"
      :style="{ background: `url(${img})` }"
      class="imgItem"
    ></div>
  </div>
</template>

<script>
let imgList = new Array(6).fill(1).map((t, i) => {
  return require(`@/assets/turnjsImg/0${i + 1}.jpg`);
});
export default {
  name:'turn',
  data() {
    return {
      imgList,
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
      elevation: 10,
      // eslint-disable-next-line no-mixed-spaces-and-tabs
		  autoCenter: true,
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
  width: 550px;
  height: 380px;
}
.imgItem {
  background-color: #ccc;
  background-size: 100% 100% !important;
}
</style>