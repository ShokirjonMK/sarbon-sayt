import { Swiper, SwiperSlide } from 'swiper/react';
import DirectionSliderCard from './Cards/directionSliderCard';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import { directions } from '@/datas/directions';

const DirectionSlider = () => {

    const divref = useRef<HTMLDivElement>(null)
    const {width} = useWindowSize()
    const [leftMargin, setleftMargin] = useState<number>(1)
    const swipperRef = useRef<any>(null);

    const data = [1,2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        if (divref.current) {
            setleftMargin((((width || 1 ) - divref.current.clientWidth) / 2) - 10)
        }
    }, [divref, width])


    return (
        <div className='bg-secondBg'>
            <div  className="xl:py-[120px] md:py-[90px] py-[64px]">
                <div ref={divref} className="container">
                    <h1 className='xl:text-[50px] md:text-[48px] text-[32px] font-semibold uppercase'>Ta'lim yo'nalishlari</h1>
                    <div className="flex justify-between">
                        <p className='mt-4 text-[rgba(51,51,51,0.8)] xl:text-xl text-lg md:w-2/3'>Bakalavriat bosqichida olgan bilim va ko‘nikmalaringiz sizni tanlagan sohangizda karyera qilish yoki ilmiy faoliyatni davom ettirish imkonini beradi.</p>
                        <div className='max-md:hidden flex items-end gap-4'>
                            <div onClick={() => swipperRef.current.swiper.slidePrev()} className='inline-block cursor-pointer rounded-full transition-all slider-next-prev-btn'>
                                <svg className='rotate-180 rounded-full' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#222433"/>
                                    <path d="M25.5 16.5L24.4275 17.5448L30.1125 23.25H15V24.75H30.1125L24.4275 30.4298L25.5 31.5L33 24L25.5 16.5Z" fill="#222433"/>
                                </svg>
                            </div>
                            <div onClick={() => swipperRef.current.swiper.slideNext()} className='inline-block cursor-pointer rounded-full transition-all slider-next-prev-btn'>
                                <svg className='rounded-full' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#222433"/>
                                    <path d="M25.5 16.5L24.4275 17.5448L30.1125 23.25H15V24.75H30.1125L24.4275 30.4298L25.5 31.5L33 24L25.5 16.5Z" fill="#222433"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden flex items-end gap-4 mt-[32px]'>
                            <div onClick={() => swipperRef.current.swiper.slidePrev()} className='inline-block cursor-pointer rounded-full transition-all slider-next-prev-btn'>
                                <svg className='rotate-180 rounded-full' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#222433"/>
                                    <path d="M25.5 16.5L24.4275 17.5448L30.1125 23.25H15V24.75H30.1125L24.4275 30.4298L25.5 31.5L33 24L25.5 16.5Z" fill="#222433"/>
                                </svg>
                            </div>
                            <div onClick={() => swipperRef.current.swiper.slideNext()} className='inline-block cursor-pointer rounded-full transition-all slider-next-prev-btn'>
                                <svg className='rounded-full' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#222433"/>
                                    <path d="M25.5 16.5L24.4275 17.5448L30.1125 23.25H15V24.75H30.1125L24.4275 30.4298L25.5 31.5L33 24L25.5 16.5Z" fill="#222433"/>
                                </svg>
                            </div>
                        </div>
                </div>
                <div className="md:mt-[72px] mt-[32px]" style={{marginLeft: leftMargin}}>
                    <Swiper
                        ref={swipperRef}
                        slidesPerView={width > 992 ? 3.5 : width > 576 ? 2.5 : 1.2}
                        spaceBetween={16}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {
                            directions.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <DirectionSliderCard item={item} className="bg-white" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default DirectionSlider;