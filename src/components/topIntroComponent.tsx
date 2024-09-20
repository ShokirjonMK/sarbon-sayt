import bg from '@/assets/images/apply-section-bg-pattern.png';
import Image from 'next/image';

const TopIntroComponent = ({title, text}: {title: string, text: any}) => {

    return (
        <div className='bg-primary relative text-white '>
            <div className='container xl:py-[64px] md:py-[55px] py-[48px] relative z-[1]'>
                <h1 className='xl:text-[48px] md:text-[40px] text-[32px] font-medium uppercase leading-[1.1]'>{title}</h1>
                <p className='mt-4 md:text-xl text-lg font-normal text-[rgba(255,255,255,0.8)]'>{text}</p>
            </div>
            <Image className='absolute right-0 left-0 top-0 bottom-0 w-full h-full object-cover' src={bg} alt='bg' />
        </div>
    )
}
export default TopIntroComponent;