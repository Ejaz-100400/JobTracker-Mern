import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
// import {Route} from 'react-router-dom'   
import 
{ HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,Error,AddJob,Stats,AllJobs,Profile,Admin } from './pages'
import { action as registeraction } from './pages/Register';
import{action as loginaction} from './pages/Login';
import { action as addjobaction } from './pages/AddJob';
import { loader as dashboardloader } from './pages/DashboardLayout';
import { loader as jobsloader } from './pages/AllJobs';
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
          path: 'stats',
          element: <Stats />,
          errorElement: <Error />,
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
          element: <Admin />,       },
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

