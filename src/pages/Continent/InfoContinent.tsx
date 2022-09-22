import { HStack, Box, VStack, Text, Stack } from "@chakra-ui/react";

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
                <VStack
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontWeight={'semibold'} fontSize={'2xl'} textColor={'#FFBA08'}>{info.countcountries}</Text>
                    <Text fontWeight={'semibold'} fontSize={'2xl'} mt={'0px !important' } textColor={'#47585B'}>Países</Text>
                </VStack>

                <VStack
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontWeight={'semibold'} fontSize={'2xl'} textColor={'#FFBA08'}>{info.countlanguage}</Text>
                    <Text fontWeight={'semibold'} fontSize={'2xl'} mt={'0px !important' } textColor={'#47585B'}>Línguas</Text>
                </VStack>

                <VStack
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontWeight={'semibold'} fontSize={'2xl'} textColor={'#FFBA08'}>{info.countcity}</Text>
                    <Text fontWeight={'semibold'} fontSize={'2xl'} mt={'0px !important' } textColor={'#47585B'}>Cidades</Text>
                </VStack>
            </HStack>

        </Stack>
    )
}

export default InfoContinent