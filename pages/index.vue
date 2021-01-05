<template>
  <div class="container-wrapper">
    <SocialHead
      :title="metaTitle"
      :description="metaDescription"
    />
    <div>
      <div class="mb-4" id="logo">
        <logo />
      </div>
      <div class="contacts mb-4">
        <h1>Conceptions graphiques &amp; développement de sites <br><strong>de caractère</strong></h1>
      </div>
      <!-- <p><nuxt-link to="/references">Nos références</nuxt-link></p> -->
      <div class="links mb-4">
        <p><a href="mailto:go@lunivers.lu" v-on:click="gaTrack" class="btn btn-primary">Prendre contact</a></p>
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
  data(){
    return {
      metaTitle: 'Agence de graphisme et création de sites web de caractère - Weiswampach',
      metaDescription : "Lunivers est une agence web et graphique située à Weiswampach spécialisée dans le développement d'identités sur mesure. Avec une équipe qui a plus de 10 ans d'expérience dans l'écoute de ses clients.",
    }
  },
  head(){
      return {
          title: this.metaTitle,
      }
  },
  methods : {
    gaTrack : function(event){
      ga('send', 'event', {
        eventCategory: 'Contact',
        eventAction: 'click',
        eventLabel: event.target.href
      });
    }
  }
}

</script>

<style>

.page-enter-active,
.page-leave-active,
.page-enter-active>div,
.page-leave-active>div {
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}


.page-enter,
.page-leave-to {
  transform: scale(1.4);
  transition-delay: 200ms;
}
.page-enter>div,
.page-leave-to>div {
  opacity: 0;
}


</style>
