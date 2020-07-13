import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["chartData", "options", "chartTittle"],
  mounted() {
    console.log("Prop charData", this.chartData);
    let auxLabelsArray = [];
    this.chartData.forEach((e) => auxLabelsArray.push(e.t));
    console.log("Copy Prop charData", auxLabelsArray);
    this.renderChart(
      {
        labels: auxLabelsArray,
        datasets: [
          {
            label: "Y(t)",
            data: this.chartData,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: this.chartTittle,
        },
      }
    );
  },
};
