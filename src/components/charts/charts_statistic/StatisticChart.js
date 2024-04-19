import Chart from "react-apexcharts";

export function StatisticChart(chart_data, chart_type, colors_list) {
    console.log("data");
    let series = chart_data;
    let options = {
        chart: {
            type: chart_type,
            height: 80,
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
                top: -12,
                bottom: -12,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                size: 85,
                hollow: {
                    size: "60%",
                },
                track: {
                    show: true,
                    background: "#ffffff",
                    strokeWidth: "100%",
                    opacity: 1,
                    margin: 5,
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5,
                    },
                },

                dataLabels: {
                    show: true,

                    value: {
                        fontSize: "14px",
                        offsetY: -10,
                        color: "#636E72",
                    },

                    total: {
                        show: true,
                        fontSize: "14px",
                        label: "",
                        formatter: function (w) {
                            return "%" + chart_data[0];
                        },
                    },
                },
            },
            bar: {
                horizontal: false,
                columnWidth: "50%",
                startingShape: "rounded",
                colors: {
                    backgroundBarColors: [],
                    backgroundBarRadius: 5,
                },
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        colors: colors_list,
        xaxis: {
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
            max: 100,
        },
        tooltip: {
            x: {
                show: false,
            },
        },
    };
    return (
        <Chart options={options} series={series} type={chart_type}/>
    )
}

export default StatisticChart