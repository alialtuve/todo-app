import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  padding: 0.25rem;
  border-color:rgb(65, 69, 78);
  border-bottom-width: 1.5px;
  border-bottom-style: solid;
  border-radius: 0.35rem;
  background-color: var(--background-color004);
  color: #1b47eb;
  .header {
    font-size: 1.35rem;
    margin-right: 0.75rem;
    font-weight: bolder;
  }
  @media (min-width: 1120px) {
    .header {
      font-size: 1rem;
    }
  }
  .header-icon {
    font-size: 1.5rem;
  }
`

export default Wrapper