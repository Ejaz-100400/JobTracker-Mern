import React from "react"
import { Link } from "react-router-dom"
import Logo from './../assets/images/favicon-32x32.png'
export default function SmallSidebar({theme,setHide,hide}){
    return(
        <div className={`sidebar-container position-absolute w-100`} style={hide?{display:'none'}:{}}>
            <div className={`sidebar-small p-3`}
        style={theme?{backgroundColor:'black',color:'white'}:{backgroundColor:'rgba(225, 238, 234,1)',color:'black'}}>
            <i className="fa-solid fa-close position-absolute" onClick={()=>setHide()}></i>
            <div className="d-flex align-items-center gap-2 p-3 justify-content-center">
                <img src={Logo} alt="" width='50' />
                <h1 className="fw-bold">JobSquad</h1>
            </div>
            <div className="d-flex flex-column align-items-center">
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard'>
                <i class="fa-solid fa-file"></i>
                <span>Your Jobs</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard/addjob'>
                <i class="fa-solid fa-plus"></i>
                <span>Add Jobs</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard/stats'>
                <i class="fa-solid fa-chart-simple"></i>
                <span>Stats</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard/profile'>
                <i class="fa-solid fa-id-badge"></i>
                <span>Profile</span>
            </Link>
            </div>
        </div>
        </div>
        
    )
}