import { Collapse } from 'antd';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const FAQSection = () => {

    const [openCollapse, setopenCollapse] = useState<{[id: number | string]: string[] | string}>({'1': ["1"]} as {[id: number | string]: string[] | string})

    const data = [
        {
            id: 1,
            title: "Xorijdan o‘qishni ko‘chirish qanday amalga oshiriladi?",
            answer: "2022/2023-o‘quv yilida xorijiy va nodavlat oliy ta‘lim muassasalaridan respublika davlat oliy ta‘lim muassasalariga talabalar o‘qishni ko‘chirish uchun o‘tkaziladigan maxsus sinovlar bo‘yicha o‘tish ballari..."
        },
        {
            id: 2,
            title: "Sarbon Universiteti litsenziya olganmi ?",
            answer: "Vazirlar Mahkamasi ta`lim sifatini nazorat qilish davlat inspeksiya litseinziyasiga ega Toshkent shahrida joylashgan yangi nodavlat universitet!            "
        },
        {
            id: 3,
            title: "Sarbon Universiteti diplomi O'zbekiston va boshqa davlatlarda ham amal qiladimi ?",
            answer: "Ha. Universitet davlat oliygohlari bilan bir xil namunadagi diplom taqdim etadi."
        },
    ]
    
    return (
        <div className='bg-secondBg'>
            <div className="container">
                <div  className="xl:py-[120px] md:py-[90px] py-[64px]">
                    <h1 className='xl:text-[50px] md:text-[48px] text-[32px] font-semibold uppercase'>savollar va javoblar</h1>
                    <div className="md:mt-[72px] mt-[32px]">
                        {
                            data.map((item, index) => (
                                <Fade key={index} delay={0.1} direction='left'>
                                    <Collapse 
                                        defaultActiveKey={index === 0 ? [1] : undefined} 
                                        ghost 
                                        className='bg-white py-3 px-2 mb-4 transition-all faq-collapse' 
                                        style={{border: "solid 1px #e9ebeb"}} 
                                        expandIcon={() => false}
                                        rootClassName='hover:text-blue-600'
                                        onChange={(e) => setopenCollapse(prev => ({...prev, [item.id]: e}))}
                                    >
                                        <Collapse.Panel 

                                            header={<p className='xl:text-2xl md:text-xl text-lg font-medium'>{index + 1}. {item.title}</p>}
                                            key={index+1} 
                                            extra={
                                                <svg className={`${openCollapse[String(item.id)]?.includes(String(index+1)) ? "-rotate-[45deg]" : ""} transition md:w-6 md:h-6 w-4 h-4`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.5 11L13 11V0.5L11 0.5V11H0.5L0.5 13H11L11 23.5H13L13 13L23.5 13V11Z" fill="#333333"/>
                                                </svg>
                                            } 
                                        >
                                            <p className='md:text-xl text-lg text-[#333] leading-[1.4] md:ml-7'>{item.answer}</p>
                                        </Collapse.Panel>
                                    </Collapse>
                                </Fade>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQSection;