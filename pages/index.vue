<template>
  <div class="container">
    <div>
      <h1 class="mb-5" id="logo">
        <logo />
      </h1>
      <div class="links">
        <p><a href="mailto:go@lunivers.lu" class="btn btn-primary">Contact</a></p>
        <nuxt-link class="btn btn-link btn-sm" to="/cg">Conditions générales</nuxt-link>
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
          title: "Merci Lunivers"
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
