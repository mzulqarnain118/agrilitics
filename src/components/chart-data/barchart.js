export let BarSeries =[{
    name: '2021',
    type: 'bar',
    data: [1820, 2348, 2903, 1049, 1314, 6302]
}, {
    name: '2022',
    type: 'bar',
    data: [1932, 2343, 3100, 1215, 1341, 6818]
}]
 export let Baroptions = {
    chart: {
      id: "basic-bar"
    },
    
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Queensland', 'Melbourne', 'Brisbane', 'Perth', 'Sydney', 'World']
    },
  };

  export let formerChurnSeries = [{
    data: [44, 55, 41, 64, 22, 43, 21]
  }, {
    data: [53, 32, 33, 52, 13, 44, 32]
  }];

  export let formerChurnOption  = {
    chart: {
      type: 'bar',
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
  };


//    demand and supply 

export let demandOption = {
   
    colors: ["#0063F7", "#00F7BF"],
    labels: {
        style: {
            fontSize: "14px",
        },
    },
    fill: {
        opacity: 0.3,
    },

    dataLabels: {
        enabled: false,
    },

    grid: {
        borderColor: "#DFE6E9",
        row: {
            opacity: 0.5,
        },
    },

    markers: {
        strokeWidth: 0,
        size: 0,
        colors: ["rgba(0, 255, 198, 0.17)", "rgba(45, 125, 239, 0.17)"],
        hover: {
            sizeOffset: 1,
        },
    },
    xaxis: {
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            style: {
                colors: ["636E72"],
                fontSize: "14px",
            },
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: 40
    },
    yaxis: {
        labels: {
            style: {
                colors: ["636E72"],
                fontSize: "14px",
            },
            formatter: (value) => {
                return value / 1000 + "K";
            },
        },

        min: 0,
        max: 30000,
        tickAmount: 3,
    },
}

export let demandSeries = [
    {
        name: "Demand",
        data: [8245, 14452, 8545, 14452, 6012, 22333],
    },
    {
        name: "Supply",
        data: [12245, 7952, 10623, 7935, 14345, 4002],
    },
]; 
// Wheat Forecast 
export let forcastSeries =  [
    {
  name: 'Sales',
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
}];

export let forcastOptions = {

  chart: {
      height: 350,
      type: 'line',
  },
  forecastDataPoints: {
      count: 7
  },
  stroke: {
      width: 5,
      curve: 'smooth'
  },
  markers: {
    size: [7]
  },
  xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
      tickweek_of_year: 10,
      labels: {
          formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          }
      }
  },
  title: {
      // text: 'Forecast',
      align: 'left',
      style: {
          fontSize: "16px",
          color: '#666'
      }
  },
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
      },
  },
  yaxis: {
      min: -10,
      max: 40
  }
};
// rentenation data 
let rentenationData = {
  "monthDataSeries1": {
    "prices": [
        8107.85,
        8128.0,
        8122.9,
        8165.5,
        8340.7,
        8423.7,
        8423.5,
        8514.3,
        8481.85,
        8487.7,
        8506.9,
        8626.2,
        8668.95,
        8602.3,
        8607.55,
        8512.9,
        8496.25,
        8600.65,
        8881.1,
        9340.85
    ],
    "dates": ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017", "29 Nov 2017", "30 Nov 2017", "01 Dec 2017", "04 Dec 2017", "05 Dec 2017", "06 Dec 2017", "07 Dec 2017", "08 Dec 2017"]
},


}
export let retentionSeries = [
 { 
  data:rentenationData.monthDataSeries1.prices
}
 ];
export let retentionOption = {
  dataLabels: {
    enabled: false
},
stroke: {
    curve: 'straight'
},
subtitle: {
    text: 'Price Movements',
    align: 'left'
},
labels: rentenationData.monthDataSeries1.dates,
xaxis: {
    type: 'datetime',
},
yaxis: {
    opposite: true
},
legend: {
    horizontalAlign: 'left'
}
}
// Growth Chart 

export let growthSeries = [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
  name: 'Yearly',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Free Cash Flow',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}];

export let growthOption = {
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
         function(val) {
            return "$ " + val + " thousands"
        }
    }
}
}