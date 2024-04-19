




import React, { useState, useEffect } from 'react';
import MobileSideNav from './layout/MobileSideNav';
import { useSelector } from "react-redux";
import { MakeApiCall } from '../api/MakeApiCall';
import { Circles } from 'react-loader-spinner';
import LoadingOverlay from 'react-loading-overlay';
import { Link, useParams } from 'react-router-dom';
import Chart from "react-apexcharts";
import Select from 'react-select';
import DownloadBlobtoCsv from './common/DownloadBlobtoCsv';
import AnalyticalChart from './charts/charts_statistic/AnalyticalChart';
import GetFormattedDateDMY, { FormatDate } from './common/DateFormat';
import ReactTooltip from 'react-tooltip';



function SimulationChurn() {
    let flag = useParams()
    const [probIndex, setProbIndex] = useState();
    const [boolean, setboolean] = useState(Boolean(Object.values(flag)[0]))
    const [locationGroupData, setlocationGroupData] = useState()
    const [qualityData, setqualityData] = useState()
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
    //FIXED PRICE




    const [fixedPrice, setFixedPrice] = useState([]);
    const [artificialNeuralNetwork, setArtificialNeuralNetwork] = useState([]);
    const [logisticRegression, setLogisticRegression] = useState([]);
    const [CustomEnsembler, setCustomEnsembler] = useState([]);
    const [supportVectorMachine, setSupportVectorMachine] = useState([]);
    let withRespectToPriceSeries = [{
        name: 'Logistic Regression',
        data: logisticRegression
    }, {
        name: 'Support Vector Machine',
        data: supportVectorMachine
    }, {
        name: 'Artificial Neural Network',
        data: artificialNeuralNetwork
    }, {
        name: 'Custom',
        data: CustomEnsembler
    }];
    let withRespectToPriceOptions = {


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
                    filename: "Probability w.r.t Prices",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Probability w.r.t Prices",
                  },
                  png: {
                    filename: "Probability w.r.t Prices",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },
        markers: {
            size: [7]
        },
        subtitle: {
            text: " Probability w.r.t Prices",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        xaxis: {
            categories: fixedPrice,
            labels: {
                show: true,
            }, title: {
                text: "Fixed Price",
                offsetX: 0,
                offsetY: 84,
                style: {
                    color: "white",
                },
            },
        },
        yaxis: {
            min: 0,
            max: 1
        }
    };




    //VOLUME


    const [volume, setVolume] = useState([]);
    const [volArtificialNeuralNetwork, setVolArtificialNeuralNetwork] = useState([]);
    const [volLogisticRegression, setVolLogisticRegression] = useState([]);
    const [volCustomEnsembler, setVolCustomEnsembler] = useState([]);
    const [volSupportVectorMachine, setVolSupportVectorMachine] = useState([]);


    let withRespectToVolumeSeries = [{
        name: 'Logistic Regression',
        data: volLogisticRegression
    }, {
        name: 'Support Vector Machine',
        data: volSupportVectorMachine
    }, {
        name: 'Artificial Neural Network',
        data: volArtificialNeuralNetwork
    }, {
        name: 'Custom',
        data: volCustomEnsembler
    }];
    let withRespectToVolumeOptions = {


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
                    filename: "Probability w.r.t Volume",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Probability w.r.t Volume",
                  },
                  png: {
                    filename: "Probability w.r.t Volume",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },


        markers: {
            size: [7]
        },
        xaxis: {
            categories: volume,
            labels: {
                show: true,
                formatter: (value) => {
                    return   value  ;
                }
            }, title: {
                text: "Volume",
                offsetX: 0,
                offsetY: 84,
                style: {
                    color: "white",
                },
            },


        },
        subtitle: {
            text: " Probability w.r.t Volume",
            align: 'left',
            offsetX: 0,
            offsetY: 0,
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },


        yaxis: {
            min: 0,
            max: 1
        }
    };




    //RAINFALL
    const [rain, setrain] = useState([]);
    const [rainArtificialNeuralNetwork, setrainArtificialNeuralNetwork] = useState([]);
    const [rainLogisticRegression, setrainLogisticRegression] = useState([]);
    const [rainCustomEnsembler, setrainCustomEnsembler] = useState([]);
    const [rainSupportVectorMachine, setrainSupportVectorMachine] = useState([]);


    let withRespectToRainSeries = [{
        name: 'Logistic Regression',
        data: rainLogisticRegression
    }, {
        name: 'Support Vector Machine',
        data: rainSupportVectorMachine
    }, {
        name: 'Artificial Neural Network',
        data: rainArtificialNeuralNetwork
    }, {
        name: 'Custom',
        data: rainCustomEnsembler
    }];
    let withRespectToRainOptions = {


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
                    filename: "Probability w.r.t Rainfall",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Probability w.r.t Rainfall",
                  },
                  png: {
                    filename: "Probability w.r.t Rainfall",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },
        subtitle: {
            text: "Probability w.r.t Rainfall",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        markers: {
            size: [7]
        },
        xaxis: {


            categories: rain,
            position: 'bottom',
            labels: {
                show: true,
                formatter: (value) => {
                    return   value  ;
                } ,
            }, title: {
                text: "Rainfall",
                offsetX: 0,
                offsetY: 84,
                style: {
                    color: "white",
                },
            },
            
        },


        yaxis: {
            min: 0,
            max: 1
        }
    };




    //WEEK
    const [week, setWeek] = useState([]);
    const [weekArtificialNeuralNetwork, setweekArtificialNeuralNetwork] = useState([]);
    const [weekLogisticRegression, setweekLogisticRegression] = useState([]);
    const [weekCustomEnsembler, setweekCustomEnsembler] = useState([]);
    const [weekSupportVectorMachine, setweekSupportVectorMachine] = useState([]);


    let withRespectToWeekSeries = [{
        name: 'Logistic Regression',
        data: weekLogisticRegression
    }, {
        name: 'Support Vector Machine',
        data: weekSupportVectorMachine
    }, {
        name: 'Artificial Neural Network',
        data: weekArtificialNeuralNetwork
    }, {
        name: 'Custom',
        data: weekCustomEnsembler
    }];
    let withRespectToWeekOptions = {


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
                    filename: "Probability w.r.t Week",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Probability w.r.t Week",
                  },
                  png: {
                    filename: "Probability w.r.t Week",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },
        subtitle: {
            text: "Probability w.r.t week",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        markers: {
            size: [7]
        },
        xaxis: {


            categories: week,
            position: 'bottom',
            labels: {
                show: true,
            }, title: {
                text: "Week",
                offsetX: 0,
                offsetY: 128,
                style: {
                    color: "white",
                },
            },


        },


        yaxis: {
            min: 0,
            max: 1
        }
    };





    //Temp
    const [Temp, setTemp] = useState([]);
    const [TempArtificialNeuralNetwork, setTempArtificialNeuralNetwork] = useState([]);
    const [TempLogisticRegression, setTempLogisticRegression] = useState([]);
    const [TempCustomEnsembler, setTempCustomEnsembler] = useState([]);
    const [TempSupportVectorMachine, setTempSupportVectorMachine] = useState([]);


    let withRespectToTempSeries = [{
        name: 'Logistic Regression',
        data: TempLogisticRegression
    }, {
        name: 'Support Vector Machine',
        data: TempSupportVectorMachine
    }, {
        name: 'Artificial Neural Network',
        data: TempArtificialNeuralNetwork
    }, {
        name: 'Custom',
        data: TempCustomEnsembler
    }];
    let withRespectToTempOptions = {


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
                    filename: "Probability w.r.t Temperature",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Probability w.r.t Temperature",
                  },
                  png: {
                    filename: "Probability w.r.t Temperature",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },
        subtitle: {
            text: "Probability w.r.t Temperature",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
        markers: {
            size: [7]
        },
        xaxis: {


            categories: Temp,
            position: 'bottom',
            labels: {
                show: true,
                formatter: (value) => {
                    return   value  ;
                } ,
            }, title: {
                text: "Temperature",
                offsetX: 0,
                offsetY: 84,
                style: {
                    color: "white",
                },
            },


        },


        yaxis: {
            min: 0,
            max: 1
        }
    };
    const filedataSimulation = useSelector(state => state?.fileDataSlice?.filedataSimulation);
    const [priseSlider, setPriceSlider] = useState(filedataSimulation.fixed_price);
    const [maxpriseSlider, setmaxPriceSlider] = useState(filedataSimulation.fixed_price * 2);


    const [volumeSlider, setvolumeSlider] = useState(filedataSimulation.item_quantity);
    const [maxvolumeSlider, setmaxvolumeSlider] = useState(filedataSimulation.item_quantity * 2);


    const [seasonSlider, setSeasonSlider] = useState(filedataSimulation.week_of_year);
    // const [formSizeSlider, setFormSizeSlider] = useState(filedataSimulation.farm_size);
    const [barelyArea, setBarelyArea] = useState(filedataSimulation.barley_area_ha);
    const [barelyProd, setBarelyProd] = useState(filedataSimulation.barley_production);
    const [canolaArea, setCanolaArea] = useState(filedataSimulation.canola_area_ha);
    const [canolaProd, setCanolaProd] = useState(filedataSimulation.canola_production);
    const [wheatArea, setWheatArea] = useState(filedataSimulation.wheat_area_ha);
    const [wheatProd, setWheatProd] = useState(filedataSimulation.wheat_production);
    const [maxwheatProd, setmaxWheatProd] = useState(filedataSimulation.wheat_production * 2);
    const [expectedIssueDate, setexpectedIssueDate] = useState(filedataSimulation.issue_date.split(" ")[0]);
    const [locationGroup, setLocationGroup] = useState({ value: filedataSimulation.location_group, label: filedataSimulation.location_group })
    const [grossCropedAreaSlider, setGrossCropedAreaSlider] = useState(filedataSimulation.crop_planted_area_ha);
    const [uniqueGroverNumber, setUniqueGroverNumber] = useState();
    const [showResult, setShowResult] = useState(false);
    const [results, setResult] = useState([]);
    const [modelResults, setModelResults] = useState([]);
    const [fileBlob, setFileBlob] = useState();
    const [grover, setgrover] = useState(boolean?{ value: filedataSimulation?.grower_number, label: filedataSimulation?.grower_number }:uniqueGroverNumber?.[0]);
    const [downloadBtn, setDownLoadBtn] = useState(false);
    const [previouseTradeData, setpreviouseTradeData] = useState();
    const [previouseTradeDataHeader, setpreviouseTradeDataHeader] = useState([]);


    const [loading, setLoading] = useState(false);
    const [quality, setQuality] = useState({ value: filedataSimulation.quality, label: filedataSimulation.quality });
    const [payloaData, setPayLoaData] = useState(filedataSimulation);
    let token = localStorage.getItem('token');
    let file_Id = localStorage.getItem('file_id');


    useEffect(() => {

         groverNumber();
        
        boolean && getUniqueGrover(grover)
        setboolean(false)
    }, [])


    let groverNumberData = [];



    //    get all unique grover numbers list
    const groverNumber = async () => {
        setLoading(true)
        
        let url = `/file/grover_number/${3}`;
        const response = await MakeApiCall(url, "", token, 'GET');


        if (response.status === 200) {
            setLoading(false)


            response.data?.forEach((item) => {
                groverNumberData.push({ value: item, label: item });
            });
            setUniqueGroverNumber(groverNumberData);
            if (!boolean) {
                setgrover(groverNumberData[0])
                getUniqueGrover(groverNumberData[0])
            } 
            
        }


    }


    useEffect(() => {


    }, [modelResults])


    const getUniqueGrover = React.useCallback(async (e) => {
        setLoading(true)
        let url = `/file/latest_record/${3}/${e.value}`;
        const response = await MakeApiCall(url, "", token, 'GET');
        if (response.status === 200) {
            setLoading(false)


            let previouseTradeDataArray = []


            for (let i in response.data.training_records) {
                previouseTradeDataArray.push(Object.values(response.data.training_records[i]))
            }
            setpreviouseTradeData(previouseTradeDataArray)
            setpreviouseTradeDataHeader(Object.keys(response.data.training_records[0]))


            !boolean && setPriceSlider(response.data.latest_record.fixed_price);
            !boolean && setmaxPriceSlider(response.data.latest_record.fixed_price * 2);
            !boolean && setQuality({ value: response.data.latest_record.quality, label: response.data.latest_record.quality });
            !boolean && setSeasonSlider(response.data.latest_record.week_of_year);
            !boolean && setWheatProd(response.data.latest_record.wheat_production);
            !boolean && setmaxWheatProd(response.data.latest_record.wheat_production * 2);
            !boolean && setvolumeSlider(response.data.latest_record.item_quantity);
            !boolean && setmaxvolumeSlider(response.data.latest_record.item_quantity * 2);
            !boolean && setLocationGroup({ value: response.data.latest_record.location_group, label: response.data.latest_record.location_group });
            !boolean && setPayLoaData(response.data.latest_record);            
            !boolean && setexpectedIssueDate(response.data.latest_record.issue_date.split(" ")[0]);
            
        }


    })



    let sliderPayLoad = {
        "item_quantity": Number(volumeSlider) < 0 ? 0 : Number(volumeSlider),
        "fixed_price": Number(priseSlider),
        "wheat_area_ha": wheatArea < 0 ? 0 : wheatArea,
        "wheat_production": wheatProd < 0 ? 0 : wheatProd,
        "crop_planted_area_ha": grossCropedAreaSlider < 0 ? 0 : grossCropedAreaSlider,
        "canola_area_ha": canolaArea < 0 ? 0 : canolaArea,
        "canola_production": canolaProd < 0 ? 0 : canolaProd,
        "barley_area_ha": barelyArea < 0 ? 0 : barelyArea,
        "barley_production": barelyProd < 0 ? 0 : barelyProd,
        // "farm_size": formSizeSlider < 0 ? 0 : 0,
        'quality': quality?.value,
        'week_of_year': Number(seasonSlider),
        'location_group': locationGroup?.value,
        'wheat_production': Number(wheatProd),
        'issue_date':expectedIssueDate


    }


    let finalPayload = { ...payloaData, ...sliderPayLoad }
    let url = `/simulation/single/churn_prediction/`;
    const runSimulation = React.useCallback(async () => {
        setLoading(true);
        const response = await MakeApiCall(url, [finalPayload], token, 'POST');
        try {
            if (response.status == 200) {
                setDownLoadBtn(true)
                setLoading(false);
                setResult(response.data);
                setFileBlob(response.data.file_bytes_data)
                setModelResults(response.data.churn_prediction)
                //FIXED PRICE
                setFixedPrice(response?.data?.price_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, `$${currentValue.fixed_price.toFixed(2)}`];
                }, []))


                setLogisticRegression(response?.data?.price_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.logistic_regression.toFixed(2)];
                }, []))


                setSupportVectorMachine(response?.data?.price_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.support_vector_machine.toFixed(2)];
                }, []))


                setArtificialNeuralNetwork(response?.data?.price_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.artificial_neural_network.toFixed(2)];
                }, []))


                setCustomEnsembler(response?.data?.price_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.custom_ensembler.toFixed(2)];
                }, []))



                //VOLUME
                setVolume(response?.data?.volume_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.item_quantity];
                }, []))


                setVolLogisticRegression(response?.data?.volume_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.logistic_regression.toFixed(2)];
                }, []))


                setVolSupportVectorMachine(response?.data?.volume_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.support_vector_machine.toFixed(2)];
                }, []))


                setVolArtificialNeuralNetwork(response?.data?.volume_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.artificial_neural_network.toFixed(2)];
                }, []))


                setVolCustomEnsembler(response?.data?.volume_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.custom_ensembler.toFixed(2)];
                }, []))




                setWeek(response?.data?.week_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, [currentValue.week_of_year, currentValue.year]];
                }, []))
                setweekLogisticRegression(response?.data?.week_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.logistic_regression.toFixed(2)];
                }, []))


                setweekSupportVectorMachine(response?.data?.week_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.support_vector_machine.toFixed(2)];
                }, []))


                setweekArtificialNeuralNetwork(response?.data?.week_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.artificial_neural_network.toFixed(2)];
                }, []))


                setweekCustomEnsembler(response?.data?.week_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.custom_ensembler.toFixed(2)];
                }, []))




                setrain(response?.data?.rainfall_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.avg_rainfall];
                }, []))
                setrainLogisticRegression(response?.data?.rainfall_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.logistic_regression.toFixed(2)];
                }, []))


                setrainSupportVectorMachine(response?.data?.rainfall_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.support_vector_machine.toFixed(2)];
                }, []))


                setrainArtificialNeuralNetwork(response?.data?.rainfall_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.artificial_neural_network.toFixed(2)];
                }, []))


                setrainCustomEnsembler(response?.data?.rainfall_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.custom_ensembler.toFixed(2)];
                }, []))




                
                setTemp(response?.data?.temp_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.avg_temp];
                }, []))
                setTempLogisticRegression(response?.data?.temp_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.logistic_regression.toFixed(2)];
                }, []))


                setTempSupportVectorMachine(response?.data?.temp_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.support_vector_machine.toFixed(2)];
                }, []))


                setTempArtificialNeuralNetwork(response?.data?.temp_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.artificial_neural_network.toFixed(2)];
                }, []))


                setTempCustomEnsembler(response?.data?.temp_predictions.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.custom_ensembler.toFixed(2)];
                }, []))




                setShowResult(true);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    })




    return (
        <div class="hp-main-layout-col">


           <MobileSideNav></MobileSideNav>  
            <div>
                <div className="row mb-32 gy-32">
                    <div className="col-12">
                        <h3 className='mt-30'><Link to="/"><i className="hp-text-color-dark-0 ri-2x ri-arrow-left-line back-font back-button"></i></Link> What-if Analysis</h3>
                        <p className="hp-p1-body mb-0 mt-3">Select a grower, simulate the values of the features to perform what-if analysis</p>
                    </div>


                    <div className="col-12 mt-3">
                        <div className="row g-32">
                            <div className="col flex-grow-1 overflow-hidden">
                                <div className="row g-32">



                                    <div className="col-12 margen30px">






                                        <section className="section dashboard">
                                            <div className="row">




                                                <div className="col-lg-6">
                                                    <div className="row">



                                                        <div className="col-12 col-md-6 mb-10 ">
                                                            <div className="card">
                                                                <div className="card-body   mb-10 ">
                                                                    <h3 className="color-gd">Grower Number</h3>
                                                                    <br></br>
                                                                    <div className="">
                                                                        <Select
                                                                            value={grover}
                                                                            options={uniqueGroverNumber}
                                                                            //  value={grover ?? uniqueGroverNumber?.[0]}
                                                                            styles={{
                                                                                control: base => ({
                                                                                    ...base,
                                                                                    color: "#white"
                                                                                }),
                                                                                color: "red", option: (base) => ({
                                                                                    ...base,
                                                                                    border: `1px dotted white`,
                                                                                    height: '60%',
                                                                                    backgroundColor: '#252525',
                                                                                })
                                                                            }}
                                                                            // defaultValue={uniqueGroverNumber?.[0]}
                                                                            onChange={(e) => {
                                                                                getUniqueGrover(e)
                                                                                setgrover(e)
                                                                            }
                                                                            } />
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-12 col-md-6 mb-10">



                                                            <div className="slidecontainer text-center">
                                                                <LoadingOverlay
                                                                    styles={{
                                                                        position: 'inherit',
                                                                    }}
                                                                    active={loading}
                                                                    spinner={<Circles color="#9acb42" />}
                                                                />
                                                                {
                                                                    <a href="#" className={loading && 'invisible'} onClick={runSimulation}> <img src="/assets/images/play-button.png" alt="" /> </a>
                                                                }


                                                            </div>


                                                        </div>



                                                        <div className="col-12 col-md-6 mb-10">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim ">
                                                                    <h3 className="color-gd">Price</h3>
                                                                    <p ><span id="demo3">{priseSlider} $</span></p>
                                                                    <div className="slidecontainer">
                                                                        <input
                                                                            type="range"
                                                                            min="0"
                                                                            max={1000}
                                                                            step="1"
                                                                            value={priseSlider}
                                                                            onChange={(e) => setPriceSlider(e.target.value)}
                                                                            className="slider"
                                                                            id="Price" />


                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="col-12 col-md-6 mb-10">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim ">
                                                                    <h3 className="color-gd">Quality</h3>


                                                                    <p className='d-none' ><span id="demo2"> $ {volumeSlider < 0 ? 0 : volumeSlider}</span></p>
                                                                    <div className="slidecontainer">



                                                                        <Select options={qualityData}
                                                                            value={quality}
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
                                                                            onChange={(e) => setQuality(e)} />
                                                                       


                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="col-12 col-md-6 mb-10">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim">
                                                                    <h3 className="color-gd">Expected Issue Date</h3>



                                                                    <input className='date' style={{ borderRadius: "5px", height: "40px" }} required placeholder="yyyy-mm-dd"
                                                                        type="date" max="2023-10-30" value={expectedIssueDate} onChange={(e) => setexpectedIssueDate(e.target.value)} />
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>


                                                        {/* <div className="col-12 col-md-6 mb-10">
                                                            <div className="card">
                                                                <div className="card-body col-height">
                                                                    <div><p>Expected Issue Date</p></div>
                                                                    <input style={{ borderRadius: "5px", height: "40px" }} type="date" min="2022-11-30" max="2023-10-30" />



                                                                </div>
                                                            </div>


                                                        </div> */}





                                                        <div className="col-12 col-md-6 mb-10">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim ">
                                                                    <h3 className="color-gd">Location Group</h3>



                                                                    <div className="slidecontainer">
                                                                        <Select options={locationGroupData}
                                                                            value={locationGroup}


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
                                                                            onChange={(e) => setLocationGroup(e)} />
                                                                        {/* <select
                                                                        className="form-select"
                                                                        aria-label="Default select example"
                                                                        onChange={(e) => setLocationGroup(e.target.value)}
                                                                    >


                                                                        {


                                                                                location_group.map((item) =>
                                                                                <option key={item} value={item} selected={item === locationGroup ? true : false}>{item}</option>
                                                                            )
                                                                        }
                                                                    </select> */}




                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>






                                                    </div>
                                                    {/* <h3 className="margen30px ">Farm Characteristics</h3> */}


                                                    <div className="row ">


                                                        {/* <div className="col-12 col-md-6 mb-10 hidecol">
                                                            <div className="card ">
                                                                <div className="card-body col-heightsim">
                                                                    <h3 className="color-gd">Farm Size</h3>
                                                                    <div className="rang-date">{formSizeSlider} Acre</div>
                                                                    <div className="slidecontainer">
                                                                        <input
                                                                            type="range"
                                                                            min="1"
                                                                            step="0.1"
                                                                            max="100"
                                                                            value={formSizeSlider}
                                                                            onChange={(e) => setFormSizeSlider(e.target.value)}
                                                                            className="slider style-22"
                                                                            id="myRange" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}


                                                        <div className="col-12 col-md-6 mb-10">
                                                            <div className="card">
                                                                <div className="card-body  col-heightsim">
                                                                    <h3 className="color-gd">Volume</h3>


                                                                    <p><span id="demo2">  {volumeSlider < 0 ? 0 : volumeSlider} MT</span></p>
                                                                    <div className="slidecontainer">




                                                                        <input type="range"
                                                                            min="0"
                                                                            max={10000}
                                                                            step="1"
                                                                            value={volumeSlider}
                                                                            onChange={(e) => setvolumeSlider(e.target.value)}
                                                                            className="slider"
                                                                            id="Volume"
                                                                        />


                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="col-12 col-md-6 mb-10 ">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim r">
                                                                    <h3 className="color-gd">Wheat Production</h3>
                                                                    <div className="rang-date">{wheatProd + " MT"}</div>
                                                                    <div className="slidecontainer">
                                                                        <input
                                                                            type="range"
                                                                            min="0"
                                                                            max={10000}
                                                                            step="0.1"
                                                                            value={wheatProd}
                                                                            onChange={(e) => setWheatProd(e.target.value)}
                                                                            className="slider style-22"
                                                                            id="myRange" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-12 col-md-12 col-heightsim">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim r">



                                                                    <div id="chart" style={{ height: '350px' }}>
                                                                        <Chart options={withRespectToWeekOptions} series={withRespectToWeekSeries} type={'line'} height={"100%"} />
                                                                    </div>
                                                                   


                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-12 col-md-12 col-heightsim">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim r">



                                                                    <div id="chart" style={{ height: '350px' }}>
                                                                        <Chart options={withRespectToTempOptions} series={withRespectToTempSeries} type={'line'} height={"100%"} />
                                                                    </div>
                                                                   


                                                                </div>
                                                            </div>
                                                        </div>
                                                     



 {/* <AnalyticalChart xAxisTitle="Week" yAxisTitle="Price" chartTitle="Volume By Price & Growers" alignTitle="left" chart_data={withRespectToWeekSeries}
                                                                            // max,min,tickAmount,
                                                                           
                                                                            chart_type="line" chart_category={week}  chart_height={700} xAxisdoubleLabels={true} min={0} max={1} /> */}




                                                    </div>







                                                </div>




                                                <div className="col-lg-6" >





                                                    <div className="card">
                                                        <div className="card-body  pos-rel ">
                                                            {/* <h5 className="card-title ">Model Results </h5> */}
                                                            <div className="col-lg-12 padcol " style={{height:"310px"}}>


                                                                <table className="table table-striped cellspace" >


                                                                    <tbody>
                                                                        <tr>
                                                                            <td> </td>
                                                                            <td>Logistic Regression</td>
                                                                            <td>Support Vector Machine</td>
                                                                            <td>Artificial Neural Network</td>
                                                                            <td>Custom Ensembler</td>
                                                                        </tr>
                                                                        <tr>
                                                                       
                                                                        <td > <strong>Result</strong></td>
                                                                            <td
                                                                                // data-tip={downloadBtn ? "0.45" : ""}
                                                                            >{modelResults[0]?.logistic_regression === 0 ? "Not Trade" : modelResults[0]?.logistic_regression === 1 ? "Trade" : "-"}</td>
                                                                            <td >{modelResults[0]?.support_vector_machine === 0 ? "Not Trade" : modelResults[0]?.support_vector_machine === 1 ? "Trade" : "-"}</td>
                                                                            <td >{modelResults[0]?.artificial_neural_network === 0 ? "Not Trade" : modelResults[0]?.artificial_neural_network === 1 ? "Trade" : "-"}</td>
                                                                            <td >{modelResults[0]?.custom_ensembler === 0 ? "Not Trade" : modelResults[0]?.custom_ensembler === 1 ? "Trade" : "-"}</td>




                                                                        </tr>
                                                                        <tr>
                                                                        <td > <strong>Probability Threshold</strong></td>
                                                                            <td>{downloadBtn? "0.55":"-"}</td>
                                                                            <td>{downloadBtn? "0.35":"-"}</td>
                                                                            <td>{downloadBtn? "0.50":"-"}</td>
                                                                            <td>{downloadBtn? "0.50":"-"}</td>
                                                                        </tr>




                                                                        <tr>
                                                                            {/* <th scope="row">--</th> */}
                                                                            {/* {
                                                                                (showResult) &&


                                                                                results.length && results.map((item, index) =>
                                                                                    <>
                                                                                        <td key={index + '1'}>{item.issue_date}</td>
                                                                                        <td>{item?.logistic_regression}</td>
                                                                                        <td>{item?.random_forest}</td>
                                                                                    </>
                                                                                )
                                                                            } */}


                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                                                                                <ReactTooltip place="top" type="dark" effect="float"/>


                                                                {downloadBtn && <div className=' text-right mt-15' >




                                                                    <span title="click to download Data" className="text-right btn mt-16 mt-sm-0 text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0 pos-abs" ><a href={DownloadBlobtoCsv("file", fileBlob)} download={'ChurnData' + '.xls'}>Download</a></span>


                                                                </div>}
                                                            </div>


                                                        </div>
                                                    </div>



                                                    <div className="card margen30px" style={{marginTop:"30px"}}>
                                                        <div className="card-body ">
                                                            <div className="col-lg-12 padcol">
                                                               <div id="chart" style={{ height: '350px' }}>
                                                                    <Chart options={withRespectToPriceOptions} series={withRespectToPriceSeries} type={'line'} height={"100%"} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="card margen30px" style={{marginTop:"25px"}}>
                                                        <div className="card-body ">
                                                            <div className="col-lg-12 padcol">
                                                                <div id="chart" style={{ height: '350px' }}>
                                                                    <Chart options={withRespectToVolumeOptions} series={withRespectToVolumeSeries} type={'line'} height={"100%"} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-12 col-md-12 col-heightsim">
                                                            <div className="card">
                                                                <div className="card-body col-heightsim r">



                                                                    <div id="chart" style={{ height: '350px' }}>
                                                                        <Chart options={withRespectToRainOptions} series={withRespectToRainSeries} type={'line'} height={"100%"} />
                                                                    </div>
                                                                   


                                                                </div>
                                                            </div>
                                                        </div>









                                                </div>
                                            </div>
                                        </section>





                                        {/* Historical Data table */}


                                        <section className="section section-card mt-12">
                                            <h4>Previous Trade</h4>
                                            <div className="row">
                                                <div className="col-lg-12 ">



                                                    <div class="card ">
                                                        <div class="card-body ">
                                                            <div className="col-12 col-lg-12 ">
                                                                <div className="style-14 fixTableHead ">
                                                                    <table className="table table-striped table1 ">


                                                                        <thead className="t-fix">
                                                                            <tr colspan="6" data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
                                                                                {previouseTradeDataHeader?.map((item,index) => {
                                                                                    return (

                                                                                        <th className={item==="prob" ? !probIndex? setProbIndex(index) : "prob":""}>{item}</th>
                                                                                    )
                                                                                })}
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {previouseTradeData?.map((item) => {
                                                                                return (
                                                                                    <tr colspan="6" data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
                                                                                        {item?.map((item1,index) => { return (<td className={index===probIndex && "prob"}>{item1}</td>) })}


                                                                                    </tr>)
                                                                            })}


                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
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



    )
}


export default React.memo(SimulationChurn);