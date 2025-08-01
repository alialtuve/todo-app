import styled from "styled-components";

const Wrapper = styled.section`
  margin: 6% auto;
  background-color: var(--nav-sidebar-color);
  min-height: 65%;
  width: min-content;
  border-radius: 5px;
  border-top: 5px solid var(--background-color005);
  
 
  .form {
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  .header-register{
    width: 55%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 3rem;
    .logo {
      width: 40px;
      justify-self: end ;
    }
    .text {
      width: 100%;
      margin: 2.5rem auto;
    }
  }

  h3 {
    justify-self: center;
    color: var(--background-color);
    margin: 0;
  }
  
  .btn-register{
    margin-top: 0.75rem;
    width: 250px;
    justify-self: center;
  }
  
  p {
    margin-top: 0.75rem;
    margin-bottom: 0.95rem;
    justify-self: center;
    .link-login {
      margin-left: 1rem;
    }
  }

  .form-row{
    display: grid;
    justify-content: center;
  }
  .form-input{
    width: 300px;
  }
  .form-label{
    margin-bottom: 0.5rem;
  }
`

export default Wrapper
