import { Outlet } from "react-router-dom"
import { Navbar, Sidebar } from "../components"

const  Dashboard = () => {
  return (
    <section>
      <main className="main">
            <Sidebar />
            <Navbar />
            <div className="dashboard-content">
              <Outlet />
            </div>
      </main>
    </section>
  )
}

export default Dashboard
