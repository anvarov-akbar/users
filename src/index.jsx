import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import { Provider as AuthendicatedProvider } from "./Context/Authentication";
import { Provider as NavProvider } from "./Context/Nav";




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthendicatedProvider>
    <NavProvider>
    <App />    
    </NavProvider>
    </AuthendicatedProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

