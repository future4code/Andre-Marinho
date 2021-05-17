import React from 'react';
import { Box, Badge, Image, Stack, ChakraProvider, Button, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';
import { BsHeart } from "react-icons/bs";
import { BiBookHeart } from "react-icons/bi";
import styled from 'styled-components';

const DivLimpar = styled.div`
    position:fixed;
    top: 95%;
    left: 90%;
`

function ImageBox(props) {
    const property = {
      imageUrl: props.image,
      imageAlt: "Image of "+props.name,
    }
  
    return (
      <ChakraProvider>  
      <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
        <Box bg="white" w="100%" p={4} color="white" d='grid' gridTemplateColumns='4fr 1fr' alignItems='center'>
            <Box justifyItems='center'>
               <Text fontFamily='Roboto,sans-serif' color='purple' fontSize='30px' >AstroMatch</Text>
            </Box>

            <Box justifyItems='start'>
                <IconButton colorScheme="purple" onClick={props.buttonPage} icon={<BiBookHeart/>}/>
            </Box>
        </Box>         
        <Image src={property.imageUrl} alt={property.imageAlt} w='400px' h='400px'/>
  
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
                {props.name}, {props.age}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.age} 
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            // isTruncated
          >
              
            {props.bio}
            <p>&nbsp;</p>
          </Box>
  
          <Box>
            <IconButton colorScheme="red" onClick={props.getProfileToChoose} icon={<CloseIcon/>}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <IconButton colorScheme="whatsapp" onClick={props.choosePerson} icon={<BsHeart/>}/>
          </Box>
  
        </Box>
      </Box>
      <DivLimpar>
        <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="teal" size="xs" onClick={props.clear}>
                Limpar Matches
            </Button>
        </Stack>
      </DivLimpar>
      </ChakraProvider>
    )
  }

  export default ImageBox