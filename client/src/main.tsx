import { createRoot } from 'react-dom/client'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <ToastContainer position='top-center' autoClose={2000}/>
  </>,
)
