import { Link } from "react-router-dom";
import MobileSideNav from "./layout/MobileSideNav";
function CreateModel() {
    const imgStyle = {
        width: "120px",
    };
    const styleTwo = {
        opacity: "0.4"
    }
    return (
        <div className="hp-main-layout-col">

            <MobileSideNav></MobileSideNav>
            <div>
            <div className="row mb-32 gy-32">
                <div className="col-12  ">
                    <h3 className=" mt-10"> <Link to="/"><i
                        className="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></Link>Categories
                    </h3>
                    <p className="hp-p1-body mb-0 mt-3">All of the categories are listed here</p>
                </div>

                <div className="col-12 mt-3">
                    <div className="row g-32  mb-120">
                        <div className="col flex-grow-1 overflow-hidden">
                            <div className="row g-32">


                                <div className="col-12">
                                    <div className="row g-32">
                                         

                                        <div className="col-12 col-sm-6  col-md-3 col-lg-3 col-xl-3 " style={styleTwo}>
                                            <div className="card hp-card-2">
                                                <div className="card-body p-16">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <div className="border-solid">
                                                                <a href="#">
                                                                    <img src="/assets/images/icon-1.png"
                                                                        style={imgStyle} />

                                                                    <h4 className="mb-0">Grain Forecasting</h4>

                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6  col-md-3 col-lg-3 col-xl-3">
                                            <div className="card hp-card-2 model-hover ">
                                                <div className="card-body p-16">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <Link to="/farmer-forecast">
                                                                <div className="border-solid">

                                                                    <img src="/assets/images/icon-2.png"
                                                                        style={imgStyle} />

                                                                    <h4 className="mb-0 ">Farmer analytics</h4>


                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6  col-md-3 col-lg-3 col-xl-3" style={styleTwo}>
                                            <div className="card hp-card-2">
                                                <div className="card-body p-16">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <div className="border-solid">
                                                                <a href="#">
                                                                    <img src="/assets/images/icon-3.png"
                                                                        style={imgStyle} />

                                                                    <h4 className="mb-0">Transportation</h4>

                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12 col-sm-6  col-md-3 col-lg-3 col-xl-3" style={styleTwo}>
                                            <div className="card hp-card-2">
                                                <div className="card-body p-16">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <div className="border-solid">
                                                                <a href="#">
                                                                    <img src="/assets/images/icon-4.png"
                                                                        style={imgStyle} />

                                                                    <h4 className="mb-0">Animal Farming</h4>

                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-12 col-sm-6  col-md-3 col-lg-3 col-xl-3" style={styleTwo}>
                                            <div className="card hp-card-2">
                                                <div className="card-body p-16">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <div className="border-solid">
                                                                <a href="#">
                                                                    <img src="/assets/images/icon-5.png"
                                                                        style={imgStyle} />

                                                                    <h4 className="mb-0">Agri Vision</h4>

                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6  col-md-3 col-lg-3 col-xl-3" style={styleTwo}>
                                            <div className="card hp-card-2">
                                                <div className="card-body p-16">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <div className="border-solid">
                                                                <a href="#">
                                                                    <img src="/assets/images/icon-6.png"
                                                                        style={imgStyle} />

                                                                    <h4 className="mb-0">Simulation</h4>

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
    )
}

export default CreateModel;
