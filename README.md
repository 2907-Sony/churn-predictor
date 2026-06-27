# Customer Churn Predictor

A full-stack machine learning application that predicts 
customer churn risk using Random Forest classification.

##  Tech Stack
- **Frontend:** React, Chart.js, Axios
- **Backend:** FastAPI, Python, Uvicorn
- **ML Model:** Scikit-learn, Random Forest
- **Data:** IBM Telco Customer Churn Dataset (7,032 customers)

## Features
- Interactive analytics dashboard with charts
- Real-time churn prediction with ML model
- Risk level classification (HIGH/MEDIUM/LOW)
- Business insights from service analysis

## Model Performance
- Accuracy: 78%
- Training data: 5,625 customers
- Test data: 1,407 customers
- Algorithm: Random Forest (100 trees)

## How to Run

### Backend
```bash
cd backend
conda activate churn-env
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Author
Yashika — [GitHub](https://github.com/2907-Sony)