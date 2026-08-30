import LandingPage from '@/components/LandingPage';
import { alternatesFor, abs } from '@/lib/site';
import { META } from '@/lib/copy';
import { homeSchema } from '@/lib/schema';

export const metadata = {
  title: META.ar.home.title,
  description: META.ar.home.description,
  alternates: alternatesFor('home', 'ar'),
  openGraph: {
    title: META.ar.home.title,
    description: META.ar.home.description,
    url: abs('/ar'),
  },
};

export default function HomeAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema('ar', abs('/ar'))) }}
      />
      <LandingPage locale="ar" />
    </>
  );
}
