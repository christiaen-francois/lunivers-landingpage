<template>
  <div>
    <div id="scene">
      <div data-depth="0.1">
        <nuxt />
      </div>
      <div id="bg_luni" data-depth="0.4">
        <svg version="1.1" id="bg_luni_logo"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 63.8" style="enable-background:new 0 0 300 63.8;" xml:space="preserve">
        <style type="text/css">
          .st1{fill:#fff;}
        </style>
        <path class="st1" d="M54.5,59.2c3.5-3.1,5.2-7.6,5.2-13.6V17.1h-9.1v27.1c0,3.8-0.9,6.7-2.6,8.5c-1.7,1.8-4.4,2.8-8,2.8
          c-3.6,0-6.3-0.9-8-2.8c-1.7-1.8-2.6-4.7-2.6-8.5V17.1H20v28.4c0,4,0.8,7.4,2.4,10.1c1.6,2.7,3.9,4.7,6.9,6.1c3,1.4,6.5,2,10.7,2
          C46.3,63.8,51.1,62.3,54.5,59.2"/>
        <path class="st1" d="M75.3,20.4c-3.5,3.1-5.2,7.6-5.2,13.6v28.4h9.1V35.4c0-3.8,0.9-6.7,2.6-8.5c1.7-1.8,4.4-2.8,8-2.8
          c3.6,0,6.3,0.9,8,2.8c1.7,1.8,2.6,4.7,2.6,8.5v27.1h9.5V34c0-4-0.8-7.4-2.4-10.1c-1.6-2.7-3.9-4.7-6.9-6.1c-3-1.4-6.5-2-10.7-2
          C83.6,15.8,78.8,17.3,75.3,20.4"/>
        <rect y="0" class="st1" width="9.4" height="62.4"/>
        <path class="st1" d="M123.3,11.5c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8c-3.2,0-5.8,2.6-5.8,5.8
          C117.5,9,120.1,11.5,123.3,11.5"/>
        <polygon class="st1" points="128,62.4 127.9,17.4 118.4,17.4 118.4,62.4 "/>
        <path class="st1" d="M290.6,62.4c2.8-1,5-2.5,6.7-4.6c1.7-2.1,2.6-4.8,2.7-8.2c0-2.5-0.4-4.6-1.3-6.1c-0.9-1.6-2-2.8-3.4-3.8
          c-1.4-1-2.9-1.7-4.5-2.2c-1.6-0.5-3.2-1-4.7-1.5c-1.6-0.5-3.1-1-4.6-1.4c-1.4-0.5-2.6-1.1-3.4-2c-0.9-0.8-1.3-2-1.3-3.4
          c0-1.7,0.8-3,2.3-3.8c1.6-0.9,3.5-1.3,5.9-1.3c2.5,0,4.8,0.4,6.7,1.3c1.9,0.8,4,1.8,6.1,3l-0.1-8.1c-1.9-1-3.9-1.9-5.9-2.6
          c-2-0.7-4.6-1.1-7.8-1.2c-1.9,0-3.9,0.3-5.9,0.8c-2,0.5-3.8,1.3-5.5,2.4c-1.7,1.1-3,2.6-4,4.3c-1,1.8-1.5,3.9-1.5,6.5
          c0,2.3,0.4,4.2,1.2,5.8c0.8,1.6,1.9,2.8,3.2,3.8c1.4,1,2.8,1.8,4.5,2.3c1.6,0.6,3.2,1.1,4.9,1.5c1.6,0.5,3.1,1.1,4.5,1.6
          c1.4,0.5,2.6,1.2,3.6,2c0.9,0.8,1.4,1.9,1.4,3.2c0,1.6-0.7,3-2.2,4.1c-1.5,1.1-3.5,1.6-6.1,1.6c-2,0-3.9-0.2-5.5-0.6
          c-1.7-0.4-3.2-1-4.7-1.8c-1.5-0.8-3-1.6-4.6-2.6v8.9c2.2,1,4.4,1.9,6.6,2.6c2.3,0.7,5,1,8.3,1C285,63.8,287.8,63.3,290.6,62.4"/>
        <path class="st1" d="M262.6,17.1c-2.1-0.5-4.5-0.8-7-0.8c-6.2,0-11,1.5-14.5,4.6c-3.5,3.1-5.2,7.6-5.2,13.6v27.9h9.1V35.9
          c0-3.8,0.9-6.7,2.6-8.5c1.7-1.8,4.4-2.8,8-2.8c3,0,5.3,0.6,7,1.9V17.1z"/>
        <path class="st1" d="M217.1,62.9c2.6-0.6,5-1.3,7.1-2.2V52c-1.1,0.5-2.4,1.1-3.9,1.7c-1.5,0.6-3.1,1-4.9,1.4
          c-1.8,0.4-3.7,0.5-5.7,0.5c-4.6,0-8-1.3-10.4-3.9c-2.3-2.6-3.5-6.5-3.5-11.5c0-4.1,0.4-7.4,1.3-9.8c0.9-2.4,2.2-4.1,3.8-5.1
          c1.7-1,3.7-1.5,6.1-1.5c3.7,0,6.5,1.1,8.2,3.2c1.7,2.1,2.7,5.5,2.9,10.2l2.3-2.3h-28.7l0.3,7h35.6c0.1-5.2-0.6-9.7-1.9-13.6
          c-1.4-3.9-3.5-6.9-6.5-9.1c-3-2.2-6.9-3.2-11.8-3.2c-6.6,0-11.8,2-15.5,6.1c-3.7,4.1-5.5,10-5.5,17.9c0,5.1,0.9,9.4,2.7,13
          c1.8,3.5,4.3,6.2,7.6,8c3.3,1.8,7.1,2.7,11.6,2.7C211.5,63.8,214.4,63.5,217.1,62.9"/>
        <polygon class="st1" points="164.7,62.4 183.8,17.1 174,17.1 159.5,55 161.8,54.8 146.3,17.1 136.2,17.1 155.2,62.4 "/>
        </svg>
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
      //console.log("mounted", "init");
      //$(".starfield").starfield();
      var scene = document.getElementById("scene");
      var parallaxInstance = new Parallax(scene);
    }
  },
  mounted(){
    this.init()
  },
  created() {
      //console.log("created", 'created called.');
      
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
  overflow: hidden;
  color: rgba(255,255,255,1);
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

#bg_luni{
  opacity: .005;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 100%;
  height: 100%;
  display: flex!important;
  align-items: center;
  pointer-events: none;
  z-index: 30;
  /*transform: translateY(-50%) translateX(-50%);*/
}

#bg_luni_logo{
    width: 100%;
    height: auto;
  }
a{
  color:#fff;
}
a:hover{
  color: #fff;
}
h1{
font-size: 1.45rem;
}
@media (max-width: 575.98px) {
  
  #LuniversLogo{
    max-height: 150px;
  }
  h1{
    font-size: 1.45rem;
  }
}

@media (max-width: 1199px) {
  #bg_luni{
    opacity: .01;
    
  }
  #bg_luni_logo{
    margin-bottom: 140px;
  }
}

.container-wrapper{
  /*background: #fff;*/
  min-height: calc(100vh - 6vw);
  /*border-bottom-right-radius: 30px;*/
  /*box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);*/
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
  opacity: .3;
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
	opacity: 0.7;
  transform-origin: 50% 50%;
  z-index: 20;
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
