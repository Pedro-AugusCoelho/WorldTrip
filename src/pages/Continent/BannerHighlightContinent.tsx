import { Box, HStack, Text } from "@chakra-ui/react";

interface BannerHighlightContinentProps {
    img: string;
    title: string;
}

const BannerHighlightContinent = ({img, title}:BannerHighlightContinentProps) => {
    return(
        <HStack
            flex={''}
            justifyContent = {{ base: 'center', md: 'start' }}
            alignItems = {{ base: 'center', md: 'flex-end' }}
            backgroundImage = {img} 
            bgSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
            w='100%'
            h={'500px'}
        >
            <Box
                ml={{ base: '0%', md: '10%' }}
                mb={{ base: '0%', md: '5%' }}
            >
                <Text fontSize='5xl' color={'white'} fontWeight={'semibold'}>{title}</Text>
            </Box>
        </HStack>
    )
}

export default BannerHighlightContinent