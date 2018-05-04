
import React from 'react';
//import ReactDOM from 'react-dom';
import Chart from 'chart.js';

const dashboardChartId = 'dashboardChart';

class DashboardChart extends React.Component {
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  renderChart() {
    const data = this.props.stats,
      categories = Object.keys(data),
      values = Object.values(data);

    this.chartInstance = new Chart(document.getElementById(dashboardChartId), {
      type: 'pie',
      data: {
        datasets: [{
          data: values,
          backgroundColor: Array.apply(null, {length: categories.length}).map(() => this.getRandomColor()),
        }],
        labels: categories,
      },
      options: {
        legend: {
          display: true,
          position: 'right',
        }
      }
    });
  }

  componentDidUpdate() {
    this.chartInstance.destroy();
    this.renderChart();
    return;
  }

  componentDidMount() {
    this.renderChart();
  }

  render() {
    return (
      <canvas className="my-4" id={dashboardChartId} width="900" height="380"></canvas>
    );
  }
}

export default DashboardChart;

  // var ctx = document.getElementById("myChart");
  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  //     datasets: [{
  //       data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
  //       lineTension: 0,
  //       backgroundColor: 'transparent',
  //       borderColor: '#007bff',
  //       borderWidth: 4,
  //       pointBackgroundColor: '#007bff'
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: false
  //         }
  //       }]
  //     },
  //     legend: {
  //       display: false,
  //     }
  //   }
  // });
