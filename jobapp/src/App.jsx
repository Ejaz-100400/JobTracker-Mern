import { useState } from 'react'
import './index.css'
import {Route,Routes} from 'react-router-dom'   
import 
{ HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,Error,AddJob,Stats,AllJobs,Profile,Admin } from './pages'

  function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomeLayout/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        {/* Nested Routes  for Dashboard Pages*/}
        <Route exact path='/dashboard/*' element={<DashboardLayout/>}/> 
         
         {/* <Route path='admin' element={<Admin/>}/> */}
        {/* </Route> */}

        {/* Landing Page */}
        <Route exact path='/landing' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
