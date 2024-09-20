import Image from 'next/image';
import bgimage from '@/assets/images/contact-bg-pattern.png';
import ContactForm from './Forms/contactForm';

const ContactUsSection = () => {

    return (
        <div className='bg-white relative'>
            <Image className='absolute bottom-0 right-0 z-[0] max-md:hidden' src={bgimage} alt='bg' />
            <div  className="xl:py-[120px] md:py-[90px] py-[64px]">
                <div className="container z-[1] relative">
                    <h1 className='xl:text-[50px] md:text-[48px] text-[32px] font-semibold uppercase'>Biz bilan bog‘lanish</h1>
                    <p className='mt-4 text-[rgba(51,51,51,0.8)] xl:text-xl text-lg md:w-2/3'>Bizning talabamiz bo‘lish imkoniyatini boy bermang!</p>
                    <div className="md:mt-[72px] mt-[32px]" >
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUsSection;