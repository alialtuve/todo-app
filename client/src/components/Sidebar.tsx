import NavLinks from "./NavLinks"
import Logo from './Logo'
import Wrapper from "../assets/wrappers/SideBarWrap"

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
            <header className="header"> 
              <Logo />
            </header> 
            <NavLinks />
      </div>
    </Wrapper>
  )
}

export default Sidebar
