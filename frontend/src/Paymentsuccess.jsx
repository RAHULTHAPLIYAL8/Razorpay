import React from 'react'
import { Box, VStack , Text, Heading} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

const Paymentsuccess = () => {
    const searchQuery=useSearchParams()[0];
    const referencenumber=searchQuery.get("reference");
  return (
    <Box>
    <VStack h="100vh" justifyContent={"center"}>
    <Heading textTransform={"uppercase"}>Order Successful</Heading>
    <Text>Reference NO. {referencenumber}</Text>
    </VStack>
    </Box>
   
  )
}

export default Paymentsuccess