import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fileDataSlice = createSlice({
    name: 'fileData',
    initialState: {
        fileHead: [],
        tableHeads: [],
        personalizedTableData: [],
        personalizedTableHeader:[],
        filedataSimulation:{
quality	:"SFW1",
location_group	:"Port Kembla",
item_quantity	:600,
fixed_price:	225,
grower_number	:12554043,
wheat_production:	589.9209865,
prob:	1,
issue_date:	"2022-06-14 00:00:00",
year:	2022,
avg_price_last_6_mon:0,
avg_price_last_year:0,
avg_volume_last_6_mon:0,
avg_volume_last_year:0,
crop_planted_area_ha:362.7048979,
farm_grainflow_site:"Bogan Gate",
farm_km_to_closest_grainflow:31.98,
farm_km_to_grainflow:31,
farm_size:1047.48056,
fulfillment_status:"Fulfilled",
last_transaction_week:0,
last_transaction_year:0,
loading_site:"Gee-MelbExPakClyde Contract Zone",
port_zone:"Port Kembla",
ref_no:3177964.1,
state:"New South Wales",
total_arable_ha:576.2740652,
total_transaction_counts:0,
trans_last_6_months:0,
trans_last_year:0,
week_of_year:1,
wheat_area_ha:189.5742889,
wheat_yield:3.111819592,
logistic_regression:1,
support_vector_machine:0,
artificial_neural_network:1,
custom_ensembler:1,
        },
    },
    reducers: {
        fileHead: (state,data) => {
            state.fileHead =data.payload;
        },
        tableHeads:(state,data) =>{
            state.tableHeads =data.payload;
        },
        filedataSimulation: (state, data) => {
            state.filedataSimulation = data.payload;
        },
        PersonlizedTableData: (state, data) => {
            console.log("🚀 ~ file: fileDataSlice.js:60 ~ data", data.payload,state.personalizedTableData)
            state.personalizedTableData=data.payload;

        },
        PersonlizedTableHeader: (state, data) => {
            console.log("🚀 ~ file: fileDataSlice.js:60 ~ data", data.payload,state.personalizedTableData)
            state.personalizedTableHeader=data.payload;

        }

    },
})


// Action creators are generated for each case reducer function
export const {
    fileHead,
    tableHeads,
    filedataSimulation,
    PersonlizedTableHeader,
    PersonlizedTableData
} = fileDataSlice.actions

export default fileDataSlice.reducer;