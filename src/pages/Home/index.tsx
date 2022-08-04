import { Box, Divider, VStack } from "@chakra-ui/react";
import { Header } from "../../Components/Header";


import { Banner } from "./Banner";
import { Travel } from "./Travel";
import { ContainerSlide } from "./ContainerSlide";
import { MainSwiper } from "./Swiper";


const Home = () => {
    return(
        <VStack maxW='1440' w='100%' mx='auto'>
            <Header />
            <Banner />
            <Travel />
            <Box pt='1.75rem'>
                <Divider borderColor='black' w='10vw'/>
            </Box>
            <ContainerSlide />
            <MainSwiper />
        </VStack>
    )
}


export default Home;