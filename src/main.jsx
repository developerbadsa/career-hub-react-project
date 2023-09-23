import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistics from './Components/Pages/Statistics/Statistics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Statistics></Statistics>
  },
  {
    path: "/statistics",
    element: <div>Jobs</div>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>hello</div>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
