import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
// import {Route} from 'react-router-dom'   
import 
{ HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,Error,AddJob,Stats,AllJobs,Profile,Admin } from './pages'

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
    },
    {
      path:'register',
      element:<Register/>,
      errorElement:<Error/>,
    },
    {
      path:'Dashboard',
      element:<DashboardLayout/>,
      errorElement:<Error/>,
    },
    {
      path:'Landing',
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

