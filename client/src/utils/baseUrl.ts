import axios from 'axios'

const baseUrl = axios.create({
  baseURL:'/api/v1',
})

export default baseUrl
