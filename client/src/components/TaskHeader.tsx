import { MdOutlineTaskAlt } from "react-icons/md"
import Wrapper from "../assets/wrappers/TaskHeaderWrap"

const TaskHeader = ({title}: any) => {
  return (
    <Wrapper>
        <span className="header-icon"> <MdOutlineTaskAlt/> </span>
        <span className="header">{title}</span>
    </Wrapper>
  )
}

export default TaskHeader
