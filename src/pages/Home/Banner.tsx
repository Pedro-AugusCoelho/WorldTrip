import { Box, HStack, Text, Heading, VStack, Image  } from "@chakra-ui/react";
import BannerSvg from '../../assets/Banner.svg';
import AirPlaneSvg from '../../assets/Airplane.svg';

export const Banner = () => {
    return(
        <HStack
            backgroundImage={BannerSvg}
            w='full'
            h='full'
            mx='auto'
            justifyContent='space-around'
            px='2rem'
            bgRepeat='no-repeat'
        >
            <VStack 
            spacing='1.25rem' 
            py='5rem'
            maxW={{base:'full', lg:'450px'}}
            textAlign={{base:'center', lg:'left'}}
            >
                <Heading 
                fontSize='4xl'
                fontWeight='bold' 
                color='gray.50' 
                w='full'
                >
                    5 Continentes, <br/>
                    infinitas possibilidades.
                </Heading>
                
                <Text 
                    color='gray.400' 
                    fontSize='lg'
                    fontWeight='regular'
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            
            </VStack>
            
            <VStack 
            display={{base:'none', lg:'block'}}
            >
                <Image src={AirPlaneSvg} alt='airplane' pt='20'/>
            </VStack>
        
        </HStack>
    )
}