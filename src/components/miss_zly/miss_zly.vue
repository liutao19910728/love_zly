<template>

<div>
    <mt-header fixed title="芸宝生日快乐">
             <router-link to="/love" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
         </mt-header>
         <iframe class="iframe1" src=" https://liutao19910728.github.io/iframe1/" frameborder="0"></iframe>

    <div class="flex-center  fix-btn"  style="position: fixed" >
       <mt-button type="danger" @click.native="get_long()" >next</mt-button>
    </div>

</div>

    
</template>


<script>
export default {
  data() {},
  methods: {
    get_long() {
      this.$router.push({ path: "/long" });
    }
  }
};
</script>


<style lang="scss" scoped>
.flex-center {
  bottom: 5%;
  position: fixed;
  /* top: 0; */
  right: 2%;
  .mint-button--danger {
    background: #000;
  }
}
.iframe1 {
  width: 100%;
  height: 400px;
}
.mint-header {
  background: #000;
}
</style>
