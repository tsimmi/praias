document.addEventListener('DOMContentLoaded', 
    function() {
        load_chart();
    }, 
    false);

function load_chart() {
    Chart.defaults.global.legend.display = false;

    var chartData = weatherData; // .slice(0, 12);
    //console.log(getYs(chartData));

    var chartData = {
        labels: getLabels(chartData),
        datasets: [{
            type: 'line',
            label: 'Niceness',
            yAxisID: 'nicenessAxis',
            borderColor: 'rgb(252, 79, 56)',
            backgroundColor: 'rgb(252, 79, 56)',
            borderWidth: 3,
            fill: false,
            data: getYs(chartData)
        }]
    };

    var ctx = document.getElementById('weather-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsive: true,
            responsiveAnimationDuration: 0,
            scales: {
                yAxes: [{
                    id: 'nicenessAxis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                      beginAtZero: true
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
        labels.push(date.toLocaleString('en-US'));
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
