
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import MobileSideNav from "./layout/MobileSideNav";
import Select from 'react-select'
import { MakeApiCall } from "../api/MakeApiCall";
import { useDispatch } from "react-redux";

//LOADING TILL DATA LOADED
import { Circles } from 'react-loader-spinner';
import LoadingOverlay from 'react-loading-overlay';
import Slider from "../commonComponents/Slider";
import AnalyticalChart from './charts/charts_statistic/AnalyticalChart';
import DownloadBlobtoCsv from './common/DownloadBlobtoCsv';
import { toast } from 'react-toastify';
import moment from 'moment';
import { filedataSimulation, fileHead, PersonlizedTableData, PersonlizedTableHeader, pushPersonlizedTableData, tableHeads } from '../states/fileDataSlice';
import { useSelector } from 'react-redux';


function PersonalizePricing() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tableHeader = useSelector(state => state?.fileDataSlice?.personalizedTableHeader);
    const tableData = useSelector(state => state.fileDataSlice?.personalizedTableData);
    let token = localStorage.getItem('token');
    let file_Id = localStorage.getItem('file_id');
    const [expectedIssueDate, setexpectedIssueDate] = useState(moment().format('YYYY-MM-DD'));
    const [priceSlider, setPriceSlider] = useState("0.5");
    const [open, setOpen] = useState(false);
    // const [tableData, setTableData] = useState()
    // const [tableHeader, setTableHeader] = useState()
    const [locationGroupData, setlocationGroupData] = useState()
    const [qualityData, setqualityData] = useState()
    const [chartData, setchartData] = useState()
    const [chart_category, set_chart_category] = useState()
    const [loading, setLoading] = useState(false)
    const [downloadBtn, setDownLoadBtn] = useState(false);
    const [fileBlob, setFileBlob] = useState();
    const [probIndex, setProbIndex] = useState();

    const [locationGroup, setlocationGroup] = useState(null)
    const [quality, setQuality] = useState(null)
    const [price, setPrice] = useState(null)
    const [maxVolume, setmaxVolume] = useState(null)
    const [minVolume, setminVolume] = useState(null)

    const getSelectorsData = async () => {
        setLoading(true)
        try {
            let url = `/file/location_group_quality/1/`;
            const response = await MakeApiCall(url, "", token, 'GET');
            if (response.status === 200) {
                let locationGroupData = []
                let qualityData = [];
                    response.data.location_group.map((item, index) => {
                        locationGroupData.push({label: item,value: item})
                    })
                    response.data.quality.map((item, index) => {
                        qualityData.push({label: item,value: item})
                    })
                    setlocationGroupData(locationGroupData)
                    setqualityData(qualityData)
                    setLoading(false)
            }


        } catch (e) {
            setLoading(false)
            console.log("error", e)
        }
}
    useEffect(() => {

        getSelectorsData()
       
    }, [])
    const personalizedData = async () => {
        dispatch(PersonlizedTableHeader([]));
                    dispatch(PersonlizedTableData([]));
        setchartData(() => [])
        set_chart_category(() => [])

        setLoading(true)
        try {
            let url = `/simulation/personalized_pricing/location_group/${locationGroup.value}/${quality.value}/${price}/${minVolume ? minVolume : 0}/${maxVolume ? maxVolume : 20000}/${priceSlider}/${expectedIssueDate}`;
            const response = await MakeApiCall(url, "", token, 'GET');
            if (response.status === 200) {
                if (response.data.table_data.length !== 0) {
                    setDownLoadBtn(true)
                    setFileBlob(response.data.table_data_blob)
                    // setTableHeader(Object.keys(response.data.table_data[0]))
                    let tableDataArr = []
                    let chartSeries = [];
                    response.data.table_data.forEach((item, index) => {
                        tableDataArr.push(Object.values(item))
                    })
                    for (let i in response?.data?.chart_data?.growers) {
                        chartSeries.push({
                            name: i,
                            data: response?.data?.chart_data?.growers[i]
                        })
                    }
                    setchartData(chartSeries)
                    set_chart_category(response?.data?.chart_data?.prices)
                    // setTableData(tableDataArr)

                    dispatch(PersonlizedTableHeader(Object.keys(response.data.table_data[0])));
                    dispatch(PersonlizedTableData(tableDataArr));
                    // console.log("personalized_pricing", response.data.chart_data, tableDataArr, chartData, chartCategoryArr)
                    setLoading(false)
                }
                else {
                    setLoading(false)
                    toast.error("Data not found", {
                        position: 'top-center'
                    });
                }
            }


        } catch (e) {
            setLoading(false)
            console.log("error", e)
        }
    }



    const findRecordById = (recordId) => {
        const data ={}
        for (let i = 0; i < tableHeader.length; i++) {
            
            data[tableHeader[i]]=recordId[i]
         
        }
        dispatch(filedataSimulation(data));
        navigate('/simulation/manual/'+'true');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!locationGroup) {
            toast.error("Select the Location Group", {
                position: 'top-center'
            })
        }
        else if (!price) {
            toast.error("Enter the Price", {
                position: 'top-center'
            })
        }
        else if (!quality) {
            toast.error("Select the Quality", {
                position: 'top-center'
            })
        }
        else {
            personalizedData()
        }



    }
    //   React.useLayoutEffect(() => {
    //     console.log("probIndex",probIndex)
    //   }, [probIndex])

    return (
        <React.Fragment>
            {loading ?

                //LOADING TILL DATA LOADED

                <LoadingOverlay
                    styles={{
                        position: 'inherit',
                    }}
                    active={loading}
                    spinner={<Circles color="#9acb42" />}
                /> :
                <>
                    <main className=" min-vh-100">


                        <div className="hp-main-layout-col">
                            <MobileSideNav>

                            </MobileSideNav>

                            <div className="">
                                <div className="row mb-32 gy-32">
                                    <div className="col-12">
                                        <h3 className='mt-30' > <Link to="/"><i
                                            className="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></Link>Personalize Pricing</h3>
                                        {/* <p className="hp-p1-body mb-0">Your current status and analytics are here</p> */}
                                    </div>
                                    <section className="section section-card d-none">
                                        <div className="row">

                                            <div className="col-12">
                                                <div className="card hp-card-1 hp-upgradePlanCardOne">

                                                    <div className="card-body">
                                                        <div className="row align-items-center mt-8">
                                                            <div className="col-12 mb-4">
                                                                <div className="row align-items-center justify-content-between">
                                                                    <div className="col flex-grow-1">
                                                                        <h4 className="mb-8">Explore the Categories</h4>

                                                                    </div>
                                                                    <div className="col hp-flex-none w-auto">
                                                                        <a href="javascript:void(0)">
                                                                            <button type="button" className="btn mt-16 mt-sm-0 text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0"> <Link to="/create/model">Categories</Link> </button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>


                                    <form onSubmit={handleSubmit}>

                                        <section className="section section-card mt-5">


                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="card">
                                                        <div className="card-body col-height">
                                                            <div className="color-gd">
                                                                <h4>Location Group</h4>
                                                            </div>
                                                            <div className="num-hilight">
                                                                <Select options={locationGroupData}
                                                                    required={true}

                                                                    value={locationGroup}
                                                                    onChange={(e) => {

                                                                        setlocationGroup(e)

                                                                    }}
                                                                    styles={{
                                                                        control: base => ({
                                                                            ...base,
                                                                            color: "#white"
                                                                        }),
                                                                        option: (base) => ({
                                                                            ...base,
                                                                            border: `1px dotted white`,
                                                                            height: '60%',
                                                                            backgroundColor: '#252525'
                                                                        }),
                                                                    }}

                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="card">
                                                        <div className="card-body col-height">
                                                            <div className="color-gd">
                                                                <h4>Price</h4>
                                                            </div>
                                                            <input style={{ borderRadius: "5px", height: "40px" }} type="number" name="price" value={price} onChange={(e) => {
                                                                if (e.target.value >= 0)
                                                                    setPrice(e.target.value)
                                                            }} min="0"
                                                            // required={true}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div className="card">
                                                        <div className="card-body col-height">
                                                            <div className="color-gd"><h4>Quality</h4></div>
                                                            <div className="num-hilight">
                                                                <Select options={qualityData}
                                                                    required={true}

                                                                    value={quality}
                                                                    onChange={(e) => {

                                                                        setQuality(e)

                                                                    }}
                                                                    styles={{
                                                                        control: base => ({
                                                                            ...base,
                                                                            color: "#white"
                                                                        }),
                                                                        option: (base) => ({
                                                                            ...base,
                                                                            border: `1px dotted white`,
                                                                            height: '100%',
                                                                            backgroundColor: '#252525'
                                                                        }),
                                                                    }}
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-3'>
                                                    <div className="card">
                                                        <div className="card-body col-height ">
                                                            <div className="row" style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "space-evenly" }}>

                                                                <div className="color-gd"><h4>Probability Threshold </h4></div>
                                                                <div>{priceSlider}

                                                                </div>
                                                            </div>
                                                            <div className="slidecontainer">
                                                                <input
                                                                    type="range"
                                                                    min="0"
                                                                    max="1"
                                                                    step="0.01"
                                                                    value={priceSlider}
                                                                    onChange={(e) => setPriceSlider(e.target.value)}
                                                                    className="slider"
                                                                    id="Price"
                                                                    required={true}

                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>






                                            </div>

                                            <div className="row topmargen12" style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "space-between" }}>

                                                <span className=' col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3 btn btn-primary  border-radius-4 mt-16 ' style={{ marginLeft: "13px" }} onClick={() => setOpen(!open)}>


                                                    <i class="hp-text-color-dark-0 iconly-Light-Filter2 color" style={{ paddingRight: 5 }} >

                                                    </i>
                                                    More filters </span>

                                                <div className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 text-center mt-16" style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "space-evenly" }}>

                                                    {downloadBtn &&



                                                        <span title="click to download Data" className="text-right btn  mt-sm-0 text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0" ><a href={DownloadBlobtoCsv("file", fileBlob)} download={'Personalized-Pricing' + '.xls'}>Download</a></span>


                                                    }

                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>




                                            {open &&

                                                <div className="row " style={{ display: "flex", alignItems: "center", alignContent: "center", marginTop: "10px" }}>
                                                    <div className="col-lg-3">
                                                        <div className="card ">
                                                            <div className="card-body col-height ">
                                                                <div><h4>Minimum Volume</h4></div>
                                                                <input style={{ borderRadius: "5px", height: "40px" }} type="number" placeholder="Min Volume" name="minVolume" value={minVolume} onChange={(e) => {
                                                                    //    if(e.target.value)
                                                                    setminVolume(e.target.value)


                                                                }} min="0"

                                                                />
                                                                <div className="num-hilight"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card-body col-height">
                                                                <div><h4>Maximum Volume</h4></div>
                                                                <input style={{ borderRadius: "5px", height: "40px" }} type="number" placeholder="Max Volume" name="maxVolume" value={maxVolume} onChange={(e) => {
                                                                    //    if(e.target.value)
                                                                    setmaxVolume(e.target.value)


                                                                }} min="0"

                                                                />


                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="card">
                                                            <div className="card-body col-height">
                                                                <div><h4>Expected Issue Date</h4></div>
                                                                <input style={{ borderRadius: "5px", height: "40px" }} type="date" required data-date-format="YYYY MMMM DD" value={expectedIssueDate} onChange={(e)=>setexpectedIssueDate(e.target.value) } max="2023-10-30" />


                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            }



                                        </section>
                                    </form>
                                    {downloadBtn && <section className="section section-card mt-5">
                                        <div className="row">
                                            <div className="col-lg-12 disp">

                                                <div style={{ display: 'block' }}>

                                                    <Tabs defaultActiveKey="first">
                                                        <Tab eventKey="first" title="Results">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div className="col-12 col-lg-12">
                                                                        <div className="style-14 fixTableHead">
                                                                            {/* <input type="text" id="myInput" onkeyup={searchTable()} placeholder="Search for names.." title="Type in a name" /> */}
                                                                            {/* <div class="input-group">
  <div class="form-outline">
    <input className='fas fa-search' type="search" id="form1" class="form-control" placeholder='Search' />
  </div>
  <button onClick={()=>searchTable()}
  type="button" className="btn btn-primary">
    <i className="fas fa-search"></i>
  </button>
</div> */}
                                                                            <table className="table table-striped table1 ">

                                                                                <thead className="t-fix">
                                                                                    <tr colspan="6" data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
                                                                                        {tableHeader?.map((item,index) => {
                                                                                            return (
                                                                                                 <th scope='col' className={item==="prob" ? !probIndex? setProbIndex(index) : "prob":""}>{item}</th>
                                                                                            )
                                                                                        })}
                                                                                    </tr> 
                                                                                </thead>
                                                                                <tbody>
                                                                                    {tableData?.map((item,index) => {
                                                                                        return (
                                                                                            <tr key={index + item} colSpan="6"
                                                                                                            data-toggle="collapse"
                                                                                                            data-target={"#demo" + index}
                                                                                                            onClick={() => findRecordById(item)}
                                                                                                className="accordion-toggle">
                                                                                                {item?.map((item1,index1) => { return (<td className={index1===probIndex && "prob"}>{item1}</td>) })}
                                                                                               

                                                                                            </tr>)
                                                                                    })}

                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab>
                                                        <Tab eventKey="second" title="Charts">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div className="col-12 col-lg-12  " >
                                                                        <AnalyticalChart xAxisTitle="Volume" yAxisTitle="Price" chartTitle="Volume By Price & Growers" alignTitle="center" chart_data={chartData}
                                                                            // max,min,tickAmount,

                                                                            chart_type="bar" chart_category={chart_category} stacked={true} chart_height={700} xAxisdoubleLabels={true} yAxisL
                                                                            abelFormat={"$ "} total={true} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab>

                                                    </Tabs>
                                                </div>

                                            </div>


                                        </div>
                                    </section>}







                                </div>
                            </div>
                        </div>
                    </main>
                    <div className="scroll-to-top">
                        <button type="button" className="btn btn-primary btn-icon-only rounded-circle hp-primary-shadow">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </>
            }
        </React.Fragment>
    )
}

export default PersonalizePricing;