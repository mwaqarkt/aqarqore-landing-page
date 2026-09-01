import '../globals.css';
import { jakarta, tajawal } from '@/lib/fonts';
import { SITE_URL, OG_IMAGE } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    siteName: 'AqarQore',
    locale: 'ar_AE',
    alternateLocale: ['en_US'],
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE.url] },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#001128',
  width: 'device-width',
  initialScale: 1,
};

// Arabic root layout. lang="ar" dir="rtl" is baked into the HTML at build
// time — crawlers no longer receive an English shell for Arabic content.
export default function ArRootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${jakarta.variable} ${tajawal.variable} scroll-smooth`}>
      <body className="bg-[#F7F9FB] text-slate-900 antialiased selection:bg-[#1078C0] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
