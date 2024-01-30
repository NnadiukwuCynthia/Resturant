import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './assets/SCSS/main.scss'
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Faq from './pages/FAQ';
import Gallery from './pages/Gallery';

const router = createBrowserRouter([
 { path: '/',
    element: <App/>,
    children: [
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/faq',
        element: <Faq/>
      },
      {path: '/gallery',
        element: <Gallery/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
