<template>
  <div class="container">
    <div>
      <h1 class="mb-5">
        <nuxt-link class="btn btn-link" to="/">
            <logo />
        </nuxt-link>
      </h1>
      <div class="links">
        <a href="/doc/conditions-generales_lunivers.pdf" v-on:click="gaTrack" class="btn btn-primary" target="_blank">Télécharger les conditions générales</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },
    head(){
        return {
            title: "Conditions générales | Lunivers"
        }
    },
    methods : {
      gaTrack : function(event){
        ga('send', 'event', {
          eventCategory: 'Download',
          eventAction: 'click',
          eventLabel: event.target.href
        });
      }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
