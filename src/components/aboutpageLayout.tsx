import { usePathname, useRouter } from "@/navigation";
import { Tabs, TabsProps } from "antd";
import { useState } from "react";

const AboutPageLayout = () => {

    const router = useRouter();
    const pathname = usePathname();

    const [activeBtn, setactiveBtn] = useState<number | string>('about-university')

    const items: TabsProps['items'] = [
        {
          key: 'about-university',
          label: 'universitet haqida',
          children: '',
        },
        {
          key: 'address-of-rector',
          label: 'Rektor murojaati',
          children: '',
        },
        {
          key: 'docs',
          label: 'Normativ hujjatlar',
          children: '',
        },
        {
            key: 'partners',
            label: 'Hamkorlar',
            children: '',
        },
        {
            key: 'vacancies',
            label: 'bo‘sh ish o‘rinlari',
            children: '',
        },
        {
            key: 'faq',
            label: 'Savol-javoblar',
            children: '',
        },
    ];

    const changeMenu = (e: string) => {
        setactiveBtn(e)
        router.replace(
            {query: {type: e}, pathname}
        );
    }

    return (
            <div className="relative1 z-[1]">
                <div className="grid grid-cols-12 gap-8">
                    <div className="xl:col-span-3 md:col-span-4 max-md:hidden">
                        <div className="rounded-lg overflow-hidden" style={{border: "1px solid #d2d2d2"}}>
                            {
                              items.map((item) => (
                                <button key={item.key} onClick={() => changeMenu(item.key)} className={`text-left transition-all flex items-center justify-between py-3 px-4 w-full border-none outline-none  ${activeBtn === item.key ? "bg-primary hover:bg-primaryHover text-white" : "hover:bg-[#f5f5f5] about-menu-button"}`}>
                                    {item.label}
                                    <svg className="transition-all" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.640625 1L5.64062 6L0.640625 11" stroke={activeBtn === item.key ? "white" : "black"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                              ))  
                            }
                        </div>
                    </div>
                    <div className="xl:col-span-3 md:col-span-4 col-span-12 md:hidden">
                        <Tabs defaultActiveKey={"1"} items={items} onChange={(e) => changeMenu(e)} />
                    </div>
                    <div className="xl:col-span-9 md:col-span-8 col-span-12">
                        <h1 className="text-[32px] font-medium mb-6" >Universitet haqida</h1>
                        <p className="mb-4">"Sarbon Universiteti"da milliy va yevro ya`ni rus tilida ta`lim guruhlari shakllantirilgan! "Sarbon Universiteti" barcha oliy ta`lim imtihonlaridan o`ta olmagan abituriyentlarga so`nggi imkoniyat eshigini ochadi, siz 2023-yil boshidanoq talaba bo`lishingiz mumkin, sentabrdan esa siz to`liq ikkinchi kursga o`tasiz!</p>
                        
                        <p className="mb-4 italic">"Sarbon Universiteti" o`qituvchilari o`z kasbining yetuk xodimlari bo`lib ular ichida boshqa mamlakat vakillari ham mavjud! Universitetimiz bitiruvchi talabalari uchun esa ajoyib imkoniyat yaratish maqsadida yirik kompaniyalar bilan kelishuv asosida o`z talabalariga kasblari bo`yicha malaka o`tash masalalarini ham dolzablashtirilmoqda!</p>

                        <p className="mb-4">Bu hali hammasi emas "Sarbon Universiteti" dunyoning yetakchi universitetlari bilan kelishuvlar amalga oshirishni ham maqsad qilib qo`ygan bular ichida AQSH, Chexiya, Xitoy va Janubiy Koreyaning eng nomdor universitetlari mavjud!</p>

                    </div>
                </div>
            </div>
    )
}
export default AboutPageLayout;