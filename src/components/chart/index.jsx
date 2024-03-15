'use client'
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend, 
    Tooltip
} from 'chart.js'

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

export const DashboardChart = () => {
    const data = {
      labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "Users",
          backgroundColor: "#343434",
          tension: 0.4,
          borderColor: "#343434",
          borderWidth: 2,
          fill: true,
          pointBackgroundColor: "#343434",
          data: [50, 150, 300, 500, 750, 1100],
        },
        {
          label: "Month",
          backgroundColor: "#F7B32B",
          tension: 0.4,
          borderColor: "#F7B32B",
          borderWidth: 2,
          fill: true,
          pointBackgroundColor: "#F7B32B",
          data: [0, 0, 0, 0, 0, 0],
        },
      ],
    };


    const options = {
      plugins: {
        legend: true
      },
      scales: {
        y: {
          // min: 0,
          // max: 1250
        },
      },
    };

  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 mb-10 bg-white w-full rounded-lg sticky top-0 shadow-sm">
        <h5 className="font-semibold text-xl text-[#6A6B6D]">
          Users on Dexter App
        </h5>
        <div className="">
          <img src="/images/calender.png" alt="calender" />
        </div>
      </div>
      <div className="bg-white px-4 py-16 rounded-[8px] w-auto">
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
}
