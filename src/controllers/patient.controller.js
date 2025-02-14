import { PatientModel } from "../db/postgres.js";


// Get All Patients
export const getPatients = async (req, res) => {
    // console.log("get-patients");
    try {
        const patients = await PatientModel.findAll();

        return res.status(200).json({
            message: "Patients fetched successfully",
            data: patients
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error in getPatients controller"
        })
    }
}


// Get Patient by Id
export const getPatientById = async (req, res) => {
    const {patientId} = req.params;
    console.log(patientId);
    try {
        const patient = await PatientModel.findOne({id:patientId});
        if (!patient) {
            return res.status(404).json({
                message: "Patient not found"
            })
        }
        return res.status(200).json({
            message: "Patient fetched successfully",
            data: patient
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error in getPatientById controller"
        })
    }

}

// Add Patient
export const postAddPatient = async (req, res) => {
    const {name, age } = req.body;
    try {
        const patient = await PatientModel.create({
            name,
            age,
        })
        return res.status(201).json({
            message: "Patient created successfully",
            data: patient
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error in postAddPatient controller"
        })
    }

        
}