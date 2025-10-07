import createMiddleware from 'next-intl/middleware';
import { routing } from './app/lib/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|es|fr)/:path*']
};