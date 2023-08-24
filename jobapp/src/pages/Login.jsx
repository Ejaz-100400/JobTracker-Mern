import { Form ,Link,redirect,useNavigation} from "react-router-dom"
import { toast } from 'react-toastify';
import { FormRow } from "../Components";
import customFetch from '../utils/customFetch.js';

export const action=async({request}) => {
    const formData =await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/auth/login', data);
        toast.success('Login successful',{
        className:'toast-message'
    });
    return redirect('/dashboard')
    } 
    catch (error) {
        // console.log(error);
        toast.error(error.response.data.msg,{
            className:'toast-message'
        });
        return error;
      }
}

export default function Login(){
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return(
        <div className="register-comp p-5 position-relative ">
            <section className="form-comp form-row position-absolute landing-main p-3">
            <h2 className="text-center">Register</h2>
                <Form method='post' className="d-flex flex-column align-items-center">
                    <FormRow name='email' type='email' placeholder='Enter mail'/>
                    <FormRow name='password' type='password'/>
                    <button type='submit' className='btn home-btn w-100 mt-3' disabled={isSubmitting}>
                        {isSubmitting ? 'Logging in...' : 'Log In'}
                    </button>
                <span className="pt-3">Not a member yet?<Link to='/register' className="text-decoration-none">Register</Link></span>
                </Form>
            </section>
        </div>
    )
}