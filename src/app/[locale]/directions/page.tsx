"use client"

import DirectionSliderCard from "@/components/Cards/directionSliderCard";
import FAQSection from "@/components/FAQ";
import ApplySection from "@/components/applySection";
import Header from "@/components/header";
import TopIntroComponent from "@/components/topIntroComponent";
import Image from "next/image";
import pattern from '@/assets/images/directions-pattern.png';
import { useState } from "react";
import { directions } from "@/datas/directions";

export default function Directions() {

  const [type, setType] = useState<"Magistr" | "Bakalavr">("Bakalavr");

  return (
    <div>
      <Header isTransparent={false} display="sticky" />
      <TopIntroComponent title="Ta'lim yo'nalishlari" text="Bosh sahifa / Yo‘nalishlar " />
      <div className="relative">
        <Image className='absolute right-0 left-0 top-0 bottom-0 w-full h-full object-cover' src={pattern} alt='pattern' />
        <div className="container md:py-[72px] py-[64px] relative z-[1]">
          <p className="md:text-[32px] text-2xl md:mb-[72px] mb-[64px] font-medium">Bakalavriat bosqichida olgan bilim va ko‘nikmalaringiz sizni tanlagan sohangizda karyera qilish yoki ilmiy faoliyatni davom ettirish imkonini beradi.</p>
          <div className="flex mb-8 gap-3">
            <button onClick={() => setType("Bakalavr")} className={`uppercase  rounded-full xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === "Bakalavr" ? "bg-primary text-white hover:bg-primaryHover" : "filter-in-active-btn text-primary"}`} style={{border: 'solid 1px #2D4255'}} >bakalavriat</button>
            <button onClick={() => setType("Magistr")} className={`uppercase  rounded-full xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === "Magistr" ? "bg-primary text-white hover:bg-primaryHover" : "text-primary hover:bg-primary hover:text-white"}`} style={{border: 'solid 1px #2D4255'}} >Magistratura</button>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              (directions?.filter(i => i?.degree === type)).map((item, index) => (
                  <DirectionSliderCard item={item} key={index} className="bg-[#e9ebeb]" />
              ))
            }
          </div>
        </div>
      </div>
      <ApplySection />
      <FAQSection />
    </div>
  )
}