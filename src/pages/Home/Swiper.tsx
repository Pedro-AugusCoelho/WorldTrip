import { HStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/SwiperConfig.css';

import Europe from '../../assets/Europe.png';

import { SwiperSlideItem } from "./SwiperSlide";
import { ContinentType } from "../../types";

interface MainSwiperProps {
    allContinent: ContinentType[]
}

export const MainSwiper = ({ allContinent }:MainSwiperProps) => {
    return(
        <HStack w={{base:'80%' , md:'70%'}} py='1rem'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {allContinent.map((item, key) => (
                    <SwiperSlide key={key}>
                        <SwiperSlideItem img={item.image} title={item.title} subtitle={item.subtitle} idContinent={item.id} />
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </HStack>
    )
}