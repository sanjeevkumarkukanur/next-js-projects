import createMiddleware from 'next-intl/middleware';
import { routing } from './app/lib/routing';

export default createMiddleware(routing);


export const config = {
  matcher: ['/', '/(in-en|es-es|fr-fr)/:path*']
};