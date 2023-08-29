import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
// import {Route} from 'react-router-dom'   
import 
{ HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,Error,AddJob,Stats,AllJobs,Profile,Admin,EditJob } from './pages'

import { action as registeraction } from './pages/Register';
import{action as loginaction} from './pages/Login';
import { action as addjobaction } from './pages/AddJob';
import { action as editjobaction } from './pages/EditJob';
import { action as deletejobaction } from './pages/DeleteJob';

import { loader as dashboardloader } from './pages/DashboardLayout';
import { loader as editjobloader } from './pages/EditJob';
import { loader as jobsloader } from './pages/AllJobs';
import { loader as adminloader } from './pages/Admin';
import { loader as statsloader } from './pages/Stats';


const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
    },
    {
      path:'login',
      element:<Login/>,
      errorElement:<Error/>,
      action:loginaction
    },
    {
      path:'register',
      element:<Register/>,
      errorElement:<Error/>,
      action:registeraction
    },
    {
      path:'dashboard',
      element:<DashboardLayout/>,
      errorElement:<Error/>,
      loader:dashboardloader,
      children:[
        {
          index:true,
          element:<AllJobs />,
          loader:jobsloader,
        },
        {
          path:'edit-job/:id',
          element:<EditJob/>,
          action:editjobaction,
          loader:editjobloader
        },
        {
          path:'delete-job/:id',
          action:deletejobaction,
        },
        {
          path: 'stats',
          element: <Stats />,
          errorElement: <Error />,
          loader:statsloader
        },
        {
          path: 'addjob',
          element: <AddJob />,
          errorElement: <Error />,
          action: addjobaction
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'admin',
          element: <Admin />,
          loader:adminloader,
        },
      ]
    },
    {
      path:'landing',
      element:<Landing/>,
      errorElement:<Error/>,
    }

  ])
  
export default function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}











    // <div>
      {/* <Routes>
        <Route exact path='/' element={<HomeLayout/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' action={() => {console.log('hello there')}} element={<Register/>}/> */}

        {/* Nested Routes  for Dashboard Pages*/}
        {/* <Route exact path='/dashboard/*' element={<DashboardLayout/>}/> 
          */}
         {/* <Route path='admin' element={<Admin/>}/> */}
        {/* </Route> */}

        {/* Landing Page */}
        {/* <Route exact path='/landing' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> */}
    {/* </div> */}

