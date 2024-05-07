import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack
          justifyContent="space-between"
          alignItems="center"
    >   
        <VStack margin={0} spacing={5} alignItems="left" backgroundColor="white" color="black" borderRadius="10" > 
            <VStack spacing={5} alignItems="center">
              <Image src={imageSrc} alt={title} borderRadius="10" />
              <VStack spacing={5} alignItems="left">
              <Box marginLeft={5} marginRight={5} marginBottom={5}>
                <Heading as="h1" size="l">
                  {title}
                </Heading>
                <Text marginTop={5} marginBottom={5} color={"grey"}>{description}</Text>

                <HStack spacing={2}>
                  <Text>See more</Text>
                  <FontAwesomeIcon icon={faArrowRight} />
                </HStack>
                </Box>
              </VStack>
              
            </VStack>

            
            
        </VStack>
      
      
    </HStack>
  );
};

export default Card;
