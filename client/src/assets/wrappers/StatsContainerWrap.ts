import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--background-color003);
  border-radius: 0.35rem;
  width: 100%;
  padding: 0.5rem;
  
  .stats-summary{
    color: #1b47eb;
    margin: 0.85rem;
    font-size: large;
    text-align: center;
    .month {
      font-weight: bold;
    }
  }

  .stats{
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.25rem;
  }


  .stat-box {
    background-color:  #1b47eb;
    font-weight: bolder;
    text-align: center;
    border-radius: 0.35rem;
    margin-right: 0.5rem;
    box-shadow: var(--shadow-1)
  }
  
  .status-name {
    width: 100%;
    color: var(--text-color02);
    font-size: 30px;
    border-color: #0611acff;
    border-radius: 0.35rem 0.35rem 0.25rem 0.25rem;
    border-width: 1.5px;
    border-style: solid;
  }

  .count {
    color: #e99b0aff;
    font-size: 45px;
  }

  @media (min-width: 1150px) {
    .stats {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .status-name{
      font-size: 20px;
    }
    .count {
      font-size: 35px;
    }
  }

`

export default Wrapper
