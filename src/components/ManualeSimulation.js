import {Link} from "react-router-dom";

function ManualeSimulation() {
    const style = {
        width: "100%"
    };
    return (
        <div className="hp-main-layout-content">
            <div className="row mb-32 gy-32">
                <div className="col-12">
                    <h3><Link to="/forecast-details"><i
                        className="hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font back-button"></i></Link>
                        Simulation Manual churn</h3>
                    <p className="hp-p1-body mb-0">Your current status and analytics are here</p>
                </div>

                <div className="col-12">
                    <div className="row g-32">
                        <div className="col flex-grow-1 overflow-hidden">
                            <div className="row g-32">
                                <div className="col-12 margen30px">
                                    <section className="section dashboard">
                                        <div className="row">


                                            {/*Left side columns*/}
                                            <div className="col-6 col-md-6">
                                                <div className="row">

                                                    <div className="col-6 col-md-6">
                                                        <div className="card">
                                                            <div className="card-body ">
                                                                <h3 className="color-gd">Farmer Age</h3>
                                                                <div className="rang-date">24 years</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6">
                                                        <div className="card">
                                                            <div className="card-body ">
                                                                <h3 className="color-gd">Farmer Experience</h3>
                                                                <div className="rang-date">4 years</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 margen30px">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Crop Experience</h3>
                                                                <div className="rang-date">23 years</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 margen30px">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Farmer Gender</h3>
                                                                <div className="rang-date">Male</div>
                                                                <div className="slidecontainer">
                                                                    <fieldset data-role="controlgroup">


                                                                        <input type="radio" name="gender" id="male"
                                                                               value="male" defaultChecked={true}/>
                                                                        <label htmlFor="male">Male</label>
                                                                        <input type="radio" name="gender"
                                                                               id="female" value="female"/>
                                                                        <label htmlFor="female">Female</label>
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*    */}


                                                </div>
                                                <h3 className="margen30px">Household Characteristics</h3>

                                                <div className="row">

                                                    <div className="col-6 col-md-6">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Household Size</h3>
                                                                <div className="rang-date">22 Acre</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 ">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Credit Constraint</h3>
                                                                <div className="rang-date">3000$</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 margen30px">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Livestock</h3>
                                                                <div className="rang-date">223000</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 margen30px">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Household Type</h3>
                                                                <div className="rang-date">Own</div>
                                                                <div className="slidecontainer">
                                                                    <fieldset data-role="controlgroup">


                                                                        <input type="radio" name="gender" id="male"
                                                                               value="male" defaultChecked={true}/>
                                                                        <label htmlFor="male">Own</label>
                                                                        <input type="radio" name="gender"
                                                                               id="female" value="female"/>
                                                                        <label htmlFor="female">Rent</label>
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*    */}


                                                </div>

                                                {/**/}

                                                <h3 className="margen30px">Farm Related Characteristics</h3>

                                                <div className="row">

                                                    <div className="col-6 col-md-6 ">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Gross cropped area</h3>
                                                                <div className="rang-date">5 Acre</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 ">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Agriculture assets</h3>
                                                                <div className="rang-date">28000</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 margen30px">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Operational holding</h3>
                                                                <div className="rang-date">3000</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/**/}

                                                    <div className="col-6 col-md-6 margen30px">
                                                        <div className="card">
                                                            <div className="card-body r">
                                                                <h3 className="color-gd">Farm to road distance</h3>
                                                                <div className="rang-date">1KM</div>
                                                                <div className="slidecontainer">
                                                                    <input type="range" min="1" max="100" value="50"
                                                                           className="slider" id="myRange"
                                                                           style={style}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*    */}


                                                </div>


                                            </div>


                                            {/*Right side columns*/}
                                            <div className="col-lg-6">

                                                {/*Recent Activity*/}
                                                <div className="card">


                                                    <div className="card-body">
                                                        <h3 className=" ">Predict </h3>

                                                        <div className="col-lg-12">
                                                            <div className="row">

                                                                {/*Season Simulation*/}
                                                                <div className="col-lg-4">
                                                                    <h5 className="card-title"></h5>
                                                                </div>
                                                                <div className="col-lg-8">
                                                                    <a href="#">
                                                                        <img
                                                                            src="/assets/images/play-button.png"
                                                                            alt=""/> </a>
                                                                </div>


                                                                {/*END*/}


                                                                {/*Select Data Range*/}

                                                                <div className="col-lg-7 padcol">

                                                                    <div ng-app="dateRangeDemo"
                                                                         ng-controller="dateRangeCtrl">


                                                                        <rzslider
                                                                            rz-slider-model="dateRangeSlider.minValue"
                                                                            rz-slider-high="dateRangeSlider.maxValue"
                                                                            rz-slider-options="dateRangeSlider.options">
                                                                        </rzslider>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                {/*End Recent Activity*/}

                                                {/*Recent Activity*/}
                                                <div className="card margen30px">


                                                    <div className="card-body">
                                                        <h5 className="card-title ">Model Results </h5>

                                                        <div className="col-lg-12 padcol">
                                                            {/*Table with stripped rows*/}
                                                            <table className="table table-striped">

                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">Timestamp</th>
                                                                    <td>Decision Tree</td>
                                                                    <td>Naive Bayes</td>
                                                                    <td>Random Forest</td>
                                                                    <td>Support Vector Machine</td>
                                                                    <td>Logistic Regression</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">8/16/2022</th>
                                                                    <td>1 (0.6)</td>
                                                                    <td>0 (0.8)</td>
                                                                    <td>0 (0.4)</td>
                                                                    <td>1 (0.3)</td>
                                                                    <td>1 (0.7)</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">--</th>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">--</th>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">--</th>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="row">--</th>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                    <td>--</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                            {/*End Table with stripped rows*/}
                                                        </div>

                                                    </div>
                                                </div>
                                                {/*End Recent Activity*/}


                                            </div>
                                            {/*End Right side columns*/}

                                        </div>
                                    </section>


                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    );

}

export default ManualeSimulation;