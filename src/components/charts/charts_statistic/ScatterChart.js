import Chart from "react-apexcharts";

function ScatterChart(chart_data, chart_type, color_list,chart_category){
    let series = chart_data
    let options = {
        chart: {
            fontFamily: "Manrope, sans-serif",
            type: "scatter",
            height: 350,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
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
            row: {
                opacity: 0.5,
            },
        },
        fill: {
            opacity: 1,
            type: "solid",
        },
        stroke: {
            show: true,
            width: 4,
            curve: "straight",
            colors: ["transparent"],
        },
        xaxis: {
            axisTicks: {
                show: false,
            },

            tickAmount: 10,
            labels: {
                style: {
                    colors: ["636E72"],
                    fontSize: "14px",
                },
                formatter: function (val) {
                    return parseFloat(val).toFixed(1);
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
        colors: ["#00F7BF", "#55B1F3", "#81b73c"],

        yaxis: {
            labels: {
                style: {
                    colors: ["636E72"],
                    fontSize: "14px",
                },
            },

            tickAmount: 7,
        },
    }
    return (
        <Chart options={options} series={series} type={chart_type} height="250%"/>
    )
}
export default ScatterChart