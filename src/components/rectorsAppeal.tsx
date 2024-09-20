import Rector from '../assets/images/rector__.jpg'
import Pattern1 from '../assets/images/pattern1.png'
import Quota from '../assets/images/fa_quote-left.png'
import Image from "next/image"
import MainButton from './Buttons/mainBtn'

const ReactorsAppeal = () => {

    return (
        <div>
            <div className='relative'>
                <div className="bg-white container mx-auto xl:py-[120px] md:py-[90px] py-[64px]">
                    <Image className="absolute bottom-0 right-0 xxl:w-[40%]" src={Pattern1} alt="Pattern bg" />
                    <div className="grid grid-cols-12 gap-8 z-[1] relative">
                        <div className="md:hidden col-span-12">
                            <Image className="w-full rounded-xl" src={Rector} alt="Rector of Sarbon university" />
                        </div>
                        <Image className="absolute top-2 left-[-45px] max-md:hidden" src={Quota} alt="Quota" />
                        <div className="md:col-span-7 col-span-12 relative">
                            <Image className="absolute top-2 left-[0] md:hidden w-[120px]" src={Quota} alt="Quota" />
                            <h1 className='xl:text-[48px] md:text-[40px] text-[32px] xl:mt-8 mt-6'>REKTOR MUROJAATI</h1>
                            <p className='xl:mt-6 md:mt-4 mt-6 text-[#333] xl:text-xl text-lg'>Hurmatli talabalar! <br /><br /> Siz O‘zbekiston va Yevropa davlatlari ta’lim standartlari  talablariga javob beradigan zamonaviy, innovatsion va yuqori sifatli taʼlim olish uchun eng yaxshi sharoitlar yaratilgan universitetimizga o‘qishga kirib, to‘g‘ri tanlov qildingiz! Endi tanlagan yo‘nalishingiz va kelajakdagi kasbingizni muvaffaqiyatli egallash istiqboli sizning qobiliyatingiz, matonatingiz va mehnatingizga bog‘liq, chunki Yangi O‘zbekistonga eng yuqori xalqaro standartlar asosida tayyorlangan mutaxassislar kerak. Sizlar, bo‘lajak iqtisodchilar, muhandis-dasturchilar hamda mahoratli pedagoglar, mamlakatimizning Uchinchi Renessans davrining ijodkorlariga aylanishingizga chin dildan umid qilaman!</p>
                            <div className='lx:my-[48px] my-[32px]'>
                                <h2 className='xl:text-2xl text-xl text-[#333] mb-[4px]'>Asqaraliyev Odilbek Ulug'bek o'g'li</h2>
                                <p className='text-primary text-base'>Universitet rektori v.b., t.f.f.d.(PhD), dotsent</p>
                            </div>
                            <MainButton title="BATAFSIL" type={"main"} isArrow={true} className="w-max" />
                        </div>
                        <div className="md:col-span-5 max-md:hidden">
                            <Image className="w-full rounded-xl" src={Rector} alt="Rector of Sarbon university" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReactorsAppeal;