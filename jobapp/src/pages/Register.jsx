
import { Form ,Link,redirect,useNavigation} from "react-router-dom"
import { toast } from 'react-toastify';
import { FormRow } from "../Components";
import customFetch from '../utils/customFetch.js';


export const action = async({request})=>{
    const formData =await request.formData();
    const data = Object.fromEntries(formData);
    
    // console.log(data)
    try {
        await customFetch.post('/auth/register', data);
        toast.success('Registration successful',{
        className:'toast-message'
    });
        return redirect('/login');
      } catch (error) {
        toast.error(error.response.data.msg,{
            className:'toast-message'
        });
        return error;
      }
}

export default function Register(){

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return(
        <div className="register-comp p-5 position-relative ">
            <section className="form-comp form-row position-absolute landing-main p-3">
                <h2 className="text-center">Register</h2>
                <Form method='post' className="d-flex flex-column align-items-center">
                    <div className="d-flex">
                        <FormRow type='text' name='name' defaultValue='Ejaz Ahmed' />
                        <FormRow type='text' name='lastName' labelText='last name' defaultValue='J' />
                    </div>
                    <FormRow type='text' name='location' />
                    <FormRow type='email' name='email' />
                    <FormRow type='password' name='password' />
                    {/* <button type="submit" className="btn home-btn w-100 mt-3">
                        Submit
                    </button> */}
                    <button type='submit' className='btn home-btn w-100 mt-3' disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <span className="pt-3">Already a member? <Link to='/login' className="text-decoration-none">Login</Link></span>
                </Form>
            </section>
        </div>
    )
}

  {/* <div className="form-group p-2 w-100">
                    <label for="exampleInputFName">First Name</label>
                    <input type="name" className="form-control" id="exampleInputFName" aria-describedby="emailHelp" placeholder="John"/>
                </div>
                <div className="form-group p-2 w-100">
                    <label for="exampleInputLName">Last Name</label>
                    <input type="name" className="form-control" id="exampleInputLName" aria-describedby="emailHelp" placeholder="Doe"/>
                </div>
                <div className="form-group p-2 w-100">
                    <label for="exampleInputEmail">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="johndoe12@gmail.com"/>
                </div>
                <div className="form-group p-2 w-100">
                    <label for="exampleInputLocation">Location</label>
                    <input type="name" className="form-control" id="exampleInputLocation"/>
                </div>
                <div className="form-group p-2 w-100">
                    <label for="exampleInputPassword">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword"/>
                </div> */}
               