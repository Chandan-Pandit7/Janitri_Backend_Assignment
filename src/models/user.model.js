import {DataTypes} from "sequelize";

export const createUserModel=async (sequelize)=>{
    const User = sequelize.define('User',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4

        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            isLowercase:true
        },
        
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            isLowercase:true,
        },
       
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            isLowercase:true
        },
    })

    return User;

}




