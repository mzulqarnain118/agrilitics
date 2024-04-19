import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MobileSideNav from "./layout/MobileSideNav";
import { MakeApiCall } from '../api/MakeApiCall';
import { fileHead, tableHeads } from "../states/fileDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from './common/loader/Loader';
function FarmerForcast() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let token = localStorage.getItem('token');
    const [selectedFile, setSelectedFile] = useState(null);
    const [userExisitingData, setUserExisitingUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectModelBtn, setSelectModelBtn] = useState(false);
    const handleFileSelect = (event) => {
        var allowedExtensions = /(\.csv)$/i;

        if (!allowedExtensions.exec(event.target.files[0].name)) {

            toast.error("User can only upload CSV file", {
                position: 'top-center'
            });
            // console.log("event.target.files", event.target.files)
            document.getElementById('formFile').value = ''

        }
        else {
            localStorage.setItem('uploadedFileName', event.target.files[0].name);
            setSelectedFile(event.target.files[0]);
        }
    }

    const selectModel = (e) => {
        setSelectModelBtn(true)
        localStorage.setItem('file_id', e.target.value)
    }

    const Loader = () => {
        return (
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }


    //  get Exisiting models
    const getExisiting = async () => {
        let user_id = localStorage.getItem("user_id");
        let url = `/file/names/${user_id}`;
        const response = await MakeApiCall(url, null, token, 'GET');
        if (response.status === 200) {
            setUserExisitingUserData(response.data)
        }
        console.log(response.status, 'response 12')
    }

    useEffect(() => {
        getExisiting();
    }, []);

    //  upload file  to s3 using api 

    const handleSubmit = async (e) => {


        e.preventDefault();


        setLoading(true);

        let formData = new FormData();
        let regex = new RegExp('[^.]+$');

        if (selectedFile) {
            if (selectedFile.name.match(regex)[0] == 'csv') {
                let url = `/file/create/test/`;
                formData.append("data_file", selectedFile);

                let type = "POST"
                try {
                    const response = await MakeApiCall(url, formData, token, type);
                    if (response.status == 201) {
                        setLoading(false);


                        //For grover list
                        //For table header
                        let data1 = Object.values(response.data.file_data)
                        let tableHeaders = Object.keys(data1[0])
                        tableHeaders.unshift("Title")



                        //For table data
                        let tableData = []
                        for (let i in response.data.file_data) {
                            tableData.push({ ...[i, ...Object.values(response.data.file_data[i])] })
                        }


                        console.log(tableData, tableHeaders, 'response.data.file_data ')
                        /* Store File name */
                        localStorage.setItem('file_name', selectedFile.name)
                        localStorage.setItem('file_id', response.data.id)

                        // let headData = response.data.file_data   ;   


                        dispatch(fileHead(tableData));
                        dispatch(tableHeads(tableHeaders));

                        // console.log([Object.keys(headData[0])])
                        localStorage.setItem('tableheader', tableHeaders);
                        navigate('/upload-data')



                    }
                    setSelectedFile(() => null)

                } catch (error) {
                    document.getElementById('formFile').value = ''
                    setSelectedFile(() => null)

                    setLoading(false);
                    console.log(error)
                }
            }
        } else {
            setSelectedFile(() => null)
            setLoading(false)
            toast.error("Please select data source!", {
                position: 'top-center'
            });
        }
    }
    return (



        <div className="hp-main-layout-col">
            <MobileSideNav />
            <div className="row mb-32 gy-32">
                <div className="col-12">
                    {/* <h3 className='  mt-5'> <Link to="/ "><i
                        className="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></Link>Upload and Test</h3> */}
                    <h3 className='  mt-10'> <Link to="/ "><i
                        className="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></Link>Upload and Test</h3>
                    <p className="hp-p1-body mb-0 mt-3"> </p>
                </div>

                <div className="col-12">
                    <div className="row g-32  mb-32">
                        <div className="col flex-grow-1 overflow-hidden">
                            <div className="row g-32">




                                <div className="col-12 margen30px">
                                    <div className="row g-32">




                                        <div className="col-12 ">
                                            <div className="row g-32">

                                                <div className="col-12 col-md-12">
                                                    <div className="row g-32">
                                                        <div className="col-12 col-md-12 ">


                                                            <ul className="nav nav-tabs  nav-justified" id="myTab"
                                                                role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link active" id="home-tab"
                                                                        data-bs-toggle="tab" data-bs-target="#home"
                                                                        type="button" role="tab" aria-controls="home"
                                                                        aria-selected="true">Predicting Churn</button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="profile-tab"
                                                                        data-bs-toggle="tab" data-bs-target="#profile"
                                                                        type="button" role="tab" aria-controls="profile"
                                                                        aria-selected="false" disabled>Growers Behavior Analysis</button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="contact-tab"
                                                                        data-bs-toggle="tab" data-bs-target="#contact1"
                                                                        type="button" role="tab" aria-controls="contact"
                                                                        aria-selected="false" disabled>Form Yield Forecasting</button>
                                                                </li>


                                                            </ul>

                                                            <div className="tab-content" id="myTabContent">
                                                                <div className="tab-pane fade show active" id="home"
                                                                    role="tabpanel" aria-labelledby="home-tab">

                                                                    <div className="pagetitle">

                                                                        <div className="row">
                                                                            <div className="col-lg-6 pading-col">

                                                                                <h4>Use existing data</h4>

                                                                                <hr />
                                                                                <div className="col-lg-8 padcol">

                                                                                    <select

                                                                                        className="form-select"
                                                                                        aria-label="Default select example"
                                                                                        onChange={(e) => selectModel(e)}
                                                                                    >
                                                                                        <option selected="">Select from Exisiting Files</option>
                                                                                        {
                                                                                            userExisitingData?.map((item) =>
                                                                                                <option key={item.id} value={item.id}>
                                                                                                    {item.file_name}
                                                                                                </option>
                                                                                            )
                                                                                        }
                                                                                    </select>
                                                                                </div>

                                                                                {
                                                                                    selectModelBtn &&
                                                                                    <div className="topmargen12 margen30px">
                                                                                        <button>
                                                                                            <Link to="/test/models" params={{ flag: true }}> <button
                                                                                                type="submit"
                                                                                                className="btn btn-primary">Select Data</button>
                                                                                            </Link> 
                                                                                        </button>
                                                                                    </div>

                                                                                }



                                                                            </div>

                                                                            <div className="col-lg-6 pading-col">
                                                                                <h4>Upload New Testing Data</h4>

                                                                                <hr />

                                                                                <div className="col-lg-12">

                                                                                    <h1 className="mein-heading">Data Selection
                                                                                    </h1>
                                                                                    <p>Get started by dragging data here, or
                                                                                        import from:</p>
                                                                                    <div className="topmargen12">
                                                                                        <button type="button"
                                                                                            className="btn btn-primary former-btn ">Local File</button>
                                                                                        <button type="button"
                                                                                            className="btn box-button former-btn">URL</button>

                                                                                        <button type="button"
                                                                                            className="btn box-button former-btn ">Import
                                                                                            API</button>
                                                                                    </div>
                                                                                </div>
                                                                                <br />
                                                                                <hr />
                                                                                <div className="col-lg-12">
                                                                                    {/* <h1 className="mein-heading">Browse O-O</h1> */}
                                                                                    <div className="browse-border padding-box">
                                                                                        <input
                                                                                            onChange={handleFileSelect}
                                                                                            className="form-control"
                                                                                            type="file" id="formFile" />
                                                                                    </div>
                                                                                </div>


                                                                                <div className="col-lg-12">
                                                                                    <br /><br />
                                                                                    <div className=" topmargen12">
                                                                                        <button
                                                                                            type="submit"
                                                                                            onClick={(e) => handleSubmit(e)}
                                                                                            className="btn btn-primary">{loading ? <Loader /> : 'Upload'}</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>



                                                                </div>
                                                                <div className="tab-pane fade" id="profile" role="tabpanel"
                                                                    aria-labelledby="profile-tab">
                                                                    <div className="pagetitle">

                                                                        <div className="row">
                                                                            <div className="col-lg-6 pading-col">

                                                                                <h4>Predicting Churn</h4>

                                                                                <hr />
                                                                                <div className="col-lg-8 padcol">
                                                                                    <br /><br />
                                                                                    <select className="form-select"
                                                                                        aria-label="Default select example">
                                                                                        <option selected="">Model</option>
                                                                                        <option value="1">Model 1 </option>
                                                                                        <option value="2">Model 2</option>
                                                                                        <option value="3">Model 3</option>
                                                                                    </select>
                                                                                </div>

                                                                                <div className="topmargen12 margen30px">
                                                                                    <a href="farmer-detail.html"> <button
                                                                                        type="submit"
                                                                                        className="btn btn-primary">Select
                                                                                        Model</button></a>
                                                                                </div>



                                                                            </div>

                                                                            <div className="col-lg-6 pading-col">
                                                                                <h4>Upload Predicting Churn DATA</h4>

                                                                                <hr />

                                                                                <div className="col-lg-12">

                                                                                    <h1 className="mein-heading">Data Selection
                                                                                    </h1>
                                                                                    <p>Get started by dragging data here, or
                                                                                        import from:</p>
                                                                                    <div className="">
                                                                                        <button type="button"
                                                                                            className="btn btn-primary ">Data
                                                                                            Source</button>
                                                                                        <button type="button"
                                                                                            className="btn box-button">URL</button>
                                                                                        <button type="button"
                                                                                            className="btn box-button">Local
                                                                                            File</button>
                                                                                        <button type="button"
                                                                                            className="btn box-button">Import
                                                                                            API</button>
                                                                                    </div>
                                                                                </div>
                                                                                <br />
                                                                                <hr />
                                                                                <div className="col-lg-12">
                                                                                    <h1 className="mein-heading">Browse</h1>
                                                                                    <div className="browse-border">
                                                                                        <input className="form-control"
                                                                                            type="file" id="formFile" />
                                                                                    </div>
                                                                                </div>


                                                                                <div className="col-lg-12">
                                                                                    <br /><br />
                                                                                    <div className="text-center topmargen12">
                                                                                        <Link to="/former/detail"> <button
                                                                                            type="submit"
                                                                                            className="btn btn-primary">Upload</button>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="contact" role="tabpanel"
                                                                    aria-labelledby="contact-tab">
                                                                    <div className="pagetitle">

                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <h4>Predicting Churn</h4>

                                                                                <hr />
                                                                            </div>
                                                                            <div className="col-lg-7">

                                                                                <h1 className="mein-heading">Data Selection</h1>
                                                                                <p>Get started by dragging data here, or import
                                                                                    from:</p>
                                                                                <div className="topmargen12">
                                                                                    <button type="button"
                                                                                        className="btn btn-primary ">Data
                                                                                        Source</button>
                                                                                    <button type="button"
                                                                                        className="btn box-button">URL</button>
                                                                                    <button type="button"
                                                                                        className="btn box-button">Local
                                                                                        File</button>
                                                                                    <button type="button"
                                                                                        className="btn box-button">Import
                                                                                        API</button>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-5">
                                                                                <h1 className="mein-heading">Browse</h1>
                                                                                <div className="browse-border">
                                                                                    <input className="form-control" type="file"
                                                                                        id="formFile" />
                                                                                </div>
                                                                            </div>


                                                                            <div className="col-lg-12">
                                                                                <br /><br />
                                                                                <div className="text-center topmargen12">
                                                                                    <a href="farmer-detail.html"> <button
                                                                                        type="submit"
                                                                                        className="btn btn-primary">dSave
                                                                                        Changes</button></a>
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

export default FarmerForcast