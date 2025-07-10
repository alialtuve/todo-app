import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import  {
  Login, HomeLayout, AddTask, Stats,
  Dashboard, AllTask, Error, Profile,
  Register
} from './pages'

import { loader as allTaskLoader } from './pages/AllTask'
import { action as addTaskAction } from './pages/AddTask'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
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
            element: <AddTask />,
            action: addTaskAction
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'profile',
            element: <Profile />
          }
        ]
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
