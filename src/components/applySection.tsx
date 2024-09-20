import bg from '@/assets/images/apply-section-bg-pattern.png';
import Image from 'next/image';
import MainButton from './Buttons/mainBtn';
import { Fade } from 'react-awesome-reveal';

const ApplySection = () => {


    return (
        <div className='bg-primary relative text-white '>
            <div className='z-[1] relative'>
                <Fade delay={0} direction='up' className='z-[1]'>
                    <div className='container xl:py-[120px] md:py-[90px] py-[64px] text-center  relative'>
                        <h1  className='xl:text-[48px] md:text-[40px] text-[32px] font-medium'>Zamonaviy kelajak sizning qo‘lingizda!</h1>
                        <p className='mb-[48px] mt-3 xl:text-2xl md:text-xl text-lg font-normal'>Bizning talabamiz bo‘lish imkoniyatini boy bermang!</p>
                        <MainButton title='Ariza topshirish' className='mx-auto border-spacing-1 border-solid border-white border-[1px]' isArrow={true} onClick={() => window ? window.open('https://qabul.sarbonuniversity.uz', '_blank') : {}} />
                    </div>
                </Fade>
            </div>
            <Image className='absolute right-0 left-0 top-0 bottom-0 w-full h-full object-cover z-0' src={bg} alt='bg' />
        </div>
    )
}
export default ApplySection;