import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  // HashRouter,
  BrowserRouter
} from 'react-router-dom';
import store from './reactRedux/redux';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HashRouter>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </HashRouter>
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
reportWebVitals();

