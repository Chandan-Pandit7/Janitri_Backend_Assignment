import { Sequelize } from "sequelize";
import { createUserModel} from "../models/user.model.js";
import { createPatientModel} from "../models/patient.model.js";
import { createHeartRateModel} from "../models/heartRate.model.js";

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres'

});
// console.log(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD,process.env.HOST);

let UserModel=null;
let HeartRateModel=null;
let PatientModel=null;

const connect=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // UserModel=await import('./user.model.js');
        UserModel=await createUserModel(sequelize);
        HeartRateModel=await createHeartRateModel(sequelize);
        PatientModel=await createPatientModel(sequelize);

        await sequelize.sync();
        console.log("database synced");

    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export{
    UserModel,
    HeartRateModel,
    PatientModel,
    connect
}