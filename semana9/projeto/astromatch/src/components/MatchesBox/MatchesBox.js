import React from 'react';
import { Box, Image, Stack, ChakraProvider, Button, IconButton, Text } from "@chakra-ui/react";
import { BiHeartCircle } from "react-icons/bi";
import styled from 'styled-components';

const DivLimpar = styled.div`
    position:fixed;
    top: 95%;
    left: 90%;
`
const DivCard = styled.div`
    position:fixed;
    top: 15%;
    left: 36%;
    background-color: white;
`


function MatchesBox(props) {
  
    return (
      <ChakraProvider>  
      <DivCard>
      <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
      <Box bg="white" w="100%" p={4} color="white" d='grid' gridTemplateColumns='4fr 1fr' alignItems='center'>
                                    <Box justifyItems='center'>
                                        <Text fontFamily='Roboto,sans-serif' color='purple' fontSize='20px' >AstroMatches</Text>
                                    </Box>

                                    <Box justifyItems='start'>
                                        <IconButton colorScheme="red" onClick={props.buttonPage} icon={<BiHeartCircle/>}/>
                                    </Box>
                                </Box>
        {props.matches.map((match)=>{
                        return (
                            <div> 
                                <Box bg="white" w="100%" p={4}  d='grid' gridTemplateColumns='1fr 3fr' alignItems='center'>
                                    <Image borderRadius="full" boxSize="50px" alt={match.name} src={match.photo}/>
                                    <Text fontFamily='Roboto,sans-serif' color='purple' fontSize='15px'>{match.name}</Text>    
                                </Box>
                            </div>
                        )
                    })}
      </Box>
      </DivCard>
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

  export default MatchesBox