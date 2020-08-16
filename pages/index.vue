<template>
  <div class="container-wrapper">
    <div>
      <h1 class="mb-4" id="logo">
        <logo />
      </h1>
      <div class="contacts mb-4">
        <h2>Graphisme print / web &amp; création de site internet de haute qualité</h2>
      </div>
      <div class="links">
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
          title: "Merci Lunivers"
      }
  }
}


</script>

<style>
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
