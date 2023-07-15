document.addEventListener('DOMContentLoaded', 
    function() {
        load_chart();
    }, 
    false);

function load_chart() {
    Chart.defaults.global.legend.display = false;

    const chartLabels = getLabels(weatherData)

    var ctx = document.getElementById('weather-chart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                type: 'line',
                label: 'Niceness',
                yAxisID: 'nicenessAxis',
                borderColor: 'rgb(252, 79, 56)',
                backgroundColor: 'rgb(252, 79, 56)',
                borderWidth: 3,
                fill: false,
                data: getYs(weatherData)
            }]
        },
        options: {
            title: {
                display: true,
                text: beach
            },
            scales: {
                xAxes: [{
                    type: 'category',
                    labels: chartLabels,
                    ticks: {
                        autoSkip: true,
                        autoSkipPadding: 40
                    }
                }],
                yAxes: [{
                    id: 'nicenessAxis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 20,
                      suggestedMax: 1.0
                    },
                    gridLines: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: beach,
                        padding: {top: 20, left: 0, right: 0, bottom: 20}
                    }
                }]
            }
        }
    });
}

function getLabels(chartData) {
    var labels = [];

    for (index in chartData) {
        const date = new Date(chartData[index].timestamp * 1000)
        //labels.push(date.getHours() + 'h');
        labels.push(date.toLocaleString('en-GB'));
    }

    return labels;
}

function getYs(chartData) {
    var values = [];

    for (index in chartData) {
        values.push(chartData[index].niceness);
    }

    return values;
}
