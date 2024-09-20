import { Swiper, SwiperSlide } from 'swiper/react';
import DirectionSliderCard from './Cards/directionSliderCard';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import { faculties } from '@/datas/faculties';
// import { directions } from '@/datas/directions';

const Faculties = () => {

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
                    <p className='mt-4 text-[rgba(51,51,51,0.8)] xl:text-xl text-lg md:w-2/3'>Bakalavriat bosqichida olgan bilim va ko‘nikmalaringiz sizni tanlagan sohangizda karyera qilish yoki ilmiy faoliyatni davom ettirish imkonini beradi.</p>
                </div>
                <div className="md:mt-[72px] mt-[32px]" style={{marginLeft: leftMargin}}>
                    {
                        faculties.map((item, index) => (
                            <DirectionSliderCard key={index} item={item} className="bg-white" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Faculties;