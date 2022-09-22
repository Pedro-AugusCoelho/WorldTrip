import { Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import '../../styles/SwiperConfig.css';


interface SwiperSlideItem {
    idContinent: number;
    title: string;
    subtitle: string;
    img: string;
}

export const SwiperSlideItem = ({title, subtitle, img, idContinent}:SwiperSlideItem) => {
    return(
        <Link to={`/continent/${idContinent}`}>
            <VStack 
                backgroundImage={img} 
                backgroundPosition="center" 
                backgroundRepeat="no-repeat" 
                bgSize='cover'
                w='full'  
                justifyContent='center' 
                alignItems='center' 
                h='450px' 
            >
                <Heading color='#FFF'>{title}</Heading>
                <Text  color='#FFF'>{subtitle}</Text>    
            </VStack>
        </Link>
    )
}