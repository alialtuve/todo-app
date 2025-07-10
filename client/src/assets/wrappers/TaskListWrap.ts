import styled from "styled-components";

const Wrapper = styled.article`
  background-color: var(--background-color003);
  border-radius: 0.35rem;
  .task-content{
    display: block;
    margin-left: 0.70rem;
    margin-top: 0.70rem;
  }
  .title-content {
    font-weight: bold;
  }
  .main-actions{
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .actions {
    margin-right: 1.5rem;
  }
  .task-status{
    color: #1b47eb;
    font-weight: bold;
  }
`

export default Wrapper