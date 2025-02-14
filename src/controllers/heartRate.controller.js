import { PatientModel } from "../db/postgres.js";
import { HeartRateModel } from "../db/postgres.js";

// Record Heart Rate
export const postAddHeartRate = async (req, res) => {
    const { rate, patientId,bpm } = req.body;
    console.log(rate, patientId,bpm);
    try {
        const patient = await PatientModel.findOne({id:patientId});
        if (!patient) {
            return res.status(404).json({
                message: "Patient not found"
            })
        }

        const heartRate = await HeartRateModel.create({
            rate,
            patientId,
            bpm
        })

        return res.status(201).json({
            message: "HeartRate created successfully",
            data: heartRate
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error in postAddHeartRate controller"
        })
    }
}

// Get All Heart Rates
export const getHeartRates = async (req, res) => {
    try {
        const heartRates = await HeartRateModel.findAll();

        return res.status(200).json({
            message: "HeartRates fetched successfully",
            data: heartRates
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Error in getHeartRates controller"
        })
    }
}


// Get Heart Rate Data for a Patient
export const getHeartRateById = async (req, res) => {
    const { patientId } = req.params;
    try {
        const heartRate = await HeartRateModel.findOne({id:patientId});

        if (!heartRate) {
            return res.status(404).json({
                message: "HeartRate not found"
            })
        }

        return res.status(200).json({
            message: "HeartRate fetched successfully",
            data: heartRate
        })
    }
    catch (error){
        return res.status(500).json({
            message: "Error in getHeartRateById controller"
        })
    }
}