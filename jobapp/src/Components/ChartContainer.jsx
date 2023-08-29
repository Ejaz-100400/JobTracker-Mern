import React from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
export default function ChartContainer({data}){
    const [barChart, setBarChart] = React.useState(true);
    return(
        <div className='monthly-stats-container d-grid place-items-center'>

             <button className='home-btn btn' onClick={() => setBarChart(!barChart)}>
                {barChart ? 'Area Chart' : 'Bar Chart'}
            </button>
            {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
        </div>
    )
}