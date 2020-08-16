<template>
  <div>
    <div id="scene">
      <div data-depth="0.1">
        <nuxt />
      </div>
    </div>
    <div class="starfield"></div>
    <div class="background_wrapper">
      <div class="background-pink"></div>
      <div class="background-blue"></div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  methods:{
    init(){
      console.log("mounted", "init");
      $(".starfield").starfield();
      var scene = document.getElementById("scene");
      var parallaxInstance = new Parallax(scene);
    }
  },
  mounted(){
    this.init()
  },
  created() {
      console.log("created", 'created called.');
      
  }
}


</script>

<style>

body{
  background: #002a3b;
  font-family: "Maven Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
#scene {
  padding: 3vw;
  min-height: 100%;
  position: relative;
  z-index: 10;
  pointer-events: auto!important;
}

@media (max-width: 575.98px) {
  #scene {
    padding: 6vw;
  }
}

a{
  color:#35495e;
}
a:hover{
  color: #35495e;
}
h2{

}
@media (max-width: 575.98px) {
  h2{
    font-size: 1.45rem;
  }
}

.container-wrapper{
  background: #fff;
  min-height: calc(100vh - 6vw);
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  padding: 3vw;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
@media (max-width: 575.98px) {
  .container-wrapper{
    min-height: calc(100vh - 12vw);
    padding: 25px;
  }
}
.container-wrapper > div{
  text-align: center;
}
div.starfield {
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 110%;
  height: 110%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  /*mix-blend-mode:soft-light;*/
}

div.starfield canvas {
  height:   100%;
  left:     0;
  position: absolute;
  top:      0;
  width:    100%;
}
.background_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
}
.background_wrapper div{
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
	
  transform-origin: 50% 50%;

}
.background-pink{
  z-index: 1;
  background:url("/img/background1.svg") center center no-repeat;
  /*-webkit-animation: kenburns-top 20s ease-in-out infinite both;
	        animation: kenburns-top 20s ease-in-out infinite both;*/
}
.background-blue{
  z-index: 2;
  background:url("/img/background2.svg") center center no-repeat;
  /*-webkit-animation: kenburns-top 15s ease-in-out infinite both;
	        animation: kenburns-top 15s ease-in-out infinite both;*/
}
.btn{
  border-radius: 30px;
}
.btn-primary {
  border: 1px solid #ee2e7c;
  color: #fff;
  background: #ee2e7c;
  padding: 10px 30px;
}
.btn-primary:hover,
.btn-primary:focus {
  border: 1px solid #50c7e8;
  color: #fff;
  background: #50c7e8;
}

.btn-link {
  color:#fff
}
.btn-link:hover{
  color:#50c7e8;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/**
 * ----------------------------------------
 * animation kenburns-top
 * ----------------------------------------
 */
@-webkit-keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  50% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
  100% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
}
@keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  50% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
  100% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
}


</style>
