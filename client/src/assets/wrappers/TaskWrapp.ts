import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--background-color003);
  border-radius: 0.35rem;
  width: 100%;
  padding: 0.5rem;
  .form-title{
    color: #1b47eb;
    margin-bottom: 0.85rem;
  }

  .form-task {
    margin-left: 5.5rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  .form-task-content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  @media (max-width:1100px) {
    width: 50vw;
    .form-task {
      margin-left: 0.5rem;
      
    }
        
    .form-row {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      .btn-submit {
        width: 25%;
      }
      .form-input 
      .form-select{
        width: 100%;
      }
    }
    
  }

  .form-input,
  .form-select{
    width: 70%;
  }

  .form-label{
    width:100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .btn-submit{
    width: 20%;
  }

`

export default Wrapper
