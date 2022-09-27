import { Box, Text, Stack, VStack, HStack } from "@chakra-ui/react";
import { CountyType } from "../../types";
import CardCountry from "./CardCountry";

interface InfoCityTravelProps {
    countrys: CountyType[]
}

const InfoCityTravel = ({countrys}:InfoCityTravelProps) => {
    console.log(countrys)
    return(
        <Stack py={'30px'} w={'90%'}>
            <Box mb={'30px'} pl={'1%'}>
                <Text fontSize='2xl' textColor={'#47585B'} fontWeight='semibold'>Cidades +100 </Text>
            </Box>
            <Box
                display={'flex'}
                flexWrap={'wrap'}
                flexDirection={'row'}
                justifyContent={'start'}
            >
                {
                countrys.map((item, k) => (
                    <CardCountry imgBanner={item.imgcountry} logo={item.logo} country={item.countryname} city={item.cityname} key={k} />
                ))
                }
            </Box>
        </Stack>
    )
}

export default InfoCityTravel