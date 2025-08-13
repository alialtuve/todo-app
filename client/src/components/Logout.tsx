import { FaPowerOff } from "react-icons/fa"
import { useDashboardContext } from "../pages/Dashboard"


const  Logout = () => {
  const { logoutUser}  = useDashboardContext()
  
  return (
    <div>
      <button 
        type='button'
        className="btn-logout"
        onClick={logoutUser}
      >
        <FaPowerOff />
        </button>
    </div>
  )
}

export default Logout
