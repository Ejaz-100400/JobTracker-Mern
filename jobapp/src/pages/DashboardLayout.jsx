import React from "react"
import { Outlet,useNavigate,redirect,useLoaderData} from "react-router-dom"
import {AddJob,Stats,AllJobs,Profile,Admin } from './../pages'
import {toast} from 'react-toastify'
import { Navbar } from "../Components"
import {BigSidebar} from "../Components"
import {SmallSidebar} from "../Components"
import UserMainPg from "../Components/UserMainPg"
import customFetch from "../utils/customFetch"


// Setting up loader and getting the user data 
export const loader = async () => {
    try {
      const { data } = await customFetch.get('/user/current-user');
      return data;
    } catch (error) {
      return redirect('/');
    }
  };

// Storing it in children components of the Dashboard layout component using Context
const DashboardContext = React.createContext();



export default function DashboardLayout(){
    // Setting up loader using router
    const {user}= useLoaderData();
    // console.log(user);
    // Setting up navigation for logging out feature
    const navigate = useNavigate();
    const[log,setlog]=React.useState(false);

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get('/auth/logout');
        toast.success('Logging out...',{
            className:'toast-message'
        });
      };

    // Dark - Light mode
    const[theme,setheme]=React.useState(false)
    const[hide,sethide]=React.useState(false)
    function setTheme(){
        setheme((prev)=>!prev)
    }
    function setHide(){
        sethide(prev=>!prev)
    }
    function handlelog(){
        setlog(prev=>!prev)
    }
    return(
        <>
        <DashboardContext.Provider
        value={{
            user,
            logoutUser,
            theme,
            setTheme,
            hide,
            setHide
            ,hide
        }}>
            <div className={theme?'dark-theme d-flex':'light-theme d-flex'}>
                <div className="position-relative"style={{width: "250px"}}>

                    <BigSidebar  user={user}/>
                </div>
                {/* Theme and Logout section */}
                <div className="theme-section d-flex gap-3 align-items-center position-absolute">
                        <button className="home-btn btn d-flex align-items-center gap-2" onClick={()=>handlelog()}>
                            <i className="fa-solid fa-user"></i>
                            <span>{user.name}</span>
                        </button>
                        <div className="position-absolute log-btn w-75">
                            <button className="home-btn btn  w-100 justify-content-center gap-2" onClick={logoutUser}
                            style={{display:log?'flex':'none'}}>
                                <span className="text-center">Logout</span>
                            </button>
                        </div>

                        <i className="fa-solid fa-sun" onClick={()=>setTheme()}></i>
                    </div>
                {/* Main Dashboard Section */}
                <div className="dashboard-container d-flex gap-3 position-relative">  
                    <div className="dashboard-mainsection-toggler p-2">
                        <Outlet context={user}/>
                    </div>
                    <UserMainPg/>
                </div>
            </div>
        </DashboardContext.Provider>
        
        <div className="d-flex">
    </div>
    </>
    )
}
export const useDashboardContext = () => React.useContext(DashboardContext);