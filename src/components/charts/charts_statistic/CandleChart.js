import Chart from "react-apexcharts";

function CandleChart(chart_data, chart_type, color_list, chart_category) {
    let series = chart_data
    let options = {
        chart: {
            fontFamily: "Manrope, sans-serif",
                type: "candlestick",
            height: 350,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "#00F7BF",
                    downward: "#FF0022",
                },
                wick: {
                    useFillColor: true,
                },
            },
        },

        labels: {
            style: {
                fontSize: "14px",
            },
        },

        dataLabels: {
            enabled: false,
        },

        grid: {
            borderColor: "#DFE6E9",
        },
        fill: {
            opacity: 1,
            type: "solid",
        },

        xaxis: {
            type: "datetime",
            axisTicks: {
                show: false,
            },

            labels: {
                style: {
                    colors: ["636E72"],
                    fontSize: "14px",
                },
            },
        },
        legend: {
            horizontalAlign: "right",
            offsetX: 40,
            position: "top",
            markers: {
                radius: 12,
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: ["636E72"],
                    fontSize: "14px",
                },
            },
        },
    }
    return (<Chart options={options} series={series} type={chart_type} height="250%"/>)
}

export default CandleChart