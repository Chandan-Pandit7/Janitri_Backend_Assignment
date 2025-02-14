import express from "express"
const router=express.Router();

import{
    postSignup,
    postLogin
    
} from '../controllers/user.controller.js'

router.post('/signup',postSignup)
router.post('/login',postLogin)


export default router