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
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .btn-text {
    margin-left: 0.25rem;
    font-size: smaller;
    font-weight: bolder;
  }
  .task-status{
    color: #1b47eb;
    font-weight: bold;
  }
`

export default Wrapper