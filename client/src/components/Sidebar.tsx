import NavLinks from "./NavLinks"
import Logo from './Logo'

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar-content">
          <header className="header"> 
            <Logo />
          </header> 
          <NavLinks />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
