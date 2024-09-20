

import useScrollTop from '@/hooks/useOnscrollTopHeight';
import useWindowSize from '@/hooks/useWindowSize';
import { Drawer, Dropdown, Menu } from 'antd';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import { tarkibiybolimnaMenus, univerMenus } from './header';
import MainButton from './Buttons/mainBtn';
import Image from 'next/image';
import LogoLight from "@/assets/images/icon.svg";

const menuData = [
  {
    key: '1',
    label: <Link href="/" className='uppercase font-semibold text-[18px] flex items-center' >Asosiy</Link>,
    link: "/",
  },
  {
    key: '2',
    label: <Link href="#" className='uppercase font-semibold text-[18px] flex items-center' >Universitet</Link>,
    children: [
      { key: '11', label: <Link href="/about" className='uppercase font-semibold text-[18px] flex items-center' >Universitet haqida</Link> },
    ],
  },
  {
    key: '3',
    label: <Link href="#" className='uppercase font-semibold text-[18px] flex items-center' >Tarkibiy bolinma</Link>,
    children: [
      { key: '13', label: <Link href="/management" className='uppercase font-semibold text-[18px] flex items-center' >Rahbariyat</Link> },
      { key: '14', label: <Link href="/departments" className='uppercase font-semibold text-[18px] flex items-center' >Bo'limlar</Link> },
      { key: '15', label: <Link href="/kafedra" className='uppercase font-semibold text-[18px] flex items-center' >Kafedralar</Link> },
    ],
  },
  {
    key: '4',
    label: <Link href="/news" className='uppercase font-semibold text-[18px] flex items-center' >Yangiliklar</Link>,
  },
  {
    key: '5',
    label: <Link href="/vacancy" className='uppercase font-semibold text-[18px] flex items-center' >Vakantlar</Link>,
  },
  {
    key: '6',
    label: <Link href="#" className='uppercase font-semibold text-[18px] flex items-center' >Qabul</Link>,
    children: [
      { key: '16', label: <Link href="/admission" className='uppercase font-semibold text-[18px] flex items-center' >Qabul 2024</Link> },
    ],
  },
  {
    key: '7',
    label: <Link href="/contact" className='uppercase font-semibold text-[18px] flex items-center' >Bog'lanish</Link>,
    link: "/contact",
  },
]


const Headerv1: React.FC = (): JSX.Element => {

  const { width, height } = useWindowSize();
  const top = useScrollTop();
  const t = useTranslations()

  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ background: "linear-gradient(345deg, rgba(1, 89, 101, 1) 0%, rgba(45, 66, 85, 1) 100%)" }}
      className={`z-[3] text-[14px] ${top > 164 ? 'bg-primary/95 backdrop-blur-md' : ''} ${top > height - 300 ? 'fixed w-full' : 'sticky'} top-0 md:-top-[7.4rem]`}
    >
      <div className="container mx-auto flex justify-between gap-4 py-4 md:py-8 md:border-b border-gray-100/30 text-white">
        <div className="flex gap-3">
          <Link href={"/"}>
            <svg className="xl:w-[205px] md:w-[180px] w-auto max-md:h-8" xmlns="http://www.w3.org/2000/svg" version="1.1"
              viewBox="0 0 1330.99 302.99"
            >
              <g id="Слой_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fill-white" d="M302.98 0l-302.98 0 0 0c0,166.64 136.34,302.98 302.98,302.98l0 0 0 -302.98zm-302.98 230.72l0 0 0 72.27 72.26 0 0 -0.01c0,-39.74 -32.51,-72.26 -72.26,-72.26z" />
                <path className="fill-white" d="M441.23 32.11c7.01,0 13.21,0.69 18.61,2.07 5.41,1.38 10.23,3.16 14.49,5.34l-5.35 17.59c-4.71,-2.3 -9.25,-4.06 -13.62,-5.26 -4.37,-1.21 -8.62,-1.81 -12.75,-1.81 -5.52,0 -9.8,1.09 -12.85,3.27 -3.04,2.19 -4.57,5.12 -4.57,8.8 0,3.79 1.33,6.66 3.97,8.62 2.64,1.95 6.89,3.85 12.76,5.68l10.34 3.28c8.62,2.87 15.37,6.95 20.25,12.24 4.89,5.29 7.33,11.78 7.33,19.48 0,4.6 -0.86,8.91 -2.58,12.93 -1.73,4.02 -4.31,7.53 -7.76,10.51 -3.45,2.99 -7.76,5.35 -12.93,7.07 -5.17,1.73 -11.21,2.59 -18.1,2.59 -12.99,0 -24.88,-2.65 -35.69,-7.93l5.35 -17.59c4.94,2.42 9.77,4.29 14.48,5.61 4.71,1.32 9.65,1.98 14.82,1.98 6.09,0 10.69,-1.12 13.79,-3.36 3.11,-2.24 4.66,-5.38 4.66,-9.4 0,-1.38 -0.26,-2.73 -0.78,-4.05 -0.51,-1.32 -1.46,-2.58 -2.84,-3.79 -1.38,-1.21 -3.25,-2.41 -5.6,-3.62 -2.36,-1.21 -5.43,-2.39 -9.23,-3.54l-9.13 -3.1c-4.03,-1.38 -7.7,-2.99 -11.04,-4.83 -3.33,-1.83 -6.17,-3.96 -8.53,-6.37 -2.36,-2.42 -4.19,-5.26 -5.52,-8.54 -1.32,-3.27 -1.98,-7.09 -1.98,-11.46 0,-4.71 0.86,-9.05 2.59,-13.02 1.72,-3.96 4.28,-7.38 7.67,-10.25 3.39,-2.88 7.58,-5.12 12.58,-6.73 5,-1.61 10.72,-2.41 17.16,-2.41zm57.06 35.51c4.94,-2.87 10.17,-5.08 15.68,-6.63 5.52,-1.56 11.38,-2.33 17.59,-2.33 4.94,0 9.45,0.57 13.53,1.72 4.08,1.15 7.59,2.96 10.52,5.43 2.93,2.47 5.17,5.63 6.72,9.48 1.55,3.85 2.33,8.48 2.33,13.88l0 53.44 -17.76 0 -2.07 -8.44 -0.69 0c-2.64,3.21 -6,5.74 -10.08,7.58 -4.08,1.84 -8.82,2.76 -14.22,2.76 -4.49,0 -8.45,-0.66 -11.9,-1.98 -3.45,-1.33 -6.38,-3.11 -8.79,-5.35 -2.41,-2.24 -4.23,-4.91 -5.43,-8.01 -1.21,-3.11 -1.81,-6.44 -1.81,-10 0,-4.72 1,-8.77 3.01,-12.16 2.02,-3.39 4.8,-6.17 8.37,-8.36 3.56,-2.18 7.72,-3.79 12.49,-4.82 4.77,-1.04 9.92,-1.56 15.43,-1.56l10.35 0 0 -5c0,-3.79 -1.18,-6.58 -3.54,-8.36 -2.35,-1.78 -5.66,-2.67 -9.91,-2.67 -3.33,0 -6.75,0.52 -10.26,1.55 -3.5,1.04 -7.38,2.7 -11.63,5l-7.93 -15.17zm43.44 38.96l-7.41 0.17c-7.01,0.23 -11.9,1.41 -14.66,3.54 -2.76,2.12 -4.13,4.68 -4.13,7.67 0,3.91 1.17,6.58 3.53,8.02 2.36,1.43 5.03,2.15 8.02,2.15 2.98,0 5.83,-0.86 8.53,-2.58 2.7,-1.73 4.74,-3.74 6.12,-6.04l0 -12.93zm42.41 36.03l0 -82.23 17.75 0 2.59 14.83c1.95,-4.37 5.06,-8.22 9.31,-11.55 4.25,-3.34 9.6,-5 16.03,-5 2.64,0 5,0.29 7.07,0.86 2.07,0.57 3.79,1.26 5.17,2.07l-3.79 18.1c-1.27,-0.69 -2.88,-1.29 -4.83,-1.81 -1.95,-0.52 -4.25,-0.78 -6.89,-0.78 -5.64,0 -10.32,1.87 -14.05,5.61 -3.74,3.73 -5.61,9.85 -5.61,18.36l0 41.54 -22.75 0zm148.77 -40.86c0,6.56 -0.98,12.48 -2.93,17.76 -1.95,5.29 -4.65,9.8 -8.1,13.53 -3.45,3.74 -7.53,6.58 -12.24,8.54 -4.71,1.95 -9.83,2.93 -15.35,2.93 -5.4,0 -9.99,-0.84 -13.79,-2.5 -3.79,-1.67 -7.12,-3.99 -10,-6.98l-0.68 0 -1.56 7.58 -16.55 0 0 -123.08 22.76 0 0 47.57c2.87,-2.64 6.23,-4.71 10.08,-6.2 3.85,-1.5 7.96,-2.24 12.33,-2.24 11.26,0 20.08,3.79 26.46,11.38 6.38,7.58 9.57,18.15 9.57,31.71zm-23.62 0.52c0,-8.5 -1.66,-14.97 -5,-19.39 -3.33,-4.43 -8.04,-6.64 -14.13,-6.64 -3.22,0 -6.21,0.78 -8.97,2.33 -2.76,1.55 -4.94,3.3 -6.55,5.26l0 37.75c1.5,1.72 3.42,3.16 5.78,4.31 2.35,1.15 4.85,1.72 7.5,1.72 2.75,0 5.43,-0.51 8.01,-1.55 2.59,-1.03 4.89,-2.58 6.9,-4.65 2.01,-2.07 3.59,-4.69 4.74,-7.85 1.15,-3.16 1.72,-6.92 1.72,-11.29zm119.99 -1.38c0,6.78 -1.1,12.88 -3.28,18.28 -2.18,5.4 -5.2,9.97 -9.05,13.7 -3.85,3.74 -8.36,6.61 -13.53,8.62 -5.17,2.01 -10.75,3.02 -16.72,3.02 -5.98,0 -11.53,-0.92 -16.64,-2.76 -5.11,-1.84 -9.54,-4.54 -13.27,-8.1 -3.74,-3.57 -6.67,-7.96 -8.8,-13.19 -2.12,-5.23 -3.18,-11.18 -3.18,-17.84 0,-7.01 1.09,-13.25 3.27,-18.71 2.18,-5.46 5.2,-10.05 9.05,-13.79 3.85,-3.73 8.36,-6.58 13.53,-8.53 5.17,-1.96 10.75,-2.93 16.73,-2.93 5.97,0 11.52,0.92 16.63,2.76 5.12,1.83 9.54,4.51 13.27,8.01 3.74,3.51 6.67,7.9 8.8,13.19 2.12,5.29 3.19,11.38 3.19,18.27zm-23.62 0.86c0,-4.71 -0.52,-8.73 -1.55,-12.06 -1.04,-3.33 -2.42,-6.04 -4.14,-8.1 -1.72,-2.07 -3.74,-3.6 -6.03,-4.57 -2.3,-0.98 -4.66,-1.47 -7.07,-1.47 -2.42,0 -4.71,0.43 -6.9,1.29 -2.18,0.87 -4.14,2.3 -5.86,4.31 -1.72,2.02 -3.1,4.69 -4.14,8.02 -1.03,3.33 -1.55,7.53 -1.55,12.58 0,4.49 0.52,8.37 1.55,11.64 1.04,3.28 2.45,5.95 4.23,8.02 1.78,2.07 3.79,3.62 6.03,4.65 2.24,1.04 4.57,1.55 6.98,1.55 2.42,0 4.71,-0.43 6.9,-1.29 2.18,-0.86 4.14,-2.33 5.86,-4.39 1.72,-2.07 3.1,-4.75 4.14,-8.02 1.03,-3.28 1.55,-7.33 1.55,-12.16zm62.92 40.86l-22.93 0 0 -82.23 17.93 0 2.76 10.52c3.79,-3.91 7.96,-6.93 12.5,-9.05 4.54,-2.13 9.57,-3.19 15.08,-3.19 9.08,0 16.04,2.47 20.86,7.41 4.83,4.94 7.24,12.13 7.24,21.55l0 54.99 -22.92 0 0 -52.58c0,-4.25 -1.04,-7.61 -3.11,-10.08 -2.07,-2.47 -5.11,-3.71 -9.13,-3.71 -2.99,0 -6.13,0.84 -9.4,2.5 -3.28,1.67 -6.23,3.94 -8.88,6.81l0 57.06z" />
                <path className="fill-white" d="M401.26 172.96l23.62 0 0 64.99c0,8.96 1.81,15.77 5.43,20.43 3.62,4.65 9.22,6.98 16.81,6.98 7.47,0 12.87,-2.36 16.2,-7.07 3.33,-4.71 5,-10.8 5,-18.27l0 -67.06 23.62 0 0 65.33c0,15.18 -3.77,26.5 -11.29,33.96 -7.53,7.48 -18.71,11.21 -33.53,11.21 -14.26,0 -25.46,-3.73 -33.62,-11.21 -8.16,-7.46 -12.24,-19.07 -12.24,-34.82l0 -64.47zm135.67 108.6l-22.93 0 0 -82.23 17.93 0 2.76 10.52c3.79,-3.91 7.96,-6.93 12.5,-9.05 4.54,-2.13 9.57,-3.19 15.08,-3.19 9.08,0 16.04,2.47 20.86,7.41 4.83,4.94 7.24,12.13 7.24,21.55l0 54.99 -22.92 0 0 -52.57c0,-4.26 -1.04,-7.62 -3.11,-10.09 -2.07,-2.47 -5.11,-3.71 -9.13,-3.71 -2.99,0 -6.12,0.84 -9.4,2.5 -3.28,1.67 -6.24,3.94 -8.88,6.81l0 57.06zm76.2 0l0 -82.23 22.93 0 0 82.23 -22.93 0zm11.55 -99.81c-3.91,0 -6.95,-1.12 -9.14,-3.36 -2.18,-2.24 -3.27,-5.03 -3.27,-8.36 0,-3.34 1.09,-6.12 3.27,-8.36 2.19,-2.25 5.23,-3.37 9.14,-3.37 3.79,0 6.81,1.12 9.05,3.37 2.24,2.24 3.36,5.02 3.36,8.36 0,3.33 -1.09,6.12 -3.27,8.36 -2.19,2.24 -5.23,3.36 -9.14,3.36zm85.16 17.58l24.31 0 -29.14 82.23 -26.54 0 -28.28 -82.23 24.48 0 12.07 41.03 5 24.83 0.69 0 5 -24.83 12.41 -41.03zm107.75 47.07l-54.65 0 0 0.69c0,6.55 2.3,11.43 6.89,14.65 4.6,3.22 10.52,4.83 17.76,4.83 4.6,0 8.65,-0.46 12.15,-1.38 3.51,-0.92 6.7,-2.01 9.57,-3.28l4.14 16.03c-3.11,1.5 -7.01,2.79 -11.73,3.88 -4.71,1.09 -10.28,1.64 -16.72,1.64 -6.2,0 -12.04,-0.83 -17.5,-2.5 -5.45,-1.67 -10.22,-4.22 -14.3,-7.67 -4.08,-3.45 -7.33,-7.82 -9.74,-13.1 -2.42,-5.29 -3.62,-11.61 -3.62,-18.96 0,-6.56 0.97,-12.5 2.93,-17.85 1.95,-5.34 4.74,-9.91 8.36,-13.7 3.62,-3.8 7.96,-6.76 13.01,-8.88 5.06,-2.13 10.69,-3.19 16.9,-3.19 11.15,0 20.02,3.39 26.63,10.17 6.61,6.78 9.92,16.26 9.92,28.45l0 10.17zm-23.45 -15.69c0,-2.18 -0.26,-4.31 -0.78,-6.38 -0.51,-2.07 -1.35,-3.88 -2.5,-5.43 -1.14,-1.55 -2.58,-2.79 -4.31,-3.71 -1.72,-0.92 -3.85,-1.38 -6.37,-1.38 -4.6,0 -8.39,1.56 -11.38,4.66 -2.99,3.1 -4.77,7.3 -5.35,12.58l30.69 -0.34zm39.65 50.85l0 -82.23 17.76 0 2.58 14.83c1.96,-4.37 5.06,-8.22 9.31,-11.55 4.25,-3.33 9.6,-5 16.03,-5 2.65,0 5,0.29 7.07,0.86 2.07,0.58 3.79,1.27 5.17,2.07l-3.79 18.1c-1.26,-0.69 -2.87,-1.29 -4.83,-1.81 -1.95,-0.52 -4.25,-0.77 -6.89,-0.77 -5.63,0 -10.32,1.86 -14.05,5.6 -3.74,3.73 -5.6,9.85 -5.6,18.36l0 41.54 -22.76 0zm116.88 -62.57c-6.78,-3.22 -13.33,-4.83 -19.65,-4.83 -3.68,0 -6.52,0.63 -8.53,1.9 -2.01,1.26 -3.02,2.98 -3.02,5.17 0,2.18 0.89,3.96 2.67,5.34 1.78,1.38 5.37,2.87 10.78,4.48l5.17 1.56c7.12,2.06 12.53,5.05 16.2,8.96 3.68,3.91 5.52,8.96 5.52,15.17 0,8.16 -3.13,14.65 -9.4,19.48 -6.26,4.83 -14.74,7.24 -25.42,7.24 -10.92,0 -20.29,-1.95 -28.1,-5.86l5.17 -16.89c3.33,1.72 6.84,3.13 10.51,4.22 3.68,1.09 7.42,1.64 11.21,1.64 4.6,0 7.96,-0.72 10.08,-2.16 2.13,-1.44 3.19,-3.3 3.19,-5.6 0,-2.41 -1.03,-4.28 -3.1,-5.6 -2.07,-1.33 -5.98,-2.79 -11.72,-4.4l-5.35 -1.55c-6.89,-2.3 -11.95,-5.35 -15.17,-9.14 -3.21,-3.79 -4.82,-8.85 -4.82,-15.17 0,-7.47 2.81,-13.56 8.44,-18.27 5.63,-4.71 13.51,-7.07 23.62,-7.07 10,0 18.85,1.78 26.55,5.34l-4.83 16.04zm27.24 62.57l0 -82.23 22.93 0 0 82.23 -22.93 0zm11.55 -99.81c-3.91,0 -6.95,-1.12 -9.14,-3.36 -2.18,-2.24 -3.27,-5.03 -3.27,-8.36 0,-3.34 1.09,-6.12 3.27,-8.36 2.19,-2.25 5.23,-3.37 9.14,-3.37 3.79,0 6.81,1.12 9.05,3.37 2.24,2.24 3.36,5.02 3.36,8.36 0,3.33 -1.09,6.12 -3.27,8.36 -2.19,2.24 -5.23,3.36 -9.14,3.36zm83.27 34.13l-21.9 0 0 37.93c0,3.91 0.89,6.58 2.67,8.02 1.79,1.43 4.17,2.15 7.16,2.15 2.3,0 4.65,-0.23 7.07,-0.69 2.41,-0.46 4.36,-1.09 5.86,-1.9l3.45 16.04c-1.96,0.92 -4.89,1.84 -8.8,2.76 -3.9,0.91 -8.04,1.37 -12.41,1.37 -10,0 -17.12,-1.98 -21.37,-5.94 -4.26,-3.97 -6.38,-9.92 -6.38,-17.85l0 -41.89 -12.76 0 0 -16.55 12.76 0 0 -25.34 22.75 0 0 25.34 21.9 0 0 16.55zm89.98 30.52l-54.64 0 0 0.69c0,6.55 2.29,11.43 6.89,14.65 4.6,3.22 10.52,4.83 17.76,4.83 4.6,0 8.65,-0.46 12.15,-1.38 3.51,-0.92 6.7,-2.01 9.57,-3.28l4.14 16.03c-3.11,1.5 -7.01,2.79 -11.73,3.88 -4.71,1.09 -10.28,1.64 -16.72,1.64 -6.2,0 -12.04,-0.83 -17.5,-2.5 -5.45,-1.67 -10.22,-4.22 -14.3,-7.67 -4.08,-3.45 -7.33,-7.82 -9.74,-13.1 -2.42,-5.29 -3.62,-11.61 -3.62,-18.96 0,-6.56 0.97,-12.5 2.93,-17.85 1.95,-5.34 4.74,-9.91 8.36,-13.7 3.62,-3.8 7.96,-6.76 13.01,-8.88 5.06,-2.13 10.69,-3.19 16.9,-3.19 11.15,0 20.02,3.39 26.63,10.17 6.61,6.78 9.91,16.26 9.91,28.45l0 10.17zm-23.44 -15.69c0,-2.18 -0.26,-4.31 -0.78,-6.38 -0.51,-2.07 -1.35,-3.88 -2.5,-5.43 -1.15,-1.55 -2.58,-2.79 -4.31,-3.71 -1.72,-0.92 -3.85,-1.38 -6.37,-1.38 -4.6,0 -8.39,1.56 -11.38,4.66 -2.99,3.1 -4.77,7.3 -5.35,12.58l30.69 -0.34zm88.78 -14.83l-21.89 0 0 37.93c0,3.91 0.89,6.58 2.67,8.02 1.78,1.43 4.17,2.15 7.15,2.15 2.3,0 4.66,-0.23 7.07,-0.69 2.42,-0.46 4.37,-1.09 5.86,-1.9l3.45 16.04c-1.95,0.92 -4.88,1.84 -8.79,2.76 -3.91,0.91 -8.05,1.37 -12.41,1.37 -10,0 -17.13,-1.98 -21.38,-5.94 -4.25,-3.97 -6.38,-9.92 -6.38,-17.85l0 -41.89 -12.75 0 0 -16.55 12.75 0 0 -25.34 22.76 0 0 25.34 21.89 0 0 16.55zm18.62 65.68l0 -82.23 22.93 0 0 82.23 -22.93 0zm11.55 -99.81c-3.91,0 -6.95,-1.12 -9.14,-3.36 -2.18,-2.24 -3.27,-5.03 -3.27,-8.36 0,-3.34 1.09,-6.12 3.27,-8.36 2.19,-2.25 5.23,-3.37 9.14,-3.37 3.79,0 6.81,1.12 9.05,3.37 2.24,2.24 3.36,5.02 3.36,8.36 0,3.33 -1.09,6.12 -3.27,8.36 -2.19,2.24 -5.23,3.36 -9.14,3.36z" />
                <path className="fill-white" d="M1312.04 158.3c5.24,0 9.97,2.12 13.4,5.55 3.43,3.43 5.55,8.17 5.55,13.4 0,5.23 -2.12,9.96 -5.55,13.39 -3.43,3.43 -8.16,5.55 -13.4,5.55 -5.23,0 -9.96,-2.12 -13.39,-5.55 -3.43,-3.43 -5.55,-8.16 -5.55,-13.39 0,-5.23 2.12,-9.97 5.55,-13.4 3.43,-3.43 8.16,-5.55 13.39,-5.55zm-8.46 29.08l0 -20.27 8.98 0c1.81,0 3.18,0.19 4.12,0.55 0.94,0.36 1.69,1.01 2.25,1.93 0.56,0.92 0.84,1.93 0.84,3.05 0,1.44 -0.47,2.65 -1.4,3.64 -0.93,0.98 -2.36,1.61 -4.31,1.87 0.72,0.34 1.25,0.68 1.62,1.01 0.78,0.72 1.52,1.62 2.22,2.7l3.5 5.52 -3.35 0 -2.68 -4.22c-0.77,-1.22 -1.42,-2.15 -1.93,-2.79 -0.5,-0.65 -0.96,-1.1 -1.36,-1.36 -0.39,-0.25 -0.81,-0.43 -1.22,-0.54 -0.3,-0.06 -0.8,-0.09 -1.49,-0.09l-3.11 0 0 9 -2.68 0zm2.68 -11.32l5.76 0c1.23,0 2.18,-0.13 2.87,-0.38 0.69,-0.25 1.21,-0.66 1.56,-1.22 0.36,-0.56 0.54,-1.16 0.54,-1.82 0,-0.95 -0.34,-1.75 -1.04,-2.37 -0.69,-0.61 -1.78,-0.92 -3.28,-0.92l-6.41 0 0 6.71zm17.6 -10.63c-3.02,-3.03 -7.2,-4.9 -11.82,-4.9 -4.61,0 -8.79,1.87 -11.82,4.9 -3.02,3.02 -4.89,7.2 -4.89,11.82 0,4.61 1.87,8.79 4.89,11.82 3.03,3.02 7.21,4.89 11.82,4.89 4.62,0 8.8,-1.87 11.82,-4.89 3.03,-3.03 4.9,-7.21 4.9,-11.82 0,-4.62 -1.87,-8.8 -4.9,-11.82z" />
              </g>
            </svg>
          </Link>

          <div className="hidden md:block border-r border-gray-100/30"></div>

          {/* <h1 className='text-xl uppercase leading-[45px]' >nimadir</h1> */}
        </div>

        <div className="flex items-center md:hidden">
          <svg className="cursor-pointer size-7" onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
          </svg>
        </div>

        <div className="hidden md:flex gap-6">
          <div className="text-end">
            <p className='opacity-60' >Contact center</p>
            <h2 className="text-[20px] font-bold" ><a href="tel:+998718882288">+998 71 888 22 88</a></h2>
          </div>
          <MainButton
            title={t("global.acceptance")}
            type={"light"}
            isArrow
            onClick={() => window ? window.open('https://qabul.sarbonuniversity.uz', '_blank') : {}}
            className='border border-transparent hover:border-white px-12'
          />
        </div>
      </div>

      <div className="container mx-auto py-4 text-white sticky top-0 hidden md:flex items-center justify-between gap-12">
        <div className="flex items-center gap-12">
          {
            top > 164 ? <svg className="h-8" xmlns="http://www.w3.org/2000/svg" version="1.1"
              viewBox="0 0 1330.99 302.99"
            >
              <g id="Слой_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fill-white" d="M302.98 0l-302.98 0 0 0c0,166.64 136.34,302.98 302.98,302.98l0 0 0 -302.98zm-302.98 230.72l0 0 0 72.27 72.26 0 0 -0.01c0,-39.74 -32.51,-72.26 -72.26,-72.26z" />
                <path className="fill-white" d="M441.23 32.11c7.01,0 13.21,0.69 18.61,2.07 5.41,1.38 10.23,3.16 14.49,5.34l-5.35 17.59c-4.71,-2.3 -9.25,-4.06 -13.62,-5.26 -4.37,-1.21 -8.62,-1.81 -12.75,-1.81 -5.52,0 -9.8,1.09 -12.85,3.27 -3.04,2.19 -4.57,5.12 -4.57,8.8 0,3.79 1.33,6.66 3.97,8.62 2.64,1.95 6.89,3.85 12.76,5.68l10.34 3.28c8.62,2.87 15.37,6.95 20.25,12.24 4.89,5.29 7.33,11.78 7.33,19.48 0,4.6 -0.86,8.91 -2.58,12.93 -1.73,4.02 -4.31,7.53 -7.76,10.51 -3.45,2.99 -7.76,5.35 -12.93,7.07 -5.17,1.73 -11.21,2.59 -18.1,2.59 -12.99,0 -24.88,-2.65 -35.69,-7.93l5.35 -17.59c4.94,2.42 9.77,4.29 14.48,5.61 4.71,1.32 9.65,1.98 14.82,1.98 6.09,0 10.69,-1.12 13.79,-3.36 3.11,-2.24 4.66,-5.38 4.66,-9.4 0,-1.38 -0.26,-2.73 -0.78,-4.05 -0.51,-1.32 -1.46,-2.58 -2.84,-3.79 -1.38,-1.21 -3.25,-2.41 -5.6,-3.62 -2.36,-1.21 -5.43,-2.39 -9.23,-3.54l-9.13 -3.1c-4.03,-1.38 -7.7,-2.99 -11.04,-4.83 -3.33,-1.83 -6.17,-3.96 -8.53,-6.37 -2.36,-2.42 -4.19,-5.26 -5.52,-8.54 -1.32,-3.27 -1.98,-7.09 -1.98,-11.46 0,-4.71 0.86,-9.05 2.59,-13.02 1.72,-3.96 4.28,-7.38 7.67,-10.25 3.39,-2.88 7.58,-5.12 12.58,-6.73 5,-1.61 10.72,-2.41 17.16,-2.41zm57.06 35.51c4.94,-2.87 10.17,-5.08 15.68,-6.63 5.52,-1.56 11.38,-2.33 17.59,-2.33 4.94,0 9.45,0.57 13.53,1.72 4.08,1.15 7.59,2.96 10.52,5.43 2.93,2.47 5.17,5.63 6.72,9.48 1.55,3.85 2.33,8.48 2.33,13.88l0 53.44 -17.76 0 -2.07 -8.44 -0.69 0c-2.64,3.21 -6,5.74 -10.08,7.58 -4.08,1.84 -8.82,2.76 -14.22,2.76 -4.49,0 -8.45,-0.66 -11.9,-1.98 -3.45,-1.33 -6.38,-3.11 -8.79,-5.35 -2.41,-2.24 -4.23,-4.91 -5.43,-8.01 -1.21,-3.11 -1.81,-6.44 -1.81,-10 0,-4.72 1,-8.77 3.01,-12.16 2.02,-3.39 4.8,-6.17 8.37,-8.36 3.56,-2.18 7.72,-3.79 12.49,-4.82 4.77,-1.04 9.92,-1.56 15.43,-1.56l10.35 0 0 -5c0,-3.79 -1.18,-6.58 -3.54,-8.36 -2.35,-1.78 -5.66,-2.67 -9.91,-2.67 -3.33,0 -6.75,0.52 -10.26,1.55 -3.5,1.04 -7.38,2.7 -11.63,5l-7.93 -15.17zm43.44 38.96l-7.41 0.17c-7.01,0.23 -11.9,1.41 -14.66,3.54 -2.76,2.12 -4.13,4.68 -4.13,7.67 0,3.91 1.17,6.58 3.53,8.02 2.36,1.43 5.03,2.15 8.02,2.15 2.98,0 5.83,-0.86 8.53,-2.58 2.7,-1.73 4.74,-3.74 6.12,-6.04l0 -12.93zm42.41 36.03l0 -82.23 17.75 0 2.59 14.83c1.95,-4.37 5.06,-8.22 9.31,-11.55 4.25,-3.34 9.6,-5 16.03,-5 2.64,0 5,0.29 7.07,0.86 2.07,0.57 3.79,1.26 5.17,2.07l-3.79 18.1c-1.27,-0.69 -2.88,-1.29 -4.83,-1.81 -1.95,-0.52 -4.25,-0.78 -6.89,-0.78 -5.64,0 -10.32,1.87 -14.05,5.61 -3.74,3.73 -5.61,9.85 -5.61,18.36l0 41.54 -22.75 0zm148.77 -40.86c0,6.56 -0.98,12.48 -2.93,17.76 -1.95,5.29 -4.65,9.8 -8.1,13.53 -3.45,3.74 -7.53,6.58 -12.24,8.54 -4.71,1.95 -9.83,2.93 -15.35,2.93 -5.4,0 -9.99,-0.84 -13.79,-2.5 -3.79,-1.67 -7.12,-3.99 -10,-6.98l-0.68 0 -1.56 7.58 -16.55 0 0 -123.08 22.76 0 0 47.57c2.87,-2.64 6.23,-4.71 10.08,-6.2 3.85,-1.5 7.96,-2.24 12.33,-2.24 11.26,0 20.08,3.79 26.46,11.38 6.38,7.58 9.57,18.15 9.57,31.71zm-23.62 0.52c0,-8.5 -1.66,-14.97 -5,-19.39 -3.33,-4.43 -8.04,-6.64 -14.13,-6.64 -3.22,0 -6.21,0.78 -8.97,2.33 -2.76,1.55 -4.94,3.3 -6.55,5.26l0 37.75c1.5,1.72 3.42,3.16 5.78,4.31 2.35,1.15 4.85,1.72 7.5,1.72 2.75,0 5.43,-0.51 8.01,-1.55 2.59,-1.03 4.89,-2.58 6.9,-4.65 2.01,-2.07 3.59,-4.69 4.74,-7.85 1.15,-3.16 1.72,-6.92 1.72,-11.29zm119.99 -1.38c0,6.78 -1.1,12.88 -3.28,18.28 -2.18,5.4 -5.2,9.97 -9.05,13.7 -3.85,3.74 -8.36,6.61 -13.53,8.62 -5.17,2.01 -10.75,3.02 -16.72,3.02 -5.98,0 -11.53,-0.92 -16.64,-2.76 -5.11,-1.84 -9.54,-4.54 -13.27,-8.1 -3.74,-3.57 -6.67,-7.96 -8.8,-13.19 -2.12,-5.23 -3.18,-11.18 -3.18,-17.84 0,-7.01 1.09,-13.25 3.27,-18.71 2.18,-5.46 5.2,-10.05 9.05,-13.79 3.85,-3.73 8.36,-6.58 13.53,-8.53 5.17,-1.96 10.75,-2.93 16.73,-2.93 5.97,0 11.52,0.92 16.63,2.76 5.12,1.83 9.54,4.51 13.27,8.01 3.74,3.51 6.67,7.9 8.8,13.19 2.12,5.29 3.19,11.38 3.19,18.27zm-23.62 0.86c0,-4.71 -0.52,-8.73 -1.55,-12.06 -1.04,-3.33 -2.42,-6.04 -4.14,-8.1 -1.72,-2.07 -3.74,-3.6 -6.03,-4.57 -2.3,-0.98 -4.66,-1.47 -7.07,-1.47 -2.42,0 -4.71,0.43 -6.9,1.29 -2.18,0.87 -4.14,2.3 -5.86,4.31 -1.72,2.02 -3.1,4.69 -4.14,8.02 -1.03,3.33 -1.55,7.53 -1.55,12.58 0,4.49 0.52,8.37 1.55,11.64 1.04,3.28 2.45,5.95 4.23,8.02 1.78,2.07 3.79,3.62 6.03,4.65 2.24,1.04 4.57,1.55 6.98,1.55 2.42,0 4.71,-0.43 6.9,-1.29 2.18,-0.86 4.14,-2.33 5.86,-4.39 1.72,-2.07 3.1,-4.75 4.14,-8.02 1.03,-3.28 1.55,-7.33 1.55,-12.16zm62.92 40.86l-22.93 0 0 -82.23 17.93 0 2.76 10.52c3.79,-3.91 7.96,-6.93 12.5,-9.05 4.54,-2.13 9.57,-3.19 15.08,-3.19 9.08,0 16.04,2.47 20.86,7.41 4.83,4.94 7.24,12.13 7.24,21.55l0 54.99 -22.92 0 0 -52.58c0,-4.25 -1.04,-7.61 -3.11,-10.08 -2.07,-2.47 -5.11,-3.71 -9.13,-3.71 -2.99,0 -6.13,0.84 -9.4,2.5 -3.28,1.67 -6.23,3.94 -8.88,6.81l0 57.06z" />
                <path className="fill-white" d="M401.26 172.96l23.62 0 0 64.99c0,8.96 1.81,15.77 5.43,20.43 3.62,4.65 9.22,6.98 16.81,6.98 7.47,0 12.87,-2.36 16.2,-7.07 3.33,-4.71 5,-10.8 5,-18.27l0 -67.06 23.62 0 0 65.33c0,15.18 -3.77,26.5 -11.29,33.96 -7.53,7.48 -18.71,11.21 -33.53,11.21 -14.26,0 -25.46,-3.73 -33.62,-11.21 -8.16,-7.46 -12.24,-19.07 -12.24,-34.82l0 -64.47zm135.67 108.6l-22.93 0 0 -82.23 17.93 0 2.76 10.52c3.79,-3.91 7.96,-6.93 12.5,-9.05 4.54,-2.13 9.57,-3.19 15.08,-3.19 9.08,0 16.04,2.47 20.86,7.41 4.83,4.94 7.24,12.13 7.24,21.55l0 54.99 -22.92 0 0 -52.57c0,-4.26 -1.04,-7.62 -3.11,-10.09 -2.07,-2.47 -5.11,-3.71 -9.13,-3.71 -2.99,0 -6.12,0.84 -9.4,2.5 -3.28,1.67 -6.24,3.94 -8.88,6.81l0 57.06zm76.2 0l0 -82.23 22.93 0 0 82.23 -22.93 0zm11.55 -99.81c-3.91,0 -6.95,-1.12 -9.14,-3.36 -2.18,-2.24 -3.27,-5.03 -3.27,-8.36 0,-3.34 1.09,-6.12 3.27,-8.36 2.19,-2.25 5.23,-3.37 9.14,-3.37 3.79,0 6.81,1.12 9.05,3.37 2.24,2.24 3.36,5.02 3.36,8.36 0,3.33 -1.09,6.12 -3.27,8.36 -2.19,2.24 -5.23,3.36 -9.14,3.36zm85.16 17.58l24.31 0 -29.14 82.23 -26.54 0 -28.28 -82.23 24.48 0 12.07 41.03 5 24.83 0.69 0 5 -24.83 12.41 -41.03zm107.75 47.07l-54.65 0 0 0.69c0,6.55 2.3,11.43 6.89,14.65 4.6,3.22 10.52,4.83 17.76,4.83 4.6,0 8.65,-0.46 12.15,-1.38 3.51,-0.92 6.7,-2.01 9.57,-3.28l4.14 16.03c-3.11,1.5 -7.01,2.79 -11.73,3.88 -4.71,1.09 -10.28,1.64 -16.72,1.64 -6.2,0 -12.04,-0.83 -17.5,-2.5 -5.45,-1.67 -10.22,-4.22 -14.3,-7.67 -4.08,-3.45 -7.33,-7.82 -9.74,-13.1 -2.42,-5.29 -3.62,-11.61 -3.62,-18.96 0,-6.56 0.97,-12.5 2.93,-17.85 1.95,-5.34 4.74,-9.91 8.36,-13.7 3.62,-3.8 7.96,-6.76 13.01,-8.88 5.06,-2.13 10.69,-3.19 16.9,-3.19 11.15,0 20.02,3.39 26.63,10.17 6.61,6.78 9.92,16.26 9.92,28.45l0 10.17zm-23.45 -15.69c0,-2.18 -0.26,-4.31 -0.78,-6.38 -0.51,-2.07 -1.35,-3.88 -2.5,-5.43 -1.14,-1.55 -2.58,-2.79 -4.31,-3.71 -1.72,-0.92 -3.85,-1.38 -6.37,-1.38 -4.6,0 -8.39,1.56 -11.38,4.66 -2.99,3.1 -4.77,7.3 -5.35,12.58l30.69 -0.34zm39.65 50.85l0 -82.23 17.76 0 2.58 14.83c1.96,-4.37 5.06,-8.22 9.31,-11.55 4.25,-3.33 9.6,-5 16.03,-5 2.65,0 5,0.29 7.07,0.86 2.07,0.58 3.79,1.27 5.17,2.07l-3.79 18.1c-1.26,-0.69 -2.87,-1.29 -4.83,-1.81 -1.95,-0.52 -4.25,-0.77 -6.89,-0.77 -5.63,0 -10.32,1.86 -14.05,5.6 -3.74,3.73 -5.6,9.85 -5.6,18.36l0 41.54 -22.76 0zm116.88 -62.57c-6.78,-3.22 -13.33,-4.83 -19.65,-4.83 -3.68,0 -6.52,0.63 -8.53,1.9 -2.01,1.26 -3.02,2.98 -3.02,5.17 0,2.18 0.89,3.96 2.67,5.34 1.78,1.38 5.37,2.87 10.78,4.48l5.17 1.56c7.12,2.06 12.53,5.05 16.2,8.96 3.68,3.91 5.52,8.96 5.52,15.17 0,8.16 -3.13,14.65 -9.4,19.48 -6.26,4.83 -14.74,7.24 -25.42,7.24 -10.92,0 -20.29,-1.95 -28.1,-5.86l5.17 -16.89c3.33,1.72 6.84,3.13 10.51,4.22 3.68,1.09 7.42,1.64 11.21,1.64 4.6,0 7.96,-0.72 10.08,-2.16 2.13,-1.44 3.19,-3.3 3.19,-5.6 0,-2.41 -1.03,-4.28 -3.1,-5.6 -2.07,-1.33 -5.98,-2.79 -11.72,-4.4l-5.35 -1.55c-6.89,-2.3 -11.95,-5.35 -15.17,-9.14 -3.21,-3.79 -4.82,-8.85 -4.82,-15.17 0,-7.47 2.81,-13.56 8.44,-18.27 5.63,-4.71 13.51,-7.07 23.62,-7.07 10,0 18.85,1.78 26.55,5.34l-4.83 16.04zm27.24 62.57l0 -82.23 22.93 0 0 82.23 -22.93 0zm11.55 -99.81c-3.91,0 -6.95,-1.12 -9.14,-3.36 -2.18,-2.24 -3.27,-5.03 -3.27,-8.36 0,-3.34 1.09,-6.12 3.27,-8.36 2.19,-2.25 5.23,-3.37 9.14,-3.37 3.79,0 6.81,1.12 9.05,3.37 2.24,2.24 3.36,5.02 3.36,8.36 0,3.33 -1.09,6.12 -3.27,8.36 -2.19,2.24 -5.23,3.36 -9.14,3.36zm83.27 34.13l-21.9 0 0 37.93c0,3.91 0.89,6.58 2.67,8.02 1.79,1.43 4.17,2.15 7.16,2.15 2.3,0 4.65,-0.23 7.07,-0.69 2.41,-0.46 4.36,-1.09 5.86,-1.9l3.45 16.04c-1.96,0.92 -4.89,1.84 -8.8,2.76 -3.9,0.91 -8.04,1.37 -12.41,1.37 -10,0 -17.12,-1.98 -21.37,-5.94 -4.26,-3.97 -6.38,-9.92 -6.38,-17.85l0 -41.89 -12.76 0 0 -16.55 12.76 0 0 -25.34 22.75 0 0 25.34 21.9 0 0 16.55zm89.98 30.52l-54.64 0 0 0.69c0,6.55 2.29,11.43 6.89,14.65 4.6,3.22 10.52,4.83 17.76,4.83 4.6,0 8.65,-0.46 12.15,-1.38 3.51,-0.92 6.7,-2.01 9.57,-3.28l4.14 16.03c-3.11,1.5 -7.01,2.79 -11.73,3.88 -4.71,1.09 -10.28,1.64 -16.72,1.64 -6.2,0 -12.04,-0.83 -17.5,-2.5 -5.45,-1.67 -10.22,-4.22 -14.3,-7.67 -4.08,-3.45 -7.33,-7.82 -9.74,-13.1 -2.42,-5.29 -3.62,-11.61 -3.62,-18.96 0,-6.56 0.97,-12.5 2.93,-17.85 1.95,-5.34 4.74,-9.91 8.36,-13.7 3.62,-3.8 7.96,-6.76 13.01,-8.88 5.06,-2.13 10.69,-3.19 16.9,-3.19 11.15,0 20.02,3.39 26.63,10.17 6.61,6.78 9.91,16.26 9.91,28.45l0 10.17zm-23.44 -15.69c0,-2.18 -0.26,-4.31 -0.78,-6.38 -0.51,-2.07 -1.35,-3.88 -2.5,-5.43 -1.15,-1.55 -2.58,-2.79 -4.31,-3.71 -1.72,-0.92 -3.85,-1.38 -6.37,-1.38 -4.6,0 -8.39,1.56 -11.38,4.66 -2.99,3.1 -4.77,7.3 -5.35,12.58l30.69 -0.34zm88.78 -14.83l-21.89 0 0 37.93c0,3.91 0.89,6.58 2.67,8.02 1.78,1.43 4.17,2.15 7.15,2.15 2.3,0 4.66,-0.23 7.07,-0.69 2.42,-0.46 4.37,-1.09 5.86,-1.9l3.45 16.04c-1.95,0.92 -4.88,1.84 -8.79,2.76 -3.91,0.91 -8.05,1.37 -12.41,1.37 -10,0 -17.13,-1.98 -21.38,-5.94 -4.25,-3.97 -6.38,-9.92 -6.38,-17.85l0 -41.89 -12.75 0 0 -16.55 12.75 0 0 -25.34 22.76 0 0 25.34 21.89 0 0 16.55zm18.62 65.68l0 -82.23 22.93 0 0 82.23 -22.93 0zm11.55 -99.81c-3.91,0 -6.95,-1.12 -9.14,-3.36 -2.18,-2.24 -3.27,-5.03 -3.27,-8.36 0,-3.34 1.09,-6.12 3.27,-8.36 2.19,-2.25 5.23,-3.37 9.14,-3.37 3.79,0 6.81,1.12 9.05,3.37 2.24,2.24 3.36,5.02 3.36,8.36 0,3.33 -1.09,6.12 -3.27,8.36 -2.19,2.24 -5.23,3.36 -9.14,3.36z" />
                <path className="fill-white" d="M1312.04 158.3c5.24,0 9.97,2.12 13.4,5.55 3.43,3.43 5.55,8.17 5.55,13.4 0,5.23 -2.12,9.96 -5.55,13.39 -3.43,3.43 -8.16,5.55 -13.4,5.55 -5.23,0 -9.96,-2.12 -13.39,-5.55 -3.43,-3.43 -5.55,-8.16 -5.55,-13.39 0,-5.23 2.12,-9.97 5.55,-13.4 3.43,-3.43 8.16,-5.55 13.39,-5.55zm-8.46 29.08l0 -20.27 8.98 0c1.81,0 3.18,0.19 4.12,0.55 0.94,0.36 1.69,1.01 2.25,1.93 0.56,0.92 0.84,1.93 0.84,3.05 0,1.44 -0.47,2.65 -1.4,3.64 -0.93,0.98 -2.36,1.61 -4.31,1.87 0.72,0.34 1.25,0.68 1.62,1.01 0.78,0.72 1.52,1.62 2.22,2.7l3.5 5.52 -3.35 0 -2.68 -4.22c-0.77,-1.22 -1.42,-2.15 -1.93,-2.79 -0.5,-0.65 -0.96,-1.1 -1.36,-1.36 -0.39,-0.25 -0.81,-0.43 -1.22,-0.54 -0.3,-0.06 -0.8,-0.09 -1.49,-0.09l-3.11 0 0 9 -2.68 0zm2.68 -11.32l5.76 0c1.23,0 2.18,-0.13 2.87,-0.38 0.69,-0.25 1.21,-0.66 1.56,-1.22 0.36,-0.56 0.54,-1.16 0.54,-1.82 0,-0.95 -0.34,-1.75 -1.04,-2.37 -0.69,-0.61 -1.78,-0.92 -3.28,-0.92l-6.41 0 0 6.71zm17.6 -10.63c-3.02,-3.03 -7.2,-4.9 -11.82,-4.9 -4.61,0 -8.79,1.87 -11.82,4.9 -3.02,3.02 -4.89,7.2 -4.89,11.82 0,4.61 1.87,8.79 4.89,11.82 3.03,3.02 7.21,4.89 11.82,4.89 4.62,0 8.8,-1.87 11.82,-4.89 3.03,-3.03 4.9,-7.21 4.9,-11.82 0,-4.62 -1.87,-8.8 -4.9,-11.82z" />
              </g>
            </svg>

              : <svg className='opacity-50 hover:opacity-100 transition-colors cursor-pointer' data-v-4b8a97f0="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g data-v-4b8a97f0="" ><path data-v-4b8a97f0="" d="M16 13.3333C14.5267 13.3333 13.3333 14.5267 13.3333 16C13.3333 17.4733 14.5267 18.6667 16 18.6667C17.4733 18.6667 18.6667 17.4733 18.6667 16C18.6667 14.5267 17.4733 13.3333 16 13.3333ZM16 4C14.5267 4 13.3333 5.19333 13.3333 6.66667C13.3333 8.14 14.5267 9.33333 16 9.33333C17.4733 9.33333 18.6667 8.14 18.6667 6.66667C18.6667 5.19333 17.4733 4 16 4ZM16 22.6667C14.5267 22.6667 13.3333 23.86 13.3333 25.3333C13.3333 26.8067 14.5267 28 16 28C17.4733 28 18.6667 26.8067 18.6667 25.3333C18.6667 23.86 17.4733 22.6667 16 22.6667ZM25.3333 13.3333C23.86 13.3333 22.6667 14.5267 22.6667 16C22.6667 17.4733 23.86 18.6667 25.3333 18.6667C26.8067 18.6667 28 17.4733 28 16C28 14.5267 26.8067 13.3333 25.3333 13.3333ZM25.3333 4C23.86 4 22.6667 5.19333 22.6667 6.66667C22.6667 8.14 23.86 9.33333 25.3333 9.33333C26.8067 9.33333 28 8.14 28 6.66667C28 5.19333 26.8067 4 25.3333 4ZM25.3333 22.6667C23.86 22.6667 22.6667 23.86 22.6667 25.3333C22.6667 26.8067 23.86 28 25.3333 28C26.8067 28 28 26.8067 28 25.3333C28 23.86 26.8067 22.6667 25.3333 22.6667ZM6.66667 13.3333C5.19333 13.3333 4 14.5267 4 16C4 17.4733 5.19333 18.6667 6.66667 18.6667C8.14 18.6667 9.33333 17.4733 9.33333 16C9.33333 14.5267 8.14 13.3333 6.66667 13.3333ZM6.66667 4C5.19333 4 4 5.19333 4 6.66667C4 8.14 5.19333 9.33333 6.66667 9.33333C8.14 9.33333 9.33333 8.14 9.33333 6.66667C9.33333 5.19333 8.14 4 6.66667 4ZM6.66667 22.6667C5.19333 22.6667 4 23.86 4 25.3333C4 26.8067 5.19333 28 6.66667 28C8.14 28 9.33333 26.8067 9.33333 25.3333C9.33333 23.86 8.14 22.6667 6.66667 22.6667Z" fill="white"></path></g></svg>
          }

          <div className="flex items-center gap-12">
            <Dropdown menu={{ items: univerMenus }}>
              <Link
                href={"#"}
                onClick={(e) => e.preventDefault()}
                className={`uppercase font-semibold text-[18px] flex items-center`}
              >
                {t("global.university")}
                <svg className="ml-[7px] fill-red-500" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill={"white"} fillRule="evenodd" clipRule="evenodd" d="M6.33117 6.05243C6.14811 6.23549 5.85136 6.23549 5.6683 6.05243L0.889245 1.27337C0.706189 1.09031 0.706189 0.793556 0.889245 0.610494L1.11022 0.389494C1.29328 0.206432 1.59007 0.206432 1.77313 0.389494L5.99973 4.61612L10.2264 0.389494C10.4094 0.206432 10.7062 0.206432 10.8892 0.389494L11.1102 0.610494C11.2933 0.793556 11.2933 1.09031 11.1102 1.27337L6.33117 6.05243Z" />
                </svg>
              </Link>
            </Dropdown>

            {/* <Link href={"/directions"} className={`uppercase font-semibold text-[18px]`}>
              {t("global.directions")}
            </Link> */}
            <Dropdown menu={{ items: tarkibiybolimnaMenus }}>
              <Link
                href={"#"}
                onClick={(e) => e.preventDefault()}
                className={`uppercase font-semibold text-[18px] flex items-center`}
              >
                {t("Tarkibiy bo'linma")}
                <svg className="ml-[7px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill={"white"} fillRule="evenodd" clipRule="evenodd" d="M6.33117 6.05243C6.14811 6.23549 5.85136 6.23549 5.6683 6.05243L0.889245 1.27337C0.706189 1.09031 0.706189 0.793556 0.889245 0.610494L1.11022 0.389494C1.29328 0.206432 1.59007 0.206432 1.77313 0.389494L5.99973 4.61612L10.2264 0.389494C10.4094 0.206432 10.7062 0.206432 10.8892 0.389494L11.1102 0.610494C11.2933 0.793556 11.2933 1.09031 11.1102 1.27337L6.33117 6.05243Z" />
                </svg>
              </Link>
            </Dropdown>
            <Link href={"/news"} className={`uppercase font-semibold text-[18px]`}>
              {t("global.news")}
            </Link>
            <Link href={"/news"} className={`uppercase font-semibold text-[18px]`}>
              {t("Vakansiyalar")}
            </Link>
            {/* <Dropdown menu={{ items: newsMenus }}>
              <Link
                href={"#"}
                onClick={(e) => e.preventDefault()}
                className={`uppercase font-semibold text-[18px] flex items-center`}
              >
                {t("global.news")}
                <svg className="ml-[7px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill={"white"} fillRule="evenodd" clipRule="evenodd" d="M6.33117 6.05243C6.14811 6.23549 5.85136 6.23549 5.6683 6.05243L0.889245 1.27337C0.706189 1.09031 0.706189 0.793556 0.889245 0.610494L1.11022 0.389494C1.29328 0.206432 1.59007 0.206432 1.77313 0.389494L5.99973 4.61612L10.2264 0.389494C10.4094 0.206432 10.7062 0.206432 10.8892 0.389494L11.1102 0.610494C11.2933 0.793556 11.2933 1.09031 11.1102 1.27337L6.33117 6.05243Z" />
                </svg>
              </Link>
            </Dropdown> */}
            {/* <Link href={"/acceptance"} className={`uppercase font-semibold text-[18px]`}>
              {t("global.acceptance")}
            </Link> */}
            <Dropdown menu={{ items: univerMenus }}>
              <Link
                href={"#"}
                onClick={(e) => e.preventDefault()}
                className={`uppercase font-semibold text-[18px] flex items-center`}
              >
                {t("global.acceptance")}
                <svg className="ml-[7px] fill-red-500" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill={"white"} fillRule="evenodd" clipRule="evenodd" d="M6.33117 6.05243C6.14811 6.23549 5.85136 6.23549 5.6683 6.05243L0.889245 1.27337C0.706189 1.09031 0.706189 0.793556 0.889245 0.610494L1.11022 0.389494C1.29328 0.206432 1.59007 0.206432 1.77313 0.389494L5.99973 4.61612L10.2264 0.389494C10.4094 0.206432 10.7062 0.206432 10.8892 0.389494L11.1102 0.610494C11.2933 0.793556 11.2933 1.09031 11.1102 1.27337L6.33117 6.05243Z" />
                </svg>
              </Link>
            </Dropdown>
            <Link href={"/contact"} className={`uppercase font-semibold text-[18px]`}>
              {t("global.contact")}
            </Link>
          </div>
        </div>

        {/* <div className="">
          <svg className='opacity-50 hover:opacity-100 transition-colors cursor-pointer' data-v-7b88864e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path data-v-7b88864e="" d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-Width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </div> */}
      </div>

      <Drawer
        title={<div className='flex items-center justify-between '>
          <div className="">
            <Image src={LogoLight} alt="logo" className='h-8 w-max' />
          </div>

          <div className="">
            <svg className="cursor-pointer size-6" onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>}
        width={width} onClose={() => setOpen(false)}
        open={open}
        placement='left'
        closeIcon={null}
      >

        <Menu
          mode="inline"
          className='w-full'
          defaultSelectedKeys={['231']}
          // openKeys={stateOpenKeys}
          // onOpenChange={onOpenChange}
          style={{ border: "none" }}
          items={menuData}
        />

      </Drawer>

    </header >
  );
};

export default Headerv1;