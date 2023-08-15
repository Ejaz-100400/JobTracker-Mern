import { Link } from "react-router-dom"
export default function Login(){
    return(
        <div className="register-comp p-5 position-relative ">
            <section className="form-comp form-row position-absolute landing-main p-3">
            <h2 className="text-center">Register</h2>
                <form action="" className="d-flex flex-column align-items-center">
                <div class="form-group p-2 w-100">
                    <label for="exampleInputEmail">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail" placeholder="johndoe12@gmail.com"/>
                </div>
                <div class="form-group p-2 w-100">
                    <label for="exampleInputPassword">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword"/>
                </div>
                <button type="submit" class="btn home-btn w-100 mt-3">Submit</button>
                <span className="pt-3">Not a member yet?<Link to='/register' className="text-decoration-none">Register</Link></span>
                </form>
            </section>
        </div>
    )
}