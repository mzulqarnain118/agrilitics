import Chart from "react-apexcharts";

function RadarChart(chart_data, chart_type, color_list,chart_category) {
    let series = chart_data
    let options = {
        chart: {
            id: "analytics-revenue-2-chart",
            fontFamily: "Manrope, sans-serif",
            height: "85%",

            type: "radar",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            dropShadow: {
                enabled: true,
                blur: 4,
                left: 1,
                top: 1,
                opacity: 0.1,
            },
        },
        fill: {
            opacity: [1, 1],
        },
        stroke: {
            show: false,
            width: 0,
        },
        markers: {
            size: 0,
        },

        colors: ["rgba(85, 177, 243, 0.8)", "rgba(0, 247, 191, 0.8)"],

        labels: ["Marketing", "Payments", "Bills"],

        dataLabels: {
            enabled: false,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },

        plotOptions: {
            radar: {
                polygons: {
                    connectorColors: "#fff",
                },
            },
        },
        legend: {
            itemMargin: {
                horizontal: 12,
                vertical: 16,
            },
            horizontalAlign: "center",
            position: "bottom",
            fontSize: "12px",
            fontWeight: "medium",

            markers: {
                radius: 12,
            },
        },
    }
    return (
        <Chart options={options} series={series} type={chart_type} height="250%"/>
    )
}

export default RadarChart