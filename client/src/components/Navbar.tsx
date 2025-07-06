import { FaPowerOff, FaUserAlt } from "react-icons/fa"
import todoText from '../assets/images/todo-text.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={todoText} className="navbar-text"/>
      <div className="navbar-content">
        <p>
          <span className="navbar-icon">
            < FaUserAlt /> 
          </span>
          {'Hello, Jhon Due'}
        </p>
        <span className='navbar-icon'>
          <FaPowerOff />
        </span>
      </div>
    </div>
  )
}

export default Navbar
