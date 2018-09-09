<template>

<div>
   <mt-header fixed title="芸宝生日快乐" >
             <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
         </mt-header>
<div style="    width: 100%;
    overflow: hidden;">
 <div class="chest">
                <div class="heart left side top"></div>
                <div class="heart center"></div>
                <div class="heart right side"></div>
        </div>
</div>
        
        <div class="title">
            <p id="title-word" >我今年的生日愿望：能够明年的今天我们准备婚事~~你的愿望我相信也能实现，未来的每一天我们都要健健康康的，相爱每一天。</p>
             
        </div>
        <div class="long-btn"  >
                 <mt-button type="danger" @click.native="get_love()" >next</mt-button>
         </div>
</div>
    
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    this.change_word();
  },
  data() {
    return {};
  },
  methods: {
    change_word() {
      setTimeout(() => {
        $("#title-word").addClass("title-word");
      }, 1300);
    },
    get_love() {
      this.$router.push({ path: "/love" });
    }
  }
};
</script>


<style lang="scss" scoped>
.long-btn {
  position: fixed;
  color: #fff;
  top: 84%;
  right: 12%;

  .mint-button--danger {
    background: #0000;
  }
}
.title {
  height: 300px;
  font-size: 30px;
  text-align: center;
  background: #000;
  p {
    font-family: "Audiowide";
    text-align: center;
    color: #00a67c;
    -webkit-transition: all 1.5s ease;
    transition: all 1.5s ease;
  }
  .title-word {
    color: #fff;
    -webkit-animation: Glow 1.5s ease infinite alternate;
    animation: Glow 1.5s ease infinite alternate;
  }
}
.mint-header {
  background: black;
  color: #fff;
}

.chest {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  left: -41px;
  background: #000;
}

.heart {
  position: absolute;
  z-index: 2;
  background: linear-gradient(-90deg, #f50a45 0%, #d5093c 40%);
  animation: beat 0.7s ease 0s infinite normal;
}

.heart.center {
  background: linear-gradient(-45deg, #b80734 0%, #d5093c 40%);
}

.heart.top {
  z-index: 3;
}

.side {
  top: 100px;
  width: 220px;
  height: 220px;
  border-radius: 110px;
}

.center {
  width: 210px;
  height: 210px;
  bottom: 100px;
  left: 145px;
  transform: rotateZ(225deg);
  /*transform: rotate(45deg);*/
}

.left {
  left: 62px;
}

.right {
  right: 62px;
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(225deg);
    box-shadow: 0 0 40px #d5093c;
  }

  50% {
    transform: scale(1.1) rotate(225deg);
    box-shadow: 0 0 70px #d5093c;
  }
  100% {
    transform: scale(1) rotate(225deg);
    box-shadow: 0 0 40px #d5093c;
  }
}
@keyframes Glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00a67c,
      0 0 70px #00a67c, 0 0 80px #00a67c, 0 0 100px #00a67c, 0 0 150px #00a67c;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00a67c,
      0 0 35px #00a67c, 0 0 40px #00a67c, 0 0 50px #00a67c, 0 0 75px #00a67c;
  }
}
</style>
