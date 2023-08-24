import React from "react"
import { useDashboardContext } from "../pages/DashboardLayout"
import Logo from './../assets/images/favicon-32x32.png'
export default function Navbar(){
    const[logbtn,setlogbtn]=React.useState(false)
    const {user,logoutUser,theme,setTheme}=useDashboardContext()


    return(
        <></>
        // <header className={`px-3 py-4  position-fixed w-100`} 
        //  style={theme?{backgroundColor:'black',color:'white'}:{backgroundColor:'rgba(225, 238, 234,1)',color:'black'}}>
        //     <div className="d-flex dashboard-navbar justify-content-between align-items-center">
        //     <i class="fa-solid fa-bars fa-2x" id='nav-small' onClick={()=>setHide()}></i>
        //     <div>
        //         <span>Navbar</span>
        //     </div>
        //     <div>
        //     <div className="navbar-theme-profile d-flex gap-3 align-items-center">
        //     <i className="fa-solid fa-sun" onClick={()=>setTheme()}></i>
        //     <div className="v-line"></div>

        //     <div className="position-relative">
        //         <button className="btn d-flex align-items-center gap-2 home-btn" onClick={()=>{setlogbtn(prev=>!prev)}}>
        //         <i className='fa-regular fa-user'></i>
        //         <span>{user.name}</span>  
        //         </button>
        //         <div className="dropdown-section position-absolute w-100" style={{display:logbtn?'block':'none'}}>
        //             <button className="btn home-btn w-100" onClick={()=>logoutUser()}>Logout</button>
        //         </div>
        //     </div>

        //     </div>
        //     </div>
        //     </div>
            
            
            
        // </header>
    )
}