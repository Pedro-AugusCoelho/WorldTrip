import { HStack, Box, VStack, Text, Stack } from "@chakra-ui/react";
import InfoLeftItem from "./InfoLeftItem";

interface infoContinentProps {
    info: { countcountries: string; countlanguage: string; countcity: string }
    text: string
}

const InfoContinent = ({ info, text }:infoContinentProps) => {
    return(
        <Stack
            flexDirection={{base:'column', md:'row'}}
            w={'90%'}
        >
            <Box 
                w={{base:'100%', md:'50%'}} 
                p={'10'} 
                textColor={'#47585B'} 
                fontSize={'18px'} 
                fontWeight={'medium'} 
                textAlign={'justify'}
            >
                {text}
            </Box>
            <HStack 
                w={{base:'100%', md:'50%'}} 
                justifyContent={'center'}
                alignItems={'center'}
                spacing={'3rem'}
            >
                <InfoLeftItem title="Países" count={info.countcountries}  />
                <InfoLeftItem title="Línguas" count={info.countlanguage}  />
                <InfoLeftItem title="Cidades" count={info.countcity}  />
            </HStack>

        </Stack>
    )
}

export default InfoContinent