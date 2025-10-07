import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/lib/request.ts');

const nextConfig: NextConfig = {
  // Your other config here
};

export default withNextIntl(nextConfig);