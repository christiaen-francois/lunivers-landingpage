<template>
  <div class="container-wrapper">
    <div>
      <h1 class="mb-5" id="logo">
        <logo />
      </h1>
      <div class="contacts">
        <p>Duarrefstrooss, 2 L - 9990 Weiswampach</p>
      </div>
      <div class="links">
        <p><a href="mailto:go@lunivers.lu" class="btn btn-primary">Contact</a></p>
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

</style>
