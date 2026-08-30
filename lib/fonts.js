import { Plus_Jakarta_Sans, Tajawal } from 'next/font/google';

// Self-hosted at build time by next/font — removes the render-blocking
// Google Fonts stylesheet and the extra DNS/TLS round trips entirely.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-tajawal',
});
