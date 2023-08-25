import { FormRow } from "../Components"
import {JOB_STATUS,JOB_TYPE} from "../../../utils/constants.js"
import { Form,useNavigation,redirect,useOutletContext,useLoaderData } from "react-router-dom"
import {toast} from 'react-toastify'
import customFetch from "../utils/customFetch"

export const loader = async({params})=>{
    try{
        const {data}=await customFetch.get(`/jobs/${params.id}`)
        return data;
    }catch(error){
        toast.error(error.response.data.msg,{
            className: 'toast-message'
        })
    }
}

export const action = async({request,params})=>{
    const formDatata = await request.formData()
    const data = Object.fromEntries(formDatata)

    try {
        await customFetch.patch(`/jobs/${params.id}`, data);
        toast.success('Job edited successfully',{
            className: 'toast-message'
        });
        return redirect('/dashboard');
      } catch (error) {
        toast.error(error.response.data.msg,{
            className: 'toast-message'
        });
        return error;
      }
}



export default function EditJob(){
    const {job}=useLoaderData()
    console.log(job)
    const navigation = useNavigation()
    const isSubmitting= navigation.state ==='submitting'
    return(
        <div className="add-job-container p-3">
        <h1>Add a Job</h1>
        <Form method="post" className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="d-flex align-items-center gap-3 job-form">
                <FormRow type='text' name='position' defaultValue={job.position}/>
                <FormRow type='text' name='company'  defaultValue={job.company}/>
                <FormRow type='text' name='jobLocation' defaultValue={job.jobLocation} />
                <div className='form-row w-100'>
                    <label htmlFor='jobStatus' className='form-label'>
                        job status
                    </label>
                    <select name="jobStatus" id="jobStatus" className="form-select"
                    defaultValue={job.jobStatus}>
                        {Object.values(JOB_STATUS).map((itemValue)=>{
                            return (
                                <option key={itemValue} value={itemValue}>
                                    {itemValue}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className='form-row w-100'>
                    <label htmlFor='jobType' className='form-label'>
                        job type
                    </label>
                    <select name="jobType" id="jobType" className="form-select"
                    defaultValue={JOB_TYPE.FULL_TIME}>
                        {Object.values(JOB_TYPE).map((itemValue)=>{
                            return (
                                <option key={itemValue} value={itemValue} defaultValue={job.jobType}>
                                    {itemValue}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button className="home-btn w-50 btn" disabled={isSubmitting}>
                {isSubmitting? 'Submitting..':'Submit'}
            </button>
        </Form>
    </div>
    )
}
