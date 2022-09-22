import { Box, Divider, VStack } from "@chakra-ui/react";
import { Header } from "../../Components/Header";


import { Banner } from "./Banner";
import { Travel } from "./Travel";
import { ContainerSlide } from "./ContainerSlide";
import { MainSwiper } from "./Swiper";
import { api } from "../../services/configAxios";
import { useEffect, useState } from "react";
import { ContinentType } from "../../types";


const Home = () => {

    useEffect(() => {
        const recoverContinent = async () => {
            api.get('continent').then(response => {
                setContinent(response.data)
            })
        }
        recoverContinent()
    },[]);

    const [continent , setContinent] = useState<ContinentType[]>([])
   

    return(
        <VStack maxW='1440' w='100%' mx='auto'>
            <Header showBackPage={false} />
            <Banner />
            <Travel />
            <Box pt='1.75rem'>
                <Divider borderColor='black' w='10vw'/>
            </Box>
            <ContainerSlide />
            <MainSwiper allContinent={continent} />
        </VStack>
    )
}


export default Home;