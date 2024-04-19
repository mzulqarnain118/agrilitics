import {Link} from "react-router-dom";

function GrainForecast() {

    return (
        <div className="hp-main-layout-content">
            <div className="row mb-32 gy-32">
                <div className="col-12">
                    <h3>
                        <Link to="/create-model">
                            <i className="hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i>
                        </Link>Grain Forecasting
                    </h3>
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
                                                <div className="col-6 col-md-1"></div>
                                                <div className="col-6 col-md-10">
                                                    <div className="row g-32">
                                                        <div className="col-6 col-md-12 ">
                                                            <ul className="nav nav-tabs  nav-justified" id="myTab"
                                                                role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link active" id="home-tab"
                                                                            data-bs-toggle="tab" data-bs-target="#home"
                                                                            type="button" role="tab"
                                                                            aria-controls="home"
                                                                            aria-selected="true">Wheat
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="rice"
                                                                            data-bs-toggle="tab"
                                                                            data-bs-target="#profile" type="button"
                                                                            role="tab" aria-controls="profile"
                                                                            aria-selected="false">Rice
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="contact-tab"
                                                                            data-bs-toggle="tab"
                                                                            data-bs-target="#soybean" type="button"
                                                                            role="tab" aria-controls="contact"
                                                                            aria-selected="false">Soybean
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="contact-tab"
                                                                            data-bs-toggle="tab"
                                                                            data-bs-target="#Cotton" type="button"
                                                                            role="tab" aria-controls="contact"
                                                                            aria-selected="false">Cotton
                                                                    </button>
                                                                </li>


                                                            </ul>

                                                            <div className="tab-content" id="myTabContent">
                                                                <div className="tab-pane fade show active" id="home"
                                                                     role="tabpanel" aria-labelledby="home-tab">

                                                                    <div className="pagetitle">

                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <h4>Wheat</h4>
                                                                                <p>Lorem Ipsum is simply dummy text of
                                                                                    the printing and typesetting
                                                                                    industry. </p>
                                                                                <hr/>
                                                                            </div>
                                                                            <div className="col-lg-7">

                                                                                <h1 className="mein-heading">Data
                                                                                    Selection</h1>
                                                                                <p>Get startd by dragging data here, or
                                                                                    import from:</p>
                                                                                <div className="topmargen12">
                                                                                    <button type="button"
                                                                                            className="btn btn-primary ">Data
                                                                                        Source
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">URL
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">Local
                                                                                        File
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">Import
                                                                                        API
                                                                                    </button>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-5">
                                                                                <h1 className="mein-heading">Browse</h1>
                                                                                <div className="browse-border">
                                                                                    <input className="form-control"
                                                                                           type="file" id="formFile"/>
                                                                                </div>
                                                                            </div>


                                                                            <div className="col-lg-12">
                                                                                <br/><br/>
                                                                                <div
                                                                                    className="text-center topmargen12">
                                                                                    <button type="submit"
                                                                                            className="btn btn-primary">Save
                                                                                        Changes
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="profile"
                                                                     role="tabpanel"
                                                                     aria-labelledby="profile-tab">
                                                                    <div className="pagetitle">

                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <h4>Rice</h4>
                                                                                <p>Lorem Ipsum is simply dummy text of
                                                                                    the printing and typesetting
                                                                                    industry. </p>
                                                                                <hr/>
                                                                            </div>
                                                                            <div className="col-lg-7">

                                                                                <h1 className="mein-heading">Data
                                                                                    Selection</h1>
                                                                                <p>Get startd by dragging data here, or
                                                                                    import from:</p>
                                                                                <div className="topmargen12">
                                                                                    <button type="button"
                                                                                            className="btn btn-primary ">Data
                                                                                        Source
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">URL
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">Local
                                                                                        File
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">Import
                                                                                        API
                                                                                    </button>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-5">
                                                                                <h1 className="mein-heading">Browse</h1>
                                                                                <div className="browse-border">
                                                                                    <input className="form-control"
                                                                                           type="file" id="formFile"/>
                                                                                </div>
                                                                            </div>


                                                                            <div className="col-lg-12">
                                                                                <br/><br/>
                                                                                <div
                                                                                    className="text-center topmargen12">
                                                                                    <button type="submit"
                                                                                            className="btn btn-primary">Save
                                                                                        Changes
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="contact"
                                                                     role="tabpanel"
                                                                     aria-labelledby="contact-tab">
                                                                    <div className="pagetitle">

                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <h4>Predicting Churn</h4>
                                                                                <p>Lorem Ipsum is simply dummy text of
                                                                                    the printing and typesetting
                                                                                    industry. </p>
                                                                                <hr/>
                                                                            </div>
                                                                            <div className="col-lg-7">

                                                                                <h1 className="mein-heading">Data
                                                                                    Selection</h1>
                                                                                <p>Get startd by dragging data here, or
                                                                                    import from:</p>
                                                                                <div className="topmargen12">
                                                                                    <button type="button"
                                                                                            className="btn btn-primary ">Data
                                                                                        Source
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">URL
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">Local
                                                                                        File
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            className="btn box-button">Import
                                                                                        API
                                                                                    </button>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-5">
                                                                                <h1 className="mein-heading">Browse</h1>
                                                                                <div className="browse-border">
                                                                                    <input className="form-control"
                                                                                           type="file" id="formFile"/>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-12">
                                                                                <br/><br/>
                                                                                <div
                                                                                    className="text-center topmargen12">
                                                                                    <button type="submit"
                                                                                            className="btn btn-primary">Save
                                                                                        Changes
                                                                                    </button>
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
                                        <div className="col-12 col-lg-6">
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

export default GrainForecast