import React from "react"
import { FormRow } from "../Components"
import {JOB_STATUS,JOB_TYPE} from "../../../utils/constants.js"
import { Form,useNavigation,redirect,useOutletContext,useLoaderData } from "react-router-dom"
import {toast} from 'react-toastify'
import customFetch from "../utils/customFetch"
import SearchContainer from "../Components/SearchContainer"
import AllJobContainer from "../Components/AllJobContainer"

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

const AllJobsContext = React.createContext()

export default function AllJobs(){

    const[search,setsearch]=React.useState(false)
    console.log(search)
    const {data}= useLoaderData();
    let jobLength=data.job.length

    return(
        <>
        <AllJobsContext.Provider
        value={{
            jobLength,data
            }}>
            <SearchContainer/>
            <div className="alljob-header d-flex justify-content-between align-items-center px-1 position-relative">
                <h2>{jobLength} Jobs found</h2>
                <div>
                    <i className="fa-solid fa-magnifying-glass p-3 position-relative" onMouseEnter={()=>setsearch(prev=>!prev)}
                    onMouseLeave={()=>setsearch(prev=>!prev)}></i>
                </div>
            </div>
            <AllJobContainer/>
    {/* Mapping all job items */}
        </AllJobsContext.Provider>
    </>
    )
}

export const useAllJobsContext = () => React.useContext(AllJobsContext);