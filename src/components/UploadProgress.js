import React from "react";
import { Link } from "react-router-dom";
import './assets/css/upload-progress.css';
import MobileSideNav from "./layout/MobileSideNav";
function UploadProgress() {

    return (

        <div className="hp-main-layout-content">
            <MobileSideNav></MobileSideNav>
            <div className="row mb-32 gy-32">
                <div className="col-8">
                    <h3> <a href="upload-data.html"><i className="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font" ></i></a>Traning Models</h3>
                    <p className="hp-p1-body mb-0">Please wait, following models are being tained:</p>
                </div>
                <div className="col-4">

                </div>
                <div className="col-12">
                    <div className="row g-32">
                        <div className="col flex-grow-1 overflow-hidden style-14">
                            <div className="row g-32">
                                <div className="col-12 margen30px">
                                    <div className="row g-32">

                                        <div className="col-12 ">
                                            <div className="row g-32">





                                                <section className="section">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="startpre">
                                                                <table className="table">
                                                                    <Link to="/test/models">
                                                                        <tr>
                                                                            <th scope="col" ><input className="form-check-input" type="checkbox" id="gridCheck1" /></th>
                                                                            <th scope="col text-center images-size style-25">
                                                                                <center>
                                                                                    <img className="style-26" src="assets/images/dt-logo.png " alt="" />
                                                                                </center>
                                                                            </th>
                                                                            <th scope="col style-27 ">  <span className="tabfont">Decision Tree</span>
                                                                                <span className="tabfont-span">  algorithm</span>
                                                                            </th>
                                                                            <th scope="col" style={{ width: '150px', display: 'block0', marginTop: '39%' }}>
                                                                                <div className="progress">
                                                                                    <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-value now="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                                                                </div>
                                                                            </th>
                                                                            <th className="tabfont center" >Informative Features
                                                                                64.0%
                                                                            </th>
                                                                            <th className="tabfont">0.1678</th>
                                                                            <th className="tabfont">0.1580</th>
                                                                            <th className="tabfont">  <a href="upload-testmodel.html"><i className="hp-text-color-dark-0 ri-2x ri-arrow-right-line"></i>
                                                                            </a>
                                                                            </th>

                                                                        </tr>
                                                                    </Link>
                                                                </table>
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
    )
}

export default UploadProgress;