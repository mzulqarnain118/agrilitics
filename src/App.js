import LoginComponent from "./auth";
import './App.css';
import React from "react";
import HomePage from "./components/HomePage";
import {Route, Routes} from 'react-router-dom';
import RequireAuth from "./auth/RequireAuth";
import Layout from "./components/layout/Layout";
import CreateModel from "./components/CreateModel";
import GrainForecast from "./components/GrainForecast";
import FarmerForcast from "./components/FarmerForcast";
import ModelForecastDetails from "./components/ModelForecastDetails";
import UploadTestModel from "./components/UploadTestModel";
import ManualeSimulation from "./components/ManualeSimulation";
import UploadData from "./components/UploadData";
import UploadProgress from "./components/UploadProgress";
import AutomaticSimulation from "./components/AutomaticSimulation";
import ForgetPassword from "./auth/ForgetPassword";
import Register from "./auth/Register";
import TrainModel from "./components/TrainModels";
import FormerDetail from "./components/FormerDetail";
import SimulationChurn from "./components/SimulationManual";
import PersonalizePricing from "./components/PersonalizePricing";
import ResetPassword from "./auth/ResetPassword";
function App() {
    return (
        <Routes>

            {/* public routes */}
            <Route exact path="/login" element={<LoginComponent/>}/>
            <Route exact path="/register" element={<Register/>}></Route>
            <Route exact path="/forget-password" element={<ForgetPassword />}></Route>
            <Route exact path="/resetpassword/:token" element={<ResetPassword />}></Route>

            {/* we want to protect these routes */}
            <Route path="/" element={<Layout/>}>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/" element={<HomePage/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/create/model" element={<CreateModel/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/grain" element={<GrainForecast/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/farmer-forecast" element={<FarmerForcast/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/forecast-details" element={<ModelForecastDetails/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/upload-test-model" element={<UploadTestModel/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/manual-simulation" element={<ManualeSimulation/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/upload-data" element={<UploadData/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/upload-progress" element={<UploadProgress/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/automatic/simulation/churn" element={<AutomaticSimulation/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/test/models" element={<TrainModel/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/former/detail" element={<FormerDetail/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/simulation/manual/*" element={<SimulationChurn/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route exact path="/personalize/pricing" element={<PersonalizePricing/>}/>
                </Route>
            </Route>
            {/**/}
        </Routes>)
}

export default App;
