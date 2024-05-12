import React from 'react'
import { Button, VStack ,Image , Text} from '@chakra-ui/react'
const Card = ({img,amount,checkoutHandler}) => {
  return (
    <>
     <VStack>
        <Image objectFit={"cover"}  boxSize={"64"}src={img}>
            
        </Image>
        <Text>
        {amount}
        </Text>
        <Button onClick={()=>checkoutHandler(amount)}>
            Click
        </Button>
     </VStack>
    </>

  )
}

export default Card