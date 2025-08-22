import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--background-color003);
  border-radius: 0.35rem;
  width: 100%;
  height: 6.5rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  
  .form-title{
    color: #1b47eb;
    margin-bottom: 0.85rem;
  }
   .form{
    margin: 0;
    padding: 0;
    box-shadow: none;
    max-width: 100%;
  }
  .form-label {
    margin-right: 1.5rem;
    margin-left: 1rem;
  }
  .form-select {
    width: 30%;
  }

  @media (min-width: 1150px) {

  }

`

export default Wrapper
