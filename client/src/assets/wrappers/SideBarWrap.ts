import styled from "styled-components";

const Wrapper = styled.aside `
  display: block;
  height: 100vh;
  background: var(--nav-sidebar-color);
  width: 200px;
  position: fixed;
  top: 0;
  .sidebar-container {
    margin: auto;
  }
  
  header {
    height: 6rem;
    display: flex;
    align-items: center;
    padding: 2.5rem;
    font-size: clamp(2rem, 1vw, 1rem);
  }

  /**************** Nav links styles   ************************/
.nav-links {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  text-transform: capitalize;
  text-decoration: none;
  color: var(--text-color);
  font-size: medium;
}

.nav-link:hover {
  padding-left: 1rem;
  color: var(--hover-color-one) ;
  transition: var(--transition);
  background-color: var(--background-color);
  border-radius: 5px 5px 5px 5px ;
  margin-left: 1px;
  margin-right: 1px;
}

.icon {
  font-size: 1.5rem;
  place-items: center;
  margin-right: 0.75rem;
}


`

export default Wrapper