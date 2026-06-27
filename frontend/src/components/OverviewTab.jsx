import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const contractChartData = {
  labels: ['Month-to-month', 'One year', 'Two year'],
  datasets: [{
    label: 'Churn %',
    data: [42, 11, 3],
    backgroundColor: ['#a89cf7', '#7F77DD', '#534AB7'],
    borderRadius: 4,
  }]
}

const donutChartData = {
  labels: ['Active', 'Churned'],
  datasets: [{
    data: [5174, 1869],
    backgroundColor: ['#22c55e', '#ef4444'],
    borderWidth: 0,
  }]
}

const internetChartData = {
  labels: ['Fiber optic', 'DSL', 'No internet'],
  datasets: [{
    label: 'Churn %',
    data: [42, 19, 7],
    backgroundColor: ['#ef4444', '#f59e0b', '#22c55e'],
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
      ticks: { color: '#888', fontSize: 11 },
      grid: { color: '#2a2a2a' }
    },
    y: {
      ticks: { color: '#888' },
      grid: { color: '#2a2a2a' }
    }
  }
}

const donutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: '#888', padding: 20 }
    }
  }
}

function OverviewTab() {
  return (
    <div className="overview-grid">

      <div className="chart-card">
        <h3 className="chart-title">Churn by contract type</h3>
        <div style={{ height: '200px' }}>
          <Bar data={contractChartData} options={chartOptions} />
        </div>
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Churn distribution</h3>
        <div style={{ height: '200px' }}>
          <Doughnut data={donutChartData} options={donutOptions} />
        </div>
      </div>

      <div className="chart-card wide">
        <h3 className="chart-title">Churn by internet service</h3>
        <div style={{ height: '200px' }}>
          <Bar data={internetChartData} options={chartOptions} />
        </div>
      </div>

    </div>
  )
}

export default OverviewTab