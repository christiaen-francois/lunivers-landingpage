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
    <address>
      <strong>Contact</strong> : <a href="mailto:go@lunivers.lu" v-on:click="gaTrack">@lunivers</a> - <a href="mailto:olivier@lunivers.lu" v-on:click="gaTrack">@Olivier</a> - <a href="mailto:francois@lunivers.lu" v-on:click="gaTrack">@François</a><br>
      Duarrefstrooss 2, L-9990 Weiswampach - <nuxt-link to="/cg">Conditions générales</nuxt-link>
    </address>
  </div>
</template>

<script>

import * as THREE from "../node_modules/three/build/three.module.js";

export default {
  data: function() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      parameters: null,
      wrap: null,
      bg_scene: null,
      bg_camera: null,
      bg_texture: null,
      bg_mesh: null,
      bg_light: null,
      MeshLambertMaterial: null,
      mouseX : 0,
      mouseY : 0,
      mouse : {
        x: 0,
        y: 0,
        cameraX: 0,
        cameraY: 0
      },
      center : {
        x: 0,
        y: 0
      },
      windowHalfX : window.innerWidth / 2,
      windowHalfY : window.innerHeight / 2,
      materials : []
    };
  },
  components: {
    
  },
  methods:{
    gaTrack : function(event){
      ga('send', 'event', {
        eventCategory: 'Contact',
        eventAction: 'click',
        eventLabel: event.target.href
      });
    },
    init(){
      //console.log("mounted", "init");
      //$(".starfield").starfield();
      var plscene = document.getElementById("scene");
      var parallaxInstance = new Parallax(plscene);

      // Three.js
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
			this.camera.position.z = 1000;

      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2( 10842, 0.001 );

      this.wrap = new THREE.Group,
      this.scene.add(this.wrap);

      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      const textureLoader = new THREE.TextureLoader();

      const sprite1 = textureLoader.load( 'img/tex1.png' );
      const sprite2 = textureLoader.load( 'img/tex2.png' );
      const sprite3 = textureLoader.load( 'img/tex3.png' );

			for ( let i = 0; i < 30; i ++ ) {

        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;

        vertices.push( x, y, z );

			}

			geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

      this.parameters = [
        [[ 1.0, 0.2, 0.5 ], sprite1, .3 ],
        [[ 0.95, 0.1, 0.5 ], sprite2, .3 ],
        [[ 0.90, 0.05, 0.5 ], sprite3, .3 ],
        [[ 0.85, 0, 0.5 ], sprite1, .15 ],
        [[ 0.80, 0, 0.5 ], sprite2, .15 ]
      ];

			for ( let i = 0; i < this.parameters.length; i ++ ) {

        const color = this.parameters[ i ][ 0 ];
        const sprite = this.parameters[ i ][ 1 ];
        const size = this.parameters[ i ][ 2 ];

        this.materials[ i ] = new THREE.PointsMaterial( { 
          size: 100 * size, 
          map: sprite, 
          blending: THREE.AdditiveBlending, 
          depthTest: false, 
          transparent: true 
        } );

				const particles = new THREE.Points( geometry, this.materials[ i ] );

        particles.rotation.x = Math.random(-180, 180) * 6;
        particles.rotation.y = Math.random(-180, 180) * 6;
        particles.rotation.z = Math.random(-180, 180) * 6;

        this.scene.add( particles );

			}

                //
                
      document.body.style.touchAction = 'none';
      document.body.addEventListener( 'pointermove', this.onPointerMove, false );

      this.renderer = new THREE.WebGLRenderer({
        alpha: !1,
        antialias: !1,
        precision: "lowp"
      });
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.setClearColor(10842, 1);

      // Step 2

      this.bg_scene = new THREE.Scene;
      this.bg_camera = new THREE.Camera;
      //camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,.1,1000);
      //camera.position.z = 0;
      this.bg_texture = THREE.ImageUtils.loadTexture("img/bg_most.jpg", {});
      this.MeshLambertMaterial = new THREE.MeshLambertMaterial({
        map: this.bg_texture
      });
      this.bg_mesh = new THREE.Mesh(new THREE.PlaneGeometry(2,2,0),this.MeshLambertMaterial);
      this.bg_mesh.material.depthTest = !1;
      this.bg_mesh.material.depthWrite = !1;
      this.bg_scene.add(this.bg_camera);
      this.bg_scene.add(this.bg_mesh);
      this.bg_light = new THREE.SpotLight(16777215,2,100,Math.PI / 6,.4);
      this.bg_scene.add(this.bg_light);

      //console.log(vertices);

      document.body.appendChild( this.renderer.domElement );

      //

      window.addEventListener( 'resize', this.onWindowResize, false );
    },
    onWindowResize() {

      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;

      this.center.x = this.windowHalfX,
      this.center.y = this.windowHalfY,

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, window.innerHeight );

    },
    onPointerMove( event ) {

      if ( event.isPrimary === false ) return;

      //console.log(this.center.x);

      //console.log([this.mouse.y, this.mouse.x]);
      // mouseX = event.clientX - windowHalfX;
      // mouseY = event.clientY - windowHalfY;
      this.mouse.x = (event.clientX - this.center.x) / this.center.x;
      this.mouse.y = (event.clientY - this.center.y) / this.center.y;
      
      this.mouse.cameraX = 200 * this.mouse.x;
      this.mouse.cameraY = 100 * this.mouse.y;
      this.mouse.lightX = -this.mouse.x;
      this.mouse.lightY = this.mouse.y;

    },
    animate() {

      requestAnimationFrame( this.animate );
      this.render();

    },
    render() {

      const time = Date.now() * 0.00005;
      
      this.renderer.autoClear = !1;
      this.renderer.clear();
      this.bg_light.position.copy(new THREE.Vector3(this.mouse.lightX,this.mouse.lightY,3));
      this.renderer.render(this.bg_scene, this.bg_camera);

      this.camera.position.x += .05 * (this.mouse.cameraX - this.camera.position.x);
      this.camera.position.y += .05 * (-this.mouse.cameraY - this.camera.position.y);

      this.camera.lookAt( this.wrap.position );

      for ( let i = 0; i < this.scene.children.length; i ++ ) {

        const object = this.scene.children[ i ];

        if ( object instanceof THREE.Points ) {

          object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

        }

      }

      this.renderer.render( this.scene, this.camera );

    }
  },
  mounted(){

    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    
    this.center.x = this.windowHalfX;
    this.center.y = this.windowHalfY;

    //console.log("muntd", [this.windowHalfX, this.windowHalfY, this.center.x, this.center.y]);

    this.init();
    this.animate();
  },
  created() {
      //console.log("created", 'created called.');
      
  }
}


</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

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
  display: flex; 
  flex-direction: column;
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}
html {
  height: 100%;
  height: -webkit-fill-available;
}
@media screen and (max-height: 600px) {
  body{
    overflow-y: auto;
  }
}

canvas {
	display: block;
  position: fixed;
  top: 0;
  left: 0;
}

#scene {
  /* padding: 3vw; */
  min-height: 100%;
  position: relative;
  z-index: 10;
  pointer-events: auto!important;
}

@media (max-width: 575.98px) {
  #scene {
    /*padding: 6vw;*/
  }
}

#__nuxt,
#__layout,
#__layout > div,
#scene,
.container-wrapper
{
  min-height: 100vh;
  /* min-height: -webkit-fill-available; */
}
#__layout > div{ position: relative;}
#bg_luni{
  opacity: .01;
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
  /* min-height: 100vh;
  min-height: -webkit-fill-available; */
  /*border-bottom-right-radius: 30px;*/
  /*box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);*/
  padding: 3vw;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
@media (max-width: 575.98px) {
  .container-wrapper{
    min-height: calc(100vh - 3vw);
    padding: 25px;
  }
}
.container-wrapper > div{
  text-align: center;
  width: 100%;
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

address{
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    font-size: .8rem;
    opacity: .5;
    width: 100%;
    padding: 10px;
    text-align: center;
    z-index: 10;
}

</style>
