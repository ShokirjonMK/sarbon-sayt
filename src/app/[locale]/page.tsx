"use client";

import FAQSection from "@/components/FAQ";
import AboutSection from "@/components/aboutSection";
import ApplySection from "@/components/applySection";
import ContactUsSection from "@/components/contactUsSection";
import DirectionSlider from "@/components/directionSlider";
import Header from "@/components/header";
import MainSection from "@/components/mainSection";
import NewsSection from "@/components/newsSection";
import PartnersSlider from "@/components/partnersSlider";
import ReactorsAppeal from "@/components/rectorsAppeal";
import StudentsOtzivSlider from "@/components/studentsOtziv";
import useScrollTop from "@/hooks/useOnscrollTopHeight";
import { DefaultSeo, NextSeo } from "next-seo";
import React from "react";
import SEO from "../../../next-seo.config";
import { Lenta } from "@/components/Lenta";
import Headerv1 from "@/components/Headerv1";
import Faculties from "@/components/faculties";
import MainSectionV1 from "@/components/mainSectionV1";
import DirectionSectionv1 from "@/components/directionSectionv1";

export default function IndexPage() {

  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo
        title="SARBON UNIVERSITETI"
        description='Universitetimiz ko‘plab yo‘nalishlarda dasturlar taklif qiluvchi zamonaviy ta’lim markazi hisoblanadi. Biz zamonaviy dunyo muammolariga tayyor yuqori malakali mutaxassislarni tayyorlashga intilamiz. Universitet o‘qituvchilari o‘z sohalarining ekspertlari bo‘lib, nafaqat ta’lim berishadi, balki talabalarga amaliy ko‘nikmalarni rivojlantirishda yordam berishadi. Biz akademik mobillik va tajriba almashish imkoniyatlarini taqdim etgan holda xalqaro hamkorlikni faol qo‘llab-quvvatlaymiz. Bu yerda har bir talaba sifatli ta’lim va kasbiy o‘sish imkoniyatlarini qo‘lga kiritadi.'
        canonical="https://sarbon.university"
        openGraph={{
          url: "https://sarbon.university",
          title: "SARBON UNIVERSITETI",
          description: "SARBON UNIVERSITETI",
          images: [
            {
              url: "/icon.svg",
              width: 800,
              height: 600,
              alt: "SARBON UNIVERSITETI",
              type: "image/svg+xml",
            },
            {
              url: "/icon.svg",
              width: 900,
              height: 800,
              alt: "SARBON UNIVERSITETI",
              type: "image/svg+xml",
            },
            { url: "/icon.svg" },
            { url: "/icon.svg" },
          ],
          siteName: "SARBON UNIVERSITETI",
        }}
      />
      <div className="main-section">
        {/* <Header
          isTransparent={true}
          display={
            top < (window ? window.innerHeight : 1000) - 200
              ? "sticky"
              : "fixed"
          }
        /> */}
        <Headerv1 />
        <MainSectionV1 />
      </div>
      <div className="-translate-y-20 -rotate-2 relative z-[2]">
        <Lenta />
      </div>
      {/* <ReactorsAppeal /> */}
      <AboutSection />
      {/* <Faculties /> */}
      {/* <DirectionSlider /> */}
      <DirectionSectionv1 />
      <PartnersSlider />
      {/* <StudentsOtzivSlider /> */}
      <ApplySection />
      {/* <FAQSection /> */}
      <ContactUsSection />
      {/* <NewsSection /> */}
    </>
  );
}
