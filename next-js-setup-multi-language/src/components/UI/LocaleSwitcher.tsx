'use client';
import { useRouter, usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    // Replace locale in path (assuming /[locale]/... structure)
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select onChange={handleChange} defaultValue={pathname.split('/')[1]}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
    </select>
  );
}
