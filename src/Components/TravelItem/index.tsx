import { Box, Icon, IconProps, Image, Text, VStack } from "@chakra-ui/react";
import { ElementType } from "react";
import { Link as RouterLink } from 'react-router-dom';

interface TravelItemProps{
    title:string;
    href:string;
    image:ElementType;
} 

export const TravelItem = ({image, href, title}:TravelItemProps) => {
    return(
        <Box
        as={RouterLink}
        to={href}
        cursor='pointer'
        >
            <VStack 
            color='#FFBA08'
            transition='color ease .5s'
            _hover={{
                color:'green.500'
            }}
            >
                <Icon 
                    as={image} 
                    boxSize={100} 
                />
                
                <Text
                    fontSize='xl'
                    fontWeight='semibold'
                    color='#47585B'
                >
                    {title}
                </Text>
            
            </VStack>
        </Box>
    )
}