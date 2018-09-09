<template>
  <div id="app">
     <div class="music_btn"  >
                 <mt-button type="danger" @click.native="play()" >start</mt-button>
         </div>
    
   <audio id="music" 
    src="http://isure.stream.qqmusic.qq.com/C4000023ZrRN2ltlkl.m4a?vkey=556E2BC56122413FFC19CAAD1DA59F5FC1B96C4354664089B0F57F8F1C71E61A6E16E52604ACF89D691F96AA07AA140389836835D8D7AC38&guid=1767028562&uin=0&fromtag=66">
    
</audio>
 
  
   <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>


  </div>
</template>

<script>
export default {
  mounted() {
    this.play();
    this.autoPlayAudio();
  },
  name: "App",

  methods: {
    play() {
      // document.getElementById("music").play();
      document.addEventListener("DOMContentLoaded", function() {
        function audioAutoPlay() {
          document.getElementById("music").play();
        }
        audioAutoPlay();
      });
    },
    autoPlayAudio() {
      wx.config({
        debug: false,
        appId: "",
        timestamp: 1,
        nonceStr: "",
        signature: "",
        jsApiList: []
      });
      wx.ready(function() {
        document.getElementById("music").play();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.music_btn {
  position: fixed;
  width: 20px;
  height: 20px;
  background: red;
      z-index: 29999;
    right: 10%;
    top: 45px;
}
</style>

