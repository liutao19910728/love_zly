<template>
    <div>
         <mt-header fixed title="芸宝生日快乐">
             <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
         </mt-header>

          <div class="flex-center  fix-btn"  >
                 <mt-button type="danger" @click.native="get_miss()" >next</mt-button>
         </div>
         
    
         <div class="glow-box">
           <h1>
   
  真的有很多话想说...<br/>异地恋虽难熬，熬过去就是一生！
</h1>
<div id="glow" class="glow"></div>
<div id="candle">
    <div class="stripe"></div>
    <div class="stripe"></div>
    <div class="stripe"></div>
    <div class="stripe"></div>
    <div class="stripe"></div>
    <div id="top">
        <div class="smoke"></div>
        <div class="smoke"></div>
        <div class="smoke"></div>
        <div id="knot"></div>
        <div id="flame" class="burn"></div>
    </div>
</div>
         </div>
    </div>
</template>


<script>
import $ from "jquery";
export default {
  mounted() {
    console.log($("#flame"));
    $("#flame").on(this.show());
  },
  data() {
    return {
      flame: $("#flame"),
      txt: $("h1")
    };
  },
  methods: {
    show() {
      $("#flame")
        .removeClass("burn")
        .addClass("puff");
      $(".smoke").each(function() {
        $(this).addClass("puff-bubble");
      });
      $("#glow").remove();
      $("h1")
        .hide()
        .delay(750)
        .fadeIn(300);
      $("#candle").animate(
        {
          opacity: ".5"
        },
        200
      );
    },
    get_miss() {
      this.$router.push({ path: "/miss" });
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-button--danger {
  color: #fff;
  background-color: #f44336;
  box-shadow: 1px 2px 5px #888888;
}
.fix-btn {
  position: fixed;
  left:80%;
  bottom: 26%;
  z-index: 9999;
}
.mint-header {
  background-color: #f44336;
}
.glow-box {
  background-color: #f44336;
  height: 800px;
}
h1 {
  position: fixed;
  margin: 0 auto;
  bottom: 5%;
  left: 0;
  right: 0;
  width: 12em;
  text-align: center;
  font-size: 2em;
  font-weight: 100;
  font-family: "Sacramento";
  letter-spacing: 0.1em;
  color: white;
  text-shadow: 0 0 20px #f44336;
  opacity: 0.8;
}
#glow {
  position: absolute;
  left: calc(50% - 0.1em);
  bottom: calc(35% + 9em);
  width: 0.2em;
  height: 0.2em;
  border-radius: 100%;
  opacity: 0.15;
}
#candle {
  position: absolute;
  left: calc(50% - 0.75em);
  bottom: 35%;
  width: 1.5em;
  height: 10em;
  overflow: hidden;
}
#candle::before {
  position: absolute;
  bottom: 0;
  left: 3%;
  content: "";
  width: 94%;
  height: 80%;
  background: linear-gradient(whitesmoke 0, #1e1934 125%);
  border-radius: 0.25em;
  box-sizing: border-box;
  border: 1px solid #333;
}
#top {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2em;
  background-color: transparent;
}
#top #knot {
  position: absolute;
  bottom: 0;
  left: calc(50% - 0.05em);
  height: 0.5em;
  width: 0.1em;
  background-color: #0f3146;
}
#top .smoke {
  position: absolute;
  opacity: 0;
  border-radius: 100%;
}
#top .smoke:nth-child(1) {
  bottom: 0.1em;
  left: calc(50% - 0.5em);
  height: 0.5em;
  width: 0.5em;
  background-color: silver;
}
#top .smoke:nth-child(2) {
  bottom: 0.6em;
  left: 50%;
  height: 0.6em;
  width: 0.6em;
  background-color: lightgray;
  animation-delay: 0.2s;
}
#top .smoke:nth-child(3) {
  bottom: 1.1em;
  left: 20%;
  height: 0.3em;
  width: 0.3em;
  background-color: whitesmoke;
  animation-delay: 0.3s;
}
#top #flame {
  position: absolute;
  bottom: 0.15em;
  width: 1.5em;
  height: 1.6em;
  background-color: #ffee86;
  border-radius: 100%;
  box-shadow: inset 0 0 0 0.1em #ffee86;
  transform: rotateY(30deg);
  cursor: pointer;
}
#top #flame::after {
  position: absolute;
  content: "";
  width: 0.7em;
  height: 0.9em;
  bottom: 10%;
  left: calc(50% - 0.35em);
  background-color: #ff3200;
  border-radius: 100%;
  animation: burnInner 1.5s ease-in-out infinite;
}
#top #flame:hover {
  transition: all 0.1s ease-in-out;
  background-color: yellow;
}
#top #flame:hover::after {
  background-color: red;
}
</style>
