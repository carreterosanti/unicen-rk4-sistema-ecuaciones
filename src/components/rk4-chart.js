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
            borderColor: "#eb2d2d",
            pointBackgroundColor: "#b00004",
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
