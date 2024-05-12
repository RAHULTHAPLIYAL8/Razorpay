import {instance} from "../server.js";
import { Payment } from "../models/paymentModels.js";
var order="NULL";
import crypto from "crypto";
export const checkout=async(req,res)=>
    {
        const options={
            amount:Number(req.body.amount*100),
            currency:"INR"
        };
        order=await instance.orders.create(options);

        res.status(200).json({success:true,order,});

    };
 
    export const paymentverification=async(req,res)=>
        {
            function hmac_sha256(data, key) {
                const hmac = crypto.createHmac('sha256', key);
                hmac.update(data);
                return hmac.digest('hex');
            }
           const {razorpay_payment_id,razorpay_order_id, razorpay_signature}=req.body;
            console.log(req.body);
            console.log(order);
            const generated_signature = hmac_sha256(order.id + "|" + razorpay_payment_id, process.env.Rajorpay_API_secret);

         if (generated_signature == razorpay_signature) {
            await Payment.create({
                razorpay_payment_id,
                razorpay_order_id,
                 razorpay_signature
            })
            res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)
         }
         else{
            await res.status(400).json({success:"false",order});
         }
        };