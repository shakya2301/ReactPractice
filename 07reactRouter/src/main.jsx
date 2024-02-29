import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, Contact, User , Github} from './components/index.js'


const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:'',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path:'user/:userid',
        element: <User />
      },
      {
        path: 'github',
        element: <Github />,
        loader: async() =>
        {
          const resp = await fetch('https://api.github.com/users/shakya2301')
          return resp.json()
        }
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
