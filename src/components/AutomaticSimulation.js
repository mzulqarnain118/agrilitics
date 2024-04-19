import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from 'jquery';
import AnalyticalChart from "./charts/charts_statistic/AnalyticalChart";
import analyticalChart from "./charts/charts_statistic/AnalyticalChart";
import MobileSideNav from "./layout/MobileSideNav";
function AutomaticSimulation() {
    const style = {
        background: "#00000029"
    };
    useEffect(() => {
        $('.accordion-toggle').click(function () {
            $('.hiddenRow').hide();
            $(this).next('tr').find('.hiddenRow').show();
            $(this).next('tr').find(".collapse").show();
        })
    }, [0])
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
        

        <div className="hp-main-layout-content">
            <MobileSideNav></MobileSideNav>
            <div className="row mb-32 gy-32">


                <div className="card-body">
                    <div className="row align-items-center mt-8">
                        <div className="col-12 mb-4">
                            <div className="row align-items-center justify-content-between">
                                <div className="col flex-grow-1">
                                    <h3 className="mb-8"> <a href="upload-testmodel.html"><i className="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></a> Automatic Simulation Churn</h3>
                                    <p className="hp-p1-body mb-0"> Your current status and analytics are here</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-12">
                    <div className="row ">
                        <div className="col flex-grow-1 overflow-hidden">
                            <div className="row ">
                                <div className="col-12 mt-16">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <ul className="nav nav-tabs " id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#visualize" type="button" role="tab" aria-controls="profile" aria-selected="false">Visualize</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Datapoints</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="data-tab" data-bs-toggle="tab" data-bs-target="#data1" type="button" role="tab" aria-controls="data-tab" aria-selected="false">Feature Stats</button>
                                                </li>
                                            </ul>

                                            <div className="tab-content fade show" id="myTabContent">
                                                <div className="tab-pane " id="home" role="tabpanel" aria-labelledby="home-tab">


                                                    <div className="col flex-grow-1 overflow-hidden">
                                                        <section className="section">
                                                            <div className="row g-32">
                                                                <div className="col-12 col-md-4 ">
                                                                    <div className="card style-13">
                                                                        <div className="card-body">
                                                                            <br /> <br /> <br />
                                                                            <div id="chart">{pieChart}</div>
                                                                            <br /> <br />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-md-4 ">
                                                                    <div className="card style-13">
                                                                        <div className="card-body">
                                                                            <div className="row justify-content-between">



                                                                            </div>
                                                                            <div id="chart2">{barChart}</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-md-4 ">
                                                                    <div className="card style-13">
                                                                        <div className="card-body">
                                                                            <div className="row justify-content-between"></div>
                                                                            <div id="column-chart">{ growthRateChart}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                            </section>
                                                    </div>

                                               



                                                <div className="col-md-12 ">
                                                    <br /><br />
                                                    <section className="section">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="style-14">
                                                                    <table className="table table-striped"  >
                                                                        <thead>
                                                                            <tr>
                                                                                <th><input className="form-check-input" type="checkbox" id="gridCheck1" /></th>
                                                                                <th>State</th>
                                                                                <th>Area Under Cultivation</th>
                                                                                <th>Price</th>
                                                                                <th>Farming Experience</th>
                                                                                <th>Crop Experience</th>
                                                                                <th>Is Educated</th>
                                                                                <th>Farm to road Distance</th>
                                                                                <th>Churn</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                                                                <td>Queensland</td>
                                                                                <td> 26587</td>
                                                                                <td> 176586</td>
                                                                                <td>20</td>
                                                                                <td>18 </td>
                                                                                <td>1</td>
                                                                                <td>12543 </td>
                                                                                <td>0</td>

                                                                            </tr>
                                                                            <tr className="p">
                                                                                <td colspan="12" className="hiddenRow">
                                                                                    <div className="accordian-body collapse p-3" id="demo1">
                                                                                        <div className="tabheading">


                                                                                            <div className="row">

                                                                                                <div className="col-6 col-md-6 ">

                                                                                                    <div className="card">
                                                                                                        <div className="card-body">
                                                                                                            <div className="row">

                                                                                                                <h3>Churn Analytics</h3>

                                                                                                                <hr />

                                                                                                                <div className="col-6 col-md-8 ">
                                                                                                                    <select className="form-select" aria-label="Default select example">
                                                                                                                        <option selected value="0">Price</option>
                                                                                                                        <option value="1">State</option>
                                                                                                                        <option value="2">Area Under Cultivation</option>
                                                                                                                        <option value="3">Farming Experience</option>
                                                                                                                        <option value="4">Crop Experience</option>
                                                                                                                        <option value="5">Is Educated</option>
                                                                                                                        <option value="6">Farm to road Distance</option>
                                                                                                                        <option value="7">Churn</option>

                                                                                                                    </select>
                                                                                                                </div>

                                                                                                                <div className="col-6 col-md-4 ">
                                                                                                                    <a href="#"> <button type="submit" className="btn btn-primary">Run Model</button></a>
                                                                                                                </div>
                                                                                                                <div className="col-12 col-md-12 ">
                                                                                                                    <hr />

                                                                                                                    <div className="text-center topmargen12">

                                                                                                                        <a href="manual.html">Simulation Manual Churn</a>

                                                                                                                    </div>
                                                                                                                </div>

                                                                                                            </div>

                                                                                                        </div>

                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-6 col-md-6 ">

                                                                                                    <img src="assets/images/chart.png" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1"/></td>
                                                                                <td>Melbourne</td>
                                                                                <td> 45879</td>
                                                                                <td> 15486</td>
                                                                                <td>30</td>
                                                                                <td>10 </td>
                                                                                <td>0</td>
                                                                                <td>25698 </td>
                                                                                <td>1</td>
                                                                            </tr>
                                                                            <tr className="p">
                                                                                <td colspan="12" className="hiddenRow">
                                                                                    <div className="accordian-body collapse p-3" id="demo3">
                                                                                        <div className="tabheading"><span className="yellowcolor">  Histogram</span>     Frequent values     Table     Var Type Transform</div>
                                                                                        <h1 className="text-center">Charts</h1>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo4" className="accordion-toggle">
                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1"/></td>
                                                                                <td>Brisbane</td>
                                                                                <td> 14785</td>
                                                                                <td>2345</td>
                                                                                <td>20</td>
                                                                                <td>50 </td>
                                                                                <td>1</td>
                                                                                <td>14853 </td>
                                                                                <td>1</td>
                                                                            </tr>
                                                                            <tr className="p">
                                                                                <td colspan="12" className="hiddenRow">
                                                                                    <div className="accordian-body collapse p-3" id="demo4">
                                                                                        <div className="tabheading"><span className="yellowcolor">  Histogram</span>     Frequent values     Table     Var Type Transform</div>

                                                                                        <h1 className="text-center">Charts</h1>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo5" className="accordion-toggle">
                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                                                                <td>Queensland</td>
                                                                                <td> 26587</td>
                                                                                <td> 176586</td>
                                                                                <td>20</td>
                                                                                <td>18 </td>
                                                                                <td>1</td>
                                                                                <td>12543 </td>
                                                                                <td>0</td>
                                                                            </tr>
                                                                            <tr className="p">
                                                                                <td colspan="12" className="hiddenRow">
                                                                                    <div className="accordian-body collapse p-3" id="demo5">
                                                                                        <div className="tabheading"><span className="yellowcolor">  Histogram</span>     Frequent values     Table     Var Type Transform</div>
                                                                                        <h1 className="text-center">Charts</h1>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo6" className="accordion-toggle">
                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                                                                <td>Perth</td>
                                                                                <td>145879</td>
                                                                                <td>2345</td>
                                                                                <td>50</td>
                                                                                <td>40 </td>
                                                                                <td>1</td>
                                                                                <td>1200 </td>
                                                                                <td>0</td>
                                                                            </tr>
                                                                            <tr className="p">
                                                                                <td colspan="12" className="hiddenRow">
                                                                                    <div className="accordian-body collapse p-3" id="demo6">
                                                                                        <div className="tabheading"><span className="yellowcolor">  Histogram</span>     Frequent values     Table     Var Type Transform</div>

                                                                                        <h1 className="text-center">Charts</h1>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo7" className="accordion-toggle">
                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                                                                <td>Sydney</td>
                                                                                <td> 85000</td>
                                                                                <td>2345</td>
                                                                                <td>20</td>
                                                                                <td>10 </td>
                                                                                <td>0</td>
                                                                                <td>12500 </td>
                                                                                <td>0</td>
                                                                            </tr>
                                                                            <tr className="p">
                                                                                <td colspan="12" className="hiddenRow">
                                                                                    <div className="accordian-body collapse p-3" id="demo7">
                                                                                        <div className="tabheading"><span className="yellowcolor">  Histogram</span>     Frequent values     Table     Var Type Transform</div>

                                                                                        <h1 className="text-center">Charts</h1>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>


                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <nav aria-label="Page navigation example">
                                                                    <ul className="pagination justify-content-center">
                                                                        <li className="page-item disabled">
                                                                            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                                        </li>
                                                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#">Next</a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>




                                                            </div>

                                                        </div>
                                                    </section>


                                                </div>



                                               

                                            </div>
                                            <div className="tab-pane fade show active" id="visualize" role="tabpanel" aria-labelledby="contact-tab">
                                                <div className="row">
                                                    <div className="col-lg-12">

                                                        <iframe id="iframe-id" src="https://pair-code.github.io/what-if-tool/demos/uci.html" crossorigin="anonymous" className="style-15" height="1000px" width="100%"></iframe>

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
    </div >
    );
}

export default AutomaticSimulation;