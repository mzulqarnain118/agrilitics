import React,{useEffect,useState} from "react";
import Chart from "react-apexcharts";
import $ from "jquery";
import MobileSideNav from "./layout/MobileSideNav";
import {Link} from 'react-router-dom';
function FormerDetail() {
   
    useEffect(() => {
        $('.accordion-toggle').click(function () {
            $('.hiddenRow').hide();
            $(this).next('tr').find('.hiddenRow').show();
            $(this).next('tr').find(".collapse").show();
        })
    }, [0]);
//     
let pieOption = {
    labels: ['Churn', 'Not Churn'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
let pieSeries =  [44, 55];

// 
let barChartSeries =  [{
    data: [400, 430, 448, 400, 430]
}];

let barChartOption =  {
 
 
  plotOptions: {
      bar: {
          borderRadius: 4,
          horizontal: true,
      }
  },
  dataLabels: {
      enabled: false
  },
  xaxis: {
      categories: ['Queensland', 'Melbourne', 'Perth', 'Brisbane', 'Sydney'
      ],
  }
};

 let scattersSeries = [{
    name: "SAMPLE A",
    data: [
    [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
  },{
    name: "SAMPLE B",
    data: [
    [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
  },{
    name: "SAMPLE C",
    data: [
    [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
  }];

  let scatterOptions= {
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function(val) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      tickAmount: 7
    }
  };



    return (
        <div className="hp-main-layout">

             <MobileSideNav/>


            <div className="hp-main-layout-content">
                <div className="row mb-32 gy-32">
                    <div className="col-12">
                        <h3> <a href="farmer.html"><i className="hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font back-button" ></i></a>Farmer Analytics qq</h3>
                        <p className="hp-p1-body mb-0">Your current status and analytics are here</p>
                    </div>

                    <div className="col-12">
                        <div className="row g-32">
                            <div className="col flex-grow-1 overflow-hidden">
                                <div className="row g-32">




                                    <div className="col-12 margen30px">
                                        <div className="row g-32">




                                            <div className="col-12 ">
                                                <div className="row g-32">

                                                    <div className="col-12 col-md-12">
                                                        <div className="row g-32">


                                                            <div className="col-12 col-md-4  ">
                                                                <div className="card  col-height ">


                                                                    <div className="card-body">
                                                                        <div className="row justify-content-between">
                                                                            <div className="min-heightcol">
                                                                                <h5 className="me-8">Churn Vs Not  Churn</h5>
                                                                            </div>
                                                                        </div>

                                                                  
                                                                        <Chart options={pieOption} series={pieSeries} type={'pie'} height="100%"/>
                                                                        <br /> <br />
                                                                    </div>
                                                                </div>
                                                            </div>
     
                                                            <div className="col-12 col-md-4  ">
                                                                <div className="card  col-height">
                                                                    <div className="card-body" style={{height:'360px'}}>
                                                                        <div className="row justify-content-between">
                                                                            <div className="min-heightcol">
                                                                                <h5 className="me-8">Churn By State</h5>
                                                                            </div>
                                                                        </div>

                                                                        <Chart options={barChartOption} series={barChartSeries} type={'bar'} height="100%"/>




                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-md-4">
                                                                <div className="card  col-height ">
                                                                <div className="card-body" style={{height:'360px'}}>
                                                                        <div className="row justify-content-between">
                                                                            <div className="min-heightcol">
                                                                                <h5 className="me-8">Churn By Grain Type</h5>
                                                                            </div>
                                                                        </div>

                                                                        <Chart options={scatterOptions} series={scattersSeries} type={'scatter'} height="100%"/>
                                                                    </div>
                                                                </div>
                                                            </div>





                                                            <div className="col-12">
                                                                <a href="#" type="button" className="btn box-button style-21">Automatic Churn</a>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="card">

                                                                    <section className="section topmargen1">
                                                                        <div >




                                                                            <div className="row">



                                                                                <div className="col-md-12 ">


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
                                                                                                                                                        <option selected="">Price</option>
                                                                                                                                                        <option value="1">Area Under Cultivation</option>
                                                                                                                                                        <option value="1">State</option>
                                                                                                                                                        <option value="2">Farming Experience</option>
                                                                                                                                                        <option value="3">Crop Experience</option>
                                                                                                                                                        <option value="3">Is Educated</option>
                                                                                                                                                        <option value="3">Farm to road Distance</option>
                                                                                                                                                        <option value="3">Churn</option>
                                                                                                                                                    </select>
                                                                                                                                                </div>

                                                                                                                                                <div className="col-6 col-md-4 ">
                                                                                                                                                    <a href="farmer-detail.html"> <button type="submit" className="btn btn-primary">Run Model</button></a>
                                                                                                                                                </div>





                                                                                                                                                <div className="col-12 col-md-12 ">
                                                                                                                                                    <hr />

                                                                                                                                                    <div className="text-center topmargen12">
                                                                                                                                                  
                                                                                                                                                        <Link to="/simulation/manual">Simulation Manual Churn</Link>

                                                                                                                                                    </div>

                                                                                                                                                </div>

                                                                                                                                            </div>

                                                                                                                                        </div>

                                                                                                                                    </div>


                                                                                                                                </div>
                                                                                                                                <div className="col-6 col-md-6 text-center ">

                                                                                                                                    <img src="/assets/images/chart.png" />

                                                                                                                                </div>

                                                                                                                            </div>


                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>


                                                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
                                                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
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
                                                                                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                                                                                                <td>Brisbane</td>
                                                                                                                <td> 14785</td>
                                                                                                                <td>2345</td>
                                                                                                                <td>20</td>

                                                                                                                <td>8 </td>
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
                                                                                                                <td> 1000</td>
                                                                                                                <td>232345</td>
                                                                                                                <td>22</td>
                                                                                                                <td>20 </td>
                                                                                                                <td>0</td>
                                                                                                                <td>800 </td>
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
                                                                        </div>
                                                                  </section>
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
                )

    }
                export default FormerDetail;