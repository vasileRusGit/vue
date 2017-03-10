<!-- /////////////////////////////////////////////////////////////////////////////////////////////// TEMPLATE -->
<template>
  <div id="app">
    <messageComponent>Hello there</messageComponent>
    <messageComponent>Hello there</messageComponent>
  </div>
</template>


<!-- /////////////////////////////////////////////////////////////////////////////////////////////// JAVASCRIPT -->
<script>
import messageComponent from './components/Message.vue';

export default {
  name: 'app',

  components: { messageComponent },
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<!-- /////////////////////////////////////////////////////////////////////////////////////////////// CSS -->
<style>

</style>
