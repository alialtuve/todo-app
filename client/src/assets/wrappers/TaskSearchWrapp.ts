import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  background-color: var(--background-color003);
  border-radius: 0.35rem;
  width: 95%;
  padding: 0.2rem 0.3rem 1.5rem;
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
    width: 100%;
    margin: 0;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1310px) {
    display: block;
    .form-content {
      align-items: center;
      display: flex;
      grid-template-columns: 1fr 1fr;
      column-gap: 0.5rem;
      row-gap: 0.75rem;
      .form-label{
        width:40%;
      }
      .form-input,
      .form-select {
        width: 100%;
      }
      .btn-reset{
        margin-top: 1rem;
        width: 90%;
      }
    }
  }

  @media (max-width: 950px) {
    .form-content {
      display: grid;
      grid-template-columns:  1fr;
      row-gap: 0.75rem;
      width: 90%;
      .form-row {
        width:80%
      }      
    }
  }

  .form-row{
    display: block;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    width: 100%;
  }
  .form-input,
  .form-select{
    width: 60%;
  }
  .form-label{
    width:40%;
  }

  .btn-reset {
    text-decoration: none;
    text-align: center;
    font-weight: bolder;
    color: var(--text-color02);
    background-color: var(--warning-dark);
    width: 90%;
  }
  .btn-reset:hover {
    background-color: var(--warning-light);
    color: var(--text-color04);
    box-shadow: var(--shadow-1);
  }

`

export default Wrapper