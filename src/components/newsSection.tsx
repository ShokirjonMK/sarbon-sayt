import { news } from '@/datas/news';
import MainButton from './Buttons/mainBtn';
import NewsCard from './Cards/NewsCard';

const NewsSection = () => {

    return (
        <div className='bg-secondBg relative'>
            <div  className="xl:py-[120px] md:py-[90px] py-[64px]">
                <div className="container z-[1] relative">
                    <div className="flex justify-between items-center">
                        <h1 className='xl:text-[50px] md:text-[48px] text-[32px] font-semibold uppercase'>Yangiliklar</h1>
                        <MainButton title='Barchasi' isArrow={true} type='main' className='max-md:hidden' />
                    </div>
                    <div className="md:mt-[72px] mt-[32px]" >
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            {
                                news.map((item, index) => index < 3 ? (
                                    <NewsCard item={item} key={index} className="bg-white" />
                                ) : "")
                            }
                        </div>
                        <MainButton title='Barchasi' isArrow={true} type='main' className='md:hidden mt-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsSection;