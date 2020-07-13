import LineChartRK4 from "./rk4-chart.js";

export default {
  components: {
    LineChartRK4,
  },
  name: "rk4",

  data() {
    return {
      k: 3,
      m: 1,
      constanteAmortiguacion: 2,
      resultadosVibracionesLibres: [],
      isResultadosVibracionesLibres: false,
      resultadosVibracionesLibresAmortiguadas: [],
      isResultadosVibracionesLibresAmortiguadas: false,
      resultadosVibracionesForzadasAmortiguadas: [],
      testChart: [
        {
          x: 10,
          y: 20,
        },
        {
          x: 15,
          y: 10,
        },
      ],
    };
  },

  methods: {
    /*Ejericio 2*/
    vibracionesLibres_Funcion1Sistema(x, y) {
      return -((this.k * y) / this.m);
    },
    vibracionesLibres_Funcion2Sistema(x) {
      return x;
    },
    /*Ejercicio 3*/
    vibracionesLibresAmortiguadas_Funcion1Sistema(x, y) {
      return (-this.constanteAmortiguacion * x - this.k * y) / this.m;
    },
    vibracionesLibresAmortiguadas_Funcion2Sistema(x) {
      return x;
    },
    /*Ejercicio 4*/
    vibracionesForzadasAmortiguadas_Funcion1Sistema(x, y) {
      return (-this.constanteAmortiguacion * x - this.k * y) / this.m;
    },
    vibracionesForzadasAmortiguadas_Funcion2Sistema(x) {
      return x;
    },

    rk4_calculoParcial(funcion1Sistema, funcion2Sistema, x, y, h, t) {
      let xk1 = funcion1Sistema(x, y);
      let yk1 = funcion2Sistema(x, y);

      let xk2 = funcion1Sistema(x + 0.5 * h * xk1, y + 0.5 * h * yk1);
      let yk2 = funcion2Sistema(x + 0.5 * h * xk1, y + 0.5 * h * yk1);

      let xk3 = funcion1Sistema(x + 0.5 * h * xk2, y + 0.5 * h * yk2);
      let yk3 = funcion2Sistema(x + 0.5 * h * xk2, y + 0.5 * h * yk2);

      let xk4 = funcion1Sistema(x + h * xk3, y + h * yk3);
      let yk4 = funcion2Sistema(x + h * xk3, y + h * yk3);

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
    console.log("Ejercicio 2");
    this.resultadosVibracionesLibres = this.rk4_Sistema(
      this.vibracionesLibres_Funcion1Sistema,
      this.vibracionesLibres_Funcion2Sistema,
      0,
      3,
      0,
      5,
      0.1
    );
    this.resultadosVibracionesLibres.forEach((e) => delete e.x);
    console.log("Ejercicio 3");
    this.resultadosVibracionesLibresAmortiguadas = this.rk4_Sistema(
      this.vibracionesLibresAmortiguadas_Funcion1Sistema,
      this.vibracionesLibresAmortiguadas_Funcion2Sistema,
      0,
      3,
      0,
      5,
      0.1
    );
    this.resultadosVibracionesLibresAmortiguadas.forEach((e) => delete e.x);
    this.isResultadosVibracionesLibres = true;
    this.isResultadosVibracionesLibresAmortiguadas = true;
  },
};
