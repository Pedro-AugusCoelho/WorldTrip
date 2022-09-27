import { Box, Divider, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { api } from "../../services/configAxios";
import { ContinentType } from "../../types";
import BannerHighlightContinent from "./BannerHighlightContinent";
import InfoCityTravel from "./InfoCityTravel";
import InfoContinent from "./InfoContinent";


const Continent = () => {
    const { id } = useParams()
    const [continent , setContinent] = useState<ContinentType>(ContinentType)

    useEffect(() => {
        const recoverContinentSelected = () => {
            api.get(`continent/${id}`).then(response => {
                if(response.data){
                    setContinent(response.data)
                }
            })
        }
        recoverContinentSelected()
    },[]);

    return(
        <VStack maxW='1440' w='100%' mx='auto'>
            <Header showBackPage={true} />
            <BannerHighlightContinent img={continent.image} title={continent.title} />
            <InfoContinent info={continent.infocontinent} text={continent.text}/>
            <InfoCityTravel countrys={continent.citys} />
        </VStack>
    )
}

export default Continent;