<template>
  <div id="snakeContainer">
    <div class="snakeMoveArea">
      <div id="snake">
        <div id="snakeHead"></div>
        <!--身体-->
      </div>
       <div id="food"></div>
    </div>
    <div class="controller">
      <div>SCORE: <span id="score">0</span></div>
      <div>游戏状态: <span id="gameState">进行中</span></div>
      <div>LEVEL: <span id="level">0</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import Snake from "./classes/Snake"
import Food from "./classes/Food"
import Controller from "./classes/Controller"
import ScorePanel from "./classes/ScorePanel"

export default {
  name: "snakeGame",
  data(){
    return {
      interval:null,
      gameState:'ing',
      snake:null,
      food:null,
      controller:null,
      scorePanel:null,
    }
  },
  methods:{

     gameOver (value) {
      console.log(value);
      clearInterval(this.interval)
      this.interval = null
      alert('你是笨蛋吗？Game  Over')
    },
    gameShutDown  () {
      if (this.gameState === 'ing') {
        let gameStateEle=document.getElementById('gameState')
        gameStateEle.innerText='暂停中'
        this.gameState = 'suspend'
        clearInterval(this.interval)
      } else {
        let gameStateEle=document.getElementById('gameState')
        gameStateEle.innerText='进行中'
        this.gameState = 'ing'
        clearInterval(this.interval)
        this.beginGame()
      }
    },
     beginGame () {
      clearInterval(this.interval)
      let gameStateEle=document.getElementById('gameState')
      gameStateEle.innerText='进行中'
       this.interval = setInterval(() => {
         this.snake.run(this.controller.direction)
         this.checkEatFood()
      }, 500/(this.scorePanel.level+1))
    },
     checkEatFood (){
      let { HeadX,HeadY }=this.snake;
      let { foodX,foodY }=this.food;
      if((HeadX===foodX)&&(HeadY===foodY)){
        console.log('eatFood')
        this.food.createFood(this.snake);// 吃完创建食物
        // 记分板 加分
        this.scorePanel.addScore()
        this.snake.addBody()
      }

    },
  },
  mounted() {
// 运行开始
    this.interval = null
    this.gameState = 'ing' //ing suspend
    this.snake = new Snake(this.gameOver, this.gameShutDown);
    this.food = new Food(this.snake);
    this.controller = new Controller(this.gameShutDown,this.snake);
    this.scorePanel = new ScorePanel(this.beginGame);
    this.beginGame()
  }
}
</script>

<style   lang="less">
@primaryBg:#7e8a8a;
@borderColor: #24ce15;
@snakeColor: #e80944;
@borderWidth:1px;
#snakeContainer{
  display: flex;
  flex: auto;
  flex-direction: column;
  width:600px;
  height: 600px;
  border:1px solid @borderColor;
  margin: auto;
  background:@primaryBg;
}
.snakeMoveArea{
  width: 100%;
  height:500px;
  position: relative;
}
#snake{
  &>div{
    width: 10px;
    height: 10px;
    background-color: @snakeColor;
    border-radius: 3px;
    border: 1px solid @primaryBg;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
  }
}

.controller{
  display: flex;
  align-items: center;
  flex: auto;
  margin-top: auto;
  justify-content: space-around;
  //box-sizing:border-box;
  border-top:solid @borderWidth @borderColor;
}
#snakeHead{
  background: url("~@/assets/snake.svg") no-repeat center !important ;
  background-color: @primaryBg !important;
  border:none !important;
  z-index: 10 !important;
}
#food{
  background: url("~@/assets/food.svg")  no-repeat center !important ;
  width: 10px !important ;
  height: 10px !important ;
  position: absolute !important ;
}
</style>