import React from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { Cursor } from 'mongoose';
export default function ChartContainer({data}){
    const [barChart, setBarChart] = React.useState(true);
    return(
        <div className='monthly-stats-container d-grid place-items-center'>
             <span className='text-center chart-btn mt-3' onClick={() => setBarChart(!barChart)}
             style={{cursor:'pointer'}}>
                {barChart ? 'Area Chart' : 'Bar Chart'}
            </span>
            {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
        </div>
    )
}