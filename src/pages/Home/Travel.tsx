import { VStack } from "@chakra-ui/react";
import { TravelItem } from "../../Components/TravelItem";

//Images
import  { DrinkIcon } from '../../assets/Drink';


export const Travel = () => {
    return(
        <VStack
            justifyContent='center'
            px='2rem'
        >
            <TravelItem title="Vida Noturna" image={DrinkIcon} href='/travel/nightlife' />
        
        </VStack>
    )
}