<template>
  <div>
    <b-navbar variant="faded" type="dark">
      <b-navbar-brand tag="h1" class="mb-0"
        >Runge Kutta Sistema de Ecuaciones - Santiago Carretero</b-navbar-brand
      >
    </b-navbar>

    <div style="padding: 5%">
      <h2>Runge Kutta Vibraciones Libres</h2>
      <b-table striped hover dark :items="resultadosVibracionesLibres">
      </b-table>
      <div style="background-color: white;">
        <LineChartRK4
          v-if="isResultadosVibracionesLibres"
          :chartData="resultadosVibracionesLibres"
          chartTittle="Runge Kutta Vibraciones Libres"
        />
      </div>
    </div>
    <div style="padding: 5%">
      <h2>Runge Kutta Vibraciones Libres Amortiguadas</h2>
      <b-table
        striped
        hover
        dark
        :items="resultadosVibracionesLibresAmortiguadas"
      >
      </b-table>
      <div style="background-color: white;">
        <LineChartRK4
          v-if="isResultadosVibracionesLibresAmortiguadas"
          :chartData="resultadosVibracionesLibresAmortiguadas"
          chartTittle="Runge Kutta Vibraciones Libres"
        />
      </div>
    </div>
  </div>
</template>

<script src="./rk4.js"></script>
<style src="./rk4.scss" lang="scss"></style>
