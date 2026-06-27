import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const securityData = {
  labels: ['With security', 'Without security', 'No internet'],
  datasets:[{
    labels:'Churn%',
    data: [15, 42, 8],
    backgroundColor: ['#22c55e', '#ef4444', '#888780'],
    borderRadius: 4,
  }]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    x: {
      ticks: { color: '#888' },
      grid: { color: '#2a2a2a' }
    },
    y: {
      ticks: { color: '#888' },
      grid: { color: '#2a2a2a' }
    }
  }
}

const billingData = {
labels: ['Paperless billing', 'Paper billing'],
datasets: [{
labels: 'churn%',
data: [34, 17],
backgroundColor:['#ef4444', '#22c55e'],
borderRadius: 4,
}]
}

const techSupportData = {
  labels: ['With support', 'Without support', 'No internet'],
  datasets: [{
    labels: ['Churn%'],
    data: [22, 49, 8],
    backgroundColor: ['#22c55e', '#ef4444', '#888780'],
    borderRadius: 4,
  }]
}

const streamingData ={
  labels: ['Streaming TV', 'No streaming', 'No internet' ],
  datasets: [{
    labels: ['Churn%'],
    data: [30, 33, 8],
    backgroundColor: ['#22c55e', '#ef4444', '#888780'],
    borderRadius: 4,
  }]
}

function ServicesTab() {
return(
  <div className="overview-grid">
    <div className="chart-card">
    <h3 className="chart-title"> Online security impact</h3>
    <div style={{ height: '200px' }}>
      <Bar
      data={securityData}
      options={chartOptions}
      />
    </div>
    </div>

    <div className="chart-card">
    <h3 className="chart-title">Paperless billing impact</h3>
    <div style={{ height: '200px' }}>
      <Bar
      data = {billingData}
      options= {chartOptions }
      />
    </div>
    </div>


    <div className="chart-card">
    <h3 className="chart-title">Tech support impact</h3>
    <div style={{ height: '200px' }}>
      <Bar
      data={techSupportData}
      options={chartOptions}
      />
    </div>
    </div>
    <div className="chart-card">
    <h3 className="chart-title">Streaming TV impact</h3>
    <div style={{ height: '200px' }}>
      <Bar
      data={streamingData}
      options={chartOptions}
      />
    </div>
    </div>
  </div>
)
}
export default ServicesTab;
