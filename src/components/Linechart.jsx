import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Linechart({ coinHistory, currentPrice, coinName }) {
    const coin_price = [];
    const time_stamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coin_price.push(coinHistory?.data?.history[i].price);
      }
    
      for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        time_stamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
      }

    const data = {
        labels: time_stamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coin_price,
            fill: false,
            borderColor: '#4bc0c0',
            backgroundColor: '#4bc0c0',
            pointBorderColor: '#4bc0c0',
            pointBackgroundColor: '#4bc0c0',
            pointHoverBackgroundColor: '#4bc0c0',
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
          },
        },
      };
    

    return (
        <div>
            <>
                <h1>{coinName} Price Chart</h1>
                <h2>{coinHistory?.data?.change}%</h2>
                <h2>Current {coinName} Price: $ {currentPrice}</h2>
                <Bar data={data}  options={options} width={10} height={10}/>
            </>
        </div>
    )
}

export default Linechart
