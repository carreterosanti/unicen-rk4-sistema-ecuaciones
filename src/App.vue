<template>
  <div id="app">
    <rk4> </rk4>
  </div>
</template>

<script>
import rk4 from "./components/rk4.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    rk4,
  },
};
</script>

<style lang="scss">
$backgroundColor: #2c3e50;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: $backgroundColor;
}

body {
  background-color: $backgroundColor;
}
</style>
