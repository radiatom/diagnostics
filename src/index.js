import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  // BrowserRouter
} from 'react-router-dom';
import store from './reactRedux/redux';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>
  // <BrowserRouter>
  //   <Provider store={store}>
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>
  //   </Provider>
  // </BrowserRouter>
);
reportWebVitals();

