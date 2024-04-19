import Chart from "react-apexcharts";

function ExpensesChart(chart_data, chart_type, color_list, chart_category) {
    let series = chart_data
    let options = {
        chart: {
            id: "expenses-donut-card", fontFamily: "Manrope, sans-serif", type: "donut", height: 350, toolbar: {
                show: false,
            }, zoom: {
                enabled: false,
            },
        },
        colors: ["#0010F7", "#55B1F3", "#1BE7FF"],

        labels: ["Marketing", "Payments", "Bills"],

        dataLabels: {
            enabled: false,
        }, plotOptions: {
            pie: {
                donut: {
                    size: "90%", labels: {
                        show: true, name: {
                            fontSize: "2rem",
                        }, value: {
                            fontSize: "24px", fontWeight: "medium", color: "#2D3436", formatter(val) {
                                return `$${val}`;
                            },
                        }, total: {
                            show: true, fontSize: "24px", fontWeight: "medium", label: "Total", color: "#636E72",

                            formatter: function (w) {
                                return `$${w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b;
                                }, 0)}`;
                            },
                        },
                    },
                },
            },
        }, responsive: [{
            breakpoint: 426, options: {
                legend: {
                    itemMargin: {
                        horizontal: 16, vertical: 8,
                    },
                },
            },
        },],

        legend: {
            itemMargin: {
                horizontal: 12, vertical: 24,
            }, horizontalAlign: "center", position: "bottom", fontSize: "12px", labels: {
                colors: "#2D3436",
            },

            markers: {
                radius: 12,
            },
        },
    }
    return (<Chart options={options} series={series} type={chart_type} height="250%"/>)
}

export default ExpensesChart