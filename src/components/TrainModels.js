import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";
import $ from "jquery";
import MobileSideNav from "./layout/MobileSideNav";
import { useDispatch } from "react-redux";
import { MakeApiCall } from "../api/MakeApiCall";
import { useNavigate } from 'react-router-dom';
import { filedataSimulation } from "../states/fileDataSlice";
import { Circles } from 'react-loader-spinner';
import LoadingOverlay from 'react-loading-overlay';
import Paginator from '../../src/components/common/loader/Paginator';
// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
function TrainModel() {

    // pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [PerPage] = useState(50);
    const [totalPage, seTotalPage] = useState(null);
    const dispatch = useDispatch();
    const [fileData, setFileData] = useState([]);
    const [fileHeads, setFileHeads] = useState([]);
    const [loading, setLoading] = useState(false);
    const [downloadLoading, setDownLoadLoading] = useState(false);
    const [downloadBtn, setDownLoadBtn] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [fileBlob, setFileBlob] = useState();
    
    const [enableExportBtn, setenableExportBtn] = useState(false);





    //CHURN BY STATE CHART
    const [chartDataLoader, setchartDataLoader] = useState(false);
    const [accuracyChartData, setAccuracyChartData] = useState([])
    const [f10ChartData, setf10ChartData] = useState([])
    const [f11ChartData, setf11ChartData] = useState([])
    const [recall0ChartData, setrecall0ChartData] = useState([])
    const [recall1ChartData, setrecall1ChartData] = useState([])
    const [precision0ChartData, setprecision0ChartData] = useState([])
    const [precision1ChartData, setprecision1ChartData] = useState([])


    let accuracyChartSeries = [{
        name: 'Logistic Regression',
        data: accuracyChartData[1]
    }, {
        name: 'Support Vector Machine',
        data: accuracyChartData[2]
    }, {
        name: 'Artificial Neural Network',
        data: accuracyChartData[3]
    }, {
        name: 'Custom',
        data: accuracyChartData[4]
    }];
    let accuracyChartOptions = {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                export: {
                  csv: {
                    filename: "Accuracy",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Accuracy",
                  },
                  png: {
                    filename: "Accuracy",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        markers: {
            size: [7]
        }, title: {
            text: "Accuracy",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: accuracyChartData[0],

        },

        yaxis: {
            min: 0,
            max: 1
        },
        legend: {
            show: true
        }
    };

    let f10ChartSeries = [{
        name: 'Logistic Regression',
        data: f10ChartData[1]
    }, {
        name: 'Support Vector Machine',
        data: f10ChartData[2]
    }, {
        name: 'Artificial Neural Network',
        data: f10ChartData[3]
    }, {
        name: 'Custom',
        data: f10ChartData[4]
    }];
    let f10ChartOptions = {

        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                export: {
                  csv: {
                    filename: "F1 Score - Neg Class",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "F1 Score -   Neg Class",
                  },
                  png: {
                    filename: "F1 Score -   Neg Class",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        markers: {
            size: [7]
        }, title: {
            text: "F1 Score - Neg Class",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: f10ChartData[0],

        },

        yaxis: {
            min: 0,
            max: 1
        }
    };


    let f11ChartSeries = [{
        name: 'Logistic Regression',
        data: f11ChartData[1]
    }, {
        name: 'Support Vector Machine',
        data: f11ChartData[2]
    }, {
        name: 'Artificial Neural Network',
        data: f11ChartData[3]
    }, {
        name: 'Custom',
        data: f11ChartData[4]
    }];
    let f11ChartOptions = {

        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                export: {
                  csv: {
                    filename: "F1 Score - Pos Class",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "F1 Score - Pos Class",
                  },
                  png: {
                    filename: "F1 Score - Pos Class",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        markers: {
            size: [7]
        }, title: {
            text: "F1 Score - Pos Class",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: f11ChartData[0],

        },

        yaxis: {
            min: 0,
            max: 1
        }
    };


    let recall0ChartSeries = [{
        name: 'Logistic Regression',
        data: recall0ChartData[1]
    }, {
        name: 'Support Vector Machine',
        data: recall0ChartData[2]
    }, {
        name: 'Artificial Neural Network',
        data: recall0ChartData[3]
    }, {
        name: 'Custom',
        data: recall0ChartData[4]
    }];
    let recall0ChartOptions = {

        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                export: {
                  csv: {
                    filename: "Recall Score - Neg Class",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Recall Score - Neg Class",
                  },
                  png: {
                    filename: "Recall Score - Neg Class",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        markers: {
            size: [7]
        }, title: {
            text: "Recall Score - Neg Class",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: recall0ChartData[0],

        },

        yaxis: {
            min: 0,
            max: 1
        }
    };





    let recall1ChartSeries = [{
        name: 'Logistic Regression',
        data: recall1ChartData[1]
    }, {
        name: 'Support Vector Machine',
        data: recall1ChartData[2]
    }, {
        name: 'Artificial Neural Network',
        data: recall1ChartData[3]
    }, {
        name: 'Custom',
        data: recall1ChartData[4]
    }];
    let recall1ChartOptions = {

        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                export: {
                  csv: {
                    filename: "Recall Score - Pos Class",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Recall Score - Pos Class",
                  },
                  png: {
                    filename: "Recall Score - Pos Class",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        markers: {
            size: [7]
        }, title: {
            text: "Recall Score - Pos Class",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: recall1ChartData[0],

        },

        yaxis: {
            min: 0,
            max: 1
        }
    };


    let precision0ChartSeries = [{
        name: 'Logistic Regression',
        data: precision0ChartData[1]
    }, {
        name: 'Support Vector Machine',
        data: precision0ChartData[2]
    }, {
        name: 'Artificial Neural Network',
        data: precision0ChartData[3]
    }, {
        name: 'Custom',
        data: precision0ChartData[4]
    }];
    let precision0ChartOptions = {

        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                export: {
                  csv: {
                    filename: "Precision Score - Neg Class",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Precision Score - Neg Class",
                  },
                  png: {
                    filename: "Precision Score - Neg Class",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        markers: {
            size: [7]
        }, title: {
            text: "Precision Score - Neg Class",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: precision0ChartData[0],

        },

        yaxis: {
            min: 0,
            max: 1
        }
    };



    let precision1ChartSeries = [{
        name: 'Logistic Regression',
        data: precision1ChartData[1]
    }, {
        name: 'Support Vector Machine',
        data: precision1ChartData[2]
    }, {
        name: 'Artificial Neural Network',
        data: precision1ChartData[3]
    }, {
        name: 'Custom',
        data: precision1ChartData[4]
    }];
    let precision1ChartOptions = {

        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                export: {
                  csv: {
                    filename: "Precision Score - Pos Class",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Precision Score - Pos Class",
                  },
                  png: {
                    filename: "Precision Score - Pos Class",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        markers: {
            size: [7]
        }, title: {
            text: "Precision Score - Pos Class",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: precision1ChartData[0],

        },

        yaxis: {
            min: 0,
            max: 1
        }
    };






    const navigate = useNavigate();
    let pieOption = {
        labels: ['Churn', 'Not Churn'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };
    let pieSeries = [44, 55];
    //  bar chart option start from here 
    let token = localStorage.getItem('token');
    let file_Id = localStorage.getItem('file_id');
    useEffect(() => {
        $('.accordion-toggle').click(function () {
            $('.hiddenRow').hide();
            $(this).next('tr').find('.hiddenRow').show();
            $(this).next('tr').find(".collapse").show();
        })
        getFileById();
    }, [currentPage]);
    useEffect(() => {
        const updatedList = fileData.filter((item) => item.grower_number.toString().includes(searchValue));

        // // Trigger render with updated values
        setFileData(updatedList);
    }, [searchValue]);
    const getFileById = async () => {
        setLoading(true);
        let url = `/file/${file_Id}/?page=${currentPage}&size=${PerPage}`;
        try {
            const response = await MakeApiCall(url, '', token, 'GET');
            if (response.status === 200) {
                setLoading(false);
                seTotalPage(response.data.file_data?.total);
                setFileData(response.data.file_data?.items);
                setFileHeads(Object.keys(response.data.file_data?.items[0]));
            }

        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }
    let barChartSeries = [{
        data: [400, 430, 448, 400, 430]
    }];

    let barChartOption = {


        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Queensland', 'Melbourne', 'Perth', 'Brisbane', 'Sydney'
            ],
        }
    };


    var optionsColumn = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };

    var colmunSeries = [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }];

    const findRecordById = (recordId) => {
        // const findRocord = fileData.find(({ ref_no }) => ref_no == recordId);
        dispatch(filedataSimulation(recordId));
        navigate('/simulation/manual/'+'true');

    }
    //    get select value 
    let [selectValue, setSelectValue] = useState('0');


    const exportData = async () => {
        setDownLoadLoading(true);
        let url = `/file/download/${file_Id}`;
        try {
            const response = await MakeApiCall(url, '', token, 'GET');
            if (response.status === 200) {
                setDownLoadLoading(false);
                setFileBlob(response.data.file_data);
                setDownLoadBtn(true);

            }

        } catch (e) {
            setLoading(false);
            console.log(e);
        }

    }



    const testGraphsData = async () => {
        setenableExportBtn(false)
        setchartDataLoader(true);
        // let url = `/file/insert/test_graphs/${110}`;
        // try {
        //     const response = await MakeApiCall(url, '', token, 'POST');
        //     if (response.status === 200) {

        let url = `/file/test_graphs/${2}`;
        try {
            const response = await MakeApiCall(url, '', token, 'GET');
            if (response.status === 200) {


                //ACURRACY CHART DATA


                let accuracyChartArray = [[], [], [], [], []]
                let accuracyChartCount = 1
                for (let i in response.data.accuracy_chart) {
                    for (let j in response.data.accuracy_chart[i]) {
                        accuracyChartCount === 1 && accuracyChartArray[0].push(j)
                        accuracyChartArray[accuracyChartCount].push(response.data.accuracy_chart[i][j].toFixed(2))
                    }
                    accuracyChartCount = accuracyChartCount + 1;

                }
                setAccuracyChartData(accuracyChartArray)




                //F10 CHART DATA


                let f10ChartArray = [[], [], [], [], []]
                let f10ChartCount = 1
                for (let i in response.data.f1_0_chart) {
                    for (let j in response.data.f1_0_chart[i]) {
                        f10ChartCount === 1 && f10ChartArray[0].push(j)
                        f10ChartArray[f10ChartCount].push(response.data.f1_0_chart[i][j].toFixed(2))
                    }
                    f10ChartCount = f10ChartCount + 1;

                }
                setf10ChartData(f10ChartArray)



                //F11 CHART DATA


                let f11ChartArray = [[], [], [], [], []]
                let f11ChartCount = 1
                for (let i in response.data.f1_1_chart) {
                    for (let j in response.data.f1_1_chart[i]) {
                        f11ChartCount === 1 && f11ChartArray[0].push(j)
                        f11ChartArray[f11ChartCount].push(response.data.f1_1_chart[i][j].toFixed(2))
                    }
                    f11ChartCount = f11ChartCount + 1;

                }
                setf11ChartData(f11ChartArray)



                //RECALL 0 CHART DATA


                let recall0ChartArray = [[], [], [], [], []]
                let recall0ChartCount = 1
                for (let i in response.data.recall_0_chart) {
                    for (let j in response.data.recall_0_chart[i]) {
                        recall0ChartCount === 1 && recall0ChartArray[0].push(j)
                        recall0ChartArray[recall0ChartCount].push(response.data.recall_0_chart[i][j].toFixed(2))
                    }
                    recall0ChartCount = recall0ChartCount + 1;

                }
                setrecall0ChartData(recall0ChartArray)


                //RECALL 1 CHART DATA


                let recall1ChartArray = [[], [], [], [], []]
                let recall1ChartCount = 1
                for (let i in response.data.recall_1_chart) {
                    for (let j in response.data.recall_1_chart[i]) {
                        recall1ChartCount === 1 && recall1ChartArray[0].push(j)
                        recall1ChartArray[recall1ChartCount].push(response.data.recall_1_chart[i][j].toFixed(2))
                    }
                    recall1ChartCount = recall1ChartCount + 1;

                }
                setrecall1ChartData(recall1ChartArray)



                //PRECISION 0 CHART DATA


                let precision0ChartArray = [[], [], [], [], []]
                let precision0ChartCount = 1
                for (let i in response.data.precision_0_chart) {
                    for (let j in response.data.precision_0_chart[i]) {
                        precision0ChartCount === 1 && precision0ChartArray[0].push(j)
                        precision0ChartArray[precision0ChartCount].push(response.data.precision_0_chart[i][j].toFixed(2))
                    }
                    precision0ChartCount = precision0ChartCount + 1;

                }
                setprecision0ChartData(precision0ChartArray)



                //PRECISION 1 CHART DATA


                let precision1ChartArray = [[], [], [], [], []]
                let precision1ChartCount = 1
                for (let i in response.data.precision_1_chart) {
                    for (let j in response.data.precision_1_chart[i]) {
                        precision1ChartCount === 1 && precision1ChartArray[0].push(j)
                        precision1ChartArray[precision1ChartCount].push(response.data.precision_1_chart[i][j].toFixed(2))
                    }
                    precision1ChartCount = precision1ChartCount + 1;

                }
                setprecision1ChartData(precision1ChartArray)


                //  console.log("chartsData",f10ChartData,f11ChartData,precision0ChartData,precision1ChartData,recall0ChartData,recall0ChartData,accuracyChartData)


                precision1ChartArray.length !== 0 && setchartDataLoader(false);

            }

        } catch (e) {
            setchartDataLoader(false);
            console.log(e);
        }
        //     }

        // } catch (e) {
        //     setchartDataLoader(false);
        //     console.log(e);
        // }

    }

    // useEffect(() => {

    // }, [])

    const getDocLink = (fileNameData) => {

        return `data:text/csv;base64,${fileBlob}`;

    };
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const Loader = () => {
        return (
            <div className="spinner-border text-light " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    console.log("totalPage", totalPage)
    return (
        <>
            {

                <div className="">

                    <MobileSideNav />
                    <div className="hp-main-layout-col">
                        <div className="row align-items-center mt-8">
                            <div className="col-10 mb-4">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col flex-grow-1">
                                        <h3 className="  mt-30">
                                            <Link to="/upload-data"><i
                                                className="back-button hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font"></i></Link>
                                            Train & Test Dashboard</h3>
                                        <p className="hp-p1-body mb-0"> Explore the data along with predictions and download for later use.</p>
                                        <br></br>
                                        <div className="">

                                        </div>
                                    </div>


                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="col-12 table-spaces mt-30">








                        <div className="row">

                            <div className="col-12">
                                <div className="row ">

                                    <div className="col flex-grow-1 overflow-hidden">
                                        <div className="row">
                                            <div className="col-12 mt-16">

                                                <div className="row">
                                                    <div className="col-12 col-lg-12">

                                                        <ul className="nav nav-tabs " id="myTab" role="tablist">
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link active" id="home-tab"
                                                                    data-bs-toggle="tab" data-bs-target="#home" type="button"
                                                                    role="tab" aria-controls="home" aria-selected="true" onClick={!enableExportBtn && setenableExportBtn(true)}>Results</button>
                                                            </li>








                                                            <li className="nav-item d-none" role="presentation">
                                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                                    data-bs-target="#upload" type="button" role="tab"
                                                                    aria-controls="profile"
                                                                    aria-selected="false">Upload</button>
                                                            </li>


                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                                    data-bs-target="#evaluation" type="button" role="tab"
                                                                    aria-controls="profile"
                                                                    aria-selected="false"
                                                                    onClick={() => {
                                                                        testGraphsData()
                                                                        
                                                                    }}
                                                                >Evaluation</button>


                                                            </li>


                                                            {enableExportBtn && <div className="col-2 mb-4 last" >

                                                                {
                                                                    !downloadBtn ?
                                                                        <button type="button" onClick={() => exportData()} className="btn mt-16 mt-sm-0 text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0 ">
                                                                            {!downloadLoading ? <span>Export Data</span> : <Loader />}
                                                                        </button> :

                                                                        <span title="click to download Data" className="text-right btn mt-16 mt-sm-0 text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0" onClick={() => setDownLoadBtn(false)}><a href={getDocLink("file")} download={'results_date_time' + '.xls'}>Ready to Download</a></span>
                                                                }
                                                            </div>}
                                                        </ul>



                                                        <div className="tab-content" id="myTabContent">
                                                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                                                aria-labelledby="home-tab">

                                                                <LoadingOverlay
                                                                    styles={{
                                                                        position: 'inherit',
                                                                        height: "500px"
                                                                    }}
                                                                    active={loading}
                                                                    spinner={<Circles color="#9acb42" />}
                                                                />

                                                                <div className="col flex-grow-1 overflow-hidden">
                                                                    <section className="section">
                                                                        <div className="row g-32">
                                                                            <div className="col-12 col-md-4 d-none">
                                                                                <div className="card style-13">
                                                                                    <div className="card-body">
                                                                                        <br /> <br /> <br />

                                                                                        <Chart options={pieOption} series={pieSeries} type={'pie'} height="100%" />

                                                                                        <br /> <br />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-12 col-md-4 d-none">
                                                                                <div className="card ">
                                                                                    <div className="card-body style-13">
                                                                                        <br /> <br /> <br />

                                                                                        <Chart options={barChartOption} series={barChartSeries} type={'bar'} height="100%" />
                                                                                        <br /> <br />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 col-md-4 d-none">
                                                                                <div className="card style-13">
                                                                                    <div className="card-body">
                                                                                        <br /> <br /> <br />
                                                                                        <Chart options={optionsColumn} series={colmunSeries} type={'bar'} height="100%" />
                                                                                        <br /> <br />
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </section>
                                                                </div>





                                                                <div className="col-md-12 ">

                                                                    <section >

                                                                        <div className="hp-header-search col-4 d-none">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Search by grower number"
                                                                                id="header-search"
                                                                                value={searchValue}
                                                                                onChange={(event) => setSearchValue(event.target.value)}
                                                                                autoComplete="off" />
                                                                        </div>
                                                                        <div >
                                                                            <div className="col-md-12">
                                                                            
                                                                                <div className="style-14  fixTableHead">
                                                                                    <table className="table table-striped table1 ">
                                                                                        <thead className="hello t-fix" >
                                                                                            <tr>


                                                                                                {
                                                                                                    fileHeads.map((heads) =>
                                                                                                        <th key={heads}>{heads}</th>
                                                                                                    )
                                                                                                }

                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>

                                                                                            {
                                                                                                fileData.map((tableRows, index) =>

                                                                                                    <>
                                                                                                        <tr key={index + tableRows} colSpan="6"
                                                                                                            data-toggle="collapse"
                                                                                                            data-target={"#demo" + index}
                                                                                                            onClick={() => findRecordById(tableRows)}
                                                                                                            className="accordion-toggle">


                                                                                                            {
                                                                                                                fileHeads.map((heads, i) =>
                                                                                                                    <td key={heads + i + "heads"}>{fileData[index][heads]}</td>
                                                                                                                )

                                                                                                            }


                                                                                                        </tr>
                                                                                                        <tr className="p "
                                                                                                            onClick={() => findRecordById(tableRows)}
                                                                                                        >
                                                                                                            <td colSpan="12"
                                                                                                                className="hiddenRow d-none">
                                                                                                                <div className="accordian-body collapse p-3"
                                                                                                                    id={"demo" + index}
                                                                                                                >
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

                                                                                                                                            <hr />

                                                                                                                                            <div
                                                                                                                                                className="col-6 col-md-8 ">
                                                                                                                                                <select
                                                                                                                                                    onChange={(e) => setSelectValue(e.target.value)}
                                                                                                                                                    id="dropdown"
                                                                                                                                                    className="form-select"
                                                                                                                                                    aria-label="Default select example"
                                                                                                                                                >
                                                                                                                                                    <option
                                                                                                                                                        value="0">
                                                                                                                                                        Price
                                                                                                                                                    </option>
                                                                                                                                                    <option
                                                                                                                                                        value="1">
                                                                                                                                                        Volume
                                                                                                                                                    </option>


                                                                                                                                                </select>
                                                                                                                                            </div>

                                                                                                                                            <div
                                                                                                                                                className="col-12 col-md-6 mt-5">
                                                                                                                                                <a
                                                                                                                                                    href="#">
                                                                                                                                                    <button
                                                                                                                                                        type="submit"
                                                                                                                                                        className="btn btn-primary mt-10">
                                                                                                                                                        Run
                                                                                                                                                        Model</button></a>
                                                                                                                                            </div>
                                                                                                                                            <div
                                                                                                                                                className="col-12 col-md-12">
                                                                                                                                                <hr />

                                                                                                                                                <div
                                                                                                                                                    className="text-center topmargen12">



                                                                                                                                                    Simulation
                                                                                                                                                    Manual
                                                                                                                                                    Churn


                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                        </div>

                                                                                                                                    </div>

                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                className="col-6 col-md-6 ">

                                                                                                                                <img id="pricechart" src={selectValue == '0' ? "/assets/images/pricechart.png" : "/assets/images/new_volumechart.png"} />

                                                                                                                            </div>

                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </>
                                                                                                )


                                                                                            }


                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>

                                                                                {/* pagination  */}

                                                                                <Paginator
                                                                                    paginate={paginate}
                                                                                    PerPage={PerPage}
                                                                                    totalPage={totalPage / PerPage}
                                                                                />
                                                                                {/* pagination hanel */}

                                                                            </div>

                                                                        </div>
                                                                    </section>


                                                                </div>
                                                            </div>







                                                            <div className="tab-pane fade" id="data1" role="tabpanel"
                                                                aria-labelledby="data-tab">



                                                                <div className="col-md-12">

                                                                    <section className="section">
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="style-14">
                                                                                    <table className="table table-striped ">
                                                                                        <thead>
                                                                                            <tr>

                                                                                                {
                                                                                                    fileHeads.map((heads) =>
                                                                                                        <th key={heads}>{heads}</th>
                                                                                                    )
                                                                                                }

                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>

                                                                                            {
                                                                                                fileData.map((tableRows, index) =>

                                                                                                    <>
                                                                                                        <tr key={index + tableRows} colSpan="6"
                                                                                                            data-toggle="collapse"
                                                                                                            data-target={"#demo" + index}
                                                                                                            onClick={() => findRecordById(tableRows)}
                                                                                                            className="accordion-toggle">


                                                                                                            {
                                                                                                                fileHeads.map((heads, i) =>
                                                                                                                    <td key={heads + i + "heads"}>{fileData[index][heads]}</td>
                                                                                                                )

                                                                                                            }


                                                                                                        </tr>
                                                                                                        <tr className="p"
                                                                                                            onClick={() => findRecordById(tableRows)}
                                                                                                        >
                                                                                                            <td colSpan="12"
                                                                                                                className="hiddenRow d-none">
                                                                                                                <div className="accordian-body collapse p-3"
                                                                                                                    id={"demo" + index}
                                                                                                                >
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

                                                                                                                                            <hr />

                                                                                                                                            <div
                                                                                                                                                className="col-6 col-md-8 ">
                                                                                                                                                <select
                                                                                                                                                    onChange={(e) => setSelectValue(e.target.value)}
                                                                                                                                                    id="dropdown"
                                                                                                                                                    className="form-select"
                                                                                                                                                    aria-label="Default select example"
                                                                                                                                                >
                                                                                                                                                    <option
                                                                                                                                                        value="0">
                                                                                                                                                        Price
                                                                                                                                                    </option>
                                                                                                                                                    <option
                                                                                                                                                        value="1">
                                                                                                                                                        Volume
                                                                                                                                                    </option>


                                                                                                                                                </select>
                                                                                                                                            </div>

                                                                                                                                            <div
                                                                                                                                                className="col-12 col-md-6 mt-5">
                                                                                                                                                <a
                                                                                                                                                    href="#">
                                                                                                                                                    <button
                                                                                                                                                        type="submit"
                                                                                                                                                        className="btn btn-primary mt-10">
                                                                                                                                                        Run
                                                                                                                                                        Model</button></a>
                                                                                                                                            </div>
                                                                                                                                            <div
                                                                                                                                                className="col-12 col-md-12">
                                                                                                                                                <hr />

                                                                                                                                                <div
                                                                                                                                                    className="text-center topmargen12">



                                                                                                                                                    Simulation
                                                                                                                                                    Manual
                                                                                                                                                    Churn


                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                        </div>

                                                                                                                                    </div>

                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                                className="col-6 col-md-6 ">

                                                                                                                                <img id="pricechart" src={selectValue == '0' ? "/assets/images/pricechart.png" : "/assets/images/new_volumechart.png"} />

                                                                                                                            </div>

                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </>
                                                                                                )


                                                                                            }
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                                {/* pagination  */}


                                                                                {/* <Paginator
                                                                                paginate={paginate}
                                                                                PerPage={PerPage}
                                                                                totalPage={totalPage - 1}
                                                                            /> */}

                                                                                {/* pagination hanel */}
                                                                            </div>
                                                                        </div>
                                                                    </section>


                                                                </div>

                                                            </div>

                                                            <div className="tab-pane fade" id="upload" role="tabpanel"
                                                                aria-labelledby="contact-tab">
                                                                <div className="row ">
                                                                    <div className="col-lg-2"></div>
                                                                    <div className="col-lg-8 pading-col">
                                                                        <h4>Upload Predicting Churn DATA</h4>

                                                                        <hr />

                                                                        <div className="col-lg-12">

                                                                            <h1 className="mein-heading">Data Selection</h1>
                                                                            <p>Get startd by dragging data here, or import from:
                                                                            </p>
                                                                            <div className="topmargen12">
                                                                                <button type="button"
                                                                                    className="btn btn-primary former-btn ">Data
                                                                                    Source</button>
                                                                                <button type="button"
                                                                                    className="btn box-button former-btn">URL</button>
                                                                                <button type="button"
                                                                                    className="btn box-button former-btn">Local File</button>
                                                                                <button type="button"
                                                                                    className="btn box-button former-btn">Import API</button>
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                        <hr />
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <h1 className="mein-heading">Browse</h1>
                                                                                <div className="browse-border">
                                                                                    <input className="form-control" type="file"
                                                                                        id="formFile" />
                                                                                </div>
                                                                            </div>


                                                                            <div className="col-lg-6">

                                                                                <div className=" topmargen12 style-30">
                                                                                    <a href="#"> <button type="submit"
                                                                                        className="btn btn-primary">Test
                                                                                        Model</button></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>



                                                            {/* EVALUATION TAB */}
                                                            <div className="tab-pane fade" id="evaluation" role="tabpanel"
                                                                aria-labelledby="contact-tab">
                                                                <div className="row ">


                                                                    <div className="row ">

                                                                        <div className="col-lg-12 pading-col">
                                                                            {chartDataLoader ?
                                                                                <div style={{ height: 500, marginBottom: "10px" }}>
                                                                                    <LoadingOverlay
                                                                                        styles={{
                                                                                            position: 'inherit',

                                                                                        }}
                                                                                        active={chartDataLoader}
                                                                                        spinner={<Circles color="#9acb42" />}
                                                                                    />
                                                                                </div>

                                                                                : <>

                                                                                    <div className="col-lg-12 margin-b  text-center" >
                                                                                        <div className="chart-box ml-25 ">

                                                                                            <div className="col-12" style={{ height: 500, marginBottom: "10px" }}>
                                                                                                <Chart options={accuracyChartOptions} series={accuracyChartSeries} type={'line'} height={"100%"} />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>



                                                                                    <div className="col-lg-12 margin-b" >
                                                                                        <div className="chart-box ml-25"  >

                                                                                            <div className="col-12" style={{ height: 500, marginBottom: "10px" }}>
                                                                                                <Chart options={f11ChartOptions} series={f11ChartSeries} type={'line'} height={"100%"} />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>



                                                                                    <div className="col-lg-12 margin-b" >
                                                                                        <div className="chart-box ml-25"  >

                                                                                            <div className="col-12" style={{ height: 500, marginBottom: "10px" }}>
                                                                                                <Chart options={f10ChartOptions} series={f10ChartSeries} type={'line'} height={"100%"} />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>







                                                                                    <div className="col-lg-12 margin-b" >
                                                                                        <div className="chart-box ml-25"  >

                                                                                            <div className="col-12" style={{ height: 500, marginBottom: "10px" }}>
                                                                                                <Chart options={recall1ChartOptions} series={recall1ChartSeries} type={'line'} height={"100%"} />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>




                                                                                    <div className="col-lg-12 margin-b" >
                                                                                        <div className="chart-box ml-25"  >


                                                                                            <div className="col-12" style={{ height: 500, marginBottom: "10px" }}>
                                                                                                <Chart options={recall0ChartOptions} series={recall0ChartSeries} type={'line'} height={"100%"} />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>




                                                                                    <div className="col-lg-12 margin-b" >
                                                                                        <div className="chart-box ml-25"  >

                                                                                            <div className="col-12" style={{ height: 500, marginBottom: "10px" }}>
                                                                                                <Chart options={precision1ChartOptions} series={precision1ChartSeries} type={'line'} height={"100%"} />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>



                                                                                    <div className="col-lg-12  " >
                                                                                        <div className="chart-box ml-25"  >

                                                                                            <div className="col-12" style={{ height: 500, marginBottom: "10px" }}>
                                                                                                <Chart options={precision0ChartOptions} series={precision0ChartSeries} type={'line'} height={"100%"} />

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>



                                                                                    <br /><br />
                                                                                </>}
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

            }

        </>
    )
}

export default TrainModel;