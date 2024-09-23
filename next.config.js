/** @type {import('tailwindcss').Config} */


  const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
  // "paths": {
  //   "@/*": ["./src/*"]
  // },
  // theme: {
  //   extend: {},
  //   screens: {
  //     'sm': '576px',
  //     // => @media (min-width: 576px) { ... }
  //     'md': '768px',
  //     // => @media (min-width: 768px) { ... }

  //     'lg': '992px',
  //     // => @media (min-width: 992px) { ... }

  //     'xl': '1024px',
  //     // => @media (min-width: 1024px) { ... }

  //     'xxl': '1365px',
  //   },
  // },
  // plugins: [],
  // corePlugins: {
  //   preflight: false
  // },
};
 
module.exports = withNextIntl(nextConfig);
  

//   import createNextIntlPlugin from 'next-intl/plugin';
 
// const withNextIntl = createNextIntlPlugin();
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {};
 
// export default withNextIntl(nextConfig);












// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   "paths": {
//     "@/*": ["./src/*"]
//   },
//   theme: {
//     extend: {},
//     screens: {
//       'sm': '576px',
//       // => @media (min-width: 576px) { ... }
//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '992px',
//       // => @media (min-width: 992px) { ... }

//       'xl': '1300px',
//       // => @media (min-width: 1200px) { ... }

//       'xxl': '1365px',
//     },
//   },
//   plugins: [],
//   corePlugins: {
//     preflight: false
//   },
// }
