import React, { useRef, useState } from "react"
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

const slidesData: Array<{title: string, description: string, img: any}> = [
    {
      title: "Kelajakni bugundan qur!",
      description: "Sarbon Universitetida bilim sari qadam qo'ying.",
      img: img1
    },
    {
      title: "Innovatsiya va muvaffaqiyat sari birgalikda!",
      description: "Yangi avlod yetakchilari uchun bilim manbai.",
      img: img2
    },
    {
      title: "Sizning orzularingizning manzili!",
      description: "Sarbon Universiteti: Karyerangizni shu yerda boshlang.",
      img: img3
    },
    {
        title: "Global bilim, milliy qadriyatlar!",
        description: "Zamonaviy ta'lim, an'anaviy qadriyatlar bilan uyg'unlikda.",
        img: img4
      }
];

const MainSectionV1 = () => {

    const t = useTranslations();
    const [currentText, setCurrentText] = useState<{title: string, description: string}>({title: slidesData[0]?.title, description: slidesData[0]?.description});
    
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
          description: slide?.description,
        });
      };
    


    return ( 
            <>
                <div className="text-white">
                    <div className="grid max-lg:grid-cols-1 grid-cols-2 h-[calc(100vh-256px)]">
                        <div className="h-full bg-main-img bg-no-repeat">
                            <div className="h-full bg-primary/80 w-full flex items-center sm:px-24 px-6 max-sm:text-center">
                                <div>
                                    <Fade delay={0} direction='up' damping={100}>
                                        <p className="lg:text-[56px] md:text-[46px] text-[32px] leading-[1.1] font-[600]">{currentText?.title}</p>
                                        <p className="md:text-xl text-lg font-[400] md:mt-3 mt-2">{currentText?.description}</p>
                                        <MainButton title={t("global.submit-application")} type={"light"} isArrow={true} className="w-max max-sm:mx-auto mt-8 mb-10" />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="h-full max-lg:hidden">
                            <Swiper
                                slidesPerView={1}
                                navigation={true}
                                effect={'fade'}
                                loop={true}
                                autoplay={{
                                    delay: 10000,
                                    disableOnInteraction: false,
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