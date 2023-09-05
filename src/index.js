import "react-slideshow-image/dist/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import {
    BrowserRouter,
} from "react-router-dom";
import store,{persistor} from "./redux/redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
);
reportWebVitals();
