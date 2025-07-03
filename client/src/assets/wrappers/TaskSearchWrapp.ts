import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  background-color: var(--background-color003);
  border-radius: 0.35rem;
  width: 100%;
  padding: 0.2rem 0.35rem 2rem;
  .form{
    margin: 0;
    padding: 0;
    box-shadow: none;
    max-width: 100%;
    width: 100%;
  }
  .form-title{
    color: #1b47eb;
    margin-bottom: 0.85rem;
  }
  .form-content{
    margin: 0;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .form-row{
    margin-left: 1rem;
  }
  .form-input,
  .form-select{
    width: 70%;
  }
  .form-label{
    width:30%;
  }

  .btn-reset {
    text-decoration: none;
    text-align: center;
    font-weight: bolder;
    color: var(--text-color02);
    align-self: end;
    background-color: var(--warning-dark);
    width: 70%;
  }
  .btn-reset:hover {
    background-color: var(--warning-light);
    color: var(--text-color04);
    box-shadow: var(--shadow-1);
  }
`

export default Wrapper