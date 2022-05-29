import React, {useEffect} from 'react'
import {Doughnut} from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: ['HTLM', 'Css', 'React', 'TypeScript', 'Redux', 'Vue', 'NodeJs'],
    datasets: [{
        label: "My First Dataset",
        data: [60, 87, 80, 20, 25, 40, 15],
        borderWidth: 2,
        backgroundColor: ["#e44d25", "#0090d3", '#00daff', '#0a66cb', '#764abb', '#41b782', '#6ba353'],
    }]
}
function DoughnutChart() {
    useEffect(() => {
        
        
      
    }, []);
    return (
        <div>
            <div >
            <Doughnut style={{width: '490px'}} data={data}/>
            <p  style={{textAlign: 'center', fontSize: '20px'}} >Количество потраченного времени на технологию</p>
                
            </div>
        </div>
    )
}

export default DoughnutChart
