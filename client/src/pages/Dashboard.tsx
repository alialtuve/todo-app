import { Outlet } from "react-router-dom"
import { Navbar, Sidebar } from "../components"

const  Dashboard = () => {
  return (
    <main className="main">
        <Sidebar />
        <div className="dashboard">
          <Navbar />
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
    </main>
  )
}

export default Dashboard
