import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Card from './Card'
import axios from "axios";
const Home = () => {
  const checkoutHandler= async(amount)=>
    {
      const {data:{key}}=await axios.post("http://localhost:4000/api/getkey",{amount})
      const {data:{order}}=await axios.post("http://localhost:4000/api/checkout",{amount})
      //  console.log(data);
      // console.log(window);




    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Rahul Thapliyal", //your business name
      description: "Test Transaction",
      image: "https://media.licdn.com/dms/image/D5635AQF3WXWfR0b_AA/profile-framedphoto-shrink_200_200/0/1712943071618?e=1715958000&v=beta&t=6J4oQFgjsm4KYZM8B6faxb0ela9dqgBzxS2wFy0N9VU",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#3399cc"
      }
  };
  var razor = new window.Razorpay(options);
  razor.open();
      
  }
    
  return (
    <>
      <Box>
        <Stack height={"100vh"} alignItems={"center"} justifyContent={"center"}  direction={["column","row"]}>

         <Card amount={5000} img={"https://img.freepik.com/free-photo/laptop-with-colorful-screen-isolated-white-background-3d-illustration_1142-43290.jpg?t=st=1715340663~exp=1715344263~hmac=895b7792d7a2d4fdc3276b1958a5bb9bd8d47dd89e3c827a3cf6835abe4d9e15&w=740"} checkoutHandler={checkoutHandler} />
          <Card amount={8000} img={"https://img.freepik.com/free-photo/retro-camera_144627-12239.jpg?w=740&t=st=1715342159~exp=1715342759~hmac=544364c1885a625f1ff4dca956d87827d20b6ff5fda917ee80a2174da8f63046"} checkoutHandler={checkoutHandler} />
        </Stack>
      </Box>
    </>
  )
}

export default Home