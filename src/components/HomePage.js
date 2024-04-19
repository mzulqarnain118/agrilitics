import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import MobileSideNav from "./layout/MobileSideNav";
import Select from 'react-select'
import { MakeApiCall } from "../api/MakeApiCall";

//LOADING TILL DATA LOADED
import { Circles } from 'react-loader-spinner';
import LoadingOverlay from 'react-loading-overlay';
import Slider from "../commonComponents/Slider";



function HomePage() {
    let token = localStorage.getItem('token');
    let file_Id = localStorage.getItem('file_id');
    // week of year slider 
    const [weekOfYear, setWeakOfYear] = useState([1, 53]);
    // State select box Data
    const options = [
        { value: 'Queensland', label: 'Queensland' },
        { value: 'South Australia', label: 'South Australia' },
        { value: 'New South Wales', label: 'New South Wales' },
        { value: 'Western Australia', label: 'Western Australia' },
        { value: 'Victoria', label: 'Victoria' },

    ]
    // Quality select  box Data

    // var qualityStandard = ['ASW1' , 'APW1' , 'ANW2' , 'AGP1' , 'AUH2' ,'H2' , 'APH2' ,'SFW1', 'ANW1', 'APWMG',
    // 'SFWR', 'FED70/10', 'H1', 'APH1', 'DR1', 'APW2', 'AH9' ,'FED1' ,'ASWMG', 'AUH14',
    // 'APWN', 'AH9H' ,'AUW1', 'SFWM'];

    //CHURN BY STATE CHART

    const [churnByStateValue, setchurnByStateValue] = useState([])
    const [churnByStateValue1, setchurnByStateValue1] = useState([])
    const [churnByStateValue2, setchurnByStateValue2] = useState([])
    const [churnByStateTitle, setchurnByStateTitle] = useState([])
    let churnByStateSeries =
        [
            {
                name: 'Total Contracts',
                data: churnByStateValue
            },
            {
                name: 'No. of Growers',
                data: churnByStateValue1
            }
            ,
            {
                name: 'Avg Volume',
                data: churnByStateValue2
            }

        ]
    let churnByStateOptions = {

        chart: {
            id: 'bar',

        },

        xaxis: {
            categories: churnByStateTitle,
        },

        yaxis: {
            min: 0,
            tickAmount: 10  //number of lines in chart
        }, title: {
            text: "Contracts, Growers & Avg Volume By State",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        },
    };

    //CHURN BY YEAR CHART


    const [churnByYearValue, setchurnByYearValue] = useState([])
    const [churnByYearValue1, setchurnByYearValue1] = useState([])
    const [churnByYearValue2, setchurnByYearValue2] = useState([])

    const [churnByYearTitle, setchurnByYearTitle] = useState([])
    let churnByYearSeries = [
        {
            name: 'Total Contracts',
            data: churnByYearValue
        },
        {
            name: 'No. of Growers',
            data: churnByYearValue1
        }
        ,
        {
            name: 'Avg Volume',
            data: churnByYearValue2
        }

    ]
    let churnByYearOptions = {
        chart: {
            id: 'bar'
        },

        xaxis: {
            categories: churnByYearTitle,
        }
        ,
        yaxis: {
            min: 0,
            tickAmount: 10  //number of lines in chart
        }, title: {
            text: "Contracts, Growers & Avg Volume By Year",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        }
    };
    //CHURN BY QUALITY CHART

    const [churnByQualityValue, setchurnByQualityValue] = useState([])
    const [churnByQualityValue1, setchurnByQualityValue1] = useState([])
    const [churnByQualityValue2, setchurnByQualityValue2] = useState([])

    const [churnByQualityTitle, setchurnByQualityTitle] = useState([])
    const [loading, setLoading] = useState(false);
    let churnByQualitySeries = [
        {
            name: 'Total Contracts',
            data: churnByQualityValue
        },
        {
            name: 'No. of Growers',
            data: churnByQualityValue1
        }
        ,
        {
            name: 'Avg Volume',
            data: churnByQualityValue2
        }

    ]
    let churnByQualityOptions = {
        chart: {
            id: "bar",
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
                    filename: "Contracts, Growers & Avg Volume By Quality",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Contracts, Growers & Avg Volume By Quality",
                  },
                  png: {
                    filename: "Contracts, Growers & Avg Volume By Quality",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        xaxis: {
            categories: churnByQualityTitle,
        },
        yaxis: {
            min: 0,
            tickAmount: 10  //number of lines in chart
        }, title: {
            text: "Contracts, Growers & Avg Volume By Quality",
            align: 'center',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white'
            },
        }

    };
    //CHURN BY WEEK CHART



    const [churnByWeekValue, setchurnByWeekValue] = useState([])
    const [churnByWeekValue1, setchurnByWeekValue1] = useState([])
    const [churnByWeekValue2, setchurnByWeekValue2] = useState([])

    const [churnByWeekTitle, setchurnByWeekTitle] = useState([])

    let churnByWeekSeries = [
        {
            name: 'Total Contracts',
            data: churnByWeekValue
        },
        {
            name: 'No. of Growers',
            data: churnByWeekValue1
        }
        ,
        {
            name: 'Avg Volume',
            data: churnByWeekValue2
        }

    ]

    let churnByWeekOptions = {

        chart: {
            height: 1000,
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
                    filename: "Contracts, Growers & Avg Volume By Week",
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    dateFormatter(timestamp) {
                      return new Date(timestamp).toDateString()
                    }
                  },
                  svg: {
                    filename: "Contracts, Growers & Avg Volume By Week",
                  },
                  png: {
                    filename: "Contracts, Growers & Avg Volume By Week",
                  },
                  background: '#fff'
  
                },
                autoSelected: 'zoom' 
              },
        },

        stroke: {
            width: 5,
            curve: 'smooth'
        },
        markers: {
            size: [5]
        },
        xaxis: {
            categories: churnByWeekTitle,
            tickweek_of_year: 10,

        },
        title: {
            text: 'Contracts, Growers & Avg Volume By Week',
            align: 'center',
            style: {
                fontSize: "18px",
                color: 'white'
            }
        },
        yaxis: {
            min: 0,
            tickAmount: 10
        }

    };

    const [states, setStates] = useState([])
    const [quality, setQuality] = useState([])
    const [years, setYear] = useState([])


    // console.log("url",JSON.stringify({states:states.reduce(function(accumulator, currentValue) {
    //     return accumulator=[...accumulator,currentValue.value];
    //   },[] ),quality:quality.reduce(function(accumulator, currentValue) {
    //     return accumulator=[...accumulator,currentValue.value];
    //   },[] ),years:years.reduce(function(accumulator, currentValue) {
    //     return accumulator=[...accumulator,Number(currentValue.value)];
    //   },[] ),weeks:weekOfYear}))
    var qualityStandard = [
        {
            label: 'ASW1',
            value: 'ASW1',
        },
        {
            label: 'APW1',
            value: 'APW1',
        },
        {
            label: 'APW1 MG',
            value: 'APW1 MG',
        }

    ]
    const dashboardChartsData = async () => {
        let weeks = []
        setchurnByStateValue(() => [])
        setchurnByStateValue1(() => [])
        setchurnByStateValue2(() => [])
        setchurnByStateTitle(() => [])
        setchurnByQualityValue(() => [])
        setchurnByQualityValue1(() => [])
        setchurnByQualityValue2(() => [])
        setchurnByQualityTitle(() => [])
        setchurnByYearValue(() => [])
        setchurnByYearValue1(() => [])
        setchurnByYearValue2(() => [])
        setchurnByYearTitle(() => [])
        setchurnByWeekValue(() => [])
        setchurnByWeekValue2(() => [])
        setchurnByWeekTitle(() => [])



        setLoading(true)
        try {


            const weeksMeth = () => {
                for (let i = weekOfYear[0]; i <= weekOfYear[1]; i++) {
                    weeks.push(i)
                }
                console.log("weeks", weeks)
            }

            weeksMeth()
            const payload = {
                "states": states.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.value];
                }, []),
                "quality": quality.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, currentValue.value];
                }, []),
                "years": years.reduce(function (accumulator, currentValue) {
                    return accumulator = [...accumulator, Number(currentValue.value)];
                }, []),
                "weeks": weeks
            }
            let url = `/file/dashboard/${3}`;

            console.log("url", payload)
            const response = await MakeApiCall(url, payload, token, 'POST');
            console.log("response", response)

            if (response.status === 200) {
                let fstValues = [];
                let secondValues = [];
                let thirdValues = [];
                let chartTitles = [];

                for (let i in response.data.states_chart) {
                    fstValues.push(response.data.states_chart[i]["contracts"])
                    setchurnByStateValue(fstValues)
                    chartTitles.push(i)
                    setchurnByStateTitle(chartTitles)
                    secondValues.push(response.data.states_chart[i]["growers"])
                    setchurnByStateValue1(secondValues)
                    thirdValues.push(response.data.states_chart[i]["volume"])
                    setchurnByStateValue2(thirdValues)

                }
                fstValues = [];
                secondValues = [];
                thirdValues = [];
                chartTitles = [];


                for (let i in response.data.quality_chart) {
                    chartTitles.push(i)
                    setchurnByQualityTitle(chartTitles)
                    fstValues.push(response.data.quality_chart[i]["contracts"])
                    setchurnByQualityValue(fstValues)
                    secondValues.push(response.data.quality_chart[i]["growers"])
                    setchurnByQualityValue1(secondValues)
                    thirdValues.push(response.data.quality_chart[i]["volume"])
                    setchurnByQualityValue2(thirdValues)

                }
                fstValues = [];
                secondValues = [];
                thirdValues = [];
                chartTitles = [];


                for (let i in response.data.weeks_chart) {
                    chartTitles.push(i)
                    setchurnByWeekTitle(old => [...old, i])
                    fstValues.push(response.data.weeks_chart[i]["contracts"])
                    setchurnByWeekValue(fstValues)
                    secondValues.push(response.data.weeks_chart[i]["growers"])
                    setchurnByWeekValue1(secondValues)
                    thirdValues.push(response.data.weeks_chart[i]["volume"])
                    setchurnByWeekValue2(thirdValues)
                }

                fstValues = [];
                secondValues = [];
                thirdValues = [];
                chartTitles = [];
                for (let i in response.data.years_chart) {
                    chartTitles.push(i)
                    setchurnByYearTitle(old => [...old, i])
                    fstValues.push(response.data.years_chart[i]["contracts"])
                    setchurnByYearValue(fstValues)
                    secondValues.push(response.data.years_chart[i]["growers"])
                    setchurnByYearValue1(secondValues)
                    thirdValues.push(response.data.years_chart[i]["volume"])
                    setchurnByYearValue2(thirdValues)
                }
                setLoading(false)
            }
            // setYear(()=>[])
            // setStates(()=>[])
            // setQuality(()=>[])
            // setWeakOfYear(()=>[])

        } catch (e) {
            setLoading(false)
            console.log("error", e)
        }


    }
    var Years = [
        { label: '2017', value: '2017' },
        { label: '2018', value: '2018' },
        { label: '2019', value: '2019' },
        { label: '2020', value: '2020' },
        { label: '2021', value: '2021' },
        { label: '2022', value: '2022' }
    ]

    useEffect(() => {
        dashboardChartsData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        years !== 0 && quality !== 0 && states !== 0 ?
            dashboardChartsData()
            :
            alert("Select the Above values")

    }
    // console.log("dashboard/fileId",
    // ,churnByQualityValue,churnByQualityValue1,churnByQualityTitle,
    // churnByWeekValue,churnByWeekValue1,churnByWeekTitle
    // ,churnByYearValue,churnByYearValue1,churnByYearTitle
    // )
    return (
      <React.Fragment>
        {loading ? (
          //LOADING TILL DATA LOADED

          <LoadingOverlay
            styles={{
              position: "inherit",
            }}
            active={loading}
            spinner={<Circles color="4facc8" />}
          />
        ) : (
          <>
            <main className="hp-bg-color-dark-90 d-flex min-vh-100">
              <div className="hp-main-layout-col">
                <MobileSideNav></MobileSideNav>

                <div className=" ">
                  <div className="row mb-32 gy-32">
                    <section className="section section-card d-none">
                      <div className="row">
                        <div className="col-12">
                          <div className="card hp-card-1 hp-upgradePlanCardOne">
                            <div className="card-body">
                              <div className="row align-items-center mt-8">
                                <div className="col-12 mb-4">
                                  <div className="row align-items-center justify-content-between">
                                    <div className="col flex-grow-1">
                                      <h4 className="mb-8">
                                        Explore the Categories
                                      </h4>
                                    </div>
                                    <div className="col hp-flex-none w-auto">
                                      <a href="javascript:void(0)">
                                        <button
                                          type="button"
                                          className="btn mt-16 mt-sm-0 text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0"
                                        >
                                          {" "}
                                          <Link to="/create/model">
                                            Categories
                                          </Link>{" "}
                                        </button>
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
                      <section className="section section-card  ">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="card">
                              <div className="card-body col-height">
                                <h3 className="color-gd">State</h3>
                                <div className="num-hilight">
                                  <Select
                                    options={options}
                                    required={true}
                                    isMulti
                                    value={states}
                                    onChange={(e) => {
                                      let statesArray = [];
                                      statesArray.push(...e);
                                      setStates(statesArray);
                                      statesArray = [];
                                      console.log(
                                        "states",
                                        states.reduce(function (
                                          accumulator,
                                          currentValue
                                        ) {
                                          return (accumulator = [
                                            ...accumulator,
                                            currentValue.value,
                                          ]);
                                        },
                                        [])
                                      );
                                    }}
                                    styles={{
                                      option: (base) => ({
                                        ...base,
                                        border: `1px dotted white`,
                                        height: "60%",
                                        backgroundColor: "#252525",
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
                                <h3 className="color-gd">Quality </h3>
                                <div className="num-hilight">
                                  <Select
                                    options={qualityStandard}
                                    required={true}
                                    isMulti
                                    value={quality}
                                    onChange={(e) => {
                                      let qualityArray = [];
                                      qualityArray.push(...e);
                                      setQuality(qualityArray);
                                      qualityArray = [];
                                      console.log("quality", quality);
                                    }}
                                    styles={{
                                      option: (base) => ({
                                        ...base,
                                        border: `1px dotted white`,
                                        height: "100%",
                                        backgroundColor: "#252525",
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
                                <h3 className="color-gd">Year</h3>
                                <div className="num-hilight">
                                  <Select
                                    options={Years}
                                    required={true}
                                    isMulti
                                    value={years}
                                    onChange={(e) => {
                                      let yearsArray = [];
                                      yearsArray.push(...e);
                                      setYear(yearsArray);
                                      yearsArray = [];
                                      console.log("years", years);
                                    }}
                                    styles={{
                                      option: (base) => ({
                                        ...base,
                                        border: `1px dotted white`,
                                        height: "100%",
                                        backgroundColor: "#252525",
                                      }),
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div class="card">
                              <div class="card-body crd ">
                                <h3 className="color-gd">Week of Year</h3>
                                <div class="card-body ">
                                  <Slider
                                    defaultValue={[1, 53]}
                                    value={weekOfYear}
                                    setWeakOfYear={setWeakOfYear}
                                    min={1}
                                    max={53}
                                    onChange={(e) => {
                                      setWeakOfYear(e);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="text-center   mt-15 ">
                            <button type="submit" className="btn btn-primary ">
                              {" "}
                              Submit
                            </button>

                            <Chart
                              options={churnByStateOptions}
                              series={churnByStateSeries}
                              type={"bar"}
                              height={"0"}
                              width={"100%"}
                            />
                          </div>
                        </div>
                      </section>

                      <div className="row  ">
                        <div className="col-lg-6">
                          <div className="card  ">
                            <div
                              className="card-body text-center"
                              style={{ height: 500, marginBottom: "5px" }}
                            >
                              <Chart
                                options={churnByStateOptions}
                                series={churnByStateSeries}
                                type={"bar"}
                                height={"100%"}
                                width={"100%"}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="card">
                            <div
                              className="card-body text-center"
                              style={{ height: 500, marginBottom: "5px" }}
                            >
                              <Chart
                                options={churnByYearOptions}
                                series={churnByYearSeries}
                                type={"bar"}
                                height={"100%"}
                                width={"100%"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>

                    <section className="section section-card ">
                      <div className="col-12 d-flex flex-column h-100">
                        <div className="card">
                          <div
                            className="card-body text-center"
                            style={{ height: 500, marginBottom: "5px" }}
                          >
                            <Chart
                              options={churnByWeekOptions}
                              series={churnByWeekSeries}
                              type={"line"}
                              height={"100%"}
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="clearfix"></div>

                    <section>
                      <div className="col-12">
                        <div className="card">
                          <div
                            className="card-body text-center"
                            style={{ height: 500, marginBottom: "5px" }}
                          >
                            <Chart
                              options={churnByQualityOptions}
                              series={churnByQualitySeries}
                              type={"bar"}
                              height={"100%"}
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </main>
            <div className="scroll-to-top">
              <button
                type="button"
                className="btn btn-primary btn-icon-only rounded-circle hp-primary-shadow"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </>
        )}
      </React.Fragment>
    );
}

export default HomePage;