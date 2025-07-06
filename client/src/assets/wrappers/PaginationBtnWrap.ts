import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  .btn-container {
    background: var(--background-color003);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor:pointer;
  }
  .active{
    background:var(--background-second-color);
    color: var(--white);
  }
  .prev-btn,.next-btn{
    background: var(--background-color003);
    border-color: transparent;
    border-radius: var(--border-radius);
    width: 100px;
    height: 40px;
    color: var(--text-color);
    text-transform:capitalize;
    letter-spacing:var(--letter-spacing);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:0.5rem;
    cursor:pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background:var(--background-color004);
    color: var(--white);
    transition:var(--transition);
  }
  .dots{
    display:grid;
    place-items:center;
    cursor:text;
  }
`

export default Wrapper
