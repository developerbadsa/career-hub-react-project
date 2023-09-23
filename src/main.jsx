import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>
  },
  {
    path: "/job",
    element: <div>Jobs</div>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>hello</div>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
