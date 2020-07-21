<template>
  <div>
    <b-navbar class="nav-bar justify-content-between" sticky variant="faded" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">Runge Kutta Sistema de Ecuaciones - Santiago Carretero</b-navbar-brand>
      <a
        href="https://drive.google.com/file/d/18mWweU_JdCYvZ8ThhPkeGB8lOd7BRnt7/view?usp=sharing"
        target="_blank"
      >
        <b-button class="doc-button">
          <b-icon-file-text class="mr-1"></b-icon-file-text>Informe TPE2
        </b-button>
      </a>
    </b-navbar>

    <main class="main-div">
      <RK4Result
        nombre="Vibraciones Libres"
        :isResultadoListo="isResultadosVibracionesLibres"
        :resultadoRK4="resultadosVibracionesLibres"
      ></RK4Result>

      <RK4Result
        nombre="Vibraciones Libres Amortiguadas"
        :isResultadoListo="isResultadosVibracionesLibresAmortiguadas"
        :resultadoRK4="resultadosVibracionesLibresAmortiguadas"
      ></RK4Result>

      <RK4Result
        nombre="Vibraciones Forzadas Amortiguadas"
        :isResultadoListo="isResultadosVibracionesForzadasAmortiguadas"
        :resultadoRK4="resultadosVibracionesForzadasAmortiguadas"
      ></RK4Result>
    </main>
  </div>
</template>

<script src="./rk4.js"></script>
<style src="./rk4.scss" lang="scss"></style>
