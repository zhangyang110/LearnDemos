<template>
  <div class="box">
    <ul ref="container" :class="{animate:moveFlag}">
      <li v-for="(item,i) in list" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {cloneDeep} from "lodash"

export default {
  name: "interview",
  data() {
    return {
      list: [],
      originList: [1, 2, 3, 4, 5],
      timer: null,
      moveFlag: false,
    };
  },
  created() {
    let originList = cloneDeep(this.originList);
    this.list.push(...originList, ...originList)
  },
  watch: {
    // moveFlag(val) {
    //   if (val) {
    //   }else{
    //   }
    // }
  },
  mounted() {
    this.scrollFn();
  },
  methods: {
    scrollFn() {
      clearInterval(this.timer)
      let index = 0
      this.timer = setInterval(() => {
        index ++;
        let c = this.$refs.container;
        let curMT = c.style.marginTop;
        let num = curMT ? Number(curMT.replace('px', '').replace('-', '')) : 0;
        console.log(num)
        if (index>=this.originList.length + 1) {
          this.moveFlag = false;
          index = 0
          this.$refs.container.style.marginTop = `0px`
          setTimeout(()=>{
            this.moveFlag = true
            index ++
            this.$refs.container.style.marginTop = `-22px`
          },0)
        } else {
          this.moveFlag = true;
          c.style.marginTop = `-${num + 22}px`
        }
      }, 2000)
    },
  },
};
</script>
<style scoped>
.box {
  height: 110px;
  overflow: hidden;
}

ul {
  width: 200px;
  background: yellow;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: flex-end;
}

li {
  width: 100%;
  height: 20px;
  text-align: center;
  background-color: #9a6e3a;
  border: 1px solid red;
/* //flex: none; //box-sizing: border-box; //animation: height 0.1s linear forwards; */
}

.animate {
  /* animation: moveUp linear 2s infinite ; */
  transition: margin-top linear 0.2s;
}

/* 去掉页面滚动条 */
::-webkit-scrollbar {
  width: 0px !important;
  height: 0px !important;
  background-color: rgba(171, 171, 171, 0) !important;
  background-color: rgba(171, 171, 171, 0) !important;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(171, 171, 171, 0) !important;
  background-color: rgba(171, 171, 171, 0) !important;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(171, 171, 171, 0) !important;
  background-color: rgba(171, 171, 171, 0) !important;
}

* {
  scrollbar-color: rgba(171, 171, 171, 0) !important;
  scrollbar-track-color: rgba(171, 171, 171, 0) !important;
}

@keyframes moveUp {
  0% {
    transform: translate3d(0, 0px, 0);
  }
  100% {
    transform: translate3d(0, -22px, 0);
  }
}
</style>