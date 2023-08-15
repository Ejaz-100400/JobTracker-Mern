import Errorimg from './.././assets/images/undraw_server_down_s4lk.png'
import {Link} from 'react-router-dom'
export default function Error(){
    return(
        <main className='position-relative landing-page-main'>
            <div className='position-absolute landing-main d-flex flex-column align-items-center'>

                <img src={Errorimg} alt="" width='300' />
                <span className='text-center'>Ohh! Page Not Found we can't seem to find the page you are looking for</span>
                <Link to='/' className='text-decoration-none'>Back to Home</Link>
            </div>
        </main>
    )
}
