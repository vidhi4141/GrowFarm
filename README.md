# 🌱 GrowFarm – Smart Agriculture Assistant

GrowFarm is a smart agriculture project designed to help farmers make better decisions using **Machine Learning, Web Technologies, and FastAPI**.

The system provides useful agricultural services such as **crop recommendation, crop disease detection, fertilizer recommendation, farmer information management, and agricultural alerts**.

---

## 📌 Project Overview

Farmers often face difficulties in selecting suitable crops, identifying crop diseases, and choosing the correct fertilizer.

**GrowFarm** provides a digital platform where farmers can manage their information and access ML-based agricultural recommendations.

The project consists of a web application, backend server, and Machine Learning API.

---

## 🎯 Objectives

* To provide a digital platform for farmers.
* To recommend suitable crops using Machine Learning.
* To detect crop diseases from plant images.
* To provide fertilizer recommendations.
* To store and manage farmer information.
* To provide useful agricultural alerts and information.
* To make agricultural decision-making easier using technology.

---

## 🚀 Main Features

### 👨‍🌾 Farmer Management

* Farmer information/database management.
* Digital farmer profiles.
* Store important farmer-related information.

### 🌾 Crop Recommendation

* Recommends suitable crops based on available agricultural information.
* Uses Machine Learning for prediction.

### 🦠 Disease Detection

* Detects possible crop diseases from uploaded plant images.
* Uses a Machine Learning model for disease prediction.

### 🧪 Fertilizer Recommendation

* Provides fertilizer suggestions based on crop/agricultural information.
* Helps farmers make better fertilizer decisions.

### 🔔 Agricultural Alerts

* Provides useful information about agricultural schemes, subsidies, and alerts.

### 🤖 Machine Learning API

* Machine Learning models are connected through a FastAPI service.
* The API allows the application to communicate with ML models.

---

## 🏗️ Project Architecture

```text
                    ┌──────────────────────┐
                    │       Farmer         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Web Interface    │
                    │      / Client        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Backend Server    │
                    │      / Server        │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
       ┌──────────────────┐        ┌──────────────────┐
       │     Database     │        │   FastAPI ML API │
       │ Farmer Data      │        │                  │
       └──────────────────┘        └────────┬─────────┘
                                            │
                                            ▼
                                  ┌──────────────────┐
                                  │ Machine Learning │
                                  │     Models       │
                                  └──────────────────┘
```

---

## 🧩 Project Structure

```text
GrowFarm/
│
├── client/
│   └── Frontend application
│
├── server/
│   └── Backend application
│
├── ML FAST API/
│   └── Machine Learning API
│
├── App/
│   └── Application-related files
│
└── README.md
```

> The exact files inside each folder may change as the project is developed.

---

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* FastAPI

### Machine Learning

* Python
* Machine Learning models
* Image-based disease detection
* Crop recommendation

### Database

* Database for storing farmer/application information

### Development Tools

* Visual Studio Code
* Git
* GitHub
* REST API

---

## 🔄 Working Methodology

The working process of GrowFarm is:

```text
User Input
    ↓
Web Application
    ↓
Backend Server
    ↓
Data Processing
    ↓
Machine Learning API
    ↓
ML Model Prediction
    ↓
Result
    ↓
Displayed to Farmer
```

### Step-by-Step

1. The farmer enters the required information through the application.
2. The frontend sends the information to the backend.
3. The backend processes the received data.
4. When an ML prediction is required, the backend communicates with the FastAPI ML service.
5. The ML model processes the input.
6. The prediction/result is returned to the application.
7. The result is displayed to the farmer.

---

## 🌱 Machine Learning Modules

### 1. Crop Recommendation

The crop recommendation module uses agricultural input data to recommend a suitable crop.

**Input:**

* Required agricultural parameters

**Output:**

* Recommended crop

---

### 2. Crop Disease Detection

The disease detection module accepts a crop/plant image and uses a Machine Learning model to identify the possible disease.

**Input:**

* Plant/crop image

**Output:**

* Predicted disease

---

### 3. Fertilizer Recommendation

The fertilizer recommendation module provides fertilizer-related suggestions according to the available crop/agricultural information.

**Input:**

* Crop/agricultural information

**Output:**

* Fertilizer recommendation

---

## ⚙️ Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/vidhi4141/GrowFarm.git
```

### Step 2: Open the Project

```bash
cd GrowFarm
```

Open the project in Visual Studio Code.

---

## 🐍 ML FastAPI Setup

Go to the ML FastAPI folder:

```bash
cd "ML FAST API"
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate the virtual environment:

### macOS / Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Install the required packages:

```bash
python3 -m pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

The API can then be accessed through the local FastAPI server.

---

## 🔗 API Documentation

FastAPI provides automatic API documentation.

After starting the server, open:

```text
http://127.0.0.1:8000/docs
```

This page can be used to test the available API endpoints.

---

## ▶️ Running the Project

The project contains separate application components.

### Frontend

Open the `client` folder and run the frontend according to its package/configuration.

### Backend

Open the `server` folder and start the backend server according to its configuration.

### Machine Learning API

Open the `ML FAST API` folder, activate the virtual environment, install requirements, and run:

```bash
uvicorn main:app --reload
```

---

## 📊 Expected Output

GrowFarm provides:

* Farmer information management
* Crop recommendations
* Disease prediction
* Fertilizer recommendations
* Agricultural information and alerts
* ML-based agricultural assistance

---

## 🔮 Future Scope

The project can be further improved by adding:

* Real-time weather information.
* Market price prediction.
* Local language support.
* Voice-based farmer assistance.
* More crop disease classes.
* More accurate Machine Learning models.
* Government scheme integration.
* Mobile application support.
* IoT-based soil and environmental monitoring.

---

## 👩‍💻 Project Purpose

GrowFarm is developed as an academic/project initiative to demonstrate how **Web Development, Backend Development, FastAPI, Database Management, and Machine Learning** can be combined to create a smart agriculture solution.

---

## 📜 License

This project is developed for educational and academic purposes.

---

## ⭐ GrowFarm

**Smart Technology for Smarter Farming 🌱**
