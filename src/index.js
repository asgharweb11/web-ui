import React , {createContext} from 'react';
import ReactDOM from 'react-dom';
import Context from "./context"
import {
  BrowserRouter as Router,
} from "react-router-dom"
import App from './components/source/app';

import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <Context>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Context>,
  document.getElementById('root')
);
