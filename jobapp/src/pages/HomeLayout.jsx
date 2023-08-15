import Homeimg from'./../assets/images/homeimg.png'
import Logo from './../assets/images/favicon-32x32.png'
import {Link} from 'react-router-dom'
export default function HomeLayout(){
    return(
        <div className='home-comp p-3'>
            {/* Home Navbar */}
        <nav className="landing-page-navbar d-flex justify-content-between align-items-center p-3">
            <div className='d-flex gap-3'>
                <img src={Logo} alt="" />
                <span>JobSquad</span>
            </div>
        </nav>
        {/* Home Main Section */}
        <main className='landing-page-main position-relative'>

            <div className='position-absolute landing-main d-flex flex-wrap align-items-center justify-content-center'>
            <img src={Homeimg} alt="" width='400' />
                <img src="" alt="" />
                <div className='landing-content'>
                    <h1 className='text-center'>Find the right candidate for your company✨</h1>
                </div>
                <div className='input-content d-flex p-3 gap-2 align-items-center'>
                <Link to='/login' className='text-decoration-none home-btn p-2'>
                    Login
                </Link>
                <Link to='/register' className='text-decoration-none home-btn p-2'>
                    New User/Register
                </Link>
                </div>
            </div>
        </main>
    </div>
    )
}