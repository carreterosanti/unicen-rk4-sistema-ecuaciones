import LineChartRK4 from "./rk4-chart";

export default {
  name: "RK4Result",
  components: {
    LineChartRK4,
  },

  props: ["nombre", "isResultadoListo", "resultadoRK4"],
};
