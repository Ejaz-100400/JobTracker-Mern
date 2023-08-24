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
                <div className="position-relative">
                    <BigSidebar theme={theme}/>
                </div>
                <div className="dashboard-container d-flex  gap-3">
                    <div className="theme-section d-flex gap-3 align-items-center position-absolute">
                        <i className="fa-solid fa-sun" onClick={()=>setTheme()}></i>
                    </div>
                    <div className="dashboard-mainsection-toggler p-4 m-5">
                        <Outlet context={user}/>
                    </div>
                    <UserMainPg/>

                </div>
                <div className="">
                    <Navbar setTheme={setTheme} theme={theme} setHide={setHide} hide={hide}/>
                   
                </div>
            </div>
        </DashboardContext.Provider>
        
        <div className="d-flex">
    </div>
    </>
    )
}
export const useDashboardContext = () => React.useContext(DashboardContext);