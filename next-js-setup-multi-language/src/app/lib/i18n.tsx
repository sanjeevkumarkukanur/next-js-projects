'use server';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function I18nProvider({ children, params: { locale } }: Props) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../locales/en.json`)).default;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
