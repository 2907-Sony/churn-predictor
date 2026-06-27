import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import OverviewTab from './components/OverviewTab'
import PredictTab from './components/PredictTab'
import ServicesTab from './components/ServicesTab'
import { FaCircle } from 'react-icons/fa'
import './App.css'


function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return(
    <div className= "app">
      <Sidebar />
      <div className= "main-content">
        <div className= "header">
          <div>
          <h1>Customer churn analysis</h1>
            <p>  IBM Telco dataset <FaCircle size={6} style={{margin: '0 8px', color: '#888'}} />  7,032 customers</p>
          </div>
          <span className= "accuracy-badge">78%  accuracy</span>
        </div>
        <div className="tabs">
          <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}> overview
          </button>
          <button className={`tab ${activeTab === 'predict' ? 'active' : ''}`}
          onClick={() => setActiveTab('predict')}>predict
          </button>
          <button className={`tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}>services
          </button>
        </div>
         <div className="tab-content">
          {activeTab === 'overview'  && <OverviewTab />}
          {activeTab === 'predict'   && <PredictTab />}
          {activeTab === 'services'  && <ServicesTab />}
        </div> 
      </div>
    </div>
  )

}


export default App