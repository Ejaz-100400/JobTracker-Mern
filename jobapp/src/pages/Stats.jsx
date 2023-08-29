
import { ChartContainer, StatsContainer } from '../Components'
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';


export const loader = async ()=>{

    try{
        const response = await customFetch.get('/jobs/stats')
        return response.data
    }catch(error){
        console.log(error);
        return error
    }
}

export default function Stats(){
    const {defaultStats,monthlyApplications}=useLoaderData()
    let container =<>
    <StatsContainer defaultStats={defaultStats}/> 
    <ChartContainer data={monthlyApplications} />
    </>

    

    return(
        <div className={`d-flex flex-column justify-content-center p-2 h-100 
        ${monthlyApplications.length===0?'align-items-center':''}`} >
            {monthlyApplications.length===0?<span>To check stats,add more jobs..</span>:container}
           
        </div>
    )
}