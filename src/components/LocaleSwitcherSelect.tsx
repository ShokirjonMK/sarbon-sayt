'use client';

import {useParams} from 'next/navigation';
import {useEffect, useState, useTransition} from 'react';
import {usePathname, useRouter} from '../navigation';
import { Button, Dropdown, MenuProps } from 'antd';
import { locales } from '@/config';
import { useLocale } from 'next-intl';
import uzImg from '@/assets/images/flags/uz.png'
import ruImg from '@/assets/images/flags/ru.png'
import enImg from '@/assets/images/flags/en.png'
import Image from 'next/image';

export default function LocaleSwitcherSelect({className}: {className?: string}) {

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams<any>();
  const locale = useLocale();

  const [items, setitems] = useState<MenuProps['items']>();

  const returnFlagSrc = (lang_code: string) => {
    if (lang_code == "uz") {
      return uzImg
    } else if (lang_code == "ru") {
      return ruImg
    } else {
      return enImg
    }
  }

  

  useEffect(() => {
      const arr = locales.map((cur) => ({
        key: cur,
        label: <div onClick={() => onSelectChangeDrop(cur)}>
          <Image className="w-[20px] h-auto inline-block mr-[8px]" src={returnFlagSrc(cur)} alt="" />
            {cur === 'uz' ? "O'zbek" : cur === 'en' ? "English" : cur === 'ru' ? "Русский" : ""}
        </div>
      }))
      setitems(arr)      
  }, [locales]);
  
  // // let curPath = (pathname.split('/').slice(2, pathname.split('/').length)).join('/')

  function onSelectChangeDrop(event: "uz" | "ru" | "en") {
    
    const nextLocale = event;
    // startTransition(() => {
    //   router.replace(
    //     // @ts-expect-error -- TypeScript will validate that only known `params`
    //     // are used in combination with a given `pathname`. Since the two will
    //     // always match for the current route, we can skip runtime checks.
    //     { pathname: pathname, params },
    //     { locale: nextLocale }
    //   );
    // });

    startTransition(() => {
      router.push(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname: pathname, params },
        { locale: nextLocale }
      );
    });
  
  }
  
  return (
    <Dropdown menu={{ items }} placement="bottom" trigger={['click']} >
        <Button type='text' className={`font-semibold flex items-center ${className}`} >
          <Image className="w-[20px] h-auto inline-block mr-[8px]" src={returnFlagSrc(locale)} alt="" />
          <span className='text-[rgba(255,255,255,0.8)]'>{locale === 'uz' ? "O'z" : locale === 'en' ? "En" : locale === 'ru' ? "Ру" : ""}</span>
        </Button>
    </Dropdown>
  );
}