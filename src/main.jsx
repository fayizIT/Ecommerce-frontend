import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginScreen from './screens/LoginScren.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'


import AdminRegisterScreen from './screens/AdminRegisterScreen.jsx'
import AdminLoginScreen from './screens/AdminLoginScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />} >

      {/*================================= user route handler========================================== */}




      <Route index={true} path='/' element={<UserHomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />



      
      <Route path="" element = {<AdminPrivateRouter />}>

      <Route path="/admin/login" element={<AdminLoginScreen />} />
      <Route path="/admin/register" element={<AdminRegisterScreen />} />
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
