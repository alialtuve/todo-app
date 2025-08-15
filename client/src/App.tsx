import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import  {
  Login, HomeLayout, AddTask, Stats,
  Dashboard, AllTask, Error, Profile,
  Register, EditTask
} from './pages'

import { loader as dashboardLoader } from './pages/Dashboard'
import { loader as allTaskLoader } from './pages/AllTask'
import { loader as taskLoader } from './pages/EditTask'
import { action as addTaskAction } from './pages/AddTask'
import { action as registerAction } from  './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as updateTaskAction } from './pages/EditTask'
import { action as deleteTaskAction } from './pages/DeleteTask'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
      {
        path:'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
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
          },
          {
            path:'edit-task/:id',
            element: <EditTask/>,
            loader: taskLoader,
            action: updateTaskAction
          },
          {
            path:'delete-task/:id',
            action: deleteTaskAction
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
