import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from "react-router-dom";

import '../public/index.css';
import './static/scss/components.scss';

import router from './router';

// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
