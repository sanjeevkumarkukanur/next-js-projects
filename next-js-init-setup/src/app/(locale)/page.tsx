'use server';
import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/UI/Button/Button';
import DarkModeToggle from '@/components/UI/DarkModeToggle/DarkModeToggle';
import LocaleSwitcher from '@/components/UI/LocaleSwitcher';

async function fetchLatestPosts() {
  return [
    { id: '1', title: 'Welcome to Our Company' },
    { id: '2', title: 'Industry Insights 2025' },
  ];
}

export default async function HomePage() {
  const latestPosts = await fetchLatestPosts();

  return (
    <main className="container mx-auto px-6 py-10">
      <header className="flex items-center space-x-3">
        <Home className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Welcome to Our Company</h1>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
        <ul className="list-disc pl-6 space-y-2">
          {latestPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>
<DarkModeToggle />
 <LocaleSwitcher />
      <Button className="mt-8">Contact Us</Button>
    </main>
  );
}
