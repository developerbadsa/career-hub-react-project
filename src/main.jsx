import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistics from './Components/Pages/Statistics/Statistics'
import Root from './Components/Root/root';
import AppliedJobs from './Components/Pages/AppliedJobs/AppliedJobs';
import Blog from './Components/Pages/Blog/Blog';
import JobDetail from './Components/Pages/Statistics/Sections/Jobs/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJob',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'job/:id',
        element: <JobDetail></JobDetail>,
        loader: ()=>fetch('../public/jobs.json')

      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
