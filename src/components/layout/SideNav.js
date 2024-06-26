import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
function SideNav() {
    const userDetails = useSelector(state => state.user.userDetails)

    const IconStyle = {
        fontSize: "16px"
    };
    return (

        <>


            <div className="hp-sidebar hp-bg-color-black-0 hp-bg-color-dark-100">
                <div className="hp-sidebar-container">
                    <div className="hp-sidebar-header-menu">
                        <div className="row justify-content-between align-items-end me-12 ms-24 mt-24">
                            <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-visible">
                                <button type="button" className="btn btn-text btn-icon-only">
                                    <i className="ri-menu-unfold-line" style={IconStyle}></i>
                                </button>
                            </div>

                            <div className="w-auto px-0">
                                <div className="hp-header-logo d-flex align-items-end">
                                    <Link to="/">
                                        <img className="hp-logo hp-sidebar-visible" src="/assets/images/icon.png"
                                            alt="logo" />
                                        <img className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none"
                                            src="/assets/images/logo.png" alt="logo" />
                                        <img className="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block"
                                            src="/assets/images/logo.png" alt="logo" />
                                        <img className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none"
                                            src="https://yoda.hypeople.studio/yoda-admin-template/app-assets/img/logo/logo-rtl.svg"
                                            alt="logo" />
                                        <img
                                            className="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block"
                                            src="/assets/images/logo.png" alt="logo" />
                                    </Link>


                                </div>
                            </div>

                            <div className="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden">
                                <button type="button" className="btn btn-text btn-icon-only">
                                    <i className="ri-menu-fold-line" style={IconStyle}></i>
                                </button>
                            </div>
                        </div>

                        <ul>
                            <li>


                                <ul>
                                    <li>
                                        <Link to="/" className="submenu-item">
                                            <span>
                                                <i className="iconly-Curved-Home"></i>

                                                <span>Dashboard</span>
                                            </span>

                                        </Link>

                                    </li>

                                    <li>
                                        <Link to="/simulation/manual/" className="submenu-item">
                                            <span>
                                                <i class="iconly-Broken-Play"></i>
                                                <span>What-If Analysis</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/farmer-forecast" className="submenu-item">
                                            <span>
                                                <i class="iconly-Curved-Paper" ></i>
                                                <span>Upload and Test</span>
                                            </span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/personalize/pricing" className="submenu-item">
                                            <span>
                                            <i class="iconly-Curved-Discount"></i>
                                                <span>Personalized Pricing</span>
                                            </span>
                                        </Link>
                                    </li>


                                    <li>
                                        <Link to="/create/model" className="submenu-item">
                                            <span>
                                                <i class="iconly-Curved-Category"></i>
                                                <span>Categories</span>
                                            </span>
                                        </Link>
                                    </li>




                                    {/* <li className="opacity-25">
                                <a href="#" className="submenu-item">
                                        <span>
                                            <i className="iconly-Curved-Category"></i>
                                            <span>Insight</span>
                                        </span>
                                </a>
                            </li> */}

                                    {/* <li  className="opacity-25">
                                <a href="#" className="submenu-item">
                                        <span>
                                            <i className="iconly-Curved-Discount"></i>
                                            <span>Simulation</span>
                                        </span>
                                </a>
                            </li> */}

                                    {/* <li  className="opacity-25">
                                <a href="#" className="submenu-item">
                                        <span>
                                            <i className="iconly-Curved-Graph"></i>
                                            <span>Parameter</span>
                                        </span>
                                </a>
                            </li> */}

                                    {/* 
                            <li  className="opacity-25">
                                <a href="#" className="submenu-item">
                                        <span>
                                            <i className="iconly-Curved-Buy"></i>
                                            <span>Products</span>
                                        </span>
                                </a>
                            </li> */}

                                    {/* <li  className="opacity-25">
                                <a href="#" className="submenu-item">
                                        <span>
                                            <i className="iconly-Curved-User"></i>
                                            <span>Customer</span>
                                        </span>
                                </a>
                            </li> */}

                                    {/* <li  className="opacity-25">
                                <a href="#" className="submenu-item">
                                        <span>
                                            <i className="iconly-Curved-TicketStar"></i>
                                            <span>Traffic</span>
                                        </span>
                                </a>
                            </li> */}


                                    {/* <li  className="opacity-25">
                                <a href="#" className="submenu-item">
                                        <span>
                                            <i className="iconly-Curved-Paper"></i>
                                            <span>Report</span>
                                        </span>
                                </a>
                            </li> */}


                                </ul>
                            </li>


                        </ul>

                    </div>
                    {/* <img src="/assets/images/leaf.png"/> */}

                    <div
                        className="row justify-content-between align-items-center hp-sidebar-footer pb-24 px-24 mx-0 hp-bg-color-dark-100">
                        <div className="divider border-black-20 hp-border-color-dark-70 hp-sidebar-hidden px-0"></div>

                        <div className="col">
                            <div className="row align-items-center">
                                {/* <div className="me-8 w-auto px-0">
                                <div
                                    className="avatar-item d-flex align-items-center justify-content-center rounded-circle"
                                    style={{width: "36px", height: "36px"}}>
                                    <img src="/assets/images/memoji-1.png"/>
                                </div>
                            </div> */}

                                <div className="w-auto px-0 hp-sidebar-hidden">
                                    <span
                                        className="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">{userDetails ? userDetails?.username : " "}</span>
                                    {/* <a href="#" className="hp-badge-text hp-text-color-dark-30">Simulation</a> */}
                                </div>
                            </div>
                        </div>

                        <div className="col hp-flex-none w-auto px-0 hp-sidebar-hidden">
                            <a href="#">
                                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                 className="remix-icon hp-text-color-black-100 hp-text-color-dark-0" height="24"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                </g>
                            </svg> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
export default SideNav