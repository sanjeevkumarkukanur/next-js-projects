export const locales = ['in-en', 'es-es', 'fr-fr'];
export const defaultLocale = 'in-en';
export const matcher = `/:locale(in-en|es-es|fr-fr)/:path*`;


export const localesOption = [
  { code: 'in-en', label: 'English' },
  { code: 'es-es', label: 'Español' },
  { code: 'fr-fr', label: 'Français' },
];