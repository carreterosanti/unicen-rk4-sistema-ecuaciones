<template>
  <div>
    <div>
      UNICEN Runge Kutta Sistemas - Sistema de Ecuaciones - Santiago Carretero
    </div>
    <div style="padding: 5%">
      <h2></h2>
      <b-table striped hover :items="resultadosVariacionesLibres"> </b-table>
    </div>
  </div>
</template>

<script src="./rk4.js"></script>
<style src="./rk4.scss" lang="scss"></style>
