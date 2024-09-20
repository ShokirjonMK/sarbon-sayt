"use client"

import Header from "@/components/header";
import TopIntroComponent from "@/components/topIntroComponent";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Divider } from "antd";
import MainButton from "@/components/Buttons/mainBtn";
import ApplySection from "@/components/applySection";
import FAQSection from "@/components/FAQ";
import { directions } from "@/datas/directions";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DirectionsView() {

  const router = useParams();

  const [data, setDate] = useState<any>()

  useEffect(() => {
    const item = directions?.find(i => String(i?.id) == router.direction_id)
    setDate(item)
  }, [router.news_id])
  
  return (
    <div>
      <Header isTransparent={false} display="sticky" />
      <TopIntroComponent title={data?.title} text={<><Link href={'/'} className="hover:text-white">Bosh sahifa</Link> / <Link href={'/directions'} className="hover:text-white">Yo‘nalishlar</Link> / <span>{data?.title}</span></>} />
      <div className="container md:py-[72px] py-[64px]">
        <div className="grid grid-cols-12 xxl:gap-[80px] xl:gap-[50px]">
          <div className="xl:col-span-8 col-span-12">
            <p className="md:text-[32px] text-2xl md:mb-[72px] mb-[64px] font-medium">{data?.sub_title}</p>
            <Image className="w-full" src={data?.img} alt={data?.sub_title} />
            <p className="mt-4" dangerouslySetInnerHTML={{__html: data?.description}}></p>
          </div>
          <div className="xl:col-span-4 col-span-12 max-xl:mt-10">
            <div className="bg-secondBg px-6 py-6 rounded-lg text-[#333]" style={{border: "solid 1px #e9ebeb"}}>
              <div>
                <p className="text-primary font-medium text-xl mb-3">Asosiy ma‘lumotlar</p>
                <p className="text-sm mb-2"><span className="font-medium">Daraja:</span> {data?.degree}</p>
                <p className="text-sm"><span className="font-medium">Ta‘lim tili:</span> {data?.language}</p>
              </div>
              <Divider className="mb-4 mt-5" />
              <div className="mb-8">
                <p className="text-primary font-medium text-xl mb-3">Ta‘lim shakllari va narxalari</p>
                <p className="text-sm mb-2"><span className="font-medium">Kunduzgi:</span> {data?.prices?.kunduzgi}</p>
                {/* <p className="text-sm mb-2"><span className="font-medium">Kechki:</span> {data?.prices?.kechki}</p> */}
                <p className="text-sm"><span className="font-medium">Sirtqi:</span> {data?.prices?.sirtqi}</p>
              </div>
              <MainButton title="hUJJAT TOPSHIRISH" isArrow={true} type="main" className="rounded-lg w-full" onClick={() => window ? window.open('https://qabul.sarbonuniversity.uz', '_blank') : {}} />
            </div>
          </div>
        </div>

      </div>
      <ApplySection />
      <FAQSection />
    </div>
  )
}