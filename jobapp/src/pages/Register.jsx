import { Link } from "react-router-dom"
export default function Register(){
    return(
        <div className="register-comp p-5 position-relative ">
            <section className="form-comp form-row position-absolute landing-main p-3">
                <h2 className="text-center">Register</h2>
                <form action="" className="d-flex flex-column align-items-center">
                <div className="d-flex">
                    <div class="form-group p-2 w-100">
                    <label for="exampleInputFName">First Name</label>
                    <input type="name" class="form-control" id="exampleInputFName" aria-describedby="emailHelp" placeholder="John"/>
                </div>
                <div class="form-group p-2 w-100">
                    <label for="exampleInputLName">Last Name</label>
                    <input type="name" class="form-control" id="exampleInputLName" aria-describedby="emailHelp" placeholder="Doe"/>
                </div>
                </div>
                <div class="form-group p-2 w-100">
                    <label for="exampleInputEmail">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail" placeholder="johndoe12@gmail.com"/>
                </div>
                <div class="form-group p-2 w-100">
                    <label for="exampleInputLocation">Location</label>
                    <input type="name" class="form-control" id="exampleInputLocation"/>
                </div>
                <div class="form-group p-2 w-100">
                    <label for="exampleInputPassword">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword"/>
                </div>
                <button type="submit" class="btn home-btn w-100 mt-3">Submit</button>
                <span className="pt-3">Already a member? <Link to='/login' className="text-decoration-none">Login</Link></span>
                </form>
            </section>
        </div>
    )
}