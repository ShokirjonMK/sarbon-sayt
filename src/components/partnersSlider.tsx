import { Swiper, SwiperSlide } from 'swiper/react';
import part1 from '@/assets/images/partners/part-2.svg'
import part2 from '@/assets/images/partners/part-5.svg'
import part3 from '@/assets/images/partners/part-6.svg'
import part4 from '@/assets/images/partners/part-8.svg'
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';
import { Autoplay } from 'swiper/modules';
import { MainTitle } from './mainTitle';

const PartnersSlider = () => {

    const {width} = useWindowSize()


    const data = [
        {
            id: 1,
            image: part1,
            alt: "Oson"
        },
        {
            id: 2,
            image: part2,
            alt: "Univer"
        },
        {
            id: 3,
            image: part3,
            alt: "Uzcard"
        },
        {
            id: 4,
            image: part4,
            alt: "Payme"
        },
        {
            id: 1,
            image: part1,
            alt: "Oson"
        },
        {
            id: 2,
            image: part2,
            alt: "Univer"
        },
        {
            id: 3,
            image: part3,
            alt: "Uzcard"
        },
        {
            id: 1,
            image: part4,
            alt: "Payme"
        },
        {
            id: 1,
            image: part1,
            alt: "Oson"
        },
        {
            id: 2,
            image: part2,
            alt: "Univer"
        },
        {
            id: 3,
            image: part3,
            alt: "Uzcard"
        },
        {
            id: 1,
            image: part4,
            alt: "Payme"
        },
        {
            id: 1,
            image: part1,
            alt: "Oson"
        },
        {
            id: 2,
            image: part2,
            alt: "Univer"
        },
        {
            id: 3,
            image: part3,
            alt: "Uzcard"
        },
        {
            id: 1,
            image: part4,
            alt: "Payme"
        },
        {
            id: 1,
            image: part1,
            alt: "Oson"
        },
        {
            id: 2,
            image: part2,
            alt: "Univer"
        },
        {
            id: 3,
            image: part3,
            alt: "Uzcard"
        },
        {
            id: 1,
            image: part4,
            alt: "Payme"
        },
    ];

    return (
        <div className='bg-white xl:py-[120px] md:py-[90px] py-[64px]'>
            <div className="container mx-auto ">
                <MainTitle className='xl:mb-[72px] md:mb-[52px] mb-[32px]'>Hamkorlarimiz</MainTitle>
            </div>

            <div className="overflow-hidden w-full scrolling-text-wrapper">    
                <div className="scrolling-text flex w-max overflow-hidden whitespace-nowrap xl:gap-[150px] md:gap-[100px] gap-[50px] partners-duration">
                    {data.map((item, index) => (
                        <Image key={index} className='mx-auto' src={item.image} alt={item.alt} />
                    ))}
                </div>
            </div>
            {/* <div className="">
                <Swiper
                    slidesPerView={width > 992 ? 6 : width > 576 ? 4 : 3}
                    spaceBetween={width > 992 ? 57 : width > 576 ? 20 : 8}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    modules={[Autoplay]}
                >
                    {
                        data?.map((item, index) => (
                            <SwiperSlide key={index} className='text-center'>
                                <Image className='mx-auto' src={item.image} alt={item.alt} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div> */}
        </div>
    )
}
export default PartnersSlider;