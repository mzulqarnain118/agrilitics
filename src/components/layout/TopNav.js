import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';

function TopNav() {

    const navigate = useNavigate();
    const imgStyle = {
        width: "38px", height: "38px",
    }

    const userDetails = useSelector(state => state.user.userDetails)
    const logOut = () => {
        localStorage.clear();
        navigate('/login');
        toast.success("Logout successful", {
            position: 'top-center'
        });
    }
    return (
        <header>
            <div className="row w-100 m-0">
                <div className="col ps-18 pe-16 px-sm-24">
                    <div className="row w-100 align-items-center justify-content-between position-relative">
                        <div className="col w-auto hp-flex-none hp-mobile-sidebar-button me-24 px-0"
                            data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                            <button type="button" className="btn btn-text btn-icon-only">
                                <i className="ri-menu-fold-line hp-text-color-black-80 hp-text-color-dark-30 lh-1"
                                    style={{ fontSize: "20px" }}></i>
                            </button>
                        </div>


                        <div
                            className="hp-header-text-info col invisible col-lg-14 col-xl-16 hp-header-start-text d-flex align-items-center hp-horizontal-none">
                            <div
                                className="d-flex rounded-3 hp-text-color-primary-1 hp-text-color-dark-0 p-4 hp-bg-color-primary-4 hp-bg-color-dark-70"
                                style={{ minWidth: "18px" }}>
                                <i className="iconly-Curved-Document"></i>
                            </div>

                            <p className="hp-header-start-text-item hp-input-label hp-text-color-black-100 hp-text-color-dark-0 ms-16 mb-0 lh-1 d-flex align-items-center">
                                Do you know the latest update of 2022?

                                <a href="#" className="ms-8 mb-6 hp-text-color-black-60" target="_blank">
                                    <i className="iconly-Curved-Upload hp-text-color-dark-5"></i>
                                </a>
                            </p>
                        </div>


                        <div className="col hp-flex-none w-auto hp-horizontal-block">
                            <div className="hp-header-logo d-flex align-items-end">
                                <a href="index.html">
                                    <img className="hp-logo hp-sidebar-visible" src="/assets/images/logo.png"
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
                                </a>
                            </div>
                        </div>

                        <div className="hp-header-search col d-none">
                            <input type="text" className="form-control" placeholder="Search..." id="header-search"
                                autoComplete="off" />
                        </div>
                        <div className="col hp-flex-none w-auto pe-0">
                            <div className="row align-items-center justify-content-end">
                                <div className="w-auto px-0">
                                    <div className="d-flex align-items-center me-4 hp-header-search-button">
                                        {/* <button type="button" className="btn btn-text btn-icon-only">
                                            <i className="iconly-Curved-Search hp-text-color-black-60"></i>
                                            <i className="ri-close-line hp-text-color-black-60 d-none"
                                               style={{fontSize: "24px"}}></i>
                                        </button> */}
                                    </div>
                                </div>
                                <div
                                    className="hover-dropdown-fade w-auto px-0 d-flex align-items-center me-8 me-sm-16 position-relative hide">
                                    <button type="button" className="btn btn-text btn-icon-only">
                                        <i className="iconly-Curved-Notification hp-text-color-black-60 position-relative">
                                            <span
                                                className="position-absolute translate-middle p-2 rounded-circle bg-primary hp-notification-circle"
                                                style={{ width: "6px", height: "6px", top: "4px" }}></span>
                                        </i>
                                    </button>
                                    <div className="hp-notification-menu dropdown-fade position-absolute pt-18"
                                        style={{ width: "288px", top: "100%" }}>
                                        <div
                                            className="pt-32 pb-18 px-18 rounded border hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80">
                                            <div className="row justify-content-between align-items-center mb-18">
                                                <div
                                                    className="col hp-flex-none w-auto h5 hp-text-color-black-100 hp-text-color-dark-10 hp-text-color-dark-0 me-64 mb-0">Notifications
                                                </div>

                                                <div
                                                    className="col hp-flex-none w-auto hp-bg-color-primary-1 rounded-pill hp-badge-text hp-text-color-black-0 py-4 px-6 me-12">4
                                                    New
                                                </div>
                                            </div>

                                            <div className="divider my-4"></div>

                                            <div className="hp-overflow-y-auto px-10"
                                                style={{
                                                    maxHeight: "300px",
                                                    marginRight: "-10px",
                                                    marginLeft: "-10px"
                                                }}>
                                                <div
                                                    className="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
                                                    style={{ marginLeft: "-10px", marginRight: "-10px", rowGap: "0px" }}>
                                                    <div className="w-auto px-0 me-8">
                                                        <div
                                                            className="avatar-item d-flex align-items-center justify-content-center rounded-circle"
                                                            style={imgStyle}>
                                                            <img src="/assets/images/memoji-5.png" className="w-100" />
                                                        </div>
                                                    </div>

                                                    <div className="col w-auto px-0">
                                                        <span className="d-block w-100 mb-4 fw-medium hp-p1-body">New message received 💌</span>
                                                        <span
                                                            className="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">24 unread messages.</span>
                                                    </div>
                                                </div>

                                                <div className="divider my-4"></div>

                                                <div
                                                    className="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
                                                    style={{ marginLeft: "-10px", marginRight: "-10px", rowGap: "0px" }}>
                                                    <div className="w-auto px-0 me-8">
                                                        <div
                                                            className="avatar-item d-flex align-items-center justify-content-center hp-bg-success-4 rounded-circle"
                                                            style={imgStyle}>
                                                            <i className="iconly-Curved-TickSquare hp-text-color-success-1"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col w-auto px-0">
                                                        <span className="d-block w-100 mb-4 fw-medium hp-p1-body">Congratulations team 🎉</span>
                                                        <span
                                                            className="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">You have 12 new sales!</span>
                                                    </div>
                                                </div>

                                                <div className="divider my-4"></div>

                                                <div
                                                    className="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
                                                    style={{ marginLeft: "-10px", marginRight: "-10px", rowGap: "0px" }}>
                                                    <div className="w-auto px-0 me-8">
                                                        <div
                                                            className="avatar-item d-flex align-items-center justify-content-center hp-bg-danger-4 rounded-circle"
                                                            style={imgStyle}>
                                                            <i className="iconly-Curved-CloseSquare hp-text-color-danger-1"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col w-auto px-0">
                                                        <span className="d-block w-100 mb-4 fw-medium hp-p1-body">Network Error ⛔️</span>
                                                        <span
                                                            className="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">Operation couldn’t be completed</span>
                                                    </div>
                                                </div>

                                                <div className="divider my-4"></div>

                                                <div
                                                    className="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
                                                    style={{ marginLeft: "-10px", marginright: "-10px", rowGap: "0px" }}>
                                                    <div className="w-auto px-0 me-8">
                                                        <div
                                                            className="avatar-item d-flex align-items-center justify-content-center hp-bg-warning-4 rounded-circle"
                                                            style={imgStyle}>
                                                            <i className="iconly-Curved-Danger hp-text-color-warning-1"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col w-auto px-0">
                                                        <span className="d-block w-100 mb-4 fw-medium hp-p1-body">Disk Utility 💥</span>
                                                        <span
                                                            className="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">You have not enough disk capacity</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="divider my-4"></div>

                                            <div className="mt-8">
                                                <button type="button"
                                                    className="btn btn-text w-100 hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-bg-primary-4 hp-hover-bg-dark-primary">
                                                    <span className="row align-items-center mx-0">
                                                        <i className="w-auto px-0 me-8 ri-delete-bin-line"></i>
                                                        <span className="w-auto px-0">Clear all notifications</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hover-dropdown-fade w-auto px-0 ms-6 position-relative hp-cursor-pointer">
                                    <h6>{userDetails ? userDetails?.username : " "}</h6>
                                    {/* <span
                                        className="avatar-item d-flex align-items-center justify-content-center rounded-circle"
                                    >
                                        <img src="/assets/images/memoji-1.png"/>
                                        
                                    </span> */}
                                    <div className="hp-header-profile-menu dropdown-fade position-absolute pt-18" onClick={() => { logOut() }}
                                        style={{ top: "100%", width: "150px", }}>
                                        <div
                                            className="rounded border hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 text-center p-24">
                                            {/* <span
                                                className="d-block h5 hp-text-color-black-100 hp-text-color-dark-0 mb-6">Profile Settings</span> */}
                                            {/* <a href="#"
                                               className="hp-p1-body hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-2">View
                                                Profile</a> */}
                                            {/* <div className="divider my-12"></div> */}
                                            {/* <div className="row">
                                                <div className="col-12">
                                                    <a href="#"
                                                       className="d-flex align-items-center hp-p1-body py-4 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded"
                                                       style={{marginLeft: "-10px", marginRight: "-10px"}}>
                                                        <i className="iconly-Curved-People me-8"
                                                           style={{fontSize: "16px"}}></i>

                                                        <span className="ml-8">Explore Creators</span>
                                                    </a>
                                                </div>
                                                <div className="col-12">
                                                    <a href="#"
                                                       className="d-flex align-items-center hp-p1-body py-4 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded"
                                                       style={{marginLeft: "-10px", marginRight: "-10px"}}>
                                                        <i className="iconly-Curved-Game me-8"
                                                           style={{fontSize: "16px"}}></i>

                                                        <span className="hp-ml-8">Help Desk</span>
                                                    </a>
                                                </div>
                                            </div> */}
                                            {/* <div className="divider my-12"></div> */}
                                            <span className="hp-p1-body" >Logout</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopNav;