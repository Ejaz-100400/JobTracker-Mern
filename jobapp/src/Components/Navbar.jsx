import React from "react"
import { useDashboardContext } from "../pages/DashboardLayout"
import Logo from './../assets/images/favicon-32x32.png'
export default function Navbar(){
    const[logbtn,setlogbtn]=React.useState(false)
    const {user,logoutUser,theme,setTheme}=useDashboardContext()


    return(
        <>
        <header className="position-relative bg-primary">         
        </header>
        </>
        
    )
}