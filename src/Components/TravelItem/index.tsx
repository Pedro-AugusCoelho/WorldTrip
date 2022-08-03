import { Icon, Text, Stack, Circle, GridItem  } from "@chakra-ui/react";
import { ElementType } from "react";
import { Link as RouterLink } from 'react-router-dom';

interface TravelItemProps{
    title:string;
    href:string;
    image:ElementType;
} 

export const TravelItem = ({image, href, title}:TravelItemProps) => {
    return(
        <GridItem
        as={RouterLink}
        to={href}
        cursor='pointer'
        w='full'
        >
            <Stack 
            direction={{base:'row',md:'column'}}
            color='#FFBA08'
            transition='color ease .5s'
            _hover={{
                color:'green.500'
            }}
            alignItems='center'
            >
                <Icon 
                    as={image} 
                    boxSize={100} 
                    display={{base:'none' , md:'flex'}}
                />

                <Circle 
                    display={{base:'flex' , md:'none'}}
                    size='10px' 
                    bg='#FFBA08' 
                />
                
                <Text
                    textAlign='left'
                    fontSize='xl'
                    fontWeight='semibold'
                    color='#47585B'
                >
                    {title}
                </Text>
            
            </Stack>
        </GridItem>
    )
}