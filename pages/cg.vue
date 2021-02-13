<template>
  <div class="container-wrapper">
    <div>
      <nuxt-link class="btn btn-link" to="/">Retour</nuxt-link>
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

</style>
