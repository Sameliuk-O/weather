import React from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
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
        maxRotation: 0,
      },
      stepSize: 0,
      suggestedMin: 0,
    },
  },
  point: {
    radius: 0,
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: 'rgba(197, 197, 197)',
      anchor: 'end',
      align: 'top',
      offset: -1,
      font: {
        size: 10,
      },
    },
  },
};

export const ChartWeather = ({
  labels,
  dataChart,
  celsiusTemp,
}: {
  labels: number[];
  dataChart: number[];
  celsiusTemp: string;
}) => {
  const uniqueLabels = labels
    .map((value, index) => {
      if (index % 8 === 0) {
        return value;
      }
      return undefined;
    })
    .filter((value) => value !== undefined);

  const uniqueDataChart = dataChart
    .map((value, index) => {
      if (index % 8 === 0) {
        return value;
      }
      return undefined;
    })
    .filter((value) => value !== undefined);

  const data = {
    labels: uniqueLabels,
    datasets: [
      {
        data: uniqueDataChart,
        fill: true,
        backgroundColor: `${Number(celsiusTemp) >= 0 ? 'rgba(255, 162, 91, 0.5)' : 'rgba(91, 140, 255, 0.5)'}`,
        borderColor: `${Number(celsiusTemp) >= 0 ? 'rgba(255, 162, 91, 1)' : 'rgba(91, 140, 255, 1)'}`,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="aspect-auto h-[94px] w-full">
      <Line options={options as any} data={data} />
    </div>
  );
};
