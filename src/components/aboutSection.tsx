import UniversityImage from '../assets/images/about-section.jpg'
import Image from "next/image"
import MainButton from './Buttons/mainBtn';
// @ts-ignore
import { initAnimaCounter } from 'anima-counters'
import { useEffect } from 'react';

const AboutSection = () => {

    useEffect(() => {
        let options = {
            start: 0,
            duration: 100,
            style: 'fr-FR',
        }
        initAnimaCounter(options)        
    }, [])


    return (
        <div>
            <div className="bg-white container mx-auto xl:pb-[120px] md:pb-[90px] pb-[64px] xl:pt-[70px] md:pt-[50px] pt-[34px]">
                <span className='text-secondPrimary md:text-xl text-lg mb-4 uppercase font-bold'>SARBON UNIVERSITETI</span>
                <h1 className='xl:text-[42px] md:text-[36px] text-[24px] leading-[1.2] font-bold xl:mb-[72px] md:mb-[52px] mb-[32px]'>Oʻzbekiston Respublikasi Vazirlar Mahkamasining tegishli qarori bilan tashkil etilgan hamda Oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan berilgan litsenziyaga ega Sarbon Universiteti.</h1>
                <div className="grid grid-cols-12 xl:gap-8 gap-6 z-[1]">
                    <div 
                        className="md:col-span-7 col-span-12"
                    >
                        <Image className="w-full object-cover h-full rounded-lg" src={UniversityImage} alt="University image" />
                    </div>
                    <div 
                        className="md:col-span-5 col-span-12 h-full"
                    >
                        <div className='bg-primary rounded-lg xl:p-8 md:p-6 p-5 text-white h-full'>
                            <h3 className='uppercase xl:text-[32px] md:text-[28px] text-[24px]'>universitet haqida</h3>
                            <p className='opacity-80 mt-6 xl:mb-10 md:mb-8 mb-6 text-xl'>"Sarbon Universiteti" barcha oliy ta`lim imtihonlaridan o`ta olmagan abituriyentlarga so`nggi imkoniyat eshigini ochadi!</p>
                            <div className="grid grid-cols-2 xl:mb-10 md:mb-8 mb-6">
                                <div>
                                    <div className='xl:mb-7 mb-8'>
                                        <h4 className='text-[28px] anima-counter font-bold'>15</h4>
                                        <p className='opacity-80 uppercase font-semibold'>Professorlar</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[28px] anima-counter font-bold'>20</h4>
                                        <p className='opacity-80 uppercase font-semibold'>Yo'nalishlar</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='xl:mb-7 mb-8'>
                                        <h4 className='text-[28px] anima-counter font-bold'>20</h4>
                                        <p className='opacity-80 uppercase font-semibold'>Dotsentlar</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[28px] anima-counter font-bold'>50</h4>
                                        <p className='opacity-80 uppercase font-semibold'>O'qituvchilar</p>
                                    </div>
                                </div>
                            </div>
                            <MainButton title='Batafsil' isArrow={true} className='border-spacing-1 border-solid border-white border-[1px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection;