import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaCreditCard,
  FaWifi,
  FaBrain,
  FaExclamationTriangle,
  FaCheckCircle,
  FaMinusCircle,
} from "react-icons/fa";

function PredictTab() {
  const [formData, setFormData] = useState({
    SeniorCitizen: 0,
    Partner: 0,
    Dependents: 0,
    tenure: 12,
    PhoneService: 1,
    PaperlessBilling: 1,
    MonthlyCharges: 65.0,
    TotalCharges: 780.0,
    gender_Male: 1,
    MultipleLines_No_phone_service: 0,
    MultipleLines_Yes: 0,
    InternetService_Fiber_optic: 0,
    InternetService_No: 0,
    OnlineSecurity_No_internet_service: 0,
    OnlineSecurity_Yes: 0,
    OnlineBackup_No_internet_service: 0,
    OnlineBackup_Yes: 0,
    DeviceProtection_No_internet_service: 0,
    DeviceProtection_Yes: 0,
    TechSupport_No_internet_service: 0,
    TechSupport_Yes: 0,
    StreamingTV_No_internet_service: 0,
    StreamingTV_Yes: 0,
    StreamingMovies_No_internet_service: 0,
    StreamingMovies_Yes: 0,
    Contract_One_year: 0,
    Contract_Two_year: 0,
    PaymentMethod_Credit_card_automatic: 0,
    PaymentMethod_Electronic_check: 1,
    PaymentMethod_Mailed_check: 0,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const handlePredict = async () => {
    console.log("Sending data:", formData)
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
       "https://churn-predictor-api-mjr1.onrender.com/predict",
        formData
      );
      setResult(response.data);
    } catch (err) {
      setError("Could not connect to API. Make sure FastAPI is running!");
    }
    setLoading(false);
  };

  const getRiskColor = (risk) => {
    if (risk === "HIGH") return "#ef4444";
    if (risk === "MEDIUM") return "#f59e0b";
    return "#22c55e";
  };

  const getRiskIcon = (risk) => {
    if (risk === "HIGH") return <FaExclamationTriangle />;
    if (risk === "MEDIUM") return <FaMinusCircle />;
    return <FaCheckCircle />;
  };

  return (
    <div className="predict-container">
      <div className="predict-card">
        <div className="predict-card-header">
          <FaUser size={14} color="#a89cf7" />
          <h3 className="predict-card-title">Customer info</h3>
        </div>
        <div className="predict-grid">
          <div className="field-group">
            <label className="field-label">Tenure (months)</label>
            <input
              className="field-input"
              type="number"
              name="tenure"
              value={formData.tenure}
              onChange={handleChange}
            />
          </div>
          <div className="field-group">
            <label className="field-label">Gender</label>
            <select
              className="field-select"
              name="gender_Male"
              value={formData.gender_Male}
              onChange={handleChange}
            >
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </select>
          </div>
          <div className="field-group">
            <label className="field-label">Partner</label>
            <select
              className="field-select"
              name="Partner"
              value={formData.Partner}
              onChange={handleChange}
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
          <div className="field-group">
            <label className="field-label">Senior citizen</label>
            <select
              className="field-select"
              name="SeniorCitizen"
              value={formData.SeniorCitizen}
              onChange={handleChange}
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </div>
        </div>
      </div>

      <div className="predict-card">
        <div className="predict-card-header">
          <FaCreditCard size={14} color="#a89cf7" />
          <h3 className="predict-card-title">Billing</h3>
        </div>
        <div className="predict-grid">
          <div className="field-group">
            <label className="field-label">Monthly charges ($)</label>
            <input
              className="field-input"
              type="number"
              name="MonthlyCharges"
              value={formData.MonthlyCharges}
              onChange={handleChange}
            />
          </div>
          <div className="field-group">
            <label className="field-label">Total charges ($)</label>
            <input
              className="field-input"
              type="number"
              name="TotalCharges"
              value={formData.TotalCharges}
              onChange={handleChange}
            />
          </div>
          <div className="field-group">
            <label className="field-label">Contract type</label>
            <select
              className="field-select"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  Contract_One_year: e.target.value === "1" ? 1 : 0,
                  Contract_Two_year: e.target.value === "2" ? 1 : 0,
                }));
              }}
            >
              <option value='0'>Month-to-month</option>
              <option value="1">One year</option>
              <option value="2">Two year</option>
            </select>
          </div>
          <div className="field-group">
            <label className="field-label">Payment method</label>
            <select
              className="field-select"
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  PaymentMethod_Mailed_check:e.target.value === 'm' ? 1 : 0, 
                  PaymentMethod_Electronic_check: e.target.value === 'e' ? 1 : 0,
                  PaymentMethod_Credit_card_automatic: e.target.value === 'c' ? 1 : 0
                }))
              }}
            >
              <option value="e">Electronic check</option>
              <option value="m">Mailed check</option>
              <option value="c">Credit card</option>
              <option value="b">Bank transfer</option>
            </select>
          </div>
        </div>
      </div>

      <div className="predict-card">
        <div className="predict-card-header">
          <FaWifi size={14} color="#a89cf7" />
          <h3 className="predict-card-title">Services</h3>
        </div>
        <div className="predict-grid">
          <div className="field-group">
            <label className="field-label">Phone service</label>
            <select
              className="field-select"
              name="PhoneService"
              value={formData.PhoneService}
              onChange={handleChange}
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
          <div className="field-group">
            <label className="field-label">Internet service</label>
            <select
              className="field-select"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  InternetService_Fiber_optic: e.target.value === "f" ? 1 : 0,
                  InternetService_No: e.target.value === "n" ? 1 : 0,
                  OnlineSecurity_No_internet_service:
                    e.target.value === "n" ? 1 : 0,
                  OnlineBackup_No_internet_service:
                    e.target.value === "n" ? 1 : 0,
                  DeviceProtection_No_internet_service:
                    e.target.value === "n" ? 1 : 0,
                  TechSupport_No_internet_service:
                    e.target.value === "n" ? 1 : 0,
                  StreamingTV_No_internet_service:
                    e.target.value === "n" ? 1 : 0,
                  StreamingMovies_No_internet_service:
                    e.target.value === "n" ? 1 : 0,
                }));
              }}
            >
              <option value="d">DSL</option>
              <option value="f">Fiber optic</option>
              <option value="n">No internet</option>
            </select>
          </div>
          <div className="field-group">
            <label className="field-label">Streaming TV</label>
            <select
              className="field-select"
              name="StreamingTV_Yes"
              value={formData.StreamingTV_Yes}
              onChange={handleChange}
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </div>
          <div className="field-group">
            <label className="field-label">Online security</label>
            <select
              className="field-select"
              name="OnlineSecurity_Yes"
              value={formData.OnlineSecurity_Yes}
              onChange={handleChange}
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </div>
        </div>
      </div>

     
      <button
        className="predict-button"
        onClick={handlePredict}
        disabled={loading}
      >
        <FaBrain size={16} />
        {loading ? "Predicting..." : "Predict churn risk"}
      </button>

      {error && <div className="error-box">{error}</div>}

      {result && (
        <div
          className="result-box"
          style={{ borderColor: getRiskColor(result.risk) }}
        >
          <div className="result-header">
            <span
              style={{
                color: getRiskColor(result.risk),
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {getRiskIcon(result.risk)}
              {result.risk === "HIGH"
                ? "High churn risk detected"
                : result.risk === "MEDIUM"
                ? "Medium churn risk detected"
                : "Low churn risk detected"}
            </span>
            <span
              className="risk-badge"
              style={{
                color: getRiskColor(result.risk),
                borderColor: getRiskColor(result.risk),
              }}
            >
              {result.risk}
            </span>
          </div>

          <div className="result-grid">
            <div className="result-stat">
              <p className="result-stat-label">Churn probability</p>
              <p
                className="result-stat-value"
                style={{ color: getRiskColor(result.risk) }}
              >
                {result.probability}%
              </p>
            </div>
            <div className="result-stat">
              <p className="result-stat-label">Risk level</p>
              <p
                className="result-stat-value"
                style={{ color: getRiskColor(result.risk) }}
              >
                {result.risk}
              </p>
            </div>
          </div>

          <div className="result-tip">
            <FaBrain size={14} color="#f59e0b" />
            <p>
              {result.risk === "HIGH"
                ? "Consider offering a retention deal or discount to keep this customer!"
                : result.risk === "MEDIUM"
                ? "Monitor this customer closely and consider proactive outreach."
                : "This customer appears loyal. Keep up the good service!"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PredictTab;
