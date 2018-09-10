<template>
  <div id="app">
     <!-- <div class="music_btn"  >
                 <mt-button type="danger" @click.native="play()" >start</mt-button>
         </div> -->
    
   <audio id="music"  src="/static/audios/hx_zcx.mp3" 
    >
    
</audio>
 
  
   <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>


  </div>
</template>

<script>
var music = document.getElementById("music");
export default {
  mounted() {
    this.play();
    this.autoPlayAudio();
  },
  name: "App",
  data() {
    return {
      elemt: document.getElementById("music")
    };
  },
  methods: {
    play() {
      // document.getElementById("music").play();
      document
        .getElementById("music")
        .setAttribute("src", "/static/audios/hx_zcx.mp3");

      document.removeEventListener("touchstart", this.remove_music, false);
      document.getElementById("music").play();
      document.addEventListener(
        "WeixinJSBridgeReady",
        function() {
          this.remove_music();
        },
        false
      );
      document.addEventListener(
        "YixinJSBridgeReady",
        function() {
          this.remove_music();
        },
        false
      );
      document.addEventListener("touchstart", this.remove_music, false);
    },
    autoPlayAudio() {
      console.log(22);
      console.log(wx);
      console.log(this.elemt);
      console.log(music);

      wx.config({
        debug: false,
        appId: "",
        timestamp: 1,
        nonceStr: "",
        signature: "",
        jsApiList: []
      });
      wx.ready(function() {
        document
          .getElementById("music")
          .setAttribute("src", "/static/audios/hx_zcx.mp3");
        document.getElementById("music").play();
      });
    },
    remove_music() {
      console.log(2131);

      document.getElementById("music").play();
      document.removeEventListener("touchstart", this.remove_music, false);
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

