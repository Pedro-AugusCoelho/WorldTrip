import { Box, HStack, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import '../../styles/SwiperConfig.css';

import Europe from '../../assets/Europe.png';

import { SwiperSlideItem } from "./SwiperSlide";

export const MainSwiper = () => {
    return(
        <HStack w={{base:'full' , md:'90%'}} py='1rem'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    dynamicBullets: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SwiperSlideItem img={Europe} title="Europa" subtitle="O Continente mais antigo" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <SwiperSlideItem img={Europe} title="America do norte" subtitle="O Continente mais antigo" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <SwiperSlideItem img={Europe} title="America do sul" subtitle="O Continente mais antigo" />
                </SwiperSlide>
               
            </Swiper>
        </HStack>
    )
}