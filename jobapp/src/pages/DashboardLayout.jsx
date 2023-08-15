import React from "react"
import { Outlet, Route,Routes} from "react-router-dom"
import {AddJob,Stats,AllJobs,Profile,Admin } from './../pages'
import { Navbar } from "../Components"
import {BigSidebar} from "../Components"
import {SmallSidebar} from "../Components"

export default function DashboardLayout(){
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
        <div className={theme?'dark-theme d-flex':'light-theme d-flex'}>
            <SmallSidebar theme={theme} setHide={setHide} hide={hide}/>
            <BigSidebar theme={theme}/>
            <div className="w-100">
                <Navbar setTheme={setTheme} theme={theme} setHide={setHide} hide={hide}/>
                <div className="dashboard-mainsection-toggler p-4">
            {/* <Outlet/> */}
            {/* Route for Main Job Tracking Page */}
            <Routes>
                <Route path='/' element={<AllJobs/>} />
                <Route path='addjob' element={<AddJob/>}/>
                <Route path='stats' element={<Stats/>}/>
                <Route path='alljobs' element={<AllJobs/>}/>
                <Route path='profile' element={<Profile/>}/>
            </Routes>
        </div>
            </div>
        </div>
        <div className="d-flex">
    </div>
    </>
    )
}