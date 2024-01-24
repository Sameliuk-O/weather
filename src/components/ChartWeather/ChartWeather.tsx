import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const options = {
  responsive: true,
  title: {
    display: false,
  },
  elements: {
    line: {
      fill: true,
      z: 2,
      tension: 0.4,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        fontSize: 8,
        maxRotation: 0,
      },
    },

    y: {
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  point: {
    radius: 0,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

export const ChartWeather = ({
  labels,
  dataChart,
  celsiusTemp,
}: {
  labels: string[];
  dataChart: string[];
  celsiusTemp: string;
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataChart,
        fill: true,
        backgroundColor: `${Number(celsiusTemp) >= 0 ? 'rgba(255, 162, 91, 0.5)' : 'rgba(91, 140, 255, 0.5)'}`,
        borderColor: `${Number(celsiusTemp) >= 0 ? 'rgba(255, 162, 91, 1)' : 'rgba(91, 140, 255, 1)'}`,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="h-[94px] w-full">
      <Line options={options} data={data} />
    </div>
  );
};
