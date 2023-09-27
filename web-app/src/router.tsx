import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import Authorization from './views/business/authorization';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Authorization />,
    },
  ]);

export default router;
