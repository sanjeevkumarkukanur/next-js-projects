import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr'],
  defaultLocale: 'en',
  localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);