import React from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'
export default function UserMainPg(){
    const{logoutUser,user}=useDashboardContext()
    return(
        <>
        </>
        // <div className="user-mainpgsection d-flex flex-column p-2 justify-content-center align-items-center">
        //    <span onClick={()=>logoutUser()}>Logout</span>
        //    <span>{user.name}</span>         
        // </div>
    )
}