import styled from "styled-components";

const Wrapper = styled.section`
  width: 95%;
  margin-top: 1.25rem;
  .tasks {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  @media (min-width: 1120px) {
    .tasks {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
  .task-amount{
    color: #fcf9f9;
    font-size: 0.85rem;
  }
`

export default Wrapper
