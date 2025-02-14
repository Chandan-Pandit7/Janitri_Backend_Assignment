import express from "express"
const router=express.Router();

import{
    postAddPatient,
    getPatients,
    getPatientById
} from '../controllers/patient.controller.js'



router.post('/add-patient',postAddPatient)
router.get('/get-patients',getPatients)
router.get('/:patientId',getPatientById)

export default router