

export default function Navbar({theme,setTheme,setHide}){
    return(
        <header className={`dashboard-navbar  justify-content-between align-items-center px-3 py-4 w-100`} 
         style={theme?{backgroundColor:'black',color:'white'}:{backgroundColor:'rgba(225, 238, 234,1)',color:'black'}}>
            <i class="fa-solid fa-bars fa-2x" id='nav-small' onClick={()=>setHide()}></i>
            <div className="">
                <span>Navbar</span>
            </div>
            <div className="navbar-theme-profile d-flex gap-3 align-items-center">
            <i className="fa-solid fa-sun" onClick={()=>setTheme()}></i>
            <div className="v-line"></div>
            <div>
                <i className='fa-regular fa-user'></i>
                <span>Username</span>
            </div>
            </div>
        </header>
    )
}