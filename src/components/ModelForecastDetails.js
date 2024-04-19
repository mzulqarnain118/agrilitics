import {Link} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useState} from "react";
import ScatterChart from "./charts/charts_statistic/ScatterChart";
import analyticalChart from "./charts/charts_statistic/AnalyticalChart";
import AnalyticalChart from "./charts/charts_statistic/AnalyticalChart";

function ModelForecastDetails() {
    const [scatterChart, setScatterChart] = useState();
    const [growthRateChart, setGrowthRateChart] = useState();
    const [churnChart, setChurnChart] = useState();
    const inputStyle = {
        width: "100%"
    };
    useEffect(() => {
        $('.accordion-toggle').click(function () {
            $('.hiddenRow').hide();
            $(this).next('tr').find('.hiddenRow').show();
            $(this).next('tr').find(".collapse").show();
        })
    }, [0]);
    /* Plot chart here */
    useEffect(() => {
        /* Chart Five */
        let scatter_chart_series =
            [
                {
                    name: "Nike",
                    data: [
                        [16.4, 5.4],
                        [21.7, 2],
                        [25.4, 3],
                        [19, 2],
                        [10.9, 1],
                        [13.6, 3.2],
                        [10.9, 7.4],
                        [10.9, 0],
                        [10.9, 8.2],
                        [16.4, 0],
                        [16.4, 1.8],
                        [13.6, 0.3],
                        [13.6, 0],
                        [29.9, 0],
                        [27.1, 2.3],
                        [16.4, 0],
                        [13.6, 3.7],
                        [10.9, 5.2],
                        [16.4, 6.5],
                        [10.9, 0],
                        [24.5, 7.1],
                        [10.9, 0],
                        [8.1, 4.7],
                        [19, 0],
                        [21.7, 1.8],
                        [27.1, 0],
                        [24.5, 0],
                        [27.1, 0],
                        [29.9, 1.5],
                        [27.1, 0.8],
                        [22.1, 2],
                    ],
                },
                {
                    name: "Adidas",
                    data: [
                        [36.4, 13.4],
                        [1.7, 11],
                        [5.4, 8],
                        [9, 17],
                        [1.9, 4],
                        [3.6, 12.2],
                        [1.9, 14.4],
                        [1.9, 9],
                        [1.9, 13.2],
                        [1.4, 7],
                        [6.4, 8.8],
                        [3.6, 4.3],
                        [1.6, 10],
                        [9.9, 2],
                        [7.1, 15],
                        [1.4, 0],
                        [3.6, 13.7],
                        [1.9, 15.2],
                        [6.4, 16.5],
                        [0.9, 10],
                        [4.5, 17.1],
                        [10.9, 10],
                        [0.1, 14.7],
                        [9, 10],
                        [12.7, 11.8],
                        [2.1, 10],
                        [2.5, 10],
                        [27.1, 10],
                        [2.9, 11.5],
                        [7.1, 10.8],
                        [2.1, 12],
                    ],
                },
                {
                    name: "Puma",
                    data: [
                        [21.7, 3],
                        [23.6, 3.5],
                        [24.6, 3],
                        [29.9, 3],
                        [21.7, 20],
                        [23, 2],
                        [10.9, 3],
                        [28, 4],
                        [27.1, 0.3],
                        [16.4, 4],
                        [13.6, 0],
                        [19, 5],
                        [22.4, 3],
                        [24.5, 3],
                        [32.6, 3],
                        [27.1, 4],
                        [29.6, 6],
                        [31.6, 8],
                        [21.6, 5],
                        [20.9, 4],
                        [22.4, 0],
                        [32.6, 10.3],
                        [29.7, 20.8],
                        [24.5, 0.8],
                        [21.4, 0],
                        [21.7, 6.9],
                        [28.6, 7.7],
                        [15.4, 0],
                        [18.1, 0],
                        [33.4, 0],
                        [16.4, 0],
                    ],
                },
            ];
        let scatter_chart = ScatterChart(scatter_chart_series, "scatter", ["#00F7BF", "#55B1F3", "#81b73c"]);
        /* Growth rate */
        let growth_rate_series = [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
        ];
        let growth_rate = analyticalChart(growth_rate_series, "bar", ["rgba(0, 227, 150, 0.85)", "rgba(0, 143, 251, 0.85)", "rgb(254, 176, 25)"], [2001, 2002, 2003, 2004, 2005, 2006, 2007], undefined, '250%', "bottom")
        /* Churn Vs Not Churn */
        let churn_ceries = [44, 55, 13, 43, 22];
        let churn_chart = AnalyticalChart(churn_ceries, 'pie', ["rgba(0, 227, 150, 0.85)", "rgba(0, 143, 251, 0.85)", "rgb(254, 176, 25)"], '',  ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],'250%')

        /* Set  charts */
        setScatterChart(scatter_chart);
        setGrowthRateChart(growth_rate);
        setChurnChart(churn_chart);
    }, [0]);

    /* end */
    return (<div className="hp-main-layout-content">
        <div className="row mb-32 gy-32">
            <div className="col-12">
                <h3>
                    <Link to="/create-model"><i
                        className="hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font back-button"></i></Link>Farmer
                    Analytics</h3>
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
                                                    <div className="col-4 col-md-4 ">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="row justify-content-between">
                                                                    <div className="min-heightcol">
                                                                        <h5 className="me-8">Churn Vs Not Churn</h5>
                                                                    </div>
                                                                </div>
                                                                <div id="line-chart" className="overflow-hidden">
                                                                    {churnChart}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-md-4 ">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="row justify-content-between">
                                                                    <div className="min-heightcol">
                                                                        <h5 className="me-8">Churn By State</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-between">
                                                                </div>
                                                                <div id="radialbar-chart">{growthRateChart}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-md-4 ">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="row justify-content-between">
                                                                    <div className="min-heightcol">
                                                                        <h5 className="me-8">Churn By Grain
                                                                            Type</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-between">
                                                                </div>
                                                                <div id="scatter-chart">{scatterChart}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="card">
                                                            <section className="section topmargen1">
                                                                <div>
                                                                    <div className="row">

                                                                        <div className="col-md-12">

                                                                        </div>
                                                                    </div>
                                                                    <div className="row">


                                                                        <div className="col-md-12 ">


                                                                            <section className="section">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className=""
                                                                                             style={{overflow: "auto"}}>
                                                                                            <table
                                                                                                className="table table-striped">
                                                                                                <thead>
                                                                                                <tr>
                                                                                                    <th>
                                                                                                        <input
                                                                                                            className="form-check-input"
                                                                                                            type="checkbox"
                                                                                                            id="gridCheck1"/>
                                                                                                    </th>
                                                                                                    <th>Feature
                                                                                                        Name
                                                                                                    </th>
                                                                                                    <th>Data
                                                                                                        Quality
                                                                                                    </th>
                                                                                                    <th>Var
                                                                                                        Type
                                                                                                    </th>
                                                                                                    <th>Index
                                                                                                    </th>

                                                                                                    <th>Unique
                                                                                                    </th>


                                                                                                    <th>Missing
                                                                                                    </th>
                                                                                                    <th>Mean
                                                                                                    </th>
                                                                                                    <th>Std
                                                                                                        Dev
                                                                                                    </th>
                                                                                                    <th>Median
                                                                                                    </th>
                                                                                                    <th>Min
                                                                                                    </th>
                                                                                                    <th>Max
                                                                                                    </th>
                                                                                                </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                <tr colspan="6"
                                                                                                    data-toggle="collapse"
                                                                                                    data-target="#demo1"
                                                                                                    className="accordion-toggle">
                                                                                                    <td><input
                                                                                                        className="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        id="gridCheck1"/>
                                                                                                    </td>
                                                                                                    <td>State
                                                                                                    </td>
                                                                                                    <td> -
                                                                                                    </td>
                                                                                                    <td>Numeric
                                                                                                    </td>
                                                                                                    <td> 51
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>
                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>14.80
                                                                                                    </td>
                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>
                                                                                                    <td>50
                                                                                                    </td>
                                                                                                    <td>520
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    className="p">
                                                                                                    <td colSpan="12"
                                                                                                        className="hiddenRow">
                                                                                                        <div
                                                                                                            className="accordian-body collapse p-3"
                                                                                                            id="demo1">
                                                                                                            <div
                                                                                                                className="tabheading">


                                                                                                                <div
                                                                                                                    className="row">

                                                                                                                    <div
                                                                                                                        className="col-6 col-md-6 ">

                                                                                                                        <div
                                                                                                                            className="card">
                                                                                                                            <div
                                                                                                                                className="card-body">
                                                                                                                                <div
                                                                                                                                    className="row">

                                                                                                                                    <h3>Churn
                                                                                                                                        Analytics</h3>

                                                                                                                                    <hr/>


                                                                                                                                    <div
                                                                                                                                        className="col-6 col-md-8 ">
                                                                                                                                        <select
                                                                                                                                            className="form-select"
                                                                                                                                            aria-label="Default select example">
                                                                                                                                            <option
                                                                                                                                                selected="">Price
                                                                                                                                            </option>
                                                                                                                                            <option
                                                                                                                                                value="1">Area
                                                                                                                                                Under
                                                                                                                                                Cultivation
                                                                                                                                            </option>
                                                                                                                                            <option
                                                                                                                                                value="1">State
                                                                                                                                            </option>
                                                                                                                                            <option
                                                                                                                                                value="2">Farming
                                                                                                                                                Experience
                                                                                                                                            </option>
                                                                                                                                            <option
                                                                                                                                                value="3">Crop
                                                                                                                                                Experience
                                                                                                                                            </option>
                                                                                                                                            <option
                                                                                                                                                value="3">Is
                                                                                                                                                Educated
                                                                                                                                            </option>
                                                                                                                                            <option
                                                                                                                                                value="3">Farm
                                                                                                                                                to
                                                                                                                                                road
                                                                                                                                                Distance
                                                                                                                                            </option>
                                                                                                                                            <option
                                                                                                                                                value="3">Churn
                                                                                                                                            </option>
                                                                                                                                        </select>
                                                                                                                                    </div>

                                                                                                                                    <div
                                                                                                                                        className="col-6 col-md-4 ">
                                                                                                                                        <Link
                                                                                                                                            to="/forecast-details">
                                                                                                                                            <button
                                                                                                                                                type="submit"
                                                                                                                                                className="btn btn-primary">Run
                                                                                                                                                Model
                                                                                                                                            </button>
                                                                                                                                        </Link>
                                                                                                                                    </div>


                                                                                                                                    <div
                                                                                                                                        className="col-12 col-md-12 ">
                                                                                                                                        <hr/>

                                                                                                                                        <div
                                                                                                                                            className="text-center topmargen12">

                                                                                                                                            <Link
                                                                                                                                                to="/manual-simulation">Simulation
                                                                                                                                                Manual
                                                                                                                                                Churn</Link>

                                                                                                                                        </div>

                                                                                                                                    </div>

                                                                                                                                </div>

                                                                                                                            </div>

                                                                                                                        </div>


                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="col-6 col-md-6 text-center ">

                                                                                                                        <img
                                                                                                                            src="/assets/images/chart.png"/>

                                                                                                                    </div>

                                                                                                                </div>


                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>


                                                                                                <tr colspan="6"
                                                                                                    data-toggle="collapse"
                                                                                                    data-target="#demo3"
                                                                                                    className="accordion-toggle">
                                                                                                    <td><input
                                                                                                        className="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        id="gridCheck1"/>
                                                                                                    </td>
                                                                                                    <td>State
                                                                                                    </td>
                                                                                                    <td> -
                                                                                                    </td>
                                                                                                    <td>Numeric
                                                                                                    </td>
                                                                                                    <td> 51
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>


                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>14.80
                                                                                                    </td>

                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>
                                                                                                    <td>50
                                                                                                    </td>
                                                                                                    <td>520
                                                                                                    </td>


                                                                                                </tr>
                                                                                                <tr
                                                                                                    className="p">
                                                                                                    <td colSpan="12"
                                                                                                        className="hiddenRow">
                                                                                                        <div
                                                                                                            className="accordian-body collapse p-3"
                                                                                                            id="demo3">
                                                                                                            <div
                                                                                                                className="tabheading">
                                                                                                                            <span
                                                                                                                                className="yellowcolor">
                                                                                                                                Histogram</span>
                                                                                                                Frequent
                                                                                                                values
                                                                                                                Table
                                                                                                                Var
                                                                                                                Type
                                                                                                                Transform
                                                                                                            </div>

                                                                                                            <h1
                                                                                                                className="text-center">
                                                                                                                Charts
                                                                                                            </h1>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>


                                                                                                <tr colspan="6"
                                                                                                    data-toggle="collapse"
                                                                                                    data-target="#demo4"
                                                                                                    className="accordion-toggle">
                                                                                                    <td><input
                                                                                                        className="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        id="gridCheck1"/>
                                                                                                    </td>
                                                                                                    <td>State
                                                                                                    </td>
                                                                                                    <td> -
                                                                                                    </td>
                                                                                                    <td>Numeric
                                                                                                    </td>
                                                                                                    <td> 51
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>


                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>14.80
                                                                                                    </td>

                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>
                                                                                                    <td>50
                                                                                                    </td>
                                                                                                    <td>520
                                                                                                    </td>


                                                                                                </tr>
                                                                                                <tr
                                                                                                    className="p">
                                                                                                    <td colSpan="12"
                                                                                                        className="hiddenRow">
                                                                                                        <div
                                                                                                            className="accordian-body collapse p-3"
                                                                                                            id="demo4">
                                                                                                            <div
                                                                                                                className="tabheading">
                                                                                                                            <span
                                                                                                                                className="yellowcolor">
                                                                                                                                Histogram</span>
                                                                                                                Frequent
                                                                                                                values
                                                                                                                Table
                                                                                                                Var
                                                                                                                Type
                                                                                                                Transform
                                                                                                            </div>

                                                                                                            <h1
                                                                                                                className="text-center">
                                                                                                                Charts
                                                                                                            </h1>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>


                                                                                                <tr colspan="6"
                                                                                                    data-toggle="collapse"
                                                                                                    data-target="#demo5"
                                                                                                    className="accordion-toggle">
                                                                                                    <td><input
                                                                                                        className="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        id="gridCheck1"/>
                                                                                                    </td>
                                                                                                    <td>State
                                                                                                    </td>
                                                                                                    <td> -
                                                                                                    </td>
                                                                                                    <td>Numeric
                                                                                                    </td>
                                                                                                    <td> 51
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>


                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>14.80
                                                                                                    </td>

                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>
                                                                                                    <td>50
                                                                                                    </td>
                                                                                                    <td>520
                                                                                                    </td>


                                                                                                </tr>
                                                                                                <tr
                                                                                                    className="p">
                                                                                                    <td colSpan="12"
                                                                                                        className="hiddenRow">
                                                                                                        <div
                                                                                                            className="accordian-body collapse p-3"
                                                                                                            id="demo5">
                                                                                                            <div
                                                                                                                className="tabheading">
                                                                                                                            <span
                                                                                                                                className="yellowcolor">
                                                                                                                                Histogram</span>
                                                                                                                Frequent
                                                                                                                values
                                                                                                                Table
                                                                                                                Var
                                                                                                                Type
                                                                                                                Transform
                                                                                                            </div>

                                                                                                            <h1
                                                                                                                className="text-center">
                                                                                                                Charts
                                                                                                            </h1>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>


                                                                                                <tr colspan="6"
                                                                                                    data-toggle="collapse"
                                                                                                    data-target="#demo6"
                                                                                                    className="accordion-toggle">
                                                                                                    <td><input
                                                                                                        className="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        id="gridCheck1"/>
                                                                                                    </td>
                                                                                                    <td>State
                                                                                                    </td>
                                                                                                    <td> -
                                                                                                    </td>
                                                                                                    <td>Numeric
                                                                                                    </td>
                                                                                                    <td> 51
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>


                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>14.80
                                                                                                    </td>

                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>
                                                                                                    <td>50
                                                                                                    </td>
                                                                                                    <td>520
                                                                                                    </td>


                                                                                                </tr>
                                                                                                <tr
                                                                                                    className="p">
                                                                                                    <td colSpan="12"
                                                                                                        className="hiddenRow">
                                                                                                        <div
                                                                                                            className="accordian-body collapse p-3"
                                                                                                            id="demo6">
                                                                                                            <div
                                                                                                                className="tabheading">
                                                                                                                            <span
                                                                                                                                className="yellowcolor">
                                                                                                                                Histogram</span>
                                                                                                                Frequent
                                                                                                                values
                                                                                                                Table
                                                                                                                Var
                                                                                                                Type
                                                                                                                Transform
                                                                                                            </div>

                                                                                                            <h1
                                                                                                                className="text-center">
                                                                                                                Charts
                                                                                                            </h1>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>

                                                                                                <tr colspan="6"
                                                                                                    data-toggle="collapse"
                                                                                                    data-target="#demo7"
                                                                                                    className="accordion-toggle">
                                                                                                    <td><input
                                                                                                        className="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        id="gridCheck1"/>
                                                                                                    </td>
                                                                                                    <td>State
                                                                                                    </td>
                                                                                                    <td> -
                                                                                                    </td>
                                                                                                    <td>Numeric
                                                                                                    </td>
                                                                                                    <td> 51
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>


                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>14.80
                                                                                                    </td>

                                                                                                    <td> 26
                                                                                                    </td>
                                                                                                    <td>0
                                                                                                    </td>
                                                                                                    <td>50
                                                                                                    </td>
                                                                                                    <td>520
                                                                                                    </td>


                                                                                                </tr>
                                                                                                <tr
                                                                                                    className="p">
                                                                                                    <td colSpan="12"
                                                                                                        className="hiddenRow">
                                                                                                        <div
                                                                                                            className="accordian-body collapse p-3"
                                                                                                            id="demo7">
                                                                                                            <div
                                                                                                                className="tabheading">
                                                                                                                            <span
                                                                                                                                className="yellowcolor">
                                                                                                                                Histogram</span>
                                                                                                                Frequent
                                                                                                                values
                                                                                                                Table
                                                                                                                Var
                                                                                                                Type
                                                                                                                Transform
                                                                                                            </div>

                                                                                                            <h1
                                                                                                                className="text-center">
                                                                                                                Charts
                                                                                                            </h1>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>


                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>

                                                                                        <nav
                                                                                            aria-label="Page navigation example">
                                                                                            <ul
                                                                                                className="pagination justify-content-center">
                                                                                                <li
                                                                                                    className="page-item disabled">
                                                                                                    <a className="page-link"
                                                                                                       href="#"
                                                                                                       tabIndex="-1"
                                                                                                       aria-disabled="true">Previous</a>
                                                                                                </li>
                                                                                                <li
                                                                                                    className="page-item">
                                                                                                    <a className="page-link"
                                                                                                       href="#">1</a>
                                                                                                </li>
                                                                                                <li
                                                                                                    className="page-item">
                                                                                                    <a className="page-link"
                                                                                                       href="#">2</a>
                                                                                                </li>
                                                                                                <li
                                                                                                    className="page-item">
                                                                                                    <a className="page-link"
                                                                                                       href="#">3</a>
                                                                                                </li>
                                                                                                <li
                                                                                                    className="page-item">
                                                                                                    <a className="page-link"
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
    </div>)
}

export default ModelForecastDetails