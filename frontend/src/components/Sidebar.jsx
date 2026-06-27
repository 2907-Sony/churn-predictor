import React from "react";
import {
  FaChartPie,
  FaUserMinus,
  FaUserCheck,
  FaPercent,
} from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <FaChartPie size={20} color="#a89cf7" />
        <span className="logo-text">Churn Analytics</span>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label-row">
          <MdFilterList size={14} color="#666" />
          <p className="sidebar-label">FILTERS</p>
        </div>

        <div className="filter-group">
          <label className="filter-label">Contract type</label>
          <select className="filter-select">
            <option>All</option>
            <option>Month-to-month</option>
            <option>One year</option>
            <option>Two year</option>
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">Customer status</label>
          <select className="filter-select">
            <option>All</option>
            <option>Churned</option>
            <option>Active</option>
          </select>
        </div>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-label">KEY STATS</p>

        <div className="stat-card">
          <FaUserMinus size={18} color="#ef4444" />
          <p className="stat-number red">1,869</p>
          <p className="stat-desc">Total churned</p>
        </div>

        <div className="stat-card">
          <FaUserCheck size={18} color="#22c55e" />
          <p className="stat-number green">5,174</p>
          <p className="stat-desc">Active customers</p>
        </div>

        <div className="stat-card">
          <FaPercent size={18} color="#f59e0b" />
          <p className="stat-number amber">26.5%</p>
          <p className="stat-desc">Churn rate</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
