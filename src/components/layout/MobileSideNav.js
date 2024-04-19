import React from "react";
import { Link } from "react-router-dom";

function MobileSideNav() {

    return (
        <div className="offcanvas offcanvas-start hp-mobile-sidebar style-5  " tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
            <div className="offcanvas-header justify-content-between align-items-end me-16 ms-24 mt-16 p-0">
                <div className="w-auto px-0">
                    <div className="hp-header-logo d-flex align-items-end">
                        <a href="#">
                            <img className="hp-logo hp-sidebar-visible" src="/assets/images/logo.png" alt="logo" />
                            <img className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="/assets/images/logo.png" alt="logo" />
                            <img className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="/assets/images/logo.png" alt="logo" />
                            <img className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none" src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-rtl.svg" alt="logo" />
                            <img className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block" src="assets/images/logo.png" alt="logo" /> </a>
                    </div>
                </div>
                <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden" data-bs-dismiss="offcanvas" aria-label="Close">
                    <button type="button" className="btn btn-text btn-icon-only"> <i className="ri-close-fill lh-1 hp-text-color-black-80 style-6"></i> </button>
                </div>
            </div>
            <div className="container-fluid">
                <div className="hp-sidebar-header-menu">
                    <div className="row justify-content-between align-items-end me-12 ms-24 mt-24">
                        <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-visible">
                            <button type="button" className="btn btn-text btn-icon-only"> <i className="ri-menu-unfold-line style-7"></i> </button>
                        </div>
                        <div className="w-auto px-0">
                            <div className="hp-header-logo d-flex align-items-end">
                                <a href="#">
                                    <img className="hp-logo hp-sidebar-visible" src="assets/images/icon.png" alt="logo" />
                                    <img className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="/assets/images/logo.png" alt="logo" />
                                    <img className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="/assets/images/logo.png" alt="logo" />
                                    <img className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none" src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-rtl.svg" alt="logo" />
                                    <img className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block" src="/assets/images/logo.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden">
                            <button type="button" className="btn btn-text btn-icon-only"> <i className="ri-menu-fold-line style-4"></i> </button>
                        </div>
                    </div>
                    <div className="mobile-menu top-40px">
                        <ul>
                            <li>
                                <ul>
                                    <li>
                                        <Link to="/" className="mob-submenu-item">
                                            <span>
                                                <i className="iconly-Curved-Home icn"></i>

                                                <span className="mbtxt">Dashboard</span>
                                            </span>

                                        </Link>

                                    </li>

                                    <li>
                                        <Link to="/simulation/manual/" className="mob-submenu-item">
                                            <span>
                                                <i class="iconly-Broken-Play icn"></i>
                                                <span className="mbtxt">What-If Analysis</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/farmer-forecast" className="mob-submenu-item">
                                            <span>
                                                <i class="iconly-Curved-Paper icn"></i>
                                                <span className="mbtxt">Upload and Test</span>
                                            </span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/personalize/pricing" className="mob-submenu-item">
                                            <span>
                                                <i class="iconly-Curved-Discount icn"></i>
                                                <span className="mbtxt">Personalized Pricing</span>
                                            </span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/create/model" className="mob-submenu-item">
                                            <span>
                                                <i class="iconly-Curved-Category icn"></i>
                                                <span className="mbtxt">Categories</span>
                                            </span>
                                        </Link>
                                    </li>








                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobileSideNav;