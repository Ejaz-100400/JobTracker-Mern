import { Link } from "react-router-dom"
import Logo from './../assets/images/favicon-32x32.png'
export default function BigSidebar({theme,user}){
    const {role}=user;
    return(
        <div className={`sidebar-big px-3  flex-column position-fixed gap-3`} 
        style={theme?{backgroundColor:'black',color:'white'}:{backgroundColor:'rgba(225, 238, 234,1)',color:'black'}}>
            <div className="d-flex flex-column gap-5">
            <div className="navbar-logo align-items-center gap-2 py-4">
                <h3 className="logo-title">JobSquad</h3>
            </div>
            </div>
            <div>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3 page-link" to='/dashboard'>
                <i class="fa-solid fa-file fa-2x"></i>
                <span>Your Jobs</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3 page-link" to='/dashboard/addjob'>
                <i class="fa-solid fa-plus fa-2x"></i>
                <span>Add Jobs</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3 page-link" to='/dashboard/stats'>
                <i class="fa-solid fa-chart-simple fa-2x"></i>
                <span>Stats</span>
            </Link>
            {/* <Link className="text-decoration-none d-flex gap-3 align-items-center py-3 page-link" to='/dashboard/profile'>
                <i class="fa-solid fa-id-badge fa-2x"></i>
                <span>Profile</span>
            </Link> */}
            {role === 'admin'?<Link className="text-decoration-none d-flex gap-3 align-items-center py-3 page-link" to='/dashboard/admin'>
                <i class="fa-solid fa-shield-halved fa-2x"></i>
                <span>Admin</span>
            </Link>:null}
            
            </div>
            
        </div>
    )
}