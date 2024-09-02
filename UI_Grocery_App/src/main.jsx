import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'
import {Provider} from "react-redux"
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from './component/Home/Home.jsx'

const router=createBrowserRouter(
  [
    {
      path:"/",
      element: <App />,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
      ]
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
  <StrictMode>
   <RouterProvider  router={router}/>
  </StrictMode>,
  </Provider>
)
