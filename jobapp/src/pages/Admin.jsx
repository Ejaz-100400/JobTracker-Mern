import customFetch from "../utils/customFetch"
import {toast} from 'react-toastify'
import { useLoaderData,redirect } from "react-router-dom"

export const loader = async()=>{
    try{
        const response = await customFetch.get('/user/admin/app-stats')
        return response.data
    }catch(error){
        toast.error('You are not authorized to view this page')
        return redirect('/dashboard')
    }
}

export default function Admin(){
    const {users,jobs}=useLoaderData()

    return(
        <>
        <div className="admin-container d-flex gap-3 px-2 py-3 flex-wrap">
            <div className="admin-item d-flex flex-column gap-3 p-4 justify-content-center">
                <div className="d-flex justify-content-between align-items-center fa-2x">
                    <h1>{users}</h1>
                    <i className="fa-solid fa-user-group admin-icon p-3"></i>
                </div>
                <h4>Current Users</h4>
            </div>
            <div className="admin-item  d-flex flex-column gap-3 p-4 justify-content-center">
                <div className="d-flex justify-content-between align-items-center fa-2x">
                    <h1>{jobs}</h1>
                    <i className="fa-solid fa-briefcase admin-icon p-3"></i>
                </div>
                <h4>Total Jobs</h4>
            </div>
        </div>
        </>
    )
}