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

  const top = useScrollTop();

  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo
        title="SARBON UNIVERSITETI"
        description='"Sarbon Universiteti"da milliy va yevro ya`ni rus tilida ta`lim guruhlari shakllantirilgan! "Sarbon Universiteti" barcha oliy ta`lim imtihonlaridan o`ta olmagan abituriyentlarga so`nggi imkoniyat eshigini ochadi, siz 2023-yil boshidanoq talaba bo`lishingiz mumkin, sentabrdan esa siz to`liq ikkinchi kursga o`tasiz'
        canonical="https://sarbonuniversity.uz"
        openGraph={{
          url: "https://sarbonuniversity.uz",
          title: "SARBON UNIVERSITY",
          description: "SARBON UNIVERSITY",
          images: [
            {
              url: "https://sarbonuniversity.uz/thema/img/PU.png",
              width: 800,
              height: 600,
              alt: "SARBON UNIVERSITY",
              type: "image/png",
            },
            {
              url: "https://sarbonuniversity.uz/thema/img/PU.png",
              width: 900,
              height: 800,
              alt: "SARBON UNIVERSITY",
              type: "image/png",
            },
            { url: "https://sarbonuniversity.uz/thema/img/PU.png" },
            { url: "https://sarbonuniversity.uz/thema/img/PU.png" },
          ],
          siteName: "SARBON UNIVERSITY",
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
