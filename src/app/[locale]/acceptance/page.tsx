"use client"

import TopIntroComponent from "@/components/topIntroComponent";
import Image from "next/image";
import pattern from '@/assets/images/directions-pattern.png';
import { useState } from "react";
import Headerv1 from "@/components/Headerv1";

export default function Acceptance() {

  const [type, setType] = useState<string>("doc");

  const data = [
    {
      title: "Hujjat topshirish",
      type: "doc"
    },
    {
      title: "OAV biz haqimizda",
      type: "change"
    },
    {
      title: "DTM QABUL",
      type: "dtm"
    },
  ]

  return (
    <div>
      <Headerv1 />
      <TopIntroComponent title="QABUL 2024" text="Ma‘lumotlaringizni qolding, xodimlarimiz tez orada siz bilan bog‘lanishadi! " />
      <div className="relative">
        <Image className='absolute right-0 left-0 top-0 bottom-0 w-full h-full object-cover' src={pattern} alt='pattern' />
        <div className="container md:py-[72px] py-[64px] relative z-[1]">
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-3 col-span-12 md:hidden">
              {
                data.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setType(item.type)}
                    className={
                      `uppercase rounded-lg w-full mb-2 flex justify-between items-center xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === item.type ? "bg-primary text-white" : "text-primary hover:bg-primary hover:text-white qabul-btn"}`
                    }
                    style={{ border: 'solid 1px #2D4255' }}
                  >
                    {item.title}
                    <svg className="ml-[12px]" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className={type === item.type ? "fill-white" : "fill-primary"} d="M8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967L13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75H1.5C1.08579 5.75 0.75 5.41421 0.75 5C0.75 4.58579 1.08579 4.25 1.5 4.25H11.1893L8.46967 1.53033Z" fill="#2D4255" />
                    </svg>
                  </button>
                ))
              }
            </div>
            <div className="md:col-span-9 col-span-12">
              <h1 className="mb-8 font-medium text-[32px]">Qabul shartlari</h1>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit in, facere necessitatibus esse voluptas et molestias voluptates aut enim cum dolorem suscipit hic nulla temporibus! Nostrum consequuntur fuga a.</p>
            </div>
            <div className="md:col-span-3 col-span-12 max-md:hidden">
              {
                data.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setType(item.type)}
                    className={
                      `uppercase rounded-lg w-full mb-2 flex justify-between items-center xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] outline-none border-none transition-all ${type === item.type ? "bg-primary text-white" : "text-primary hover:bg-primary hover:text-white qabul-btn"}`
                    }
                    style={{ border: 'solid 1px #2D4255' }}
                  >
                    {item.title}
                    <svg className="ml-[12px]" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className={type === item.type ? "fill-white" : "fill-primary"} d="M8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967L13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75H1.5C1.08579 5.75 0.75 5.41421 0.75 5C0.75 4.58579 1.08579 4.25 1.5 4.25H11.1893L8.46967 1.53033Z" fill="#2D4255" />
                    </svg>
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}