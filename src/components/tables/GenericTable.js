import {useEffect} from "react";
import $ from "jquery";
import {Link} from "react-router-dom";

function GenericTable() {
    const style = {
        overflow: "auto"
    };
    useEffect(() => {
        $('.accordion-toggle').click(function () {
            $('.hiddenRow').hide();
            $(this).next('tr').find('.hiddenRow').show();
            $(this).next('tr').find(".collapse").show();
        })
    }, [0])
    return (
        <div className="" style={style}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th><input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"/></th>
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
                <tr colspan="6"
                    data-toggle="collapse"
                    data-target="#demo1"
                    className="accordion-toggle">
                    <td><input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"/></td>
                    <td>Queensland</td>
                    <td> 26587</td>
                    <td> 176586</td>
                    <td>20</td>
                    <td>18</td>
                    <td>1</td>
                    <td>12543</td>
                    <td>0</td>

                </tr>
                <tr className="p">
                    <td colSpan="12"
                        className="hiddenRow">
                        <div
                            className="accordian-body collapse p-3"
                            id="demo1">
                            <div className="tabheading">


                                <div className="row">

                                    <div
                                        className="col-6 col-md-6 ">

                                        <div
                                            className="card">
                                            <div
                                                className="card-body">
                                                <div
                                                    className="row">

                                                    <h3>Churn
                                                        Analytics
                                                    </h3>

                                                    <hr/>

                                                    <div
                                                        className="col-6 col-md-8 ">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example">
                                                            <option
                                                                selected
                                                                value="0">
                                                                Price
                                                            </option>
                                                            <option
                                                                value="1">
                                                                State
                                                            </option>
                                                            <option
                                                                value="2">
                                                                Area
                                                                Under
                                                                Cultivation
                                                            </option>
                                                            <option
                                                                value="3">
                                                                Farming
                                                                Experience
                                                            </option>
                                                            <option
                                                                value="4">
                                                                Crop
                                                                Experience
                                                            </option>
                                                            <option
                                                                value="5">
                                                                Is
                                                                Educated
                                                            </option>
                                                            <option
                                                                value="6">
                                                                Farm
                                                                to
                                                                road
                                                                Distance
                                                            </option>
                                                            <option
                                                                value="7">
                                                                Churn
                                                            </option>

                                                        </select>
                                                    </div>

                                                    <div
                                                        className="col-6 col-md-4 ">
                                                        <Link
                                                            to="/manual-simulation">
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
                                        className="col-6 col-md-6 ">

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
                        id="gridCheck1"/></td>
                    <td>Melbourne</td>
                    <td> 45879</td>
                    <td> 15486</td>
                    <td>30</td>
                    <td>10</td>
                    <td>0</td>
                    <td>25698</td>
                    <td>1</td>
                </tr>
                <tr className="p">
                    <td colSpan="12"
                        className="hiddenRow">
                        <div
                            className="accordian-body collapse p-3"
                            id="demo3">
                            <div className="tabheading">
                                                                                                    <span
                                                                                                        className="yellowcolor">
                                                                                                        Histogram</span>
                                Frequent values
                                Table Var Type
                                Transform
                            </div>
                            <h1 className="text-center">
                                Charts</h1>
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
                        id="gridCheck1"/></td>
                    <td>Brisbane</td>
                    <td> 14785</td>
                    <td>2345</td>
                    <td>20</td>
                    <td>50</td>
                    <td>1</td>
                    <td>14853</td>
                    <td>1</td>
                </tr>
                <tr className="p">
                    <td colSpan="12"
                        className="hiddenRow">
                        <div
                            className="accordian-body collapse p-3"
                            id="demo4">
                            <div className="tabheading">
                                                                                                    <span
                                                                                                        className="yellowcolor">
                                                                                                        Histogram</span>
                                Frequent values
                                Table Var Type
                                Transform
                            </div>

                            <h1 className="text-center">
                                Charts</h1>
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
                        id="gridCheck1"/></td>
                    <td>Queensland</td>
                    <td> 26587</td>
                    <td> 176586</td>
                    <td>20</td>
                    <td>18</td>
                    <td>1</td>
                    <td>12543</td>
                    <td>0</td>
                </tr>
                <tr className="p">
                    <td colSpan="12"
                        className="hiddenRow">
                        <div
                            className="accordian-body collapse p-3"
                            id="demo5">
                            <div className="tabheading">
                                                                                                    <span
                                                                                                        className="yellowcolor">
                                                                                                        Histogram</span>
                                Frequent values
                                Table Var Type
                                Transform
                            </div>
                            <h1 className="text-center">
                                Charts</h1>
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
                        id="gridCheck1"/></td>
                    <td>Perth</td>
                    <td>145879</td>
                    <td>2345</td>
                    <td>50</td>
                    <td>40</td>
                    <td>1</td>
                    <td>1200</td>
                    <td>0</td>
                </tr>
                <tr className="p">
                    <td colSpan="12"
                        className="hiddenRow">
                        <div
                            className="accordian-body collapse p-3"
                            id="demo6">
                            <div className="tabheading">
                                                                                                    <span
                                                                                                        className="yellowcolor">
                                                                                                        Histogram</span>
                                Frequent values
                                Table Var Type
                                Transform
                            </div>

                            <h1 className="text-center">
                                Charts</h1>
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
                        id="gridCheck1"/></td>
                    <td>Sydney</td>
                    <td> 85000</td>
                    <td>2345</td>
                    <td>20</td>
                    <td>10</td>
                    <td>0</td>
                    <td>12500</td>
                    <td>0</td>
                </tr>
                <tr className="p">
                    <td colSpan="12"
                        className="hiddenRow">
                        <div
                            className="accordian-body collapse p-3"
                            id="demo7">
                            <div className="tabheading">
                                                                                                    <span
                                                                                                        className="yellowcolor">
                                                                                                        Histogram</span>
                                Frequent values
                                Table Var Type
                                Transform
                            </div>

                            <h1 className="text-center">
                                Charts</h1>
                        </div>
                    </td>
                </tr>


                </tbody>
            </table>
        </div>

    )
}

export default GenericTable;