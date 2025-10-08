import { getTranslations } from 'next-intl/server';
import HomeClient from './HomeClient';

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  // Map JSON translation keys to variables or simple objects
  const translations = {
    heroLines: [
      t('hero.titleLines.0'),
      t('hero.titleLines.1'),
      t('hero.titleLines.2')
    ],
    heroHighlight: t('hero.highlight'),
    aboutIntro: t('about.intro'),
    aboutDetails: [
      t('about.details.0'),
      t('about.details.1'),
      t('about.details.2'),
      t('about.details.3'),
      t('about.details.4')
    ],
    aboutClosing: t('about.closing'),
    services: [
      {
        title: t('services.0.title'),
        description: t('services.0.description'),
      },
      {
        title: t('services.1.title'),
        description: t('services.1.description'),
      },
      {
        title: t('services.2.title'),
        description: t('services.2.description'),
      },
    ],
    stats: [
      { number: t('stats.0.number'), label: t('stats.0.label') },
      { number: t('stats.1.number'), label: t('stats.1.label') },
      { number: t('stats.2.number'), label: t('stats.2.label') },
      { number: t('stats.3.number'), label: t('stats.3.label') },
    ]
  };

  return <HomeClient translations={translations} />;
}
