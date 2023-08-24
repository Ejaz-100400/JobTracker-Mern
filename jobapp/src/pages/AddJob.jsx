import { FormRow } from "../Components"
import {JOB_STATUS,JOB_TYPE} from "../../../utils/constants.js"
import { Form,useNavigation,redirect,useOutletContext,useLoaderData } from "react-router-dom"
import {toast} from 'react-toastify'
import customFetch from "../utils/customFetch"

export const action =async ({request})=>{
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)
    try{
        await customFetch.post('/jobs',data)
        toast.success('Job added successfully',{
            className: 'toast-message'
        })
        return null;
    }catch(error){
        toast.error(error.response.data.msg,{
            className: 'toast-message'
        })
        return error;
    }
}


export default function AddJob(){
    return(
    <>
    <div className="add-job-container p-3">
        <h1>Add a Job</h1>
        <Form method="post" className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="d-flex align-items-center gap-3 job-form">
                <FormRow type='text' name='position'/>
                <FormRow type='text' name='company' />
                <FormRow type='text' name='jobLocation' />
                <div className='form-row w-100'>
                    <label htmlFor='jobStatus' className='form-label'>
                        job status
                    </label>
                    <select name="jobStatus" id="jobStatus" className="form-select"
                    defaultValue={JOB_STATUS.PENDING}>
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
                                <option key={itemValue} value={itemValue}>
                                    {itemValue}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button className="home-btn w-50 btn">
                Submit
            </button>
        </Form>
    </div>
    </>
    )
}