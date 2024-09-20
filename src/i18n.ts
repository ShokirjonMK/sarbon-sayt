// import {notFound} from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';
 
// // Can be imported from a shared config
// const locales = ['uz', 'en', 'ru'];
 
// export default getRequestConfig(async ({locale}) => {
//     const baseLocal = new Intl.Locale(locale).baseName;
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(baseLocal)) notFound();
 
//   return {
//     messages: (await import(`../messages/${locale}.json`)).default
//   };
// });

import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { locales } from './config';
// import {locales} from './config';

export default getRequestConfig(async ({locale}) => {
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'uz'
        ? // When using Turbopack, this will enable HMR for `uz`
          import('../messages/uz.json')
        : import(`../messages/${locale}.json`))
    ).default
  };
});