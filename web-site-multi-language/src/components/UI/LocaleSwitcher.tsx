'use client';
import { localesOption } from '@/app/lib/locales';
import { useRouter, usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const newPath = pathname.replace(/^\/[a-z]{2}-[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select onChange={handleChange} defaultValue={pathname.split('/')[1]}>
      {localesOption.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
