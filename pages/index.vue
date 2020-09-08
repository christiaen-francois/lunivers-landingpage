<template>
  <div class="container-wrapper">
    <div>
      <div class="mb-4" id="logo">
        <logo />
      </div>
      <div class="contacts mb-4">
        <h1>Créations graphiques &amp; développements de sites <br><strong>de haute qualité</strong></h1>
      </div>
      <div class="links mb-4">
        <p><a href="mailto:go@lunivers.lu" class="btn btn-primary">Prendre contact</a></p>
      </div>
      <address>
        Duarrefstrooss, 2 L - 9990 Weiswampach - <nuxt-link to="/cg">Conditions générales</nuxt-link>
      </address>
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
          title: "Agence de graphisme et création de sites web de caractère - Weiswampach"
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
}
</style>
