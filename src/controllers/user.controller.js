import {UserModel} from '../db/postgres.js'
import bcrypt from 'bcrypt'


// Signup
export const postSignup=async(req,res)=>{
    const{name,email,password}  = req.body;

    try {
        const user=await UserModel.findOne({
            where:{
                email
            }
        })
        if(user){
            return res.status(400).json({
                message:"User already exists"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10)

        const newUser=await UserModel.create({
            name,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            message:"User created successfully",
            data:newUser
        })
        
    }
    catch (error) {
        return res.status(500).json({
            message:"Error in postSignup controller",
        })
    }
}

// Login
export const postLogin=async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await UserModel.findOne({
            where:{
                email
            },
           
        })
        // console.log(user);
        if(!user){
            return res.status(400).json({
                message:"User does not exist"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({
                message:"Incorrect password"
            })
        }
        return res.status(200).json({
            message:"Login successfully",
            data:user
        })
    }
    catch (error) {
        return res.status(500).json({
            message:"Error in postLogin controller",
        })
    }


}
