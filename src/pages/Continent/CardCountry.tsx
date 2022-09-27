import { Box, HStack, Img, Text, VStack } from "@chakra-ui/react"

interface CardCountryProps {
    imgBanner: string
    logo: string
    country: string
    city: string
}

const CardCountry = ({city, country, imgBanner, logo}:CardCountryProps) => {
    return (
            <VStack alignItems='start' margin={'1.1%'}>
                <VStack w={'270px'} maxW={'270px'} border={'1px'} borderColor={'#FFBA08'} borderRadius={'2%'}>
                    <Img src={imgBanner} w={'100%'} h={'170px'} borderTopRadius={'2%'} />
                    <HStack w={'100%'} justifyContent='space-between' alignItems='center' px={'7%'} py={'5%'} pb={'15%'}>
                        <Box>
                            <Text mb={'5%'} fontWeight={'semibold'} fontSize='2xl' color={'#47585B'}>{country}</Text>
                            <Text color={'#999999'} fontWeight={'medium'} fontSize='xl'>{city}</Text>
                        </Box>
                        <Img src={logo} w={'30px'} h={'30px'} borderRadius={'50%'} />
                    </HStack>
                </VStack>
            </VStack>
    )
}

export default CardCountry