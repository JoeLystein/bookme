import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { ThemeProvider } from 'styled-components';
import {theme} from "./themes/theme"; 
import { BrowserRouter } from 'react-router-dom';
// import "./Assets/scss/mdb-free.scss"
// import "./Assets/scss/mdb-free.scss";
// import 'mdbreact/dist/css/mdb-free.css';
import 'mdbreact/dist/css/mdb.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


