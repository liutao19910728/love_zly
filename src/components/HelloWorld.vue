<template>
  <div>
  <mt-header fixed title="芸宝生日快乐"></mt-header>
   <div class="swipe-box">
      <mt-swipe :auto="2000">
      <mt-swipe-item><img src="../assets/images/love_zly1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly4.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly5.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly6.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly7.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
   </div>
    <div class="flex-center  fix-btn" >
       <mt-button type="danger" @click.native="get_love()" >点击去有惊喜哦</mt-button>
    </div>
    <div  class="heart-box">
  <div class="heart">
    <p class="message">
        我爱你
        <br>张丽芸
    </p>
    </div>
    </div>
   
      

 
  </div>






</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    get_love() {
      this.$router.push({ path: "/long" });
    }
  }
};
</script>



<style lang="scss" scoped>
.fix-btn {
  position: fixed;
  right: -5px;
  bottom: 8%;
  z-index: 9999;
  transform: rotate(-50deg);
  -ms-transform: rotate(-50deg); /* IE 9 */
  -moz-transform: rotate(-50deg); /* Firefox */
  -webkit-transform: rotate(-50deg); /* Safari 和 Chrome */
  -o-transform: rotate(-50deg);
}
.heart-box {
  background: #ff666687;
  margin-top: -10px;
}
.swipe-box {
  height: 450px;
  margin-top: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mint-header {
  background: #ef4f4f;
  color: #fff;
}
.heart {
  position: relative;
  width: 300px;
  height: 280px;
  margin: 10px auto;
  left: 10%;
}
.heart::before,
.heart::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  background-color: #c03;
  width: 150px;
  height: 240px;
  border-radius: 75px 75px 0 0;
}
.heart::before {
  left: 0px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #cf9797;
  box-shadow: -10px 1px 15px 0 rgba(0, 0, 0, 0.2), inset 20px -195px 65px 0 #c03,
    inset -2px 2px 0 rgba(255, 255, 255, 0.75),
    inset -5px 20px 0px rgba(255, 255, 255, 0.35),
    inset -5px 20px 10px rgba(255, 255, 255, 0.25);
}
.heart::after {
  left: 64px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  box-shadow: 15px 3px 25px rgba(0, 0, 0, 0.35),
    inset -25px 10px 35px rgba(0, 0, 0, 0.35);
}
.message {
  font-family: "Ovo";
  font-size: 36px;
  font-weight: bold;
  color: #f66;
  text-shadow: -1px -1px 1px #ae6363, 1px 1px 1px #450000;
  padding: 53px 0 0 35px;
  -webkit-transform: rotate(-15deg);
  -moz-transform: rotate(-15deg);
  -o-transform: rotate(-15deg);
  transform: rotate(-15deg);
  text-shadow: 0 0 20px #26a2ff;
}
.message:fisrt-child {
  text-indent: 1em;
}
</style>
