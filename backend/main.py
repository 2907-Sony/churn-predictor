from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import json
import pandas as pd
import numpy as np




app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)



model = joblib.load("data/churn-model.pkl")
with open("data/model-columns.json", "r") as f:
    model_columns = json.load(f)


print("Model Loaded Succesfully!")


class CustomerData(BaseModel):
    SeniorCitizen: int
    Partner: int
    Dependents: int
    tenure: int
    PhoneService: int
    PaperlessBilling: int
    MonthlyCharges: float
    TotalCharges: float
    gender_Male: int
    MultipleLines_No_phone_service: int
    MultipleLines_Yes: int
    InternetService_Fiber_optic: int
    InternetService_No: int
    OnlineSecurity_No_internet_service: int
    OnlineSecurity_Yes: int
    OnlineBackup_No_internet_service: int
    OnlineBackup_Yes: int
    DeviceProtection_No_internet_service: int
    DeviceProtection_Yes: int
    TechSupport_No_internet_service: int
    TechSupport_Yes: int
    StreamingTV_No_internet_service: int
    StreamingTV_Yes: int
    StreamingMovies_No_internet_service: int
    StreamingMovies_Yes: int
    Contract_One_year: int
    Contract_Two_year: int
    PaymentMethod_Credit_card_automatic: int
    PaymentMethod_Electronic_check: int
    PaymentMethod_Mailed_check: int




@app.post("/predict")
def predict(data: CustomerData):
    input_data = pd.DataFrame([data.dict()])


    input_data = input_data.reindex(columns = model_columns, fill_value = 0 )

    prediction    = model.predict(input_data)[0]
    probability   = model.predict_proba(input_data)[0][1]

    return {
    "churn": bool(prediction),
    "probability": round(float(probability) * 100, 2),
    "risk": "HIGH"   if probability > 0.5
            else "MEDIUM" if probability > 0.3
            else "LOW"
}



@app.get("/")
def home():
    return {"message": "Churn Predictor API is Running!"}




