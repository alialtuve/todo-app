import {BsBookHalf, BsListCheck } from 'react-icons/bs'
import {BiChart, BiSolidUserCircle} from 'react-icons/bi'

const links = [
  {
    text: 'tasks',
    path: '.',
    icon: <BsListCheck />
  },
  {
    text: 'new task',
    path: 'addtask',
    icon: <BsBookHalf /> 
  },
  {
    text: 'stats',
    path: 'stats',
    icon: <BiChart />
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <BiSolidUserCircle />
  }
]

export default links
