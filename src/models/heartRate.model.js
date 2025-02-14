import {DataTypes} from "sequelize";

export const createHeartRateModel=async (sequelize)=>{
    const  HeartRate= sequelize.define('HeartRate',{
      
        bpm:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        rate:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        patientId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
       
    })

    return HeartRate;

}



