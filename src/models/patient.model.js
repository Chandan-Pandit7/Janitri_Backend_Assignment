import {DataTypes} from "sequelize";

export const createPatientModel=async (sequelize)=>{
    const Patients = sequelize.define('Patients',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,

        },
        
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            isLowercase:true,
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false,
            isLowercase:true
        },
      
 
    })

    return Patients;

}
