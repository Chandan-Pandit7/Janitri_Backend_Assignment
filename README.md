# Janitri Backend Internship Assignment
1. Clone the repository:
   > git clone https://github.com/Chandan-Pandit7/Janitri_Backend_Assignment.git
2. Install dependencies (if any):
   > npm i
3. Run the application:
   > npm start

# API EndPoints

User APIs
   Register User: POST /api/signup
   Login User: POST /api/login

Patient APIs
   Add Patient: POST /patient/add-patient
   Get One Patient Details: GET /patient/{patientId}
   Get all Patients Details : GET /patient/get-patients

Heart Rate APIs
   Record Heart Rate: POST /heartRate/add-heartRate
   Get Heart Rate Data: GET /heartRate/get-heartRates/{patientId}
   Get Heart Rate Data : GET /heartRate/get-heartRates

Assumptions & Design Decisions
   Used PostgreSQL for database.
   Passwords are stored in encrypted format using bcrypt package .
   No authentication/authorization mechanisms used.

