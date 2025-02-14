import express from "express"
const router=express.Router();

import{
    postAddHeartRate,
    getHeartRates,
    getHeartRateById
} from '../controllers/heartRate.controller.js'


    
router.post('/add-heartRate',postAddHeartRate)
router.get('/heartRates',getHeartRates)
router.get('/heartRates/:id',getHeartRateById)




export default router