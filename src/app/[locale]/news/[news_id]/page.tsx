"use client"

import Header from "@/components/header";
import TopIntroComponent from "@/components/topIntroComponent";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Avatar } from "antd";
import { useEffect, useState } from "react";
import { news } from "@/datas/news";
import Link from "next/link";

export default function NewsView() {

  const router = useParams();
  const [data, setDate] = useState<any>()

  useEffect(() => {
    const item = news?.find(i => String(i?.id) == router.news_id)
    setDate(item)
  }, [router.news_id])
  
  return (
    <div>
      <Header isTransparent={false} display="sticky" />
      <TopIntroComponent title="" text={<><Link href={'/'} className="hover:text-white">Bosh sahifa</Link> / <Link href={'/news'} className="hover:text-white">Yangiliklar</Link> / <span>{data?.title}</span></>} />
      <div className="container md:py-[72px] py-[64px]">
        <div className="grid grid-cols-12 xxl:gap-[80px] xl:gap-[50px]">
          <div className="xl:col-span-2 col-span-12"></div>
          <div className="xl:col-span-8 col-span-12">
            <p className="md:text-[32px] text-2xl font-medium">{data?.title}</p>
            <div className="flex justify-between items-center my-6">
              <p className="text-primary">{data?.date} • 5 min read</p>
              <div className="flex items-center">
                <Avatar 
                  size={32} 
                  className="ml-2 bg-secondBg hover:bg-[#dbdbdb] cursor-pointer transition news-media-icon-avatar" 
                  src={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9999 4.66014V5.00014C18.0007 6.06622 17.576 7.08856 16.8199 7.84006L13.9999 10.6701C13.4738 11.1912 12.6261 11.1912 12.1 10.6701L12 10.5601C11.8094 10.3657 11.8094 10.0545 12 9.86006L15.4399 6.42012C15.807 6.03944 16.0083 5.52889 15.9999 5.00014V4.66014C16.0003 4.12711 15.788 3.61595 15.4099 3.24016L14.7599 2.59017C14.3841 2.21213 13.873 1.99975 13.3399 2.00017H12.9999C12.4669 1.99975 11.9558 2.21213 11.58 2.59017L8.14 6.00013C7.9456 6.1907 7.6344 6.1907 7.44 6.00013L7.33 5.89013C6.8089 5.364 6.8089 4.51629 7.33 3.99015L10.16 1.15018C10.9165 0.405109 11.9382 -0.00861109 12.9999 0.000198909H13.3399C14.4011 -0.000641091 15.4191 0.420239 16.1699 1.17018L16.8299 1.83018C17.5798 2.58096 18.0007 3.59897 17.9999 4.66014ZM5.64993 10.9401L10.9399 5.65014C11.0338 5.55549 11.1616 5.50224 11.2949 5.50224C11.4282 5.50224 11.556 5.55549 11.6499 5.65014L12.3499 6.35013C12.4445 6.44401 12.4978 6.57181 12.4978 6.70513C12.4978 6.83845 12.4445 6.96624 12.3499 7.06016L7.0599 12.3501C6.96604 12.4448 6.83824 12.498 6.70492 12.498C6.57161 12.498 6.44381 12.4448 6.34993 12.3501L5.64993 11.6501C5.55528 11.5562 5.50204 11.4284 5.50204 11.2951C5.50204 11.1618 5.55528 11.034 5.64993 10.9401ZM10.5599 12.0001C10.3655 11.8095 10.0543 11.8095 9.8599 12.0001L6.42993 15.4101C6.0517 15.7906 5.53645 16.0031 4.99995 16H4.65995C4.12691 16.0005 3.61576 15.7881 3.23997 15.4101L2.58997 14.7601C2.21194 14.3843 1.99956 13.8731 1.99998 13.3401V13.0001C1.99956 12.467 2.21194 11.9559 2.58997 11.5801L6.00993 8.14006C6.2005 7.94566 6.2005 7.63456 6.00993 7.44006L5.89993 7.33006C5.3738 6.809 4.52609 6.809 3.99996 7.33006L1.17999 10.1601C0.423921 10.9117 -0.000838757 11.934 1.24351e-06 13.0001V13.3501C0.00182124 14.4078 0.422491 15.4217 1.16999 16.17L1.82998 16.83C2.58076 17.58 3.59878 18.0009 4.65995 18H4.99995C6.05338 18.0062 7.0667 17.5965 7.8199 16.86L10.6699 14.0101C11.191 13.4839 11.191 12.6362 10.6699 12.1101L10.5599 12.0001Z" fill="#2D4255"/>
                    </svg>
                  } 
                />
                <Avatar 
                  size={32} 
                  className="ml-2 bg-secondBg hover:bg-[#dbdbdb] cursor-pointer transition news-media-icon-avatar" 
                  src={
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.242737C0.67157 0.242737 0 0.914307 0 1.74274V16.7427C0 17.5711 0.67157 18.2427 1.5 18.2427H16.5C17.3284 18.2427 18 17.5711 18 16.7427V1.74274C18 0.914307 17.3284 0.242737 16.5 0.242737H1.5ZM5.52076 4.24546C5.52639 5.20171 4.81061 5.79093 3.96123 5.78671C3.16107 5.78249 2.46357 5.14546 2.46779 4.24687C2.47201 3.40171 3.13998 2.72249 4.00764 2.74218C4.88795 2.76187 5.52639 3.40734 5.52076 4.24546ZM9.2797 7.0045H6.75971H6.7583V15.5643H9.4217V15.3646C9.4217 14.9847 9.4214 14.6047 9.4211 14.2246C9.4203 13.2108 9.4194 12.1959 9.4246 11.1824C9.426 10.9363 9.4372 10.6804 9.5005 10.4455C9.7381 9.56804 10.5271 9.00134 11.4074 9.14064C11.9727 9.22914 12.3467 9.55684 12.5042 10.0898C12.6013 10.423 12.6449 10.7816 12.6491 11.129C12.6605 12.1766 12.6589 13.2242 12.6573 14.2719C12.6567 14.6417 12.6561 15.0117 12.6561 15.3815V15.5629H15.328V15.3576C15.328 14.9056 15.3278 14.4537 15.3275 14.0018C15.327 12.8723 15.3264 11.7428 15.3294 10.6129C15.3308 10.1024 15.276 9.59904 15.1508 9.10544C14.9638 8.37134 14.5771 7.76384 13.9485 7.32514C13.5027 7.01293 13.0133 6.81184 12.4663 6.78934C12.404 6.78675 12.3412 6.78336 12.2781 6.77995C11.9984 6.76483 11.7141 6.74947 11.4467 6.8034C10.6817 6.95668 10.0096 7.30684 9.5019 7.92414C9.4429 7.99494 9.3852 8.06684 9.2991 8.17414L9.2797 8.19844V7.0045ZM2.68164 15.5671H5.33242V7.01007H2.68164V15.5671Z" fill="#2D4255"/>
                    </svg>
                  } 
                />
                <Avatar 
                  size={32} 
                  className="ml-2 bg-secondBg hover:bg-[#dbdbdb] cursor-pointer transition news-media-icon-avatar" 
                  src={
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.1761 0.242737H16.9362L10.9061 7.02014L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99354L0 0.242737H5.69545L9.6279 5.35536L14.1761 0.242737ZM13.2073 14.6181H14.7368L4.86441 1.78202H3.2232L13.2073 14.6181Z" fill="#2D4255"/>
                    </svg>
                  } 
                />
                <Avatar 
                  size={32} 
                  className="ml-2 bg-secondBg hover:bg-[#dbdbdb] cursor-pointer transition news-media-icon-avatar" 
                  src={
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10.3038C20 4.74725 15.5229 0.242737 10 0.242737C4.47715 0.242737 0 4.74725 0 10.3038C0 15.3255 3.65684 19.4879 8.4375 20.2427V13.2121H5.89844V10.3038H8.4375V8.08726C8.4375 5.5657 9.9305 4.17286 12.2146 4.17286C13.3088 4.17286 14.4531 4.36937 14.4531 4.36937V6.84535H13.1922C11.95 6.84535 11.5625 7.62096 11.5625 8.41664V10.3038H14.3359L13.8926 13.2121H11.5625V20.2427C16.3432 19.4879 20 15.3257 20 10.3038Z" fill="#2D4255"/>
                    </svg>
                  } 
                />
              </div>
            </div>
            <Image className="w-full" src={data?.img} alt="ss" />
            <p className="mt-4" dangerouslySetInnerHTML={{__html: data?.description}}></p>
          </div>
          <div className="xl:col-span-2 col-span-12"></div>
        </div>
      </div>
    </div>
  )
}