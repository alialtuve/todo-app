import {  createContext, useContext } from "react";
import { Outlet, redirect } from "react-router-dom"
import { Navbar, Sidebar } from "../components"
import baseUrl from "../utils/baseUrl"
import { useLoaderData } from "react-router-dom";
import {type UserInfoType} from '../types/UserTypes'


export const loader = async()  =>  {
  try {
    const  {data}  = await baseUrl.get('/user/current-user/')
    return data
  } catch(error) {
    return redirect('/')
  }
}

const UserInitValues = {
  name:'',
  email:''
}

const DashboardContext = createContext<UserInfoType>(UserInitValues)

const  Dashboard = () => {
  const user = useLoaderData()
  
  return (
    <DashboardContext.Provider value={user}>
      <section>
        <main className="main">
              <Sidebar />
              <Navbar />
              <div className="dashboard-content">
                <Outlet />
              </div>
        </main>
      </section>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)

export default Dashboard
