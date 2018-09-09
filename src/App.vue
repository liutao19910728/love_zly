<template>
  <div id="app">
   <audio autoplay="autoplay"
   
    src="http://isure.stream.qqmusic.qq.com/C4000023ZrRN2ltlkl.m4a?vkey=556E2BC56122413FFC19CAAD1DA59F5FC1B96C4354664089B0F57F8F1C71E61A6E16E52604ACF89D691F96AA07AA140389836835D8D7AC38&guid=1767028562&uin=0&fromtag=66">
    
</audio>
 <!-- src="https://m10.music.126.net/20180909170223/b10d04f472653b92834e851073503e8f/ymusic/becf/8271/16dc/aebc4c77c0be88387283701622cf6a89.mp3"> -->

    <!-- <router-view/> -->

   <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>


  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
