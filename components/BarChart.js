import { useState, useEffect } from 'react'

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

const BarChart = () =>{

  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
    )
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
    {
      label: '369',
      data: [3, 6, 9],
      backgroundColor: 'aqua',
      borderColor: 'black',
      borderWidth:1,
    }]
  }

const options={

}

	return (
		<div className=''>
           <Line
            data = {data}
            options = {options}
            ></Line> 
          </div>
		)
}

export default BarChart