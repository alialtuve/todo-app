import {  createContext, useContext } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom"
import { Navbar, Sidebar } from "../components"
import baseUrl from "../utils/baseUrl"
import { useLoaderData } from "react-router-dom";
import { IContextUser, IUserInfo } from '../types/UserTypes'
import { toast } from "react-toastify";


export const loader = async()  =>  {
  try {
    const  {data}  = await baseUrl.get('/user/current-user/')
    return data
  } catch(error) {
    return redirect('/')
  }
}

const UserInitValues:IContextUser = {
  user : {
    name:'',
    email:''
  },
  logoutUser: () => ''
}

const DashboardContext = createContext<IContextUser>(UserInitValues)

const  Dashboard = () => {

  const user: IUserInfo = useLoaderData()
  const navigate = useNavigate()

  const logoutUser = async () => {
    navigate('/')
    await baseUrl.get('/auth/logout')
    toast.success('Loggin out...')
  }
  
  return (
    <DashboardContext.Provider 
      value={{
        user,
        logoutUser
      }} 
    >
      <section>
        <main className="main">
              <Sidebar />
              <Navbar />
              <div className="dashboard-content">
                <Outlet context={user}/>
              </div>
        </main>
      </section>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)

export default Dashboard
