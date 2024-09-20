"use client";

import Link from "next/link";
import useScrollTop from "@/hooks/useOnscrollTopHeight";
import Image from "next/image";
import LogoLight from "@/assets/images/icon.svg";
import LogoDark from "@/assets/images/icon.svg";
import MainButton from "./Buttons/mainBtn";
import useWindowSize from "@/hooks/useWindowSize";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useTranslations } from "next-intl";

export const univerMenus: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
        universitet haqida
      </Link>
    ),
    style: { padding: '12px 16px' }
  },
  // {
  //   key: "3",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       Rektor murojaati
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
  // {
  //   key: "4",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       Rahbariyat
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
  // {
  //   key: "5",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       Bo‘limlar va xodimlar
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
  // {
  //   key: "6",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       tashkiliy tuzilma
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
  // {
  //   key: "7",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       Normativ hujjatlar
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
  // {
  //   key: "8",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       Hamkorlar
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
  // {
  //   key: "9",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       bo‘sh ish o‘rinlari
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
  // {
  //   key: "10",
  //   label: (
  //     <Link className="uppercase text-sm leading-[1.7] font-normal" href="/about">
  //       Savol-javoblar
  //     </Link>
  //   ),
  //   style: { padding: '12px 16px' }
  // },
];

export const newsMenus: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="/news">
        Yangiliklar
      </Link>
    ),
    style: { padding: '12px 16px' }
  },
  {
    key: "2",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="/news">
        Tadbirlar
      </Link>
    ),
    style: { padding: '12px 16px' }
  },
  {
    key: "3",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="/news">
        galereya
      </Link>
    ),
    style: { padding: '12px 16px' }
  },
  {
    key: "4",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="/news">
        OAV biz haqimizda
      </Link>
    ),
    style: { padding: '12px 16px' }
  }
];

export const tarkibiybolimnaMenus: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="#">
        Rahbariyat
      </Link>
    ),
    style: { padding: '12px 16px' }
  },
  {
    key: "2",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="#">
        Bo'limlar
      </Link>
    ),
    style: { padding: '12px 16px' }
  },
  {
    key: "3",
    label: (
      <Link className="uppercase text-sm leading-[1.7] font-normal" href="#">
        Kafedralar
      </Link>
    ),
    style: { padding: '12px 16px' }
  }
];


const Header = ({
  isTransparent,
  display,
}: {
  isTransparent?: boolean;
  display: string;
}) => {
  const { width } = useWindowSize();
  const top = useScrollTop();
  const t = useTranslations()

  // ${top > 30 ? "top-0" : width > 765 ? "top-12" : ""}

  return (
    <header
      className={`
              top-0
                ${display}
                right-0 left-0  z-[2] text-[14px]
                ${isTransparent
          ? top < 100
            ? "bg-transparent"
            : "bg-white"
          : "bg-white"
        }
            `}
      style={top > 100 ? { borderBottom: "solid 1px #e9ebeb" } : { borderBottom: "solid 1px transparent" }}
    >
      <div className="py-[12px]">
        <div className="container-main mx-auto">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                width="390"
                height="144"
                className={`xl:w-[195px] md:w-[150px] w-[130px] xl:h-[70px] md:h-[40px] h-[44.4px]`}
                src={isTransparent ? (top < 100 ? LogoLight : LogoDark) : LogoDark}
                alt="Sarbon univercity logo"
              />
            </Link>
            <div
              className={`max-md:hidden flex items-center xl:gap-[28px] gap-[20px] ${isTransparent
                ? top < 100
                  ? "text-white"
                  : "text-black"
                : "text-black"
                }`}
            >
              <Dropdown menu={{ items: univerMenus }}>
                <Link
                  href={"#"}
                  onClick={(e) => e.preventDefault()}
                  className={`uppercase font-medium flex items-center`}
                >
                  {t("global.university")}
                  <svg className="ml-[7px] fill-red-500" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={isTransparent ? top < 100 ? "white" : "black" : "black"} fillRule="evenodd" clipRule="evenodd" d="M6.33117 6.05243C6.14811 6.23549 5.85136 6.23549 5.6683 6.05243L0.889245 1.27337C0.706189 1.09031 0.706189 0.793556 0.889245 0.610494L1.11022 0.389494C1.29328 0.206432 1.59007 0.206432 1.77313 0.389494L5.99973 4.61612L10.2264 0.389494C10.4094 0.206432 10.7062 0.206432 10.8892 0.389494L11.1102 0.610494C11.2933 0.793556 11.2933 1.09031 11.1102 1.27337L6.33117 6.05243Z" />
                  </svg>
                </Link>
              </Dropdown>
              <Link href={"/directions"} className={`uppercase font-medium`}>
                {t("global.directionsasd")}
              </Link>
              <Dropdown menu={{ items: tarkibiybolimnaMenus }}>
                <Link
                  href={"#"}
                  onClick={(e) => e.preventDefault()}
                  className={`uppercase font-medium flex items-center`}
                >
                  {t("global.students")}
                  <svg className="ml-[7px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={isTransparent ? top < 100 ? "white" : "black" : "black"} fillRule="evenodd" clipRule="evenodd" d="M6.33117 6.05243C6.14811 6.23549 5.85136 6.23549 5.6683 6.05243L0.889245 1.27337C0.706189 1.09031 0.706189 0.793556 0.889245 0.610494L1.11022 0.389494C1.29328 0.206432 1.59007 0.206432 1.77313 0.389494L5.99973 4.61612L10.2264 0.389494C10.4094 0.206432 10.7062 0.206432 10.8892 0.389494L11.1102 0.610494C11.2933 0.793556 11.2933 1.09031 11.1102 1.27337L6.33117 6.05243Z" />
                  </svg>
                </Link>
              </Dropdown>
              <Dropdown menu={{ items: newsMenus }}>
                <Link
                  href={"#"}
                  onClick={(e) => e.preventDefault()}
                  className={`uppercase font-medium flex items-center`}
                >
                  {t("global.news")}
                  <svg className="ml-[7px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={isTransparent ? top < 100 ? "white" : "black" : "black"} fillRule="evenodd" clipRule="evenodd" d="M6.33117 6.05243C6.14811 6.23549 5.85136 6.23549 5.6683 6.05243L0.889245 1.27337C0.706189 1.09031 0.706189 0.793556 0.889245 0.610494L1.11022 0.389494C1.29328 0.206432 1.59007 0.206432 1.77313 0.389494L5.99973 4.61612L10.2264 0.389494C10.4094 0.206432 10.7062 0.206432 10.8892 0.389494L11.1102 0.610494C11.2933 0.793556 11.2933 1.09031 11.1102 1.27337L6.33117 6.05243Z" />
                  </svg>
                </Link>
              </Dropdown>
              <Link href={"/contact"} className={`uppercase font-medium`}>
                {t("global.contact")}
              </Link>
              <MainButton
                title={t("global.acceptance")}
                type={isTransparent ? (top < 100 ? "light" : "main") : "main"}
                onClick={() => window ? window.open('https://qabul.sarbon.university', '_blank') : {}}
              />
            </div>
            <svg
              className="md:hidden cursor-pointer"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.09091H19M1 6H19M1 10.9091H19"
                stroke={
                  isTransparent ? (top < 100 ? "white" : "black") : "black"
                }
                strokeWidth="1.63636"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
