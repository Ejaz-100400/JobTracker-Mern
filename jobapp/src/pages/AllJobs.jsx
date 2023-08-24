import { FormRow } from "../Components"
import {JOB_STATUS,JOB_TYPE} from "../../../utils/constants.js"
import { Form,useNavigation,redirect,useOutletContext,useLoaderData } from "react-router-dom"
import {toast} from 'react-toastify'
import customFetch from "../utils/customFetch"

export const loader = async () => {
    try {
      const { data } = await customFetch.get('/jobs');
      return {
        data,
      };
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

export default function AllJobs(){
    const {data}= useLoaderData();
    console.log(data.job)
    return(
        <>
        
        <div className="add-job-container p-3">
        <h1>Search Job</h1>
        <Form method="post" className="d-flex flex-column justify-content-center align-items-center gap-3 p-3">
            <div className="d-flex align-items-center gap-3">
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
    <div className="job-items d-flex gap-2 mt-5 p-2 flex-wrap justify-content-center ">
        {data.job.map((job)=>{
            return(
                <div className="job-item p-3">
                    <div className="d-flex justify-content-between">
                        <div >
                            <h5>{job.position}</h5>
                            <span>{job.company}</span>
                        </div>
                        <div className="pos-title px-3 py-1">
                            <h1>{job.position.charAt(0)}</h1>
                        </div>
                    </div>
                    <hr  className="bg-dark"/>
                    <div className="status w-25 p-1 text-center"
                    style={{backgroundColor:job.jobStatus === 'declined'? '#d66a6a'
                    : job.jobStatus === 'interview'? 'rgb(43, 124, 174)'
                    : job.jobStatus === 'pending'? '#f59e0b'
                    : 'transparent', // Default background color
                      }}>
                        {job.jobStatus}
                    </div>
                    <div className="job-item-btns d-flex mt-5 gap-2">
                        <button className="btn btn-dark">Edit Job</button>
                        <button className="btn btn-danger" >Delete Job</button>
                    </div>
                </div>
            )
        })}    
    </div>
    </>
    )
}