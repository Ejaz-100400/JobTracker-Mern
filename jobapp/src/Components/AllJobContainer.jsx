import React from 'react';
import { Link,Form} from 'react-router-dom';
import { useAllJobsContext } from '../pages/AllJobs';
export default function AllJobContainer(){
    const{jobLength,data}=useAllJobsContext();
    return(
        <>
        <div className="job-items position-relative mt-2" style={{ overflowY: jobLength ===2 ? 'none' : 'scroll' }}>
        <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mt-3 m-3">
        {data.job.length===0?
        <span>No Jobs to display ... :(
        </span>:data.job.map((job)=>{
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
                        <Link to={`/dashboard/edit-job/${job._id.toString()}`} className="btn btn-dark">
                            Edit Job
                        </Link>
                        <Form method='post' action={`/dashboard/delete-job/${job._id}`}>
                            <button className="btn btn-danger" >Delete Job</button>
                        </Form>
                    </div>
                </div>
            )
        })}    
        </div>
        </div>
        </>
    )
}