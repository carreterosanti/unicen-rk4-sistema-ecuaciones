<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <rk4> </rk4>
  </div>
</template>

<script>
import rk4 from "./components/rk4.vue";

export default {
  name: "App",
  components: {
    rk4,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background-color: #2c3e50;
}

body {
  background-color: #2c3e50;
}
</style>
