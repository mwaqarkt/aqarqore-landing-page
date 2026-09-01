// ---------------------------------------------------------------------------
// Per-locale page metadata. Titles <= 60 chars, descriptions <= 155 chars.
// ---------------------------------------------------------------------------

export const META = {
  en: {
    home: {
      title: 'AqarQore — Real Estate CRM for GCC Brokerages',
      description:
        'Auto-assign Property Finder & Bayut leads in 10s, qualify buyers on WhatsApp, and enforce 2-step commission approvals. Built for Dubai, Doha & Riyadh.',
    },
    pricing: {
      title: 'Pricing — AqarQore Real Estate CRM',
      description:
        'Transparent per-seat plans for GCC brokerages. Starter $149, Growth $199, custom Enterprise quotes. No hidden portal sync fees or setup traps.',
    },
    demo: {
      title: 'Book a Live Demo — AqarQore',
      description:
        'See AqarQore running on your own listings in 20 minutes. Portal sync, WhatsApp AI qualification and commission approvals, walked through live.',
    },
    contact: {
      title: 'Contact AqarQore',
      description:
        'Talk to the AqarQore team about real estate CRM for your brokerage in Dubai, Doha or Riyadh. Onboarding in 24-48 hours.',
    },
    privacy: {
      title: 'Privacy Policy — AqarQore',
      description: 'How AqarQore collects, processes, stores and protects brokerage and client data.',
    },
    terms: {
      title: 'Terms of Service — AqarQore',
      description: 'The terms governing use of the AqarQore real estate operating system.',
    },
  },
  ar: {
    home: {
      title: 'عقار كور — نظام إدارة عقاري لوكالات الخليج',
      description:
        'توزيع تلقائي لعملاء بروبرتي فايندر وبيوت خلال 10 ثوانٍ، وتأهيل المشترين عبر واتساب، واعتماد العمولات بخطوتين. مصمم لدبي والدوحة والرياض.',
    },
    pricing: {
      title: 'الأسعار — عقار كور لإدارة العقارات',
      description:
        'خطط شفافة لكل مقعد لوكالات الخليج. الناشئة 149$، النمو 199$، وعروض مخصصة للشركات. بدون رسوم مزامنة بوابات مخفية.',
    },
    demo: {
      title: 'احجز عرضاً توضيحياً — عقار كور',
      description:
        'شاهد عقار كور يعمل على عقاراتك خلال 20 دقيقة. مزامنة البوابات وتأهيل واتساب الذكي واعتماد العمولات، مباشرة.',
    },
    contact: {
      title: 'تواصل مع عقار كور',
      description: 'تحدث مع فريق عقار كور حول نظام إدارة العقارات لوكالتك في دبي أو الدوحة أو الرياض.',
    },
    privacy: {
      title: 'سياسة الخصوصية — عقار كور',
      description: 'كيف تجمع عقار كور بيانات الوكالات والعملاء وتعالجها وتحميها.',
    },
    terms: {
      title: 'شروط الخدمة — عقار كور',
      description: 'الشروط التي تحكم استخدام نظام عقار كور لتشغيل الوكالات العقارية.',
    },
  },
};

/** UI strings for the routed pages (the landing page keeps its own inline copy). */
export const UI = {
  en: {
    backHome: 'Back to home',
    demoHeading: 'See AqarQore on Your Listings',
    demoSub: 'A 20-minute walkthrough on your own portfolio. No slides.',
    fullName: 'Full name',
    company: 'Brokerage name',
    email: 'Work email',
    phone: 'Phone (with country code)',
    market: 'Primary market',
    agents: 'Number of agents',
    currentCrm: 'Current CRM (optional)',
    submit: 'Book my demo',
    sending: 'Sending…',
    successTitle: 'Request received',
    successBody: 'The team will contact you within one business day to confirm your 20-minute session.',
    errorBody: 'Something went wrong. Please email us instead.',
    required: 'Required',
    notFoundTitle: 'Page not found',
    notFoundBody: 'That page does not exist. Try one of these instead.',
    pricingLink: 'Pricing',
    demoLink: 'Book a demo',
    homeLink: 'Home',
    draftNotice: 'This document is being finalised. Contact us for the current version.',
  },
  ar: {
    backHome: 'العودة للرئيسية',
    demoHeading: 'شاهد عقار كور على عقاراتك',
    demoSub: 'جولة عملية خلال 20 دقيقة على محفظتك العقارية. بدون عروض تقديمية.',
    fullName: 'الاسم الكامل',
    company: 'اسم الوكالة',
    email: 'البريد الإلكتروني للعمل',
    phone: 'رقم الهاتف (مع رمز الدولة)',
    market: 'السوق الرئيسي',
    agents: 'عدد الوكلاء',
    currentCrm: 'النظام الحالي (اختياري)',
    submit: 'احجز العرض التوضيحي',
    sending: 'جارٍ الإرسال…',
    successTitle: 'تم استلام طلبك',
    successBody: 'سيتواصل معك الفريق خلال يوم عمل واحد لتأكيد جلستك.',
    errorBody: 'حدث خطأ. يرجى مراسلتنا عبر البريد الإلكتروني.',
    required: 'مطلوب',
    notFoundTitle: 'الصفحة غير موجودة',
    notFoundBody: 'هذه الصفحة غير متوفرة. جرب أحد الروابط التالية.',
    pricingLink: 'الأسعار',
    demoLink: 'احجز عرضاً',
    homeLink: 'الرئيسية',
    draftNotice: 'هذا المستند قيد الإعداد النهائي. تواصل معنا للحصول على النسخة الحالية.',
  },
};
