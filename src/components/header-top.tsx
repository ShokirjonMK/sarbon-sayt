"use client"

import Link from "next/link";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { useTranslations } from "next-intl";

const HeaderTop = () => {

    const t = useTranslations();

    return (
        <header className="max-md:hidden right-0 left-0 top-0 z-[2]">
            <div className="bg-yellow-100 py-1 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-yellow-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <p className="text-sm font-bold text-yellow-700 ml-2">{t("header.testontest")}</p>
            </div>
            <div className="bg-secondPrimary/90 py-[8px] xl:text-[14px] text-[12px] text-[rgba(255,255,255,0.8)]" style={{ boxShadow: "0 3px 24px rgba(0,0,0,.08)" }}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex xl:gap-[20px] gap-[15px]">
                            <a href="mailto:info@sarbonuniversity.uz" className="hover:text-white">info@sarbonuniversity.uz</a>
                            <a href="tel:+998718882288" className="hover:text-white">+998 71 888 22 88</a>|
                            <a href="#" target="_blank" className="hover:text-white">HEMIS Sarbon</a>
                            <a href="#" target="_blank" className="hover:text-white">HEMIS Student</a>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <Link href="https://www.instagram.com/sarbonuniversiteti" target="_blank" className="hover:rotate-12 transition"  >
                                <svg className="xl:w-[20px] xl:h-[20px] w-[16px] h-[16px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99994 6.75C8.20501 6.75 6.74994 8.20507 6.74994 10C6.74994 11.7949 8.20501 13.25 9.99994 13.25C11.7949 13.25 13.2499 11.7949 13.2499 10C13.2499 8.20507 11.7949 6.75 9.99994 6.75Z" fill="white" fillOpacity="0.8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.76948 1.08147C8.2176 0.69609 11.7823 0.69609 15.2304 1.08147C17.1288 1.29364 18.66 2.78942 18.8828 4.69447C19.2951 8.21948 19.2951 11.7805 18.8828 15.3055C18.66 17.2106 17.1288 18.7064 15.2304 18.9185C11.7823 19.3039 8.2176 19.3039 4.76948 18.9185C2.87108 18.7064 1.33989 17.2106 1.11707 15.3055C0.704791 11.7805 0.704791 8.21948 1.11707 4.69447C1.33989 2.78942 2.87108 1.29364 4.76948 1.08147ZM14.9999 4C14.4477 4 13.9999 4.44772 13.9999 5C13.9999 5.55228 14.4477 6 14.9999 6C15.5522 6 15.9999 5.55228 15.9999 5C15.9999 4.44772 15.5522 4 14.9999 4ZM5.24994 10C5.24994 7.37665 7.37659 5.25 9.99994 5.25C12.6233 5.25 14.7499 7.37665 14.7499 10C14.7499 12.6234 12.6233 14.75 9.99994 14.75C7.37659 14.75 5.24994 12.6234 5.24994 10Z" fill="white" fillOpacity="0.8" />
                                </svg>
                            </Link>
                            <Link href="https://t.me/sarbonuniversity" target="_blank" className="hover:rotate-12 transition">
                                <svg className="xl:w-[20px] xl:h-[20px] w-[16px] h-[16px]" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.4831 16.7901L17.4838 16.7883L17.5011 16.7448L20.4999 1.62577V1.57666C20.4999 1.19996 20.3608 0.871103 20.0579 0.673844C19.7928 0.501182 19.488 0.488885 19.2743 0.505106C19.0483 0.522261 18.8352 0.578676 18.6876 0.625636C18.6117 0.649796 18.5482 0.673075 18.5028 0.690681C18.48 0.699518 18.4615 0.707016 18.448 0.712603L18.4348 0.71816L1.71502 7.2771L1.71042 7.27875C1.70139 7.28203 1.68944 7.28649 1.67502 7.2921C1.64627 7.3033 1.60713 7.31931 1.56115 7.34015C1.47087 7.38107 1.34613 7.44421 1.21963 7.53084C1.00477 7.67797 0.59566 8.02629 0.664742 8.57852C0.721963 9.03593 1.03727 9.32643 1.24983 9.47683C1.36378 9.55746 1.4728 9.6156 1.55262 9.6536C1.59307 9.67286 1.62743 9.68761 1.65302 9.69802C1.66585 9.70325 1.67657 9.70743 1.68487 9.71057L1.6955 9.71454L1.70229 9.71706L4.62753 10.7019C4.61766 10.8854 4.63586 11.0725 4.68453 11.2572L6.14982 16.8156C6.32355 17.4746 6.91978 17.9337 7.60135 17.9332C8.21228 17.9328 8.75411 17.5632 8.98429 17.0118L11.272 14.5657L15.2009 17.5779L15.2568 17.6023C15.6138 17.7581 15.9473 17.8074 16.2522 17.7658C16.5567 17.7242 16.7987 17.5965 16.9804 17.4511C17.1593 17.308 17.2819 17.1465 17.359 17.0249C17.3981 16.9631 17.4273 16.9088 17.4476 16.8679C17.4578 16.8474 17.4658 16.8301 17.4718 16.8165L17.4793 16.7991L17.482 16.7927L17.4831 16.7901ZM6.13493 10.8748C6.10163 10.7485 6.15391 10.6151 6.2642 10.5451L16.1862 4.24417C16.1862 4.24417 16.7698 3.88987 16.7489 4.24417C16.7489 4.24417 16.8531 4.30673 16.5404 4.59846C16.2438 4.87554 9.46869 11.4166 8.78316 12.0785C8.74359 12.1167 8.71997 12.1605 8.70602 12.2137L7.60022 16.4332L6.13493 10.8748Z" fill="white" fillOpacity="0.8" />
                                </svg>
                            </Link>
                            <Link href="https://t.me/sarbonuniversity" target="_blank" className="hover:rotate-12 transition">
                                <svg className="xl:w-[20px] xl:h-[20px] w-[16px] h-[16px]" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.98901 0.890519C9.32468 0.629552 12.6756 0.629552 16.0113 0.890519L18.252 1.06582C19.5001 1.16346 20.5211 2.09886 20.7274 3.33363C21.2436 6.42313 21.2436 9.57687 20.7274 12.6664C20.5211 13.9011 19.5001 14.8365 18.252 14.9342L16.0113 15.1095C12.6756 15.3704 9.32467 15.3704 5.989 15.1095L3.7483 14.9342C2.50023 14.8365 1.47921 13.9011 1.2729 12.6664C0.756691 9.57687 0.756691 6.42313 1.2729 3.33363C1.47921 2.09886 2.50023 1.16346 3.7483 1.06582L5.98901 0.890519ZM9.00012 10.4701V5.52986C9.00012 5.29667 9.25451 5.15263 9.45447 5.27261L13.5714 7.74275C13.7656 7.85927 13.7656 8.14073 13.5714 8.25725L9.45447 10.7274C9.25451 10.8474 9.00012 10.7033 9.00012 10.4701Z" fill="white" fillOpacity="0.8" />
                                </svg>
                            </Link>
                            <Link href="https://t.me/sarbonuniversity" target="_blank" className="hover:rotate-12 transition">
                                <svg className="xl:w-[20px] xl:h-[20px] w-[16px] h-[16px]" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.2 0.875C6.97337 0.875 5.79699 1.36228 4.92963 2.22963C4.06228 3.09699 3.575 4.27337 3.575 5.5V8.075H1.1C0.975736 8.075 0.875 8.17574 0.875 8.3V11.7C0.875 11.8243 0.975736 11.925 1.1 11.925H3.575V18.9C3.575 19.0243 3.67574 19.125 3.8 19.125H7.2C7.32426 19.125 7.425 19.0243 7.425 18.9V11.925H9.92192C10.0252 11.925 10.1152 11.8547 10.1402 11.7546L10.9902 8.35457C11.0257 8.21256 10.9183 8.075 10.7719 8.075H7.425V5.5C7.425 5.29446 7.50665 5.09733 7.65199 4.95199C7.79733 4.80665 7.99446 4.725 8.2 4.725H10.8C10.9243 4.725 11.025 4.62426 11.025 4.5V1.1C11.025 0.975736 10.9243 0.875 10.8 0.875H8.2Z" fill="white" fillOpacity="0.8" />
                                </svg>
                            </Link>
                            <LocaleSwitcherSelect className='text-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,0.8)]' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderTop;