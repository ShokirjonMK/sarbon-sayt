"use client"

import TopIntroComponent from "@/components/topIntroComponent";
import Image from "next/image";
import pattern from '@/assets/images/directions-pattern.png';
import { useEffect, useState } from "react";
import NewsCard from "@/components/Cards/NewsCard";
import { news } from "@/datas/news";
import Link from "next/link";
import { usePathname, useRouter } from "@/navigation";
import Headerv1 from "@/components/Headerv1";

export default function News() {

  const [type, setType] = useState<string>("news");
  const router = useRouter();
  const pathname = usePathname();

  const [activeBtn, setactiveBtn] = useState<number | string>('about-university')

  useEffect(() => {
    console.log("pathname", pathname);

  }, []);

  const changeMenu = (e: string) => {
    setType(e)
    router.replace(
      { query: { type: e }, pathname }
    );
  }

  return (
    <div>
      {/* <Header isTransparent={false} display="sticky" /> */}
      <Headerv1 />
      <TopIntroComponent title="Yangiliklar" text={<><Link href={'/'} className="hover:text-white">Bosh sahifa</Link> / <Link href={'/news'} className="hover:text-white">Yangiliklar</Link></>} />
      <div className="relative">
        <Image className='absolute right-0 left-0 top-0 bottom-0 w-full h-full object-cover' src={pattern} alt='pattern' />
        <div className="container md:py-[72px] py-[64px] relative z-[1]">
          <div className="flex mb-8 gap-3">
            <button onClick={() => changeMenu("news")} className={`uppercase  rounded-full xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === "news" ? "bg-primary text-white hover:bg-primaryHover" : "filter-in-active-btn text-primary"}`} style={{ border: 'solid 1px #2D4255' }} >Yangiliklar</button>
            <button onClick={() => changeMenu("event")} className={`uppercase  rounded-full xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === "event" ? "bg-primary text-white hover:bg-primaryHover" : "text-primary hover:bg-primary hover:text-white"}`} style={{ border: 'solid 1px #2D4255' }} >Tadbirlar</button>
            <button onClick={() => changeMenu("gallery")} className={`uppercase  rounded-full xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === "gallery" ? "bg-primary text-white hover:bg-primaryHover" : "text-primary hover:bg-primary hover:text-white"}`} style={{ border: 'solid 1px #2D4255' }} >galereya</button>
            <button onClick={() => changeMenu("about")} className={`uppercase  rounded-full xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === "about" ? "bg-primary text-white hover:bg-primaryHover" : "text-primary hover:bg-primary hover:text-white"}`} style={{ border: 'solid 1px #2D4255' }} >OAV biz haqimizda</button>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              news.map((item, index) => (
                <NewsCard item={item} key={index} className="bg-[#e9ebeb]" />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}