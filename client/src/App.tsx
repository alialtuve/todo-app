import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

import  {
  Login, HomeLayout, AddTask, 
  Dashboard, AllTask
} from './pages'

import { loader as allTaskLoader } from './pages/AllTask'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path:'dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <AllTask />,
            loader: allTaskLoader
          },
          {
            path: 'addtask',
            element: <AddTask />
          }
        ]
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
