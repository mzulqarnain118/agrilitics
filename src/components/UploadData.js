import { useEffect, useState } from "react";
import AnalyticalChart from "./charts/charts_statistic/AnalyticalChart";
import analyticalChart from "./charts/charts_statistic/AnalyticalChart";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import MobileSideNav from "./layout/MobileSideNav";
import { MakeApiCall } from "../api/MakeApiCall";
import $ from 'jquery'
function UploadData() {
    const [pieChart, setPieChart] = useState();
    const [barChart, setBarChart] = useState();
    useEffect(() => {
        $('.accordion-toggle').click(function () {
            $('.hiddenRow').hide();
            $(this).next('tr').find('.hiddenRow').show();
            $(this).next('tr').find(".collapse").show();
        })
    }, [0]);
    useEffect(() => {
        /* Pie chart */
        let pie_chart = AnalyticalChart([44, 55, 13], 'pie', ["rgba(0, 227, 150, 0.85)", "rgba(0, 143, 251, 0.85)", "rgb(225,255,27)"], '', ['Queensland', 'Melbourne', 'Perth'], "200%");
        /* Bar Chart*/
        let bar_chart_series = [{
            data: [400, 430, 448]
        },];
        let bar_chart = analyticalChart(bar_chart_series, "bar", ["rgba(0, 143, 251, 0.85)"], ['git remote set-url originQueensland', 'Melbourne', 'Perth'], '', "150%")
        /* Set Chart states */
        setPieChart(pie_chart);
        setBarChart(bar_chart);
    }, [0]);
    let token = localStorage.getItem('token');
    let file_Id = localStorage.getItem('file_id');
    const headsData = useSelector(state => state?.fileDataSlice?.fileHead);
    const tableHeads = useSelector(state => state.fileDataSlice.tableHeads);

    // console.log("tableHeads",headsData)
    let a ={a:'1',b:'2',c:'3'};
    let b ={a:'1',b:'4'};
    let c = {...a,...b};
    console.log(c,'test case');
    return (



        <div className="hp-main-layout-col">

            <MobileSideNav></MobileSideNav>
            <section className="section section-card mt-5">
                <div className="hp-main-layout-col">
              <div className="row  gy-32">
                <div className=" col-12 col-md-12 pos-rel">
                <h3 className="mt-30"> <Link to="/farmer-forecast"><i
                        className=" back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></Link>Data Description</h3>
                            <p className="hp-p1-body mb-0">Your data is ready prediction.</p>
                               
                                                                  {/* <button onClick={()=>getFileById()} type="button" className="btn btn-primary">Test</button> */}

                 <Link to="/test/models"> <button type="button" className="btn btn-primary mr-60 pos-abs1">Test</button></Link>
                </div>
                
                </div>
                </div>
            </section>




            <div className="row   gy-32">
           
                     
                <div className="col-12 width-screentab">
                   





                <div className="col-12">
                    <div className="row g-32" >
                        <div className="col flex-grow-1 overflow-hidden">
                            <div className="row g-32">
                                <div className="col-12 margen30px">
                                    <div className="row g-32">

                                        <div className="col-12 ">
                                            <div className="row g-32">

                                                <div className="col-12 col-md-12">
                                                    <div className="row g-32" >
                                                        <section className="section topmargen1">
                                                                <div>
                                                                {/* <div className="col-lg-12 col-12 col-md-12" >
                                                                    <div className=" style-24 mr-60 mb-30" >
                                                                             */}
                                                                    {/* <button onClick={()=>getFileById()} type="button" className="btn btn-primary">Test</button> */}

                                                                            {/* <Link to="/test/models"> <button type="button" className="btn btn-primary mt-10">Test</button></Link>
                                                                        </div>
                                                                    </div> */}
                                                                <div className="row">
                                                                    <div className="col-12 col-md-12">
                                                                            <div className="progress-stste mobile-hide">
                                                                                
                                                                            <div className="row">
                                                                                <div className="col-md-2 progreetest-bar ">
                                                                                    <span className="icon roundborder"><i
                                                                                        className="gareen-text ri-check-line"></i></span>
                                                                                    <span className="progreetest data-pro"> 1. Uploading
                                                                                        Data</span>
                                                                                </div>
                                                                                <div className="col-md-2 progreetest-bar">
                                                                                    <span className="icon roundborder"><i
                                                                                        className="gareen-text ri-check-line"></i></span>
                                                                                    <span className="progreetest data-pro"> 2. Reading
                                                                                        Raw Data  </span>
                                                                                </div>
                                                                                <div className="col-md-2 progreetest-bar">
                                                                                    <span className="icon roundborder" style={{ marginLeft: '32px' }}><i
                                                                                        className="gareen-text ri-check-line"></i></span>
                                                                                    <span className="progreetest data-pro"> 3.
                                                                                        Exploratory Data Analysis <span
                                                                                            className="progressspan">(coming soon)</span> </span>
                                                                                </div>
                                                                                {/* <div className="col-12 col-md-6 textend d-none">
                                                                                    Models will be trained on:
                                                                                    <input className="checkbox-res style-23"
                                                                                        type="checkbox" checked
                                                                                        value="Sold" />Sold
                                                                                    <input className="checkbox-res style-23"
                                                                                        type="checkbox" checked
                                                                                        value="Sold" />Volume
                                                                                    <input className="checkbox-res style-23"
                                                                                        type="checkbox" checked
                                                                                        value="Sold" />Price

                                                                                </div> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">

                                                                    <div className="col-md-12 ">
                                                                       
                                                                           
                                                                                
                                                                                    <div className="style-14 fixTableHead">
                                                                                        <table className="table table-striped  table1">
                                                                                            <thead className="t-fix">


                                                                                                <tr>


                                                                                                   
                                                                                                    {
                                                                                                        tableHeads.map((item, index) =>
                                                                                                            <th key={index}>
                                                                                                                {item}
                                                                                                            </th>)}
                                                                                                </tr>




                                                                                            </thead>
                                                                                            <tbody>

                                                                                                {
                                                                                                    headsData.map((item,index) =>
                                                                                                        <>
                                                                                                            <tr colspan="6"
                                                                                                                data-toggle="collapse"
                                                                                                                data-target="#demo1"
                                                                                                                className="accordion-toggle">
                                                                                                               
                                                                                                                {tableHeads && tableHeads.map((ind, i) => {
                                                                                                                    return <td key={i}>{typeof(headsData[index][i]) == 'number' ? headsData[index][i].toFixed(2) : headsData[index][i] }</td>
                                                                                                                })}

                                                                                                            </tr>
                                                                                                            
                                                                                                        </>
                                                                                                    )
                                                                                                }

                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                    {/* <nav aria-label="Page navigation example">
                                                                                        <ul
                                                                                            className="pagination justify-content-center">
                                                                                            <li className="page-item disabled">
                                                                                                <a className="page-link"
                                                                                                    href="#" tabindex="-1"
                                                                                                    aria-disabled="true">Previous</a>
                                                                                            </li>
                                                                                            <li className="page-item"><a
                                                                                                className="page-link"
                                                                                                href="#">1</a></li>
                                                                                            <li className="page-item"><a
                                                                                                className="page-link"
                                                                                                href="#">2</a></li>
                                                                                            <li className="page-item"><a
                                                                                                className="page-link"
                                                                                                href="#">3</a></li>
                                                                                            <li className="page-item">
                                                                                                <a className="page-link"
                                                                                                    href="#">Next</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </nav> */}

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
    )
}

export default UploadData;