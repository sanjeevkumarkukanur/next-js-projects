import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './locales';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localeDetection: false
});


export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);