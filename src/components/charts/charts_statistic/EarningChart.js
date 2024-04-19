import Chart from "react-apexcharts";

export function EarningChart(chart_data, chart_type, colors_list) {
    console.log("data");
    let series = chart_data;
    let options = {
        chart: {
            type: "bar",
            height: 100,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: "100%",
                startingShape: "rounded",
                endingShape: "rounded",
            },
        },

        colors: ["#00F7BF", "#1BE7FF", "#0010F7"],
        fill: {
            type: "solid",
        },
        xaxis: {
            type: "datetime",
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },

        yaxis: {
            show: false,
        },

        legend: {
            position: "left",
        },
        tooltip: {
            x: {
                show: false,
            },
        },
    };
    return (
        <Chart options={options} series={series} type={chart_type} height="70%"/>
    )
}

export default EarningChart;