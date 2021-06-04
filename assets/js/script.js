var data = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
  datasets: [{
    label: 'Dataset',
    data: [12, 19, 3, 5, 2, 3],
    // backgroundColor: [
    //   'rgba(255, 99, 132, 0.2)',
    //   'rgba(54, 162, 235, 0.2)',
    //   'rgba(255, 206, 86, 0.2)',
    //   'rgba(75, 192, 192, 0.2)',
    //   'rgba(153, 102, 255, 0.2)',
    //   'rgba(255, 159, 64, 0.2)'
    // ],
    // borderColor: [
    //   'rgba(255, 99, 132, 1)',
    //   'rgba(54, 162, 235, 1)',
    //   'rgba(255, 206, 86, 1)',
    //   'rgba(75, 192, 192, 1)',
    //   'rgba(153, 102, 255, 1)',
    //   'rgba(255, 159, 64, 1)'
    // ],
    borderWidth: 0
  }]
};

var newData = [12];

var ctx = document.getElementById('chart');
var chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart Title',
        padding: {
          top: 10,
          bottom: 30
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });
  chart.update();
}

document.getElementById("action-add-data").addEventListener("click", function() {
  addData(chart, "New Label", newData);
}, false);

document.getElementById("action-remove-data").addEventListener("click", function() {
  removeData(chart);
}, false);

document.getElementById("action-change-width").addEventListener("change", function(e) {
  document.getElementById("chart-wrapper").style.width = e.target.value + "px";
}, false);

document.getElementById("action-change-height").addEventListener("change", function(e) {
  document.getElementById("chart-wrapper").style.height = e.target.value + "px";
}, false);

function setDefaultSize(chartWrapper) {
  chartWrapper.style.width = document.getElementById("action-change-width").value + "px";
  chartWrapper.style.height = document.getElementById("action-change-height").value + "px";
}

setDefaultSize(document.getElementById("chart-wrapper"));
