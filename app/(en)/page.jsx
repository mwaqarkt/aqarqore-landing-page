import LandingPage from '@/components/LandingPage';
import { alternatesFor, abs } from '@/lib/site';
import { META } from '@/lib/copy';
import { homeSchema } from '@/lib/schema';

export const metadata = {
  title: META.en.home.title,
  description: META.en.home.description,
  alternates: alternatesFor('home', 'en'),
  openGraph: {
    title: META.en.home.title,
    description: META.en.home.description,
    url: abs('/'),
  },
};

export default function HomeEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema('en', abs('/'))) }}
      />
      <LandingPage locale="en" />
    </>
  );
}
