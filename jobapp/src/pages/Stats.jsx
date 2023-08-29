
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

    return(
        <div className='d-flex flex-column justify-content-center'>
            <StatsContainer defaultStats={defaultStats}/>
            {
                monthlyApplications.length>0 &&
                <ChartContainer data={monthlyApplications} />
            }
        </div>
    )
}