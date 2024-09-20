import React, { useRef, useState } from "react"
import useWindowSize from "@/hooks/useWindowSize"
import MainButton from "./Buttons/mainBtn"
import { Fade } from "react-awesome-reveal"
import { useTranslations } from "next-intl"
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.jpg'
import img3 from '@/assets/images/img3.jpg'
import img4 from '@/assets/images/img4.jpg'

import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import Image from "next/image"

const slidesData = [
    {
      title: "SARBON UNIVERSITETI",
      description: "Birinchi slayd matni",
      img: img1
    },
    {
      title: "Yangi Universitet",
      description: "Ikkinchi slayd matni",
      img: img2
    },
    {
      title: "Kelajak Ta'limi",
      description: "To'rtinchi slayd matni",
      img: img3
    },
    {
        title: "Kelajak Ta'limi",
        description: "To'rtinchi slayd matni",
        img: img4
      }
];

const MainSectionV1 = () => {

    const t = useTranslations();
    const [currentText, setCurrentText] = useState({
        title: "SARBON UNIVERSITETI",
        description: "Birinchi slayd matni"
    });
    
    const progressCircle = useRef<any>(null);
    const progressContent = useRef<any>(null);

    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if(progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        const slide = slidesData[currentIndex];
        setCurrentText({
          title: slide?.title,
          description: slide?.description
        });
      };
    


    return ( 
            <>
                <div className="text-white">
                    <div className="grid grid-cols-2 h-[calc(100vh-228px)]">
                        <div className="h-full  bg-main-img bg-no-repeat">
                            <div className="h-full bg-primary/80 w-full flex items-center px-10">
                                <div>
                                    <Fade delay={0} direction='up' damping={100}>
                                        <p className="lg:text-[56px] md:text-[46px] text-[32px] leading-[1.1] font-[600]">{currentText?.title}</p>
                                        <p className="md:text-xl text-lg font-[400] md:mt-3 mt-2">{currentText?.description}{t("MainSection.title")}</p>
                                        <MainButton title={t("global.submit-application")} type={"light"} isArrow={true} className="w-max max-md:mx-auto mt-8 mb-10" />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="h-full">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                navigation={true}
                                loop={true}
                                autoplay={{
                                    delay: 10000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                onSlideChange={handleSlideChange}
                                onAutoplayTimeLeft={onAutoplayTimeLeft}
                                modules={[EffectFade, Autoplay]}
                                className="h-full w-full"
                            >
                                {
                                    slidesData?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Image alt={item?.title} className="h-full w-full object-cover" src={item?.img} />
                                        </SwiperSlide>
                                    ))
                                }
                                {/* <SwiperSlide>
                                    <img className="h-full w-full object-cover" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="h-full w-full object-cover" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="h-full w-full object-cover" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide> */}
                                <div className="autoplay-progress text-primary" slot="container-end">
                                    <svg className="stroke-primary" viewBox="0 0 48 48" ref={progressCircle}>
                                        <circle cx="24" cy="24" r="20"></circle>
                                    </svg>
                                    <span ref={progressContent}></span>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </>
    )
}
export default MainSectionV1