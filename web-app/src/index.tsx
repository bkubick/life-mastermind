import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'

import '../public/index.css';
import './static/scss/components.scss';

import router from './router';
import store from './store'

// @ts-ignore
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ router } />
    </Provider>
  </React.StrictMode>
);
