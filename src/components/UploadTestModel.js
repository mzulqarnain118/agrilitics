import {Link} from "react-router-dom";
import GenericTable from "./tables/GenericTable";
import {useEffect, useState} from "react";
import AnalyticalChart from "./charts/charts_statistic/AnalyticalChart";
import analyticalChart from "./charts/charts_statistic/AnalyticalChart";

function UploadTestModel() {
    const [lineChartTwo, setLineChartTwo] = useState();
    const [pieChart, setPieChart] = useState();
    const [barChart, setBarChart] = useState();
    const [growthRateChart, setGrowthRateChart] = useState();
    /* inline Style */
    const inlineStyle = {
        background: "#00000029"
    }
    useEffect(() => {
        /* Line Chart */
        let line_chart_two_series = [{
            name: "Organic",
            data: [12010, 11313, 14623, 18935, 17345, 13465, 17813, 19125, 16256, 20356, 12233, 14570,],
        },]
        let line_chart_two = AnalyticalChart(line_chart_two_series, "line", ["#0063F7", "#1BE7FF"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
        /* Pie chart */
        let pie_chart = AnalyticalChart([44, 55], 'pie', ["rgba(0, 227, 150, 0.85)", "rgba(0, 143, 251, 0.85)",], '', ['Churn', 'Not Churn'], "200%");
        /* Bar Chart*/
        let bar_chart_series = [{
            data: [44, 55, 41, 64, 22, 43, 21]
        },];
        let bar_chart = analyticalChart(bar_chart_series, "bar", ["rgba(0, 143, 251, 0.85)"], [2001, 2002, 2003, 2004, 2005, 2006, 2007], '', "274%")
        /* Growth rate */
        let growth_rate_series = [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        ];
        let growth_rate = analyticalChart(growth_rate_series, "bar", ["rgba(0, 143, 251, 0.85)", "rgba(0, 227, 150, 0.85)", "rgb(254, 176, 25)"], [2001, 2002, 2003, 2004, 2005, 2006, 2007], undefined, "274%", "bottom")

        /* Set Chart states */
        setLineChartTwo(line_chart_two);
        setPieChart(pie_chart);
        setBarChart(bar_chart);
        setGrowthRateChart(growth_rate);
    }, [0])
    return (
        <div class="hp-main-layout-content">
            <div class="row mb-32 gy-32">
                <div class="card-body">
                    <div class="row align-items-center mt-8">
                        <div class="col-12 mb-4">
                            <div class="row align-items-center justify-content-between">
                                <div class="col flex-grow-1">
                                    <h3 class="mb-8">
                                        <Link to="/farmer-forecast"><i
                                            class="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></Link>
                                        Train & Test Dashboard</h3>
                                    <p class="hp-p1-body mb-0"> Your current status and analytics are here</p>
                                </div>

                                <div class="col hp-flex-none w-auto">
                                    <Link to="/automatic-simulation-churn">
                                        <button type="button"
                                                class="btn mt-16 mt-sm-0 text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0">
                                            <span>Run Simulation</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-12">
                    <div class="row ">
                        <div class="col flex-grow-1 overflow-hidden">
                            <div class="row ">
                                <div class="col-12 mt-16">
                                    <div class="row">
                                        <div class="col-12 col-lg-12">
                                            <ul class="nav nav-tabs " id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="home-tab"
                                                            data-bs-toggle="tab" data-bs-target="#home" type="button"
                                                            role="tab" aria-controls="home" aria-selected="true">Traning
                                                        Data
                                                    </button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="data-tab" data-bs-toggle="tab"
                                                            data-bs-target="#data1" type="button" role="tab"
                                                            aria-controls="data-tab" aria-selected="false">Test
                                                        1
                                                    </button>
                                                </li>


                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                            data-bs-target="#upload" type="button" role="tab"
                                                            aria-controls="profile"
                                                            aria-selected="false">Upload
                                                    </button>
                                                </li>


                                            </ul>

                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel"
                                                     aria-labelledby="home-tab">
                                                    <div class="col flex-grow-1 overflow-hidden">
                                                        <section class="section">
                                                            <div class="row g-32">
                                                                <div class="col-6 col-md-4 ">
                                                                    <div class="card"
                                                                         style={inlineStyle}>
                                                                        <div class="card-body">
                                                                            <br/> <br/> <br/>
                                                                            <div id="chart">{pieChart}</div>
                                                                            <br/> <br/>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-6 col-md-4 ">
                                                                    <div class="card"
                                                                         style={inlineStyle}>
                                                                        <div class="card-body">
                                                                            <div
                                                                                class="row justify-content-between">
                                                                            </div>
                                                                            <div id="chart2">{barChart}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-4 ">
                                                                    <div class="card"
                                                                         style={inlineStyle}>
                                                                        <div class="card-body">
                                                                            <div
                                                                                class="row justify-content-between">
                                                                            </div>
                                                                            <div
                                                                                id="column-chart">{growthRateChart}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <div class="col-md-12 ">
                                                            <br/><br/>
                                                            <section class="section">
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <GenericTable/>
                                                                        <nav aria-label="Page navigation example">
                                                                            <ul
                                                                                class="pagination justify-content-center">
                                                                                <li class="page-item disabled">
                                                                                    <a class="page-link" href="#"
                                                                                       tabindex="-1"
                                                                                       aria-disabled="true">Previous</a>
                                                                                </li>
                                                                                <li class="page-item"><a
                                                                                    class="page-link" href="#">1</a>
                                                                                </li>
                                                                                <li class="page-item"><a
                                                                                    class="page-link" href="#">2</a>
                                                                                </li>
                                                                                <li class="page-item"><a
                                                                                    class="page-link" href="#">3</a>
                                                                                </li>
                                                                                <li class="page-item">
                                                                                    <a class="page-link"
                                                                                       href="#">Next</a>
                                                                                </li>
                                                                            </ul>
                                                                        </nav>

                                                                    </div>

                                                                </div>
                                                            </section>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade show " id="data1" role="tabpanel"
                                                     aria-labelledby="data-tab">
                                                    <div class="col-md-12 ">
                                                        <br/><br/>
                                                        <section class="section">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <GenericTable/>
                                                                    <nav aria-label="Page navigation example">
                                                                        <ul
                                                                            class="pagination justify-content-center">
                                                                            <li class="page-item disabled">
                                                                                <a class="page-link" href="#"
                                                                                   tabindex="-1"
                                                                                   aria-disabled="true">Previous</a>
                                                                            </li>
                                                                            <li class="page-item"><a
                                                                                class="page-link" href="#">1</a>
                                                                            </li>
                                                                            <li class="page-item"><a
                                                                                class="page-link" href="#">2</a>
                                                                            </li>
                                                                            <li class="page-item"><a
                                                                                class="page-link" href="#">3</a>
                                                                            </li>
                                                                            <li class="page-item">
                                                                                <a class="page-link"
                                                                                   href="#">Next</a>
                                                                            </li>
                                                                        </ul>
                                                                    </nav>

                                                                </div>

                                                            </div>
                                                        </section>

                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="upload" role="tabpanel"
                                                     aria-labelledby="contact-tab">
                                                    <div class="row">
                                                        <div class="col-lg-2"></div>
                                                        <div class="col-lg-8">
                                                            <h4>Upload Predicting Churn DATA</h4>

                                                            <hr/>

                                                            <div class="col-lg-12">

                                                                <h1 class="mein-heading">Data Selection</h1>
                                                                <p>Get startd by dragging data here, or import from:
                                                                </p>
                                                                <div class="topmargen12">
                                                                    <button type="button"
                                                                            class="btn btn-primary former-btn ">Data
                                                                        Source
                                                                    </button>
                                                                    <button type="button"
                                                                            class="btn box-button former-btn">URL
                                                                    </button>
                                                                    <button type="button"
                                                                            class="btn box-button former-btn">Local File
                                                                    </button>
                                                                    <button type="button"
                                                                            class="btn box-button former-btn">Import API
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <br/>
                                                            <hr/>
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <h1 class="mein-heading">Browse</h1>
                                                                    <div class="browse-border">
                                                                        <input class="form-control" type="file"
                                                                               id="formFile"/>
                                                                    </div>
                                                                </div>


                                                                <div class="col-lg-6">

                                                                    <div class=" topmargen12"
                                                                         style={{marginTop: "61px"}}>
                                                                        <a href="#">
                                                                            <button type="submit"
                                                                                    class="btn btn-primary">Test
                                                                                Model
                                                                            </button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default UploadTestModel