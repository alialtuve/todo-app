import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import StatsContainer from "../components/StatsContainer"
import baseUrl from "../utils/baseUrl"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { statsType } from '../types/TaskTypes'
import SearchStats from "../components/SearchStats"

export const loader = async({request}: LoaderFunctionArgs)  =>  {

    const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  
  try {
    const  { data }  = await baseUrl.get('/task/stats', {
      params
    })
    const { month } = params
    
    return { data, month}

  } catch(error) {
      if(isAxiosError(error) && error.response){
        toast.error(error.response.data.error)
      }
    return error
  }
}

const Stats = () => {
  const {data, month }: statsType= useLoaderData()
    
  return (
    <>
      <SearchStats  />
      <StatsContainer data={data} month={month}/>
    </>
  )
}

export default Stats
