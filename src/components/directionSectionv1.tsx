import { directionsV1 } from '@/datas/directions';
import { MainTitle } from './mainTitle';
import DirectionSliderCardv1 from './Cards/directionSliderCardv1';

const DirectionSectionv1 = () => {

    return (
        <div className='bg-secondBg'>
            <div  className="xl:py-[120px] md:py-[90px] py-[64px]">
                <div className="container">
                    <MainTitle className='lg:mb-[40px] mb-[30px]'>Ta'lim yo'nalishlari</MainTitle>
                    <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {
                            directionsV1.map((item, index) => (
                                <DirectionSliderCardv1 key={index} item={item} className="bg-white" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DirectionSectionv1;