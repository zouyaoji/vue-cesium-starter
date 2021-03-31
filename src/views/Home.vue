<template>
  <div class="home viewer">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <vc-viewer>
      <vc-navigation></vc-navigation>
    </vc-viewer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style>
.viewer {
  height: 100vh;
}
</style>
