import LineChartRK4 from "./rk4-chart";
import RK4Result from "./rk4-result.vue";
import { BFileText } from "bootstrap-vue";

export default {
  components: {
    LineChartRK4,
    RK4Result,
    BFileText,
  },

  data() {
    return {
      k: 3,
      m: 1,
      constanteAmortiguacion: 2,
      f_0: 3,
      w: 1,
      resultadosVibracionesLibres: [],
      resultadosVibracionesLibresAmortiguadas: [],
      resultadosVibracionesForzadasAmortiguadas: [],
      isResultadosVibracionesLibres: false,
      isResultadosVibracionesLibresAmortiguadas: false,
      isResultadosVibracionesForzadasAmortiguadas: false,
    };
  },

  computed: {
    w2_0() {
      return this.k / this.m;
    },
  },

  methods: {
    /*Ejericio 2*/
    vibracionesLibres_Funcion1Sistema(param) {
      return -((this.k * param.y) / this.m);
    },
    vibracionesLibres_Funcion2Sistema(param) {
      return param.x;
    },
    /*Ejercicio 3*/
    vibracionesLibresAmortiguadas_Funcion1Sistema(param) {
      return (
        (-this.constanteAmortiguacion * param.x - this.k * param.y) / this.m
      );
    },
    vibracionesLibresAmortiguadas_Funcion2Sistema(param) {
      return param.x;
    },
    /*Ejercicio 4*/
    vibracionesForzadasAmortiguadas_Funcion1Sistema(param) {
      return (
        (this.f_0 * Math.cos(this.w * param.t)) / this.m -
        (this.constanteAmortiguacion / this.m) * param.x -
        this.w2_0 * param.y
      );
    },
    vibracionesForzadasAmortiguadas_Funcion2Sistema(param) {
      return param.x * 1;
    },

    rk4_calculoParcial(funcion1Sistema, funcion2Sistema, x, y, h, t) {
      let xk1 = funcion1Sistema({ x: x, y: y, t: t });
      let yk1 = funcion2Sistema({ x: x, y: y, t: t });

      let xk2 = funcion1Sistema({
        x: x + 0.5 * h * xk1,
        y: y + 0.5 * h * yk1,
        t: t,
      });
      let yk2 = funcion2Sistema({
        x: x + 0.5 * h * xk1,
        y: y + 0.5 * h * yk1,
        t: t,
      });

      let xk3 = funcion1Sistema({
        x: x + 0.5 * h * xk2,
        y: y + 0.5 * h * yk2,
        t: t,
      });

      let yk3 = funcion2Sistema({
        x: x + 0.5 * h * xk2,
        y: y + 0.5 * h * yk2,
        t: t,
      });

      let xk4 = funcion1Sistema({ x: x + h * xk3, y: y + h * yk3, t: t });
      let yk4 = funcion2Sistema({ x: x + h * xk3, y: y + h * yk3, t: t });

      let calculoParcialX = x + (h / 6) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);
      let calculiParcialY = y + (h / 6) * (yk1 + 2 * yk2 + 2 * yk3 + yk4);

      return { t: t, x: calculoParcialX, y: calculiParcialY };
    },

    rk4_Sistema(funcion1Sistema, funcion2Sistema, x0, y0, inicio, fin, h) {
      let n = (fin - inicio) / h;
      const objInicial = { t: inicio, x: x0, y: y0 };
      let valores = [];
      valores.push(objInicial);

      console.log(
        "Valor n: " + n
      ); /*
      console.log("Tamaño valores: " + valores.length);
      console.log("Inicio: " + inicio + " Fin: " + fin + " h: " + h);*/

      for (let t = inicio + h; t <= fin; t = t + h) {
        //console.log("t: " + t);
        //console.log("Valores: ", valores);
        const kPrevio = valores[valores.length - 1];
        //console.log("KPrevio: ", kPrevio);
        const nuevoValor = this.rk4_calculoParcial(
          funcion1Sistema,
          funcion2Sistema,
          kPrevio.x,
          kPrevio.y,
          h,
          t
        );
        valores.push(nuevoValor);
      }
      return valores;
    },
  },
  mounted() {
    /* Ejercicio 2 */
    this.resultadosVibracionesLibres = this.rk4_Sistema(
      this.vibracionesLibres_Funcion1Sistema,
      this.vibracionesLibres_Funcion2Sistema,
      0,
      3,
      0,
      15,
      0.1
    );
    this.resultadosVibracionesLibres.forEach((e) => delete e.x);

    /* Ejercicio 3 */
    this.resultadosVibracionesLibresAmortiguadas = this.rk4_Sistema(
      this.vibracionesLibresAmortiguadas_Funcion1Sistema,
      this.vibracionesLibresAmortiguadas_Funcion2Sistema,
      0,
      3,
      0,
      15,
      0.1
    );
    this.resultadosVibracionesLibresAmortiguadas.forEach((e) => delete e.x);

    /* Ejercicio 4 */
    this.resultadosVibracionesForzadasAmortiguadas = this.rk4_Sistema(
      this.vibracionesForzadasAmortiguadas_Funcion1Sistema,
      this.vibracionesForzadasAmortiguadas_Funcion2Sistema,
      0,
      3,
      0,
      15,
      0.1
    );
    this.resultadosVibracionesForzadasAmortiguadas.forEach((e) => delete e.x);
    this.isResultadosVibracionesLibres = true;
    this.isResultadosVibracionesLibresAmortiguadas = true;
    this.isResultadosVibracionesForzadasAmortiguadas = true;
  },
};
