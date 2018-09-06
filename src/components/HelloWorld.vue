<template>
  <div>
  <mt-header fixed title="张丽芸生日快乐"></mt-header>
   <div class="swipe-box">
      <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/images/love_zly1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly4.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly5.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/images/love_zly6.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
   </div>


 
  </div>






</template>

<script>
export default {};
</script>



<style lang="scss" scoped>
.swipe-box {
  height: 450px;
  margin-top: 40px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
