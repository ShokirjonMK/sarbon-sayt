"use client"

import AboutPageLayout from "@/components/aboutpageLayout";
import Header from "@/components/header";
import TopIntroComponent from "@/components/topIntroComponent";
import Image from "next/image";
import pattern from '@/assets/images/about-page-pattern.png';

export default function AboutUs() {
    return (
      <div>
        <Header isTransparent={false} display="sticky" />
        <TopIntroComponent title="universitet haqida" text="Ma‘lumotlaringizni qolding, xodimlarimiz tez orada siz bilan bog‘lanishadi! " />
        <div className="relative overflow-hidden">
          <Image className='absolute left-0 bottom-0 w-full' src={pattern} alt='pattern' />
          <div className="container md:py-[72px] py-[64px] relative z-[1]">
            <AboutPageLayout />

          </div>
        </div>
      </div>
    )
  }