import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './context/AuthProvider';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux'
import store from "./store/store";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(
    <Provider store={store}>
        <div>
            <ToastContainer/>
        </div>
        <React.StrictMode>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                    <Route path="/*" element={   <PersistGate persistor={persistor}><App/></PersistGate>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
);
reportWebVitals();
