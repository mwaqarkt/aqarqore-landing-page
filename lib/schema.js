import { SITE_URL, abs } from './site';

// ---------------------------------------------------------------------------
// JSON-LD. Every value here must match copy that is visible on the page.
// NOTE: `address` and `telephone` are deliberately omitted from Organization
// until a registered NAP exists. Both are optional; the graph stays valid.
// ---------------------------------------------------------------------------

const ORG_ID = `${SITE_URL}/#organization`;

const organization = (locale) => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'AqarQore',
  alternateName: ['عقار كور', 'AqarQore Technologies'],
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: abs('/aqarqore-logo.png'),
    width: 156,
    height: 149,
  },
  description:
    locale === 'ar'
      ? 'نظام التشغيل العقاري الذاتي المصمم لوكالات العقارات الكبرى في قطر والإمارات والسعودية.'
      : 'Autonomous real estate operating system for high-volume brokerages across Qatar, the UAE, and Saudi Arabia.',
  areaServed: [
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Saudi Arabia' },
  ],
});

const website = (locale, url) => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website-${locale}`,
  url,
  name: locale === 'ar' ? 'عقار كور' : 'AqarQore',
  inLanguage: locale === 'ar' ? 'ar' : 'en',
  publisher: { '@id': ORG_ID },
});

const software = (locale) => ({
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: locale === 'ar' ? 'عقار كور' : 'AqarQore',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Real Estate CRM',
  operatingSystem: 'Web, iOS, Android',
  url: `${SITE_URL}/`,
  inLanguage: locale === 'ar' ? 'ar' : 'en',
  publisher: { '@id': ORG_ID },
  description:
    locale === 'ar'
      ? 'نظام إدارة عقاري يوزع عملاء بروبرتي فايندر وبيوت وواتساب تلقائياً في أقل من 10 ثوانٍ، ويؤهل المشترين عبر واجهة واتساب السحابية الرسمية من ميتا، ويطبق اعتماد العمولات بخطوتين.'
      : 'Real estate CRM that auto-assigns Property Finder, Bayut and WhatsApp leads in under 10 seconds, qualifies buyers with a Meta WhatsApp Cloud API bot, and enforces 2-step commission approvals.',
  featureList:
    locale === 'ar'
      ? [
          'توزيع تلقائي للعملاء في أقل من 10 ثوانٍ',
          'تأهيل المشترين عبر واجهة واتساب السحابية من ميتا',
          'اعتماد العمولات على خطوتين',
          'مزامنة بروبرتي فايندر وبيوت ودوبيزل وعقار وواصل',
          'تطبيق جوال يعمل دون اتصال للمعاينات الميدانية',
          'صلاحيات حسب الأدوار ومصادقة متعددة العوامل',
        ]
      : [
          'Automated lead distribution in under 10 seconds',
          'Meta WhatsApp Cloud API buyer qualification',
          'Two-step commission approval workflow',
          'Property Finder, Bayut, Dubizzle, Aqar and Wasalt portal sync',
          'Offline-capable mobile app for field viewings',
          'Role-based access control and TOTP multi-factor authentication',
        ],
  offers: [
    {
      '@type': 'Offer',
      name: locale === 'ar' ? 'وكالة ناشئة' : 'Starter Brokerage',
      description: locale === 'ar' ? 'للفرق النامية حتى 5 وكلاء' : 'For growing teams up to 5 agents',
      price: '149',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '149',
        priceCurrency: 'USD',
        unitText: 'seat per month',
      },
    },
    {
      '@type': 'Offer',
      name: locale === 'ar' ? 'وكالة متنامية' : 'Growth Agency',
      description: locale === 'ar' ? 'للفرق القائمة من 6 إلى 25 وكيلاً' : 'For established teams 6-25 agents',
      price: '199',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '199',
        priceCurrency: 'USD',
        unitText: 'seat per month',
      },
    },
    {
      '@type': 'Offer',
      name: locale === 'ar' ? 'مجموعة كبرى' : 'Enterprise Group',
      description:
        locale === 'ar'
          ? 'للوكالات العقارية الكبرى (أكثر من 25 وكيلاً). عرض سعر مخصص.'
          : 'For large brokerages with 25 or more agents. Custom quote.',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  ],
});

const FAQS = {
  en: [
    ['How does AqarQore help my brokerage?', 'Inquiries from Property Finder, Bayut, and WhatsApp are captured and auto-assigned in under 10 seconds. We automate lead qualification, offline field logging, and 2-step financial commission workflows into one synchronized operating system.'],
    ['How quickly can I get started?', 'You can get started in as little as 24-48 hours. Our onboarding team will help you set up your account, import your data and train your team so you can go live fast.'],
    ['Can I integrate AqarQore with my existing CRM?', 'Yes. AqarQore provides two-way API webhooks and native connectors for major CRM systems, Property Finder, Bayut, and custom ERP databases without interrupting active sales pipelines.'],
    ['Is my brokerage data secure?', 'All agency data is isolated with server-enforced role-based access boundaries (RBAC), mandatory TOTP multi-factor authentication, sub-60s session revocation, and regional data hosting options in the UAE, Qatar, and KSA.'],
    ['What kind of support do you provide?', 'Every agency receives a dedicated regional account manager in Dubai and Doha, 24/7 priority SLA support, live WhatsApp escalation channels, and custom architectural integration consulting.'],
    ['How is AqarQore priced?', 'We offer transparent per-seat monthly subscription tiers tailored to boutique brokerages, scaling agencies, and multi-branch enterprise groups with zero hidden portal sync fees or exit penalties.'],
  ],
  ar: [
    ['كيف تساعد منصة AqarQore وكالتي العقارية؟', 'يتم التقاط وتوزيع استفسارات Property Finder و Bayut و WhatsApp تلقائياً في أقل من 10 ثوانٍ. نقوم بأتمتة تأهيل العملاء، وتسجيل المعاينات الميدانية دون اتصال، واعتماد العمولات المالية بخطوتين في نظام تشغيل متزامن وموحد.'],
    ['ما هي المدة اللازمة لبدء تشغيل النظام في الوكالة؟', 'يمكنك البدء خلال 24 إلى 48 ساعة فقط. سيساعدك فريق الإعداد المتخصص لدينا في تهيئة حسابك واستيراد بياناتك وتدريب فريقك للبدء الفوري.'],
    ['هل يمكنني ربط المنظومة مع نظام إدارة علاقات العملاء (CRM) الحالي؟', 'نعم. توفر AqarQore واجهات برمجة ثنائية الاتجاه (Webhooks) وموصلات جاهزة لأنظمة CRM الكبرى، وProperty Finder، وBayut، وقواعد بيانات ERP دون مقاطعة مسارات المبيعات الجارية.'],
    ['هل بيانات وكالتي وعملائي آمنة ومحمية؟', 'بكل تأكيد. جميع بيانات الوكالة معزولة بضوابط وصول حسب الأدوار (RBAC) مفروضة من الخادم، ومصادقة متعددة العوامل TOTP إلزامية، وإلغاء فوري للجلسات في أقل من 60 ثانية، مع خيارات استضافة إقليمية داخل الإمارات وقطر والسعودية.'],
    ['ما نوع الدعم الفني والتشغيلي الذي تقدمونه؟', 'تحصل كل وكالة على مدير حسابات إقليمي مخصص في دبي والدوحة، ودعم بأولوية 24/7 وفق اتفاقية مستوى الخدمة SLA، وقنوات تصعيد مباشرة عبر واتساب، واستشارات تكامل بنية مخصصة.'],
    ['كيف يتم تسعير اشتراكات AqarQore؟', 'نقدم باقات اشتراك شهرية شفافة لكل مقعد مخصصة للوكالات الناشئة، والوكالات المتنامية، والمجموعات العقارية الكبرى متعددة الفروع، دون أي رسوم مزامنة بوابات خفية أو غرامات خروج.'],
  ],
};

const faqPage = (locale) => ({
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq-${locale}`,
  inLanguage: locale === 'ar' ? 'ar' : 'en',
  mainEntity: FAQS[locale].map(([name, text]) => ({
    '@type': 'Question',
    name,
    acceptedAnswer: { '@type': 'Answer', text },
  })),
});

const breadcrumb = (locale, trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

/** Home page graph: Organization + WebSite + SoftwareApplication + FAQPage. */
export function homeSchema(locale, url) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(locale), website(locale, url), software(locale), faqPage(locale)],
  };
}

/** Inner page graph: Organization + WebSite + BreadcrumbList (+ optional extras). */
export function pageSchema(locale, url, trail, extra = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(locale), website(locale, url), breadcrumb(locale, trail), ...extra],
  };
}

export { software as softwareSchema };
