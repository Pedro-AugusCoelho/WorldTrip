import { Grid } from "@chakra-ui/react";
import { TravelItem } from "../../Components/TravelItem";

//Images
import  { DrinkIcon } from '../../assets/Drink';
import  { BeachIcon } from '../../assets/Beach';
import  { BuildingIcon } from '../../assets/Building';
import  { EarthIcon } from '../../assets/Earth';
import  { MuseumIcon } from '../../assets/Museum';


export const Travel = () => {
    return(
        
        <Grid 
            templateColumns={
                {base:'repeat(1, 1fr)',
                 sm:'repeat(2, 1fr)',
                 md:'repeat(3, 1fr)',
                 lg:'repeat(5,1fr)',
            }} 
            gap={20}
        >
            <TravelItem title="Vida Noturna" image={DrinkIcon} href='/travel/nightlife' />
            <TravelItem title="Praia" image={BeachIcon} href='/travel/beach' />
            <TravelItem title="Moderno" image={BuildingIcon} href='/travel/Building' />
            <TravelItem title="Clássico" image={MuseumIcon} href='/travel/Museum' />
            <TravelItem title="e mais..." image={EarthIcon} href='/travel/Earth' />
        </Grid>

    )
}