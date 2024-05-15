import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app, auth } from './firebaseConfig'
import { RouterProvider} from "react-router-dom";
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
