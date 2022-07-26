import { VStack } from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { Banner } from "./Banner";
import { Travel } from "./Travel";


const Home = () => {
    return(
        <VStack maxW='1440' w='100%' mx='auto'>
            <Header />
            <Banner />
            <Travel />
        </VStack>
    )
}


export default Home;