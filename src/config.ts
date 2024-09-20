import {Pathnames} from 'next-intl/navigation';

export const locales = ['uz', 'ru', 'en'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    uz: '/pathnames',
    ru: '/pathnames',
    en: '/pathnames'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;