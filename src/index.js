import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
const app=express();
const PORT=process.env.PORT || 3000;
import {connect} from '../src/db/postgres.js'
import userRouter from '../src/routes/user.route.js'
import patientRouter from '../src/routes/patient.route.js'
import heartRateRouter from '../src/routes/heartRate.route.js'

app.use(cors({
    origin: process.env.CORS_ORIGINS,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))


app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',userRouter)
app.use('/patient',patientRouter)
app.use('/heartRate',heartRateRouter)

 

connect()
   .then(()=>{
        console.log("connected to database")
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })


