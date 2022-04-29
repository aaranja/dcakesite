import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BaseRouter from "./routes/baseRouter";
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import rootReducer from "./store/rootReducer";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
}); //, composeEnhances(applyMiddleware(thunk)));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BaseRouter/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
