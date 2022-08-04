import { Heading, Text, VStack } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import '../../styles/SwiperConfig.css';


interface SwiperSlideItem {
    title:string;
    subtitle:string;
    img:string;
}

export const SwiperSlideItem = ({title,subtitle,img}:SwiperSlideItem) => {
    return(
            <VStack  backgroundImage={img} w='full'  justifyContent='center' alignItems='center' h='450px'>
                <Heading color='#FFF'>{title}</Heading>
                <Text  color='#FFF'>{subtitle}</Text>    
            </VStack>
    )
}