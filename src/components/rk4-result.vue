<template>
  <div class="result-container">
    <h2 class="align-self-left">{{nombre}}</h2>
    <div class="d-flex">
      <b-col cols="4">
        <div style="height: 70vh; max-height: 70vh; overflow: scroll;">
          <b-table striped hover :items="resultadoRK4"></b-table>
        </div>
      </b-col>
      <b-col cols="8" align-self="center">
        <div style="background-color: white;">
          <LineChartRK4 v-if="isResultadoListo" :chartData="resultadoRK4" :chartTittle="nombre" />
        </div>
      </b-col>
    </div>
  </div>
</template>

<script src="./rk4-result.js"></script>
<style src="./rk4-result.scss" lang="scss"></style>