import {app} from "./app.js"
import Razorpay from "razorpay"
import { connection } from "./config/database.js"
connection();
export const instance = new Razorpay({
    key_id: process.env.Rajorpay_API_key,
       key_secret: process.env.Rajorpay_API_secret,
    })
    
app.listen(process.env.Port,()=>
{
    console.log(`Server is Running .... ${process.env.Port}`)
})