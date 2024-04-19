import Chart from "react-apexcharts";

function LineCharts(chart_data, chart_type, color_list, chart_category, chart_labels,axis_type) {
    let series = chart_data
    let options = {
        chart: {
            height: "100%",
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        forecastDataPoints: {
            count: 7
        },
        stroke: {
            width: 5,
            curve: 'smooth'
        },
        xaxis: {
            type: axis_type,
            categories:chart_category,
            tickAmount: 10,
            labels: {
                formatter: function(value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                }
            }
        },
        title: {
            // text: 'Forecast',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ '#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        yaxis: {
            min: -10,
            max: 40
        }
    }
    return (
        <Chart options={options} series={series} type={chart_type} height="220%"/>
    )
}

export default LineCharts