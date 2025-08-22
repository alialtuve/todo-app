import Wrapper from "../assets/wrappers/StatsContainerWrap"
import { statsType } from '../types/TaskTypes'
import { MONTHS } from '../utils/constants'

const StatsContainer = (values:  statsType) => {
  const stats = values.data
  const { month } = values 
  console.log(month);
  
  let parsedMonth = 0
  parsedMonth = parseInt(month)
  
  if(!month || month === '0') {
    const currentDate = new Date()
    parsedMonth = currentDate.getMonth() + 1
  }
  
  const searchedMonth = MONTHS.find( item => item.id === parsedMonth) 
  const monthName = searchedMonth!.month
  if(stats.length === 0 ){
    return (
      <h3> No Tasks to display...</h3>
    )
  }

  return (
    <Wrapper>
      <div className="stats-summary">
        <h4 className="form-title"> MONTHLY </h4>
        <span className="month"> {'Summary for: '} </span> 
         {monthName }
      </div>      
      <ul className="stats">
        {stats.map(stat => {
          return(
            <li className="stat-box" key={stat._id}>
                <div className="status-name">{ stat._id}</div>
                <div className="count">{ stat.count}</div>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default StatsContainer
