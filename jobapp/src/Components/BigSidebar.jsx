import { Link } from "react-router-dom"
import Logo from './../assets/images/favicon-32x32.png'
export default function BigSidebar({theme,hideside}){
    return(
        <div className={`sidebar-big px-3 py-5  flex-column gap-3 ${hideside?'d-none':'d-flex'}`} 
        style={theme?{backgroundColor:'black',color:'white'}:{backgroundColor:'rgba(225, 238, 234,1)',color:'black'}}>
             <div className="navbar-logo align-items-center gap-2 py-4">
                <img src={Logo} alt="" />
                <span className="logo-title">JobSquad</span>
            </div>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard'>
                <i class="fa-solid fa-file fa-2x"></i>
                <span>Your Jobs</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard/addjob'>
                <i class="fa-solid fa-plus fa-2x"></i>
                <span>Add Jobs</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard/stats'>
                <i class="fa-solid fa-chart-simple fa-2x"></i>
                <span>Stats</span>
            </Link>
            <Link className="text-decoration-none d-flex gap-3 align-items-center py-3" to='/dashboard/profile'>
                <i class="fa-solid fa-id-badge fa-2x"></i>
                <span>Profile</span>
            </Link>
        </div>
    )
}