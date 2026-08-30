'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Menu,
  CheckCircle,
  ShieldCheck,
  Smartphone,
  MessageSquare,
  Building2,
  TrendingUp,
  Zap,
  Lock,
  UserCheck,
  Search,
  AlertTriangle,
  Bot,
  DollarSign,
  FileText,
  ChevronDown,
  Globe,
  ArrowRight,
  Users,
  Layers,
  Award,
  Clock,
  BarChart3,
  Database,
  Key,
  EyeOff,
  RefreshCw,
  Sliders,
  Check,
  X,
  ExternalLink,
  Play,
  Sparkles,
  PhoneCall,
  FileCheck,
  MapPin,
  Maximize2,
  BedDouble,
  Bath,
  Compass,
  Building,
  KeyRound,
  Filter,
  Shield,
  Activity,
  UserX,
  CreditCard,
  Target,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Radio,
  Cpu,
  Flame,
  CircleDot,
  Bookmark,
  HelpCircle,
  Cloud,
  Rocket
} from 'lucide-react';

/*
================================================================================
AqarQore — Master Landing Page Component (Enhanced with Property Images & Motion)
Target Market: GCC (Qatar, UAE, Saudi Arabia)
Stack: React 19, Tailwind CSS v4, Framer Motion Scroll Effects, Lucide Icons

PROPERTY ASSETS INCLUDED:
- Dubai Marina & Palm Jumeirah Luxury Penthouses
- Lusail & West Bay Lagoon Waterfront Villas
- KAFD Riyadh Commercial Glass Towers
- Interactive Property Cards & Parallax Scroll Gallery
================================================================================
*/

// Demo CTA path is resolved per locale inside the component (see demoHref).

// Curated Property Images (High Resolution Architecture & Real Estate)
const PROPERTY_IMAGES = {
  heroPenthouse: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
  waterfrontVilla: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  riyadhTower: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1200&q=80",
  luxuryInterior: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  keyHandover: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  modernApartment: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
};

// Live GCC Property Showcase Data matching Reference Design
const MARKET_PROPERTIES = {
  doha: [
    {
      id: 'doha-1',
      title: 'Beachfront Standalone Villa',
      titleAr: 'فيلا مستقلة على شاطئ البحر',
      location: 'West Bay Lagoon • Doha, Qatar',
      locationAr: 'لاغون الخليج الغربي • الدوحة، قطر',
      price: 'QAR 8,500,000',
      priceAr: '8,500,000 ر.ق',
      image: PROPERTY_IMAGES.waterfrontVilla,
      badge: 'Auto-Assigned in 3s',
      badgeAr: 'توزيع تلقائي خلال 3 ثوانٍ',
      badgeIcon: Zap,
      badgeColor: 'emerald',
      specs: [
        { label: '5 Beds', labelAr: '5 غرف', icon: BedDouble },
        { label: '6 Baths', labelAr: '6 حمامات', icon: Bath },
        { label: '750 sqm', labelAr: '750 م²', icon: Maximize2 }
      ],
      featureLeftIcon: MessageSquare,
      featureLeftLabel: 'WhatsApp Lead Qualification',
      featureLeftLabelAr: 'تأهيل عملاء واتساب الذكي',
      featureRightLabel: 'Buyer Verified',
      featureRightLabelAr: 'مشترٍ موثق',
      featureRightType: 'check',
      theme: 'blue'
    },
    {
      id: 'doha-2',
      title: 'The Pearl Marina Sky Penthouse',
      titleAr: 'بنتهاوس سماوي مارينا اللؤلؤة',
      location: 'Porto Arabia • The Pearl, Qatar',
      locationAr: 'بورتو أرابيا • اللؤلؤة، قطر',
      price: 'QAR 6,200,000',
      priceAr: '6,200,000 ر.ق',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      badge: 'AI Bot Active 24/7',
      badgeAr: 'روبوت الذكاء يعمل 24/7',
      badgeIcon: Bot,
      badgeColor: 'emerald',
      specs: [
        { label: '4 Beds', labelAr: '4 غرف', icon: BedDouble },
        { label: '5 Baths', labelAr: '5 حمامات', icon: Bath },
        { label: '520 sqm', labelAr: '520 م²', icon: Maximize2 }
      ],
      featureLeftIcon: RefreshCw,
      featureLeftLabel: 'Portal Auto-Sync',
      featureLeftLabelAr: 'تزامن فوري مع البوابات',
      featureRightLabel: 'Property Finder Qatar Live',
      featureRightLabelAr: 'بروبرتي فايندر قطر مباشر',
      featureRightType: 'check',
      theme: 'teal'
    },
    {
      id: 'doha-3',
      title: 'Lusail Waterfront Commercial Tower',
      titleAr: 'برج تجاري على واجهة لوسيل البحرية',
      location: 'Marina Promenade • Lusail, Qatar',
      locationAr: 'ممشى المارينا • لوسيل، قطر',
      price: 'QAR 18,500,000',
      priceAr: '18,500,000 ر.ق',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      badge: 'Duplicate Protection',
      badgeAr: 'حماية من ازدواجية العملاء',
      badgeIcon: ShieldCheck,
      badgeColor: 'gold',
      specs: [
        { label: 'Grade A', labelAr: 'فئة أولى A', icon: Building },
        { label: '12 Floors', labelAr: '12 طابقاً', icon: Building2 },
        { label: '2,800 sqm', labelAr: '2,800 م²', icon: Maximize2 }
      ],
      featureLeftIcon: DollarSign,
      featureLeftLabel: 'Commission Signoff',
      featureLeftLabelAr: 'اعتماد العمولات بخطوتين',
      featureRightLabel: '2-Step Director Lock',
      featureRightLabelAr: 'إقفال مدير تنفيذي',
      featureRightType: 'lock',
      theme: 'gold'
    }
  ],
  dubai: [
    {
      id: 'dubai-1',
      title: 'Palm Jumeirah Signature Sky Villa',
      titleAr: 'فيلا سماوية فاخرة بنخلة جميرا',
      location: 'Palm Jumeirah • Dubai, UAE',
      locationAr: 'نخلة جميرا • دبي، الإمارات',
      price: 'AED 14,900,000',
      priceAr: '14,900,000 د.إ',
      image: PROPERTY_IMAGES.heroPenthouse,
      badge: 'Auto-Assigned in 2s',
      badgeAr: 'توزيع تلقائي خلال ثانيتين',
      badgeIcon: Zap,
      badgeColor: 'emerald',
      specs: [
        { label: '4 Beds', labelAr: '4 غرف', icon: BedDouble },
        { label: '5 Baths', labelAr: '5 حمامات', icon: Bath },
        { label: '580 sqm', labelAr: '580 م²', icon: Maximize2 }
      ],
      featureLeftIcon: MessageSquare,
      featureLeftLabel: 'WhatsApp Lead Qualification',
      featureLeftLabelAr: 'تأهيل عملاء واتساب الذكي',
      featureRightLabel: 'HNW Verified',
      featureRightLabelAr: 'مستثمر موثق',
      featureRightType: 'check',
      theme: 'blue'
    },
    {
      id: 'dubai-2',
      title: 'Downtown Burj View Luxury Suite',
      titleAr: 'جناح فندقي فاخر بإطلالة برج خليفة',
      location: 'Opera District • Downtown Dubai, UAE',
      locationAr: 'منطقة الأوبرا • وسط دبي، الإمارات',
      price: 'AED 8,750,000',
      priceAr: '8,750,000 د.إ',
      image: PROPERTY_IMAGES.luxuryInterior,
      badge: 'Bayut & PF Direct Sync',
      badgeAr: 'تزامن مباشر مع بيوت وبروبرتي فايندر',
      badgeIcon: RefreshCw,
      badgeColor: 'cyan',
      specs: [
        { label: '3 Beds', labelAr: '3 غرف', icon: BedDouble },
        { label: '4 Baths', labelAr: '4 حمامات', icon: Bath },
        { label: '340 sqm', labelAr: '340 م²', icon: Maximize2 }
      ],
      featureLeftIcon: RefreshCw,
      featureLeftLabel: 'Portal Auto-Sync',
      featureLeftLabelAr: 'تزامن فوري مع البوابات',
      featureRightLabel: 'Bayut Live UAE',
      featureRightLabelAr: 'بيوت الإمارات مباشر',
      featureRightType: 'check',
      theme: 'teal'
    },
    {
      id: 'dubai-3',
      title: 'Saadiyat Beachfront Signature Villa',
      titleAr: 'فيلا شاطئية مميزة بجزيرة السعديات',
      location: 'Saadiyat Island • Abu Dhabi, UAE',
      locationAr: 'جزيرة السعديات • أبوظبي، الإمارات',
      price: 'AED 21,000,000',
      priceAr: '21,000,000 د.إ',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      badge: 'Duplicate Protection',
      badgeAr: 'حماية من ازدواجية العملاء',
      badgeIcon: ShieldCheck,
      badgeColor: 'gold',
      specs: [
        { label: '6 Beds', labelAr: '6 غرف', icon: BedDouble },
        { label: '7 Baths', labelAr: '7 حمامات', icon: Bath },
        { label: '920 sqm', labelAr: '920 م²', icon: Maximize2 }
      ],
      featureLeftIcon: DollarSign,
      featureLeftLabel: 'Commission Signoff',
      featureLeftLabelAr: 'اعتماد العمولات بخطوتين',
      featureRightLabel: '2-Step Director Lock',
      featureRightLabelAr: 'إقفال مدير تنفيذي',
      featureRightType: 'lock',
      theme: 'gold'
    }
  ],
  riyadh: [
    {
      id: 'riyadh-1',
      title: 'Commercial Corporate Headquarters',
      titleAr: 'مقر شركات ومكاتب تجارية كبرى',
      location: 'KAFD Financial District • Riyadh, KSA',
      locationAr: 'مركز الملك عبد الله المالي (كافد) • الرياض، السعودية',
      price: 'SAR 24,000,000',
      priceAr: '24,000,000 ر.س',
      image: PROPERTY_IMAGES.riyadhTower,
      badge: 'Duplicate Protection',
      badgeAr: 'حماية من ازدواجية العملاء',
      badgeIcon: ShieldCheck,
      badgeColor: 'gold',
      specs: [
        { label: 'Grade A', labelAr: 'فئة أولى A', icon: Building },
        { label: '8 Floors', labelAr: '8 طوابق', icon: Building2 },
        { label: '1,400 sqm', labelAr: '1,400 م²', icon: Maximize2 }
      ],
      featureLeftIcon: DollarSign,
      featureLeftLabel: 'Deal Audit Trail',
      featureLeftLabelAr: 'سجل تدقيق الصفقات',
      featureRightLabel: 'Immutable Audit Log',
      featureRightLabelAr: 'سجل تدقيق غير قابل للتعديل',
      featureRightType: 'lock',
      theme: 'gold'
    },
    {
      id: 'riyadh-2',
      title: 'Al-Hizam Luxury Private Estate',
      titleAr: 'قصر سكني خاص وفاخر بحي الحزام',
      location: 'Al-Hizam Al-Dhahabi • Riyadh, KSA',
      locationAr: 'الحزام الذهبي • الرياض، السعودية',
      price: 'SAR 16,800,000',
      priceAr: '16,800,000 ر.س',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      badge: 'AI Bot Active 24/7',
      badgeAr: 'روبوت الذكاء يعمل 24/7',
      badgeIcon: Bot,
      badgeColor: 'emerald',
      specs: [
        { label: '6 Beds', labelAr: '6 غرف', icon: BedDouble },
        { label: '8 Baths', labelAr: '8 حمامات', icon: Bath },
        { label: '1,100 sqm', labelAr: '1,100 م²', icon: Maximize2 }
      ],
      featureLeftIcon: MessageSquare,
      featureLeftLabel: 'WhatsApp Lead Qualification',
      featureLeftLabelAr: 'تأهيل عملاء واتساب الذكي',
      featureRightLabel: 'VIP Arabic Flow',
      featureRightLabelAr: 'مسار عملاء VIP بالعربية',
      featureRightType: 'check',
      theme: 'blue'
    },
    {
      id: 'riyadh-3',
      title: 'Jeddah Corniche Waterfront Residence',
      titleAr: 'إقامة فاخرة على واجهة كورنيش جدة',
      location: 'North Corniche • Jeddah, KSA',
      locationAr: 'الكورنيش الشمالي • جدة، السعودية',
      price: 'SAR 11,500,000',
      priceAr: '11,500,000 ر.س',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      badge: 'Aqar Portal Sync',
      badgeAr: 'تزامن مباشر مع عقار.إف إم',
      badgeIcon: RefreshCw,
      badgeColor: 'cyan',
      specs: [
        { label: '4 Beds', labelAr: '4 غرف', icon: BedDouble },
        { label: '5 Baths', labelAr: '5 حمامات', icon: Bath },
        { label: '620 sqm', labelAr: '620 م²', icon: Maximize2 }
      ],
      featureLeftIcon: RefreshCw,
      featureLeftLabel: 'Portal Auto-Sync',
      featureLeftLabelAr: 'تزامن فوري مع البوابات',
      featureRightLabel: 'Aqar Direct Live',
      featureRightLabelAr: 'عقار.إف إم مباشر',
      featureRightType: 'check',
      theme: 'teal'
    }
  ]
};

// Motion Variants with Reduced Motion Safety
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function LandingPage({ locale = 'en' }) {
  // Language is derived from the URL, not component state. This is what makes
  // /ar/ a real, indexable, server-rendered page instead of a client toggle.
  const isRtl = locale === 'ar';
  const otherLocaleHref = isRtl ? '/' : '/ar/';
  const demoHref = isRtl ? '/ar/book-a-demo/' : '/book-a-demo/';
  const pricingHref = isRtl ? '/ar/pricing/' : '/pricing/';
  const [activeFaq, setActiveFaq] = useState(null);
  const [agentCount, setAgentCount] = useState(15);
  const [avgDealValue, setAvgDealValue] = useState(1200000);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activePropertyTab, setActivePropertyTab] = useState('doha');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [openFaqIndex, setOpenFaqIndex] = useState(1);
  const [faqCategory, setFaqCategory] = useState('All Questions');
  const [mobileCardIndex, setMobileCardIndex] = useState(0);

  const handleHeroMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = ((clientX / innerWidth) - 0.5) * 14;
    const y = ((clientY / innerHeight) - 0.5) * 14;
    setMouseOffset({ x, y });
  };

  // Scroll Progress Bar calculation
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Parallax Scroll Transformations
  const heroY = useTransform(scrollY, [0, 600], [0, -60]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.96]);
  const imageParallaxY = useTransform(scrollY, [300, 1400], [40, -40]);
  const galleryRotateX = useTransform(scrollY, [800, 1800], [6, -2]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);

      const sections = ['pricing', 'roi', 'security', 'features', 'showcase', 'problem'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const annualSavedRevenue = Math.round(agentCount * (avgDealValue * 0.02) * 1.8);
  const monthlyHoursSaved = agentCount * 14;

  return (
    <div className={`min-h-screen bg-[#F7F9FB] text-slate-900 overflow-x-hidden ${isRtl ? 'font-tajawal' : ''}`}>
      
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-slate-900 focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* -------------------------------------------------------------------------- */}
      {/* TOP SCROLL PROGRESS BAR                                                   */}
      {/* -------------------------------------------------------------------------- */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 z-50 transform-origin-left"
      />

      {/* -------------------------------------------------------------------------- */}
      {/* HEADER / NAVIGATION                                                        */}
      {/* -------------------------------------------------------------------------- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm' 
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100'
        }`}
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between gap-4">
            
            {/* Left: Brand Emblem + Typography Lockup */}
            <div className="flex-shrink-0">
              <Link href={isRtl ? "/ar/" : "/"} className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1078C0] rounded-xl p-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src="/aqarqore-emblem.png" alt="AqarQore home" width="156" height="149" decoding="async" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                    {isRtl ? 'عقار كور' : 'AqarQore'}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#0858A8] font-bold font-mono mt-1">
                    {isRtl ? 'نظام تشغيل وكالات العقار بالخليج' : 'GCC Agency OS'}
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Existing Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
              <a href="#problem" className="hover:text-[#0858A8] transition-colors py-1">
                {isRtl ? 'لماذا AqarQore' : 'Why AqarQore'}
              </a>
              <a href="#showcase" className="hover:text-[#0858A8] transition-colors py-1">
                {isRtl ? 'بوابة العقارات' : 'Live Property Hub'}
              </a>
              <a href="#features" className="hover:text-[#0858A8] transition-colors py-1">
                {isRtl ? 'المميزات' : 'Features'}
              </a>
              <a href="#security" className="hover:text-[#0858A8] transition-colors py-1">
                {isRtl ? 'الأمان والحماية' : 'Security'}
              </a>
              <a href="#roi" className="hover:text-[#0858A8] transition-colors py-1">
                {isRtl ? 'حاسبة العائد' : 'ROI Calculator'}
              </a>
              <a href="#pricing" className="hover:text-[#0858A8] transition-colors py-1">
                {isRtl ? 'الأسعار' : 'Pricing'}
              </a>
            </div>

            {/* Right: Existing Action Items & Primary CTA */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <Link
                href={otherLocaleHref}
                hrefLang={isRtl ? 'en' : 'ar'}
                lang={isRtl ? 'en' : 'ar'}
                aria-label={isRtl ? 'Switch to English' : 'التبديل إلى العربية'}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
              >
                <span>{isRtl ? 'English' : 'العربية'}</span>
              </Link>

              <a
                href={demoHref}
                className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-sky-500 hover:to-[#1078C0] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-blue-400/30 flex items-center justify-center"
              >
                <span className="relative z-10">
                  {isRtl ? 'احجز عرضاً توضيحياً' : 'Book Live Demo'}
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden w-full bg-white border-t border-slate-200 px-4 py-3 shadow-xl overflow-hidden"
              >
                <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-700">
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#problem"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    {isRtl ? 'لماذا AqarQore' : 'Why AqarQore'}
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#showcase"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    {isRtl ? 'بوابة العقارات' : 'Live Property Hub'}
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#features"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    {isRtl ? 'المميزات' : 'Features'}
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#security"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    {isRtl ? 'الأمان والحماية' : 'Security'}
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#roi"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    {isRtl ? 'حاسبة العائد' : 'ROI Calculator'}
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#pricing"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    {isRtl ? 'الأسعار' : 'Pricing'}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main id="main">

      {/* -------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION: GCC PROPERTY OPERATING SYSTEM                             */}
      {/* -------------------------------------------------------------------------- */}
      <section 
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[92vh] lg:min-h-[850px] flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 bg-[#001128] text-white overflow-hidden"
      >
        {/* Subtle Ambient Radial Lighting Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#1078C0]/10 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* MAIN HERO CONTENT CONTAINER */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* ---------------------------------------------------------------------- */}
            {/* LEFT COLUMN: VALUE PROPOSITION & TYPOGRAPHIC ENGINE (~50%)             */}
            {/* ---------------------------------------------------------------------- */}
            <motion.div 
              className="lg:col-span-6 xl:col-span-6 space-y-6 text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Premium Eyebrow + Live Indicator */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#032653]/90 border border-[#39BFF5]/40 text-[#39BFF5] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
                  GCC PROPERTY OPERATING SYSTEM
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D6A3]/10 border border-[#00D6A3]/30 text-[#00D6A3] text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00D6A3] animate-ping" />
                  LIVE NETWORK — DUBAI • DOHA • RIYADH
                </span>
              </motion.div>

              {/* Main Dominant Display Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold tracking-tight text-white leading-[1.08] max-w-[620px]"
              >
                {isRtl ? (
                  <>
                    <span>أوقف إهدار عملاء العقارات ذوي القيمة العالية</span>
                    <span className="block mt-2 text-white">
                      أدر وكالتك بالكامل{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-[#39BFF5] to-[#0878D1]">
                        تلقائياً
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span>Stop Losing High Value Property Leads</span>
                    <span className="block mt-2">
                      <span className="text-white">Run Your Entire Agency</span>{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-[#39BFF5] to-[#168FE5]">
                        Automatically
                      </span>
                    </span>
                  </>
                )}
              </motion.h1>

              {/* High-Readability Supporting Paragraph */}
              <motion.p 
                variants={fadeInUp} 
                className="text-base sm:text-lg lg:text-[18px] text-[#A9C9E8] font-normal leading-[1.65] max-w-[600px]"
              >
                {isRtl ? (
                  'توزيع تلقائي لعملاء Property Finder و Bayut و WhatsApp في أقل من 10 ثوانٍ. تأهيل العملاء بالذكاء الاصطناعي، وتطبيق ميداني، وموافقة عمولات بخطوتين في نظام خليجي موحد'
                ) : (
                  'Auto assign leads from Property Finder, Bayut, and Meta WhatsApp in under 10 seconds. AI buyer qualification, offline mobile app, and 2 step commission signoffs in one unified GCC system'
                )}
              </motion.p>

              {/* Premium Asymmetric CTA Action Row */}
              <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Primary CTA Button with Radiant Glow */}
                <a
                  href={demoHref}
                  className="inline-flex items-center justify-center whitespace-nowrap px-7 py-4 rounded-xl bg-gradient-to-r from-[#0878D1] via-[#168FE5] to-[#0878D1] hover:from-[#168FE5] hover:to-[#0878D1] text-white font-bold text-sm sm:text-base shadow-[0_0_28px_rgba(22,143,229,0.45)] hover:shadow-[0_0_36px_rgba(57,191,245,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] border border-[#39BFF5]/40 group cursor-pointer text-center"
                >
                  <span>{isRtl ? 'شاهد نظامك على عقاراتك في 20 دقيقة' : 'See AqarQore on Your Listings in 20 Mins'}</span>
                </a>

                {/* Secondary Translucent Glass Button with Scale Icon */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 px-6 py-4 rounded-xl bg-[#001B3D]/80 hover:bg-[#062D5C]/90 text-blue-100 font-semibold text-sm sm:text-base border border-blue-400/25 transition-all hover:border-[#39BFF5]/60 backdrop-blur-md cursor-pointer group text-center shadow-md"
                >
                  <span className="w-7 h-7 rounded-full bg-[#0878D1]/40 border border-[#39BFF5]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current text-[#39BFF5] ml-0.5" />
                  </span>
                  <span>{isRtl ? 'شاهد جولة النظام' : 'Watch 2 Min Product Tour'}</span>
                </button>
              </motion.div>

              {/* Verified Trust Badges */}
              <motion.div variants={fadeInUp} className="pt-3 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-[#A9C9E8] font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00D6A3] shrink-0" />
                  <span>Built on Meta&apos;s Official WhatsApp Cloud API</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00D6A3] shrink-0" />
                  <span>Property Finder & Bayut Live Sync</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#00D6A3] shrink-0" />
                  <span>Go Live in Under 48 Hours</span>
                </div>
              </motion.div>
            </motion.div>

            {/* ---------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: FLOATING AQARQORE COMMAND CENTER UI GRAPHIC (~50%)       */}
            {/* ---------------------------------------------------------------------- */}
            <motion.div 
              className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Parallax Container with Subtle Floating Animation */}
              <motion.div
                style={{
                  x: mouseOffset.x * 0.5,
                  y: mouseOffset.y * 0.5,
                  transition: 'transform 0.15s ease-out'
                }}
                className="relative w-full max-w-[620px] lg:max-w-none flex items-center justify-center"
              >
                <div className="relative group w-full">
                  {/* Subtle Outer Cyan Glow Aura */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 via-[#39BFF5]/25 to-[#0878D1]/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* High-Resolution GCC Command Center Dashboard & Glowing Node Base Graphic */}
                  <picture>
                    <source srcSet="/hero-command-center-hud.avif" type="image/avif" />
                    <source srcSet="/hero-command-center-hud.webp" type="image/webp" />
                    <img
                      src="/hero-command-center-hud.png"
                      alt="AqarQore dashboard showing live lead assignment across Dubai, Doha and Riyadh"
                      width="1024"
                      height="682"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter saturate-105"
                    />
                  </picture>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. REAL ESTATE INDUSTRY SHOWCASE HUB: LIVE PROPERTY FEED (WHITE BG)        */}
      {/* -------------------------------------------------------------------------- */}
      <section id="showcase" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Architectural Grid Background Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-3.5 mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#0858A8] bg-blue-50 border border-blue-200/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0858A8] animate-pulse" />
              <span>{isRtl ? '• بث حي ومباشر للعقارات •' : '• LIVE PROPERTY FEED •'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0858A8] animate-pulse" />
            </div>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
              {isRtl ? 'عقارات مميزة. مباشرة من أسواق الخليج.' : 'Premium Properties. Live from GCC.'}
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {isRtl ? 'موثقة ومؤهلة بالذكاء الاصطناعي، متصلة بوكالتك في الوقت الفعلي.' : 'Verified. Qualified. Connected to your agency in real time.'}
            </p>

            {/* 4 Feature Badges Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-3">
              <div className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700 font-medium flex items-center gap-2 shadow-xs">
                <Building className="w-3.5 h-3.5 text-[#1078C0]" />
                <span>{isRtl ? 'مباشر من البوابات العقارية' : 'Live from Property Portals'}</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 font-medium flex items-center gap-2 shadow-xs">
                <Target className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isRtl ? 'عملاء مؤهلون بالذكاء الاصطناعي' : 'AI Verified Leads'}</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700 font-medium flex items-center gap-2 shadow-xs">
                <Bot className="w-3.5 h-3.5 text-[#1078C0]" />
                <span>{isRtl ? 'توزيع تلقائي للوكلاء' : 'Agent Auto-Assignment'}</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs text-amber-800 font-medium flex items-center gap-2 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>{isRtl ? 'اعتماد العمولات على خطوتين' : '2-Step Commission Signoff'}</span>
              </div>
            </div>

            {/* Editorial City Switcher */}
            <div className="flex justify-center pt-2">
              <div className="inline-flex p-1 bg-slate-200/80 rounded-2xl border border-slate-300/70 shadow-inner">
                {[
                  { id: 'doha', label: isRtl ? 'الدوحة واللؤلؤة قطر' : 'Doha & Pearl Qatar' },
                  { id: 'dubai', label: isRtl ? 'دبي وأبوظبي' : 'Dubai & Abu Dhabi' },
                  { id: 'riyadh', label: isRtl ? 'الرياض وجدة' : 'Riyadh & Jeddah' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActivePropertyTab(tab.id);
                      setMobileCardIndex(0);
                    }}
                    aria-pressed={activePropertyTab === tab.id}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activePropertyTab === tab.id
                        ? 'bg-gradient-to-r from-[#1078C0] to-[#0858A8] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3 PREMIUM CARDS GRID MATCHING REFERENCE 1:1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-7 items-stretch">
            {(MARKET_PROPERTIES[activePropertyTab] || MARKET_PROPERTIES.doha).map((property, idx) => {
              const BadgeIcon = property.badgeIcon || Zap;
              const LeftIcon = property.featureLeftIcon || MessageSquare;

              const isEmerald = property.badgeColor === 'emerald';
              const isGold = property.badgeColor === 'gold';
              const isCyan = property.badgeColor === 'cyan';

              const badgePillStyle = isEmerald
                ? 'bg-emerald-950/85 border-emerald-500/60 text-emerald-300 shadow-[0_0_10px_rgba(0,214,163,0.25)]'
                : isGold
                ? 'bg-amber-950/85 border-amber-500/60 text-amber-300 shadow-[0_0_10px_rgba(245,185,30,0.25)]'
                : 'bg-sky-950/85 border-sky-500/60 text-sky-300 shadow-[0_0_10px_rgba(57,191,245,0.25)]';

              const buttonStyle = property.theme === 'blue'
                ? 'bg-blue-600 border-[#39BFF5] shadow-[0_0_18px_rgba(8,120,209,0.6)]'
                : property.theme === 'teal'
                ? 'bg-teal-600 border-[#00D6A3] shadow-[0_0_18px_rgba(0,214,163,0.6)]'
                : 'bg-amber-600 border-[#F5B91E] shadow-[0_0_18px_rgba(245,185,30,0.6)]';

              return (
                <motion.div 
                  key={property.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[28px] bg-[#001738] border border-blue-900/70 hover:border-[#1078C0] shadow-[0_20px_45px_-10px_rgba(0,27,61,0.35)] hover:shadow-[0_25px_55px_-10px_rgba(0,27,61,0.5)] flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* TOP: IMMERSIVE PROPERTY PHOTOGRAPHY */}
                  <div className="relative h-[250px] overflow-hidden bg-slate-900">
                    <img 
                      src={property.image} 
                      alt={`${isRtl ? (property.titleAr || property.title) : property.title} — ${isRtl ? (property.locationAr || property.location) : property.location}`}
                      width="1200"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001738] via-transparent to-black/40 pointer-events-none" />

                    {/* Top-Left Floating Price Tag */}
                    <div className="absolute top-3.5 left-3.5 px-4 py-1.5 rounded-full bg-[#00142E]/90 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm border border-white/20 shadow-lg tracking-tight">
                      {isRtl ? (property.priceAr || property.price) : property.price}
                    </div>

                    {/* Top-Right Floating Bookmark Button */}
                    <button 
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/80 transition-colors cursor-pointer"
                      aria-label="Save property"
                    >
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>

                    {/* Bottom-Right Floating Badge Over Image */}
                    <div className={`absolute bottom-3 right-3.5 px-3 py-1 rounded-full border text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md ${badgePillStyle}`}>
                      <BadgeIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>{isRtl ? (property.badgeAr || property.badge) : property.badge}</span>
                    </div>
                  </div>

                  {/* CENTER / BODY: PROPERTY METADATA & SPECS */}
                  <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      {/* Location with Pin */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#39BFF5] shrink-0" />
                        <span className="truncate">{isRtl ? (property.locationAr || property.location) : property.location}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#39BFF5] transition-colors">
                        {isRtl ? (property.titleAr || property.title) : property.title}
                      </h3>

                      {/* 3-Column Specifications Row */}
                      <div className="flex items-center gap-6 text-xs text-slate-300 pt-1">
                        {property.specs.map((spec, sIdx) => {
                          const IconComp = spec.icon;
                          return (
                            <div key={sIdx} className="flex items-center gap-2">
                              <IconComp className="w-4 h-4 text-slate-400" />
                              <span className="font-semibold text-white">{isRtl ? (spec.labelAr || spec.label) : spec.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Full-Width Feature Pill Bar (Reference Design) */}
                      <div className="p-3 rounded-2xl bg-[#00132C]/90 border border-blue-900/70 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-slate-300">
                          <LeftIcon className="w-4 h-4 text-slate-400" />
                          <span className="font-medium text-[11.5px]">
                            {isRtl ? (property.featureLeftLabelAr || property.featureLeftLabel) : property.featureLeftLabel}
                          </span>
                        </div>

                        {property.featureRightType === 'check' ? (
                          <div className={`flex items-center gap-1 font-semibold text-[11.5px] ${isEmerald ? 'text-[#00D6A3]' : 'text-[#39BFF5]'}`}>
                            <span>{isRtl ? (property.featureRightLabelAr || property.featureRightLabel) : property.featureRightLabel}</span>
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 font-semibold text-[11.5px] text-[#F5B91E]">
                            <span>{isRtl ? (property.featureRightLabelAr || property.featureRightLabel) : property.featureRightLabel}</span>
                            <Lock className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* FOOTER ACTION ROW */}
                    <div className="pt-2 flex items-center justify-between">
                      <a 
                        href="#pricing"
                        className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors flex items-center gap-2"
                      >
                        <span>{isRtl ? 'عرض التفاصيل' : 'View Details'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-[#39BFF5] transition-all" />
                      </a>

                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-white ${buttonStyle} group-hover:scale-108 transition-transform`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM 5-ITEM TRUST FEATURE BAR */}
          <motion.div 
            className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Item 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#0858A8]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">{isRtl ? 'قوائم موثقة 100%' : '100% Verified Listings'}</div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {isRtl ? 'عقارات حقيقية ومباشرة من بوابات موثوقة' : 'Live & genuine properties from trusted portals'}
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">{isRtl ? 'مطابقة بالذكاء الاصطناعي' : 'AI Powered Matching'}</div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {isRtl ? 'تأهيل المشترين وتوزيعهم تلقائياً للوكلاء' : 'Smart buyer qualification & auto agent assignment'}
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#0858A8]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">{isRtl ? 'آمن ومتوافق' : 'Secure & Compliant'}</div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {isRtl ? 'نظام مشفر متوافق مع لوائح دول الخليج' : 'End-to-end encrypted GCC compliant system'}
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5 text-[#0858A8]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">{isRtl ? 'تزامن فوري' : 'Real-time Sync'}</div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {isRtl ? 'تحديثات لحظية من منصات العقارات الخليجية' : 'Live updates from all major GCC property platforms'}
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">{isRtl ? 'نسب تحويل أعلى' : 'Higher Conversions'}</div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {isRtl ? 'استجابة أسرع وعملاء أفضل وإغلاق صفقات أكثر' : 'Faster response. Better leads. More closed deals.'}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 3. AqarQore ENGINE: THE CONNECTED INTELLIGENT OPERATING SYSTEM (WHITE BG)   */}
      {/* -------------------------------------------------------------------------- */}
      <section id="engine" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-mono font-bold uppercase tracking-widest text-[#0858A8] shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#0858A8] animate-pulse" />
              <span>{isRtl ? 'محرك AqarQore الذكي' : 'AqarQore ENGINE'}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              {isRtl ? (
                <>
                  <span>صُمم للـ</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                    سرعة.
                  </span>{' '}
                  <span>صُمم للتـ</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008765] via-[#0858A8] to-[#001D42]">
                    وسع.
                  </span>
                </>
              ) : (
                <>
                  Built for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                    Speed.
                  </span>{' '}
                  Built for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008765] via-[#0858A8] to-[#001D42]">
                    Scale.
                  </span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base sm:leading-relaxed max-w-2xl mx-auto font-normal">
              {isRtl 
                ? 'كل ما تحتاجه وكالتك العقارية لتعمل بذكاء وسرعة وثقة تشغيلية مطلقة.' 
                : 'Everything your agency needs to run smarter, faster and with complete confidence.'}
            </p>
          </motion.div>

          {/* CONNECTED SYSTEM ARCHITECTURE: 4 INTELLIGENT ENGINE MODULES */}
          <div className="relative">
            
            {/* Connected Glowing Horizontal Data Bus Highway (Desktop) */}
            <div className="hidden lg:block absolute top-[52%] left-10 right-10 h-[2px] -translate-y-1/2 z-0 pointer-events-none">
              {/* Base track */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0878D1]/30 via-[#00D6A3]/40 via-[#F5B91E]/40 to-[#8B5CF6]/30" />
              <div className="absolute inset-0 bg-sky-400/20 blur-[1px]" />
              
              {/* Animated Flowing Energy Streamer */}
              <motion.div 
                className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-[#1078C0] to-transparent shadow-[0_0_12px_#1078C0]"
                animate={{ x: ['-20%', '800%'] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* 4 Connected Node Connection Dots */}
              <div className="absolute left-[12.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#0878D1] shadow-xs" />
              <div className="absolute left-[37.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#00D6A3] shadow-xs" />
              <div className="absolute left-[62.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#F5B91E] shadow-xs" />
              <div className="absolute left-[87.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#8B5CF6] shadow-xs" />
            </div>

            {/* Mobile / Tablet Vertical Connecting Data Line */}
            <div className="lg:hidden absolute top-8 bottom-8 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#39BFF5]/40 via-[#00D6A3]/40 to-[#A78BFA]/40 z-0 pointer-events-none" />

            {/* 4 Engine Modules Grid with Editorial Vertical Offsets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 relative z-10 items-stretch">
              
              {/* ============================================================ */}
              {/* MODULE 01 — SPEED (Electric Blue / Cyan)                     */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="rounded-[28px] bg-gradient-to-b from-[#001F47] to-[#00142E] p-6 sm:p-7 border border-sky-500/35 hover:border-[#39BFF5] shadow-[0_20px_45px_-10px_rgba(0,27,61,0.3)] hover:shadow-[0_25px_55px_-10px_rgba(8,120,209,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden"
              >
                {/* Top Corner Technical Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#39BFF5]/15 to-transparent pointer-events-none rounded-bl-3xl" />

                <div className="space-y-6">
                  {/* Module Header Strip */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#39BFF5] tracking-wider">
                        {isRtl ? 'المعيار 01' : 'METRIC 01'}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">
                        {isRtl ? '• السرعة' : '• SPEED'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#39BFF5] animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF5]" />
                    </div>
                  </div>

                  {/* Large Visual: Futuristic Stopwatch Gauge with Pulse Ring */}
                  <div className="relative py-2 flex items-center justify-center">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Rotating Outer Radar Ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border border-dashed border-[#39BFF5]/40"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                      />
                      {/* Pulsing Aura */}
                      <div className="absolute inset-2 rounded-full bg-[#0878D1]/20 blur-md group-hover:bg-[#39BFF5]/30 transition-colors" />
                      {/* Central Speedometer Core */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#001738] border border-sky-400/50 flex flex-col items-center justify-center text-center shadow-inner">
                        <Clock className="w-6 h-6 text-[#39BFF5] group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-mono font-extrabold text-sky-200 mt-1">
                          {isRtl ? '< 10 ث' : '< 10s'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Metric & Description */}
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-[#39BFF5] transition-colors">
                      {isRtl ? '10 ثوانٍ' : '10 Seconds'}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {isRtl ? 'نافذة التوزيع التلقائي للعملاء' : 'Max lead assignment window'}
                    </div>
                    <p className="text-[11.5px] text-blue-200/60 leading-relaxed pt-1">
                      {isRtl ? '«أتمتة فائقة السرعة تُبقيك دائماً في المقدمة.»' : '“Lightning-fast automation that keeps you ahead.”'}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Chip */}
                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#39BFF5] flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#39BFF5]" />
                    {isRtl ? 'توزيع تحت 10 ثوانٍ' : 'SUB-10S ROUTING'}
                  </span>
                  <span className="text-[9.5px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    {isRtl ? 'نشط' : 'ACTIVE'}
                  </span>
                </div>
              </motion.div>

              {/* ============================================================ */}
              {/* MODULE 02 — AUDIT (Emerald / Teal)                           */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-[28px] bg-gradient-to-b from-[#00223D] to-[#00142E] p-6 sm:p-7 border border-emerald-500/35 hover:border-[#00D6A3] shadow-[0_20px_45px_-10px_rgba(0,27,61,0.3)] hover:shadow-[0_25px_55px_-10px_rgba(0,214,163,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden lg:translate-y-5"
              >
                {/* Top Corner Technical Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#00D6A3]/15 to-transparent pointer-events-none rounded-bl-3xl" />

                <div className="space-y-6">
                  {/* Module Header Strip */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#00D6A3] tracking-wider">
                        {isRtl ? 'المعيار 02' : 'METRIC 02'}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">
                        {isRtl ? '• النزاهة' : '• INTEGRITY'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00D6A3] animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
                    </div>
                  </div>

                  {/* Large Visual: Holographic Verification Shield with Scan Beam */}
                  <div className="relative py-2 flex items-center justify-center">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Scanning Ring */}
                      <div className="absolute inset-0 rounded-full border border-emerald-500/30" />
                      <div className="absolute inset-2 rounded-full bg-emerald-500/15 blur-md group-hover:bg-emerald-500/25 transition-colors" />
                      
                      {/* Shield Core */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#001738] border border-emerald-500/50 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden">
                        <ShieldCheck className="w-7 h-7 text-[#00D6A3] group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] font-mono font-extrabold text-emerald-300 mt-1">
                          {isRtl ? 'موثق' : 'VERIFIED'}
                        </span>
                        
                        {/* Laser Scan Sweep */}
                        <motion.div 
                          className="absolute left-0 right-0 h-[2px] bg-[#00D6A3] shadow-[0_0_8px_#00D6A3]"
                          animate={{ top: ['0%', '100%', '0%'] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Primary Metric & Description */}
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-[#00D6A3] transition-colors">
                      {isRtl ? 'تدقيق 100%' : '100% Audit'}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {isRtl ? 'مطابقة واعتماد العمولات بخطوتين' : 'Reconciled commission signoffs'}
                    </div>
                    <p className="text-[11.5px] text-blue-200/60 leading-relaxed pt-1">
                      {isRtl ? '«شفافية كاملة ومحاسبة دقيقة لكل صفقة.»' : '“Complete transparency. Every deal accounted for.”'}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Chip */}
                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00D6A3] flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#00D6A3]" />
                    {isRtl ? 'تدقيق موثق' : 'AUDIT VERIFIED'}
                  </span>
                  <span className="text-[9.5px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    {isRtl ? 'قفل بخطوتين' : '2-STEP LOCK'}
                  </span>
                </div>
              </motion.div>

              {/* ============================================================ */}
              {/* MODULE 03 — META VERIFIED (Gold / Warm Cyan)                 */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="rounded-[28px] bg-gradient-to-b from-[#001D40] to-[#00142E] p-6 sm:p-7 border border-amber-500/35 hover:border-[#F5B91E] shadow-[0_20px_45px_-10px_rgba(0,27,61,0.3)] hover:shadow-[0_25px_55px_-10px_rgba(245,185,30,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden"
              >
                {/* Top Corner Technical Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F5B91E]/15 to-transparent pointer-events-none rounded-bl-3xl" />

                <div className="space-y-6">
                  {/* Module Header Strip */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#F5B91E] tracking-wider">
                        {isRtl ? 'المعيار 03' : 'METRIC 03'}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">
                        {isRtl ? '• التواصل' : '• COMMS'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#F5B91E] animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5B91E]" />
                    </div>
                  </div>

                  {/* Large Visual: Meta Cloud API Communication Hub */}
                  <div className="relative py-2 flex items-center justify-center">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Concentric Communication Signal Waves */}
                      <div className="absolute inset-0 rounded-full border border-amber-500/30 animate-ping opacity-30" />
                      <div className="absolute inset-1 rounded-full border border-amber-500/40" />
                      <div className="absolute inset-3 rounded-full bg-amber-500/15 blur-md group-hover:bg-amber-500/25 transition-colors" />

                      {/* Hub Core */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#001738] border border-amber-500/50 flex flex-col items-center justify-center text-center shadow-inner">
                        <MessageSquare className="w-7 h-7 text-[#F5B91E] group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] font-mono font-extrabold text-amber-300 mt-1">
                          {isRtl ? 'سحابة ميتا' : 'META CLOUD'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Metric & Description */}
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-[#F5B91E] transition-colors">
                      {isRtl ? 'واجهة ميتا السحابية' : 'Meta Cloud API'}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {isRtl ? 'واجهة واتساب السحابية الرسمية' : 'Official WhatsApp Cloud API'}
                    </div>
                    <p className="text-[11.5px] text-blue-200/60 leading-relaxed pt-1">
                      {isRtl ? '«موثوق، آمن، ورسمي مباشرة من شركة ميتا.»' : '“Trusted. Secure. Official. Direct from Meta.”'}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Chip */}
                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#F5B91E] flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-[#F5B91E]" />
                    {isRtl ? 'واجهة برمجة رسمية' : 'OFFICIAL API'}
                  </span>
                  <span className="text-[9.5px] font-mono text-amber-300 font-bold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                    {isRtl ? 'سحابة ميتا' : 'META CLOUD'}
                  </span>
                </div>
              </motion.div>

              {/* ============================================================ */}
              {/* MODULE 04 — MOBILITY / OFFLINE APP (Electric Blue / Violet)  */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, y: 110 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="rounded-[28px] bg-gradient-to-b from-[#0B1A42] to-[#00142E] p-6 sm:p-7 border border-violet-500/35 hover:border-[#A78BFA] shadow-[0_20px_45px_-10px_rgba(0,27,61,0.3)] hover:shadow-[0_25px_55px_-10px_rgba(167,139,250,0.45)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden lg:translate-y-5"
              >
                {/* Top Corner Technical Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#A78BFA]/15 to-transparent pointer-events-none rounded-bl-3xl" />

                <div className="space-y-6">
                  {/* Module Header Strip */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#A78BFA] tracking-wider">
                        {isRtl ? 'المعيار 04' : 'METRIC 04'}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400">
                        {isRtl ? '• التزامن الطرفي' : '• EDGE SYNC'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    </div>
                  </div>

                  {/* Large Visual: Modern Smartphone Mockup with Simulated Mini Lead Card */}
                  <div className="relative py-2 flex items-center justify-center">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-violet-500/30" />
                      <div className="absolute inset-2 rounded-full bg-violet-500/15 blur-md group-hover:bg-violet-500/25 transition-colors" />

                      {/* Phone Outline */}
                      <div className="relative z-10 w-16 h-24 rounded-2xl bg-[#001026] border-2 border-violet-400/60 p-1.5 flex flex-col justify-between shadow-xl group-hover:scale-105 transition-transform">
                        {/* Mini Phone Speaker notch */}
                        <div className="w-4 h-1 rounded-full bg-violet-400/40 mx-auto" />
                        
                        {/* Mini Lead Card simulation */}
                        <div className="p-1 rounded-md bg-[#032653] border border-sky-400/40 space-y-1">
                          <div className="w-full h-1 bg-[#39BFF5] rounded-full" />
                          <div className="w-3/4 h-0.5 bg-sky-200/50 rounded-full" />
                          <div className="flex items-center justify-between text-[6px] font-mono text-[#00D6A3] pt-0.5">
                            <span>{isRtl ? 'متزامن' : 'SYNCED'}</span>
                            <span>✓</span>
                          </div>
                        </div>

                        {/* Mini Home Indicator */}
                        <div className="w-6 h-0.5 rounded-full bg-violet-400/40 mx-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Primary Metric & Description */}
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-[#A78BFA] transition-colors">
                      {isRtl ? 'تطبيق دون إنترنت' : 'Offline App'}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {isRtl ? 'تزامن معاينات القبو والمواقف' : 'Basement viewing sync'}
                    </div>
                    <p className="text-[11.5px] text-blue-200/60 leading-relaxed pt-1">
                      {isRtl ? '«اعمل في أي مكان وتزامن فور عودة الاتصال.»' : '“Work anywhere. Sync when you\'re back.”'}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Chip */}
                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#A78BFA] flex items-center gap-1.5">
                    <Smartphone className="w-3 h-3 text-[#A78BFA]" />
                    {isRtl ? 'وضع دون اتصال' : 'OFFLINE MODE'}
                  </span>
                  <span className="text-[9.5px] font-mono text-purple-300 font-bold px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30">
                    {isRtl ? 'تزامن 5G' : '5G SYNC'}
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* AqarQore ENGINE LIVE TELEMETRY STATUS STRIP (WHITE BG STYLE) */}
          <motion.div 
            className="mt-14 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col lg:flex-row items-center justify-between gap-5 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
                {isRtl ? 'حالة محرك AqarQore' : 'AqarQore ENGINE STATUS'}
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-800 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-300">
                {isRtl ? 'جميع الأنظمة تعمل بكفاءة' : 'ALL SYSTEMS OPERATIONAL'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-[#0858A8]">{isRtl ? 'أتمتة العملاء:' : 'Lead Automation:'}</span>
                <span className="text-emerald-600 font-bold">{isRtl ? '✓ نشط' : '✓ ACTIVE'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-emerald-700">{isRtl ? 'تدقيق العمولات:' : 'Commission Audit:'}</span>
                <span className="text-emerald-600 font-bold">{isRtl ? '✓ نشط' : '✓ ACTIVE'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-amber-700">{isRtl ? 'واجهة واتساب:' : 'WhatsApp API:'}</span>
                <span className="text-emerald-600 font-bold">{isRtl ? '✓ موثق' : '✓ VERIFIED'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-violet-700">{isRtl ? 'تزامن دون إنترنت:' : 'Offline Sync:'}</span>
                <span className="text-emerald-600 font-bold">{isRtl ? '✓ جاهز' : '✓ READY'}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 4. PROBLEM / AGITATION SECTION: 74% REVENUE LEAK CONNECTED SYSTEM          */}
      {/* -------------------------------------------------------------------------- */}
      <section id="problem" className="py-24 sm:py-32 bg-[#001738] text-white relative border-b border-blue-950/80 overflow-hidden">
        {/* Layer 1: GCC Telemetry & Holographic Regional Map Artwork (Full Clarity, Zero Gradient Overlays) */}
        <div 
          className="absolute inset-0 z-0 bg-art bg-art-telemetry pointer-events-none opacity-100"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: THE 74% VISUAL ANCHOR & EDITORIAL PROBLEM STATEMENT   */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 text-left"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3.5 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider shadow-sm">
                {isRtl ? 'واقع وكالات العقار في الخليج' : 'The GCC Brokerage Reality'}
              </span>

              {/* Dominant 74% Visual Impact Anchor */}
              <div className="space-y-1">
                <div className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-rose-300 to-amber-200 leading-none">
                  74%
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-rose-300/80 font-mono">
                  {isRtl ? 'استفسارات تُفقد لصالح المنافسين' : 'Inquiries Lost to Competitors'}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {isRtl 
                  ? 'لماذا تفقد وكالات العقارات 74% من استفسارات المشترين قبل أن تتحول إلى معاينات؟' 
                  : 'Why 74% of GCC Real Estate Inquiries Never Turn Into Viewings'}
              </h2>

              <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed font-normal">
                {isRtl 
                  ? 'إدارة وكالة عقارية كبرى عبر مجموعات واتساب وجداول إكسل يدوية يتسبب في تسرب خفي للإيرادات في كل مرحلة من مراحل المبيعات.' 
                  : 'Running a high-performing brokerage on WhatsApp groups and manual Excel spreadsheets creates silent revenue leaks at every step of the funnel.'}
              </p>
            </motion.div>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT COLUMN: CONNECTED 4-NODE PROBLEM BREAKDOWN TREE               */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-7 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Luminous Vertical Tree Connection Line */}
              <div className={`hidden sm:block absolute top-8 bottom-8 ${isRtl ? 'right-6' : 'left-6'} w-[2px] bg-gradient-to-b from-rose-500/50 via-amber-500/40 to-blue-500/30 z-0 pointer-events-none`} />

              <div className="space-y-5 relative z-10">
                
                {/* Problem Node 01 */}
                <motion.div 
                  variants={fadeInUp}
                  className={`relative ${isRtl ? 'sm:pr-16 text-right' : 'sm:pl-16 text-left'} group`}
                >
                  {/* Connected Tree Dot */}
                  <div className={`hidden sm:flex absolute ${isRtl ? 'right-3.5 translate-x-1/2' : 'left-3.5 -translate-x-1/2'} top-6 w-5 h-5 rounded-full bg-[#001738] border-2 border-rose-400 items-center justify-center shadow-[0_0_12px_rgba(244,63,94,0.6)] group-hover:scale-125 transition-transform z-10`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-rose-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                        {isRtl ? 'عملاء عطلة نهاية الأسبوع المهملون' : 'Unassigned Weekend Leads'}
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      {isRtl 
                        ? 'تصل استفسارات Property Finder و Bayut مساء الجمعة. وبحلول صباح الأحد، يكون المشتري قد تعاقد بالفعل مع وكالة منافسة.' 
                        : 'Property Finder & Bayut leads arrive at 9 PM or Friday afternoon. By Monday morning, the buyer has already signed with a competitor.'}
                    </p>
                  </div>
                </motion.div>

                {/* Problem Node 02 */}
                <motion.div 
                  variants={fadeInUp}
                  className={`relative ${isRtl ? 'sm:pr-16 text-right' : 'sm:pl-16 text-left'} group`}
                >
                  {/* Connected Tree Dot */}
                  <div className={`hidden sm:flex absolute ${isRtl ? 'right-3.5 translate-x-1/2' : 'left-3.5 -translate-x-1/2'} top-6 w-5 h-5 rounded-full bg-[#001738] border-2 border-amber-400 items-center justify-center shadow-[0_0_12px_rgba(251,191,36,0.6)] group-hover:scale-125 transition-transform z-10`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-amber-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                        {isRtl ? 'فوضى محادثات واتساب الفردية' : 'WhatsApp Silos & Chaos'}
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      {isRtl 
                        ? 'يراسل الوكلاء المشترين من هواتفهم الشخصية. وعند استقالة الوكيل، تخرج معه سجلات العملاء وتاريخ المحادثات وقاعدة البيانات بالكامل.' 
                        : 'Agents message prospects from personal phones. When an agent leaves, your client history, listing conversations, and lead data walk out the door with them.'}
                    </p>
                  </div>
                </motion.div>

                {/* Problem Node 03 */}
                <motion.div 
                  variants={fadeInUp}
                  className={`relative ${isRtl ? 'sm:pr-16 text-right' : 'sm:pl-16 text-left'} group`}
                >
                  {/* Connected Tree Dot */}
                  <div className={`hidden sm:flex absolute ${isRtl ? 'right-3.5 translate-x-1/2' : 'left-3.5 -translate-x-1/2'} top-6 w-5 h-5 rounded-full bg-[#001738] border-2 border-purple-400 items-center justify-center shadow-[0_0_12px_rgba(192,132,252,0.6)] group-hover:scale-125 transition-transform z-10`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-purple-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                        {isRtl ? 'نزاعات وازدواجية العمولات' : 'Commission Disputes'}
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      {isRtl 
                        ? 'بدون مسار تدقيق إلكتروني صارم، يتم تجاوز اعتمادات الصفقات وتحدث مدفوعات مكررة ويفقد كبار الوكلاء الثقة في الإدارة المالية.' 
                        : 'Without server-enforced approval steps, deal signoffs get skipped, double payouts happen, and top agents lose trust in accounting.'}
                    </p>
                  </div>
                </motion.div>

                {/* Problem Node 04 */}
                <motion.div 
                  variants={fadeInUp}
                  className={`relative ${isRtl ? 'sm:pr-16 text-right' : 'sm:pl-16 text-left'} group`}
                >
                  {/* Connected Tree Dot */}
                  <div className={`hidden sm:flex absolute ${isRtl ? 'right-3.5 translate-x-1/2' : 'left-3.5 -translate-x-1/2'} top-6 w-5 h-5 rounded-full bg-[#001738] border-2 border-sky-400 items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.6)] group-hover:scale-125 transition-transform z-10`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-sky-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                        {isRtl ? 'تكرار وازدواجية الإعلانات في البوابات' : 'Duplicate Portal Listings'}
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      {isRtl 
                        ? 'ينشر عدة وكلاء نفس العقار بأسعار مختلفة، مما يضر بسمعة الوكالة ويتسبب في عقوبات خفض الترتيب من البوابات العقارية.' 
                        : 'Multiple agents post the exact same unit with different prices, embarrassing the agency brand and causing portal penalty demotions.'}
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 5. 10 FEATURE SECTIONS WITH IMAGES & SCROLL ANIMATION                      */}
      {/* -------------------------------------------------------------------------- */}
      <section id="features" className="py-24 sm:py-32 bg-white text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
          
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#0858A8] border border-blue-200/60 text-xs font-bold uppercase tracking-wider shadow-sm">
              {isRtl ? 'محرك الميزات المتكامل' : 'Complete Feature Engine'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
              {isRtl 
                ? 'صُمم خصيصاً لوكالات العقارات الكبرى في الخليج' 
                : 'Engineered Specifically for High-Volume GCC Brokerages'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isRtl 
                ? 'كل ميزة صُممت لحل نقاط الاحتكاك الحقيقية التي يواجهها أصحاب الوكالات في قطر ودبي والرياض.' 
                : 'Every feature built to solve a real friction point reported by Qatar, Dubai, and Riyadh agency owners.'}
            </p>
          </motion.div>

          {/* FEATURE 1: Automated Lead Distribution */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className={`lg:col-span-6 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[#1078C0] border border-blue-200/60 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>{isRtl ? 'الميزة 01 • سرعة الوصول للعميل' : 'Feature 01 • Speed to Lead'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                {isRtl 
                  ? 'لا تفقد عميلاً مهتماً أبداً بسبب بطء الاستجابة' 
                  : 'Never Lose a Hot Lead to a Slow Response'}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                {isRtl 
                  ? 'يتم توزيع كل عميل جديد تلقائياً في أقل من 10 ثوانٍ عبر مسار القواعد الذكية، مع تجاوز الوكلاء المشغولين أو خارج الدوام، وتوثيق سجل قرار التوزيع بالكامل. لا يظل أي عميل دون تعيين بينما ما زال اهتمامه في ذروته.' 
                  : 'Every new lead is auto-assigned by a rule pipeline in under 10 seconds, skipping agents who are at capacity, off-hours, or unavailable, with a full decision trail stored for every assignment. No lead sits unassigned; every inquiry reaches an available agent while the prospect is still hot.'}
              </p>
              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    {isRtl ? 'توزيع دوري وسعة استيعاب في أقل من 10 ثوانٍ' : 'Sub-10 second round-robin and capacity distribution'}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    {isRtl ? 'سجل تدقيق ملزم وموثق لكل قرار توزيع' : 'Enforced audit trail for every lead assignment decision'}
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 1 Mockup: High-Tech Rule Pipeline Terminal */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-b from-[#002B5E] to-[#001738] p-5 sm:p-6 border border-blue-800/80 shadow-[0_20px_50px_-15px_rgba(0,48,104,0.3)] text-white">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-800/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-blue-300 font-mono ml-2">
                      {isRtl ? 'سجل مسار التوزيع التلقائي' : 'AUTOMATED RULE PIPELINE LOG'}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                    {isRtl ? 'تنفيذ خلال 0.04 ث' : '00:00:04s Execution'}
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-4 rounded-xl bg-[#0858A8]/30 border border-blue-500/30">
                    <div className="flex justify-between items-center font-bold text-white text-sm">
                      <span>{isRtl ? 'استفسار: برج مارينا لوسيل - غرفتان' : 'Inquiry: Lusail Marina Tower 2BR'}</span>
                      <span className="text-xs text-sky-300 font-mono bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                        {isRtl ? '2.8 مليون ر.ق' : 'QAR 2.8M'}
                      </span>
                    </div>
                    <div className="mt-3.5 space-y-2 text-blue-100 text-xs">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-amber-400">✕</span>
                        <span>{isRtl ? 'فحص الوكيل #104 (عطلة الجمعة) ← تم التجاوز' : 'Checking Agent #104 (Off-duty Friday) → Skipped'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-amber-400">✕</span>
                        <span>{isRtl ? 'فحص الوكيل #109 (الحد الأقصى 25 عميل) ← تم التجاوز' : 'Checking Agent #109 (At Max 25 Active Leads) → Skipped'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300 font-semibold pt-1 border-t border-blue-700/40">
                        <span className="text-emerald-400">✓</span>
                        <span>{isRtl ? 'تم التعيين للوكيل #112 (راشد الدوسري) ← تم الإجراء' : 'Assigned to Agent #112 (Rashid Al-Dosari) → Actioned'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between text-[11px] text-blue-300 font-mono">
                  <span>{isRtl ? 'القاعدة: المطابقة الجغرافية + السعة' : 'Rule: Geo-Match + Capacity'}</span>
                  <span className="text-emerald-400">{isRtl ? 'تم التحقق والتوثيق' : 'Verified & Logged'}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <hr className="border-slate-100" />

          {/* FEATURE 2: AI WhatsApp Bot */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className={`lg:col-span-6 lg:order-2 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isRtl ? 'الميزة 02 • الذكاء الاصطناعي للمحادثات' : 'Feature 02 • Conversational AI'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                {isRtl 
                  ? 'تأهيل ميزانية المشتري ومنطقته المفضلة تلقائياً على مدار الساعة' 
                  : 'Qualify Buyer Budget & Area Automatically 24/7'}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                {isRtl 
                  ? 'يرحب الروبوت بالمشتري ويؤهل ميزانيته والمنطقة ونوع العقار بمحادثة ذكية، ويعرض العقارات المطابقة كبطاقات، ثم يحيل المحادثة للوكيل البشري بكامل السياق داخل نافذة الـ 24 ساعة المعتمدة من ميتا. يفتح الوكلاء كل محادثة وهم يعلمون بالضبط طلب العميل.' 
                  : 'The bot greets, qualifies budget/area/property type conversationally, presents matching listings as cards, then hands off to a human agent with full captured context inside Meta\'s 24-hour messaging window. Agents open every WhatsApp chat already knowing what the customer wants — no repeated questions, faster response, higher close rate.'}
              </p>
            </div>

            {/* Feature 2 Mockup: Meta WhatsApp Bot Experience */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-2xl bg-gradient-to-b from-[#00244D] to-[#001433] p-5 sm:p-6 border border-blue-800/80 shadow-[0_20px_50px_-15px_rgba(0,48,104,0.3)] text-white">
                <div className="max-w-md mx-auto bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  {/* WhatsApp Chrome Bar */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center font-bold text-xs">AQ</div>
                      <div>
                        <div className="font-bold text-sm">{isRtl ? 'مساعد AqarQore الذكي' : 'AqarQore AI Assistant'}</div>
                        <div className="text-[10px] text-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{isRtl ? 'موثق رسمياً من ميتا' : 'Official Meta API Verified'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Bubbles */}
                  <div className="p-4 space-y-3 text-xs bg-[#0B141A]">
                    <div className="bg-[#202C33] text-slate-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/50 shadow-sm leading-relaxed text-left">
                      {isRtl ? 'مرحباً! هل تبحث عن فيلا 3 غرف في لاغون الخليج الغربي بسعر أقل من 4 مليون ر.ق؟' : 'Hello! Looking for a 3BR villa in West Bay Lagoon under QAR 4M?'}
                    </div>
                    <div className="bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-sm max-w-[80%] ml-auto text-right shadow-sm leading-relaxed">
                      {isRtl ? 'نعم، الميزانية تصل إلى 4.2 مليون ر.ق، وجاهز للمعاينة هذا السبت.' : 'Yes, budget up to 4.2M QAR. Ready to view this Saturday.'}
                    </div>
                    <div className="bg-[#182229] text-slate-200 p-3.5 rounded-xl border border-emerald-500/40 shadow-md">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1.5">
                        {isRtl ? '⚡ تحويل فوري للوكيل العقاري' : '⚡ Instant Handoff to Human Agent'}
                      </span>
                      <div className="text-xs text-blue-100 space-y-1 font-medium">
                        <div>• {isRtl ? 'ملف المشتري:' : 'Buyer Profile:'} <span className="text-white font-bold">{isRtl ? 'مشتري موثق' : 'Verified Buyer'}</span></div>
                        <div>• {isRtl ? 'الميزانية:' : 'Budget:'} <span className="text-emerald-400 font-bold">{isRtl ? '4.2 مليون ر.ق' : 'QAR 4.2M'}</span> • {isRtl ? 'المفضلة: الخليج الغربي' : 'Preferred: West Bay'}</div>
                        <div>• {isRtl ? 'الوكيل المعين:' : 'Assigned Agent:'} <span className="text-sky-300 font-bold">{isRtl ? 'مريم الكواري' : 'Mariam Al-Kuwari'}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <hr className="border-slate-100" />

          {/* FEATURE 3: Two-Step Deal & Commission Approval */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className={`lg:col-span-6 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-bold uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                <span>{isRtl ? 'الميزة 03 • الرقابة المالية' : 'Feature 03 • Financial Control'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                {isRtl 
                  ? 'اعتمادات عمولات دقيقة ومحمية من النزاعات' 
                  : 'Dispute-Proof Commission Signoffs & Approvals'}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                {isRtl 
                  ? 'تمر كل صفقة مغلقة عبر مسار اعتماد إلزامي من مدير المبيعات إلى الإدارة المالية (لا يمكن لأي طرف تجاوز الآخر)، مع حساب العمولات تلقائياً وحماية دفعات الصرف من التكرار.' 
                  : 'Every closed deal moves through an enforced Sales Director → Accounting approval chain (neither can skip or bypass the other), with commissions auto-calculated on approval and idempotency-protected payout batches. Agents trust their payout numbers, and leadership gets clean, dispute-proof financial control.'}
              </p>
            </div>

            {/* Feature 3 Mockup: Financial Control Ledger */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-b from-[#002B5E] to-[#001738] p-5 sm:p-6 border border-blue-800/80 shadow-[0_20px_50px_-15px_rgba(0,48,104,0.3)] text-white">
                <div className="text-xs font-bold text-blue-200 pb-3 mb-4 border-b border-blue-800/60 flex items-center justify-between">
                  <span>{isRtl ? 'مسار الاعتماد الإلزامي' : 'ENFORCED APPROVAL WORKFLOW'}</span>
                  <span className="text-emerald-400 font-mono text-[11px] bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {isRtl ? 'اعتماد صارم بخطوتين' : 'STRICT SERVER 2-STEP'}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {isRtl ? 'الخطوة 1: توقيع مدير المبيعات' : 'Step 1: Sales Director Signoff'}
                        </div>
                        <div className="text-[11px] text-emerald-300">
                          {isRtl ? 'تم التوقيع بواسطة ناصر آل ثاني' : 'Signed by Nasser Al-Thani'}
                        </div>
                      </div>
                    </div>
                    <span className="text-emerald-300 font-bold px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px]">
                      {isRtl ? 'معتمد' : 'APPROVED'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-blue-950/70 border border-blue-700/50 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Clock className="w-5 h-5 animate-spin" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {isRtl ? 'الخطوة 2: دفعة المحاسبة #902' : 'Step 2: Accounting Payout Batch #902'}
                        </div>
                        <div className="text-[11px] text-amber-300">
                          {isRtl ? 'قفل الحماية من النزاعات نشط' : 'Dispute-Proof Lock Active'}
                        </div>
                      </div>
                    </div>
                    <span className="text-amber-300 font-bold px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-[10px]">
                      {isRtl ? 'في الانتظار' : 'QUEUED'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between text-[11px] text-blue-300 font-mono">
                  <span>{isRtl ? 'سجل التدقيق: قيد غير قابل للتعديل' : 'Audit Stamp: Immutable Ledger'}</span>
                  <span className="text-sky-300">{isRtl ? 'دقة صرف 100%' : '100% Payout Accuracy'}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 6. AqarQore SECURITY CONTROL SYSTEM: ENTERPRISE TRUST & ACCESS GOVERNANCE   */}
      {/* -------------------------------------------------------------------------- */}
      <section id="security" className="py-24 sm:py-32 bg-[#001128] text-white relative border-b border-blue-950/80 overflow-hidden">
        {/* User-Provided Futuristic Skyline & Radar Telemetry Mesh Background */}
        <div 
          className="absolute inset-0 bg-art bg-art-security pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001128]/75 via-transparent to-[#001128]/85 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-500/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-3.5 mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
              <span>{isRtl ? 'أمان وحماية AqarQore' : 'AqarQore SECURITY'}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {isRtl ? (
                <>
                  <span>الأمان مدمج في</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39BFF5] via-[#168FE5] to-[#00D6A3]">
                    كل طبقة.
                  </span>
                </>
              ) : (
                <>
                  Security Built Into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39BFF5] via-[#168FE5] to-[#00D6A3]">
                    Every Layer.
                  </span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              {isRtl 
                ? 'حماية كل تسجيل دخول، وكل عميل، وكل إجراء في الوكالة بضوابط وصول صارمة على مستوى المؤسسات.' 
                : 'Protect every login, every lead, and every agency action with enterprise-grade access controls.'}
            </p>
          </motion.div>

          {/* MAIN SECURITY ARCHITECTURE: CENTRAL CORE & 3 FLOATING SECURITY MODULES */}
          <div className="space-y-12 lg:space-y-14">
            
            {/* 1. HERO VISUAL: CENTRAL AqarQore SECURITY CORE */}
            <motion.div 
              className="relative max-w-xl mx-auto flex flex-col items-center justify-center text-center p-8 rounded-[36px] bg-gradient-to-b from-[#00224D]/90 via-[#001838]/95 to-[#001026] border border-sky-400/40 shadow-[0_0_50px_rgba(8,120,209,0.25)] group"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              {/* Animated Triple Concentric Security Orbital Rings */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-6">
                {/* Outer Ring: SESSION */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-dashed border-[#39BFF5]/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                />
                <span className="absolute top-1 text-[8px] font-mono text-sky-400/70 tracking-widest uppercase bg-[#001433] px-2 py-0.5 rounded-full border border-sky-500/20">
                  {isRtl ? 'طبقة الجلسة' : 'SESSION LAYER'}
                </span>

                {/* Middle Ring: ACCESS */}
                <motion.div 
                  className="absolute inset-4 rounded-full border border-emerald-500/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                />
                <span className="absolute bottom-1 text-[8px] font-mono text-emerald-400/70 tracking-widest uppercase bg-[#001433] px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {isRtl ? 'حدود الوصول' : 'ACCESS BOUNDARY'}
                </span>

                {/* Inner Ring: IDENTITY with Scanning Laser Sweep */}
                <div className="absolute inset-8 rounded-full border border-sky-400/50 bg-[#001B3D] shadow-inner flex items-center justify-center overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D6A3]/30 to-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Central Shield Hero Core */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0878D1] to-[#00D6A3] p-0.5 shadow-lg shadow-sky-500/30">
                      <div className="w-full h-full bg-[#001738] rounded-[14px] flex items-center justify-center">
                        <ShieldCheck className="w-7 h-7 text-[#00D6A3] group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-black text-white tracking-wider mt-2">
                      {isRtl ? 'نواة الأمان' : 'SECURITY CORE'}
                    </span>
                    <span className="text-[8px] font-mono text-[#00D6A3] font-bold">
                      {isRtl ? '✓ محمي 24/7' : '✓ PROTECTED 24/7'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Security Telemetry Strip */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10.5px] font-mono pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00142E] border border-blue-800/60 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{isRtl ? 'الهوية: موثقة' : 'IDENTITY: VERIFIED'}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00142E] border border-blue-800/60 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF5]" />
                  <span>{isRtl ? 'الوصول: 403 إلزامي' : 'ACCESS: 403 ENFORCED'}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00142E] border border-blue-800/60 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>{isRtl ? 'إلغاء الصلاحية: < 60 ث' : 'REVOCATION: < 60s'}</span>
                </div>
              </div>
            </motion.div>

            {/* 2. THE 3 CONNECTED SECURITY CONTROL MODULES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* ============================================================ */}
              {/* MODULE 01 — MULTI-FACTOR AUTHENTICATION                     */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[30px] bg-gradient-to-b from-[#001F47]/95 via-[#001738]/95 to-[#001026] p-7 sm:p-8 border border-sky-500/35 hover:border-[#39BFF5] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(57,191,245,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Tag & Icon Header */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-900/60 border border-sky-400/40 text-[#39BFF5] group-hover:text-emerald-300 group-hover:border-emerald-500/40 flex items-center justify-center transition-colors shadow-inner">
                      <Key className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#39BFF5] bg-[#001228] px-3 py-1 rounded-full border border-sky-500/30">
                      {isRtl ? '01 • مصادقة TOTP' : '01 • TOTP AUTH'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors">
                      {isRtl ? 'المصادقة المتعددة العوامل' : 'Multi-Factor Authentication'}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-blue-100/75 leading-relaxed font-normal">
                      {isRtl 
                        ? 'مصادقة MFA مبنية على تطبيق TOTP لكل موظف، مع تقييد محاولات التخمين وعدم كشف وجود المستخدم عند إدخال بيانات غير صحيحة. بياناتك لن تُخترق بكلمة مرور مسربة فقط.' 
                        : 'TOTP-based MFA on every staff login, with throttling after repeated failed attempts and no user-existence disclosure on invalid credentials. Agency data can\'t be breached by a leaked password alone.'}
                    </p>
                  </div>

                  {/* Micro Verification Step-by-Step Flow */}
                  <div className="p-3.5 rounded-2xl bg-[#001228] border border-blue-900/70 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      {isRtl ? 'مسار المصادقة' : 'AUTHENTICATION FLOW'}
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono font-bold">
                      <div className="p-1.5 rounded-lg bg-blue-950/80 border border-blue-800/50 text-slate-300">
                        {isRtl ? '1. كلمة المرور' : '1. PASSWORD'}
                      </div>
                      <div className="p-1.5 rounded-lg bg-blue-950/80 border border-sky-500/40 text-sky-300">
                        {isRtl ? '2. رمز TOTP' : '2. TOTP CODE'}
                      </div>
                      <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/60 text-[#00D6A3] flex items-center justify-center gap-1">
                        <span>{isRtl ? '3. مصرح' : '3. PASS'}</span>
                        <Check className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Status */}
                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isRtl ? 'حماية من محاولات التخمين' : 'Throttled Anti-Brute-Force'}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    {isRtl ? 'نشط' : 'ACTIVE'}
                  </span>
                </div>
              </motion.div>

              {/* ============================================================ */}
              {/* MODULE 02 — ROLE-BASED ACCESS BOUNDARIES (403 RBAC)         */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[30px] bg-gradient-to-b from-[#00224D]/95 via-[#001738]/95 to-[#001026] p-7 sm:p-8 border border-emerald-500/35 hover:border-[#00D6A3] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(0,214,163,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Tag & Icon Header */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-[#00D6A3] group-hover:text-sky-300 flex items-center justify-center transition-colors shadow-inner">
                      <Lock className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#00D6A3] bg-[#001228] px-3 py-1 rounded-full border border-emerald-500/30">
                      {isRtl ? '02 • حظر 403 وصلاحيات' : '02 • 403 RBAC'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors">
                      {isRtl ? 'حدود الصلاحيات حسب الأدوار' : 'Role-Based Access Boundaries'}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-blue-100/75 leading-relaxed font-normal">
                      {isRtl 
                        ? 'يرى المديرون عملاء فريقهم فقط، ولا يمكن لأي وكيل فتح سجل وكيل آخر عبر رابط مباشر URL — محمي ومفروض بالكامل من الخادم بخطأ 403.' 
                        : 'Managers see only their own team\'s leads; agents can never open another agent\'s record by direct URL — enforced server-side with 403s.'}
                    </p>
                  </div>

                  {/* Micro Access Boundary Visualization */}
                  <div className="p-3.5 rounded-2xl bg-[#001228] border border-blue-900/70 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      {isRtl ? 'قواعد حدود الوصول' : 'ACCESS BOUNDARY RULES'}
                    </div>
                    <div className="space-y-1 text-[10px] font-mono">
                      <div className="flex items-center justify-between p-1 px-2 rounded-md bg-blue-950/80 border border-blue-800/40">
                        <span className="text-slate-300">{isRtl ? 'المدير:' : 'Manager:'}</span>
                        <span className="text-[#39BFF5] font-bold">{isRtl ? 'عملاء الفريق فقط ✓' : 'Team Leads Only ✓'}</span>
                      </div>
                      <div className="flex items-center justify-between p-1 px-2 rounded-md bg-blue-950/80 border border-blue-800/40">
                        <span className="text-slate-300">{isRtl ? 'الوكيل:' : 'Agent:'}</span>
                        <span className="text-emerald-400 font-bold">{isRtl ? 'سجلاته الخاصة فقط ✓' : 'Own Records Only ✓'}</span>
                      </div>
                      <div className="flex items-center justify-between p-1 px-2 rounded-md bg-rose-950/50 border border-rose-500/30 text-rose-300">
                        <span>{isRtl ? 'تجاوز الرابط المباشر:' : 'Direct URL Bypass:'}</span>
                        <span className="font-bold">{isRtl ? '403 محظور' : '403 FORBIDDEN'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Status */}
                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isRtl ? 'ضمان منع تسرب الروابط' : 'Zero URL Leak Guarantee'}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    {isRtl ? 'إلزامي' : 'ENFORCED'}
                  </span>
                </div>
              </motion.div>

              {/* ============================================================ */}
              {/* MODULE 03 — INSTANT OFFBOARDING (SESSION REVOCATION)        */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-[30px] bg-gradient-to-b from-[#001F47]/95 via-[#001738]/95 to-[#001026] p-7 sm:p-8 border border-amber-500/35 hover:border-[#F5B91E] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(245,185,30,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Tag & Icon Header */}
                  <div className="flex items-center justify-between border-b border-blue-900/60 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-[#F5B91E] group-hover:text-emerald-300 flex items-center justify-center transition-colors shadow-inner">
                      <UserX className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#F5B91E] bg-[#001228] px-3 py-1 rounded-full border border-amber-500/30">
                      {isRtl ? '03 • إلغاء فوري للجلسات' : '03 • INSTANT REVOKE'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors">
                      {isRtl ? 'إنهاء الصلاحيات الفوري' : 'Instant Offboarding'}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-blue-100/75 leading-relaxed font-normal">
                      {isRtl 
                        ? 'يفقد الموظف المنتهية خدماته جميع الجلسات والرموز المميزة في أقل من دقيقة، مع إعادة توزيع عملائه أو حفظهم تلقائياً حسب السياسة.' 
                        : 'Terminated staff lose all session and token access in under a minute, with their leads automatically reassigned or parked per policy.'}
                    </p>
                  </div>

                  {/* Micro Revocation Timeline */}
                  <div className="p-3.5 rounded-2xl bg-[#001228] border border-blue-900/70 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      {isRtl ? 'الجدول الزمني للإلغاء (< 60 ث)' : 'OFFBOARDING TIMELINE (< 60s)'}
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[9.5px] font-mono">
                      <div className="p-1.5 rounded-lg bg-blue-950/80 border border-blue-800/40 text-slate-300 flex items-center gap-1">
                        <span className="text-amber-400">1.</span> {isRtl ? 'الحالة: منتهٍ' : 'Status: Terminated'}
                      </div>
                      <div className="p-1.5 rounded-lg bg-blue-950/80 border border-blue-800/40 text-slate-300 flex items-center gap-1">
                        <span className="text-amber-400">2.</span> {isRtl ? 'إنهاء الجلسة' : 'Session Killed'}
                      </div>
                      <div className="p-1.5 rounded-lg bg-blue-950/80 border border-blue-800/40 text-slate-300 flex items-center gap-1">
                        <span className="text-amber-400">3.</span> {isRtl ? 'إبطال الرموز' : 'Tokens Revoked'}
                      </div>
                      <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 flex items-center gap-1">
                        <span className="text-emerald-400">4.</span> {isRtl ? 'إعادة التعيين ✓' : 'Leads Reassigned ✓'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Status */}
                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isRtl ? 'إنهاء جلسة في أقل من 60 ث' : 'Sub-60s Session Kill'}</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                    {isRtl ? 'حفظ تلقائي' : 'AUTO-PARK'}
                  </span>
                </div>
              </motion.div>

            </div>

            {/* 3. MINIMAL TRUST / COMPLIANCE STRIP (BOTTOM OF SECTION) */}
            <motion.div 
              className="p-5 sm:p-6 rounded-2xl bg-[#001838]/90 border border-blue-900/70 shadow-xl flex flex-wrap items-center justify-center lg:justify-between gap-4 sm:gap-6 text-xs font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 text-[#39BFF5]" />
                <span className="font-bold text-white">
                  {isRtl ? 'تشفير تام أثناء التخزين والنقل' : 'ENCRYPTED AT REST & IN TRANSIT'}
                </span>
              </div>
              <div className="hidden lg:block text-slate-600">•</div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00D6A3]" />
                <span className="font-bold text-white">
                  {isRtl ? 'تحكم بالوصول من جانب الخادم' : 'SERVER-SIDE ACCESS CONTROL'}
                </span>
              </div>
              <div className="hidden lg:block text-slate-600">•</div>
              <div className="flex items-center gap-2 text-slate-300">
                <UserCheck className="w-4 h-4 text-[#39BFF5]" />
                <span className="font-bold text-white">
                  {isRtl ? 'إلغاء فوري للجلسات' : 'INSTANT SESSION REVOCATION'}
                </span>
              </div>
              <div className="hidden lg:block text-slate-600">•</div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-[#F5B91E]" />
                <span className="font-bold text-white">
                  {isRtl ? 'أمان متوافق مع معايير الخليج' : 'AUDIT READY GCC SECURITY'}
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 6B. ENTIRE AGENCY CONNECTED: INTERACTIVE NETWORK VISUALIZATION             */}
      {/* -------------------------------------------------------------------------- */}
      <section id="connected" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/5 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: EDITORIAL STATEMENT & CONNECTED PLATFORM VALUE        */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                <RefreshCw className="w-3.5 h-3.5 text-[#0858A8] animate-spin" style={{ animationDuration: '6s' }} />
                <span>{isRtl ? 'اتصال الوكالة بالكامل' : 'ENTIRE AGENCY CONNECTED'}</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
                {isRtl ? (
                  <span>وكالتك بالكامل متصلة في نظام تشغيل موحد</span>
                ) : (
                  <>
                    Your Entire Brokerage.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                      Connected Into One System.
                    </span>
                  </>
                )}
              </h2>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {isRtl ? (
                  'القضاء التام على عزلة البيانات. ربط استلام عملاء البوابات، وروبوتات واتساب من ميتا، والوكلاء الميدانيين في المعاينات، واعتمادات المحاسبة في مركز قيادة مباشر واحد.'
                ) : (
                  'Eliminate data silos permanently. Connect portal lead ingestion, Meta WhatsApp bots, offline mobile viewing agents, and accounting signoffs into one synchronized live command center.'
                )}
              </p>

              {/* Core Feature Cards */}
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-slate-300 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0858A8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {isRtl ? 'تزامن فوري ثنائي الاتجاه' : 'Instant Bidirectional Synchronization'}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {isRtl ? 'كل تعيين عميل، وسجل معاينة، وتغيير سعر يتزامن في أقل من 10 مللي ثانية.' : 'Every lead assignment, viewing log, and price change syncs in < 10ms.'}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-slate-300 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {isRtl ? 'انعدام تسرب البيانات وسجل تدقيق كامل' : 'Zero Data Leakage & Full Audit Trail'}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {isRtl ? 'صلاحيات وصول مفروضة من الخادم وإلغاء فوري للجلسات لحماية سجلات الوكالة.' : 'Server-enforced RBAC and instant token offboarding protect agency records.'}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 hover:border-slate-300 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100 font-bold">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {isRtl ? 'سير عمل سلس من الميدان إلى الإدارة' : 'Seamless Field-to-Desk Workflow'}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {isRtl ? 'يسجل الوكلاء المعاينات في القبو والمواقف دون إنترنت، ويعتمد المديرون العمولات من أي مكان.' : 'Agents log basement viewings offline; directors approve commissions anywhere.'}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <a
                  href={demoHref}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{isRtl ? 'شاهد ربط النظام المباشر' : 'Explore Connected Platform Demo'}</span>
                  <ArrowRight className={`w-4 h-4 text-blue-200 ${isRtl ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </motion.div>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT COLUMN: INTERACTIVE CONNECTED ARCHITECTURE CONSOLE           */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              {/* Outer High-End Console Shell */}
              <div className="rounded-[32px] bg-white p-6 sm:p-8 border border-slate-200 shadow-[0_20px_50px_-15px_rgba(0,48,104,0.08)] relative overflow-hidden">
                
                {/* Console Top Live Telemetry Header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                      {isRtl ? 'طوبولوجيا الوكالة • جميع العقد الـ 4 نشطة' : 'AGENCY TOPOLOGY • ALL 4 NODES LIVE'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {isRtl ? 'زمن الاستجابة: 4 مللي ث' : 'LATENCY: 4ms'}
                    </span>
                  </div>
                </div>

                {/* 4 Connected Satellite Nodes surrounding Central Backbone */}
                <div className="space-y-4">
                  
                  {/* Top Row: Portal Ingestion + Meta WhatsApp Bot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Node 1: Portal Ingestion */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0858A8] hover:bg-white hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0858A8] flex items-center justify-center border border-blue-200/80 shadow-2xs">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#0858A8] transition-colors">
                              {isRtl ? 'استيراد البوابات العقارية' : 'Portal Ingestion'}
                            </div>
                            <div className="text-[10px] font-mono text-slate-500">Property Finder &amp; Bayut</div>
                          </div>
                        </div>
                        <span className="text-[9.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {isRtl ? 'تزامن < 6 ث' : '< 6s SYNC'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        {isRtl 
                          ? 'التقاط فوري عبر Webhook مع توزيع تلقائي دوري للعملاء.' 
                          : 'Instant webhook capture with automated round-robin lead assignment.'}
                      </p>
                    </div>

                    {/* Node 2: Meta WhatsApp AI Bot */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/80 shadow-2xs">
                            <Bot className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {isRtl ? 'ذكاء اصطناعي واتساب من ميتا' : 'Meta WhatsApp AI'}
                            </div>
                            <div className="text-[10px] font-mono text-slate-500">
                              {isRtl ? 'تأهيل المشترين 24/7' : '24/7 Buyer Qualification'}
                            </div>
                          </div>
                        </div>
                        <span className="text-[9.5px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {isRtl ? 'موثق' : 'VERIFIED'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        {isRtl 
                          ? 'تأهيل محادثاتي للميزانية والمنطقة بالعربية والإنجليزية.' 
                          : 'Conversational budget & location qualification in Arabic & English.'}
                      </p>
                    </div>
                  </div>

                  {/* CENTERPIECE: The Central AqarQore Backbone Hub */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#001E47] via-[#002D62] to-[#001738] text-white border-2 border-sky-400/50 shadow-xl relative overflow-hidden group">
                    {/* Ambient subtle glow and grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-lg shrink-0">
                          <img src="/aqarqore-emblem.png" alt="" aria-hidden="true" width="156" height="149" loading="lazy" decoding="async" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div className="text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                            <span>AqarQore Central OS</span>
                            <span className="text-[9px] font-mono font-bold text-sky-300 bg-blue-900/80 px-2 py-0.5 rounded-full border border-sky-400/30">
                              v2.4 CORE
                            </span>
                          </div>
                          <div className="text-xs text-blue-200/80 font-normal mt-0.5">
                            {isRtl 
                              ? 'البنية التحتية التشغيلية العقارية اللحظية في الخليج' 
                              : 'GCC Real Estate Real-Time Operating Infrastructure'}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[10.5px] font-mono text-emerald-300 bg-[#001430]/90 px-3 py-1.5 rounded-xl border border-emerald-400/30 shrink-0 shadow-inner">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{isRtl ? 'نواة متزامنة' : 'SYNCHRONIZED BACKBONE'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Offline Mobile Field App + Financial Commission Signoff */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Node 3: Offline Mobile App */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-500 hover:bg-white hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center border border-violet-200/80 shadow-2xs">
                            <Smartphone className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                              {isRtl ? 'تطبيق ميداني دون إنترنت' : 'Offline Mobile App'}
                            </div>
                            <div className="text-[10px] font-mono text-slate-500">
                              {isRtl ? 'معاينات المواقف والميدان' : 'Basement & Field Viewings'}
                            </div>
                          </div>
                        </div>
                        <span className="text-[9.5px] font-mono font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-md border border-violet-200">
                          SQLITE 5G
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        {isRtl 
                          ? 'قائمة تسجيل معاينات دون اتصال مع إعادة تزامن فورية عند اتصال 5G.' 
                          : 'Offline viewing log queue with instant replay once 5G connects.'}
                      </p>
                    </div>

                    {/* Node 4: Financial Commission Engine */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500 hover:bg-white hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/80 shadow-2xs">
                            <Lock className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                              {isRtl ? 'الرقابة المالية' : 'Financial Control'}
                            </div>
                            <div className="text-[10px] font-mono text-slate-500">
                              {isRtl ? 'اعتمادات صفقات بخطوتين' : '2-Step Deal Signoffs'}
                            </div>
                          </div>
                        </div>
                        <span className="text-[9.5px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          {isRtl ? 'قفل تدقيق' : 'AUDIT LOCK'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        {isRtl 
                          ? 'قفل اعتماد من مدير المبيعات إلى المحاسبة مع منع تام لتسرب الروابط.' 
                          : 'Sales Director to Accounting approval lock with zero URL leakage.'}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Console Footer */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isRtl ? 'شبكة خليجية مشفرة' : 'Encrypted GCC Network'}</span>
                  </span>
                  <span className="text-[#0858A8] font-semibold">
                    {isRtl ? 'استضافة إقليمية' : 'Regional Data Hosting'}
                  </span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 7. AUTOMATION / ROI PROOF & CALCULATOR                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section id="roi" className="py-24 sm:py-32 bg-[#001128] text-white relative border-b border-blue-950/80 overflow-hidden">
        {/* User-Provided Futuristic GCC Skyline Background */}
        <div 
          className="absolute inset-0 bg-art bg-art-roi pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001128]/70 via-transparent to-[#001128]/85 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: INTERACTIVE FINANCIAL SIMULATION CONSOLE               */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className={`lg:col-span-7 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{isRtl ? 'حساب الإيرادات المستردة' : 'Calculated Revenue Recovery'}</span>
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  {isRtl 
                    ? 'احسب الإيرادات المستردة لوكالتك العقارية' 
                    : 'Calculate Your Agency\'s Recovered Revenue'}
                </h2>

                <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                  {isRtl 
                    ? 'حرك المؤشرات لتقدير حجم الإيرادات التي تفقدها وكالتك سنوياً بسبب بطء توزيع العملاء وتأخيرات جداول إكسل.' 
                    : 'Drag the sliders to estimate how much revenue your brokerage loses to unassigned leads and spreadsheet delays each year.'}
                </p>
              </div>

              {/* Calculator Panel */}
              <div className="bg-[#001E45]/90 rounded-3xl p-6 sm:p-8 border border-blue-800/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(16,120,192,0.15)] backdrop-blur-xl space-y-6">
                
                {/* Slider 1: Active Agents */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-blue-200 tracking-wide">
                      {isRtl ? 'عدد الوكلاء النشطين' : 'Number of Active Agents'}
                    </span>
                    <span className="text-sky-300 font-mono text-sm bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-800/60 shadow-inner">
                      {agentCount} {isRtl ? 'وكيل' : 'Agents'}
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="range"
                      min="3"
                      max="100"
                      value={agentCount}
                      onChange={(e) => setAgentCount(Number(e.target.value))}
                      className="w-full h-2.5 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-[#1078C0] border border-blue-800/60"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-blue-300/60 font-mono">
                    <span>{isRtl ? '3 بوتيك' : '3 Boutique'}</span>
                    <span>{isRtl ? '50 متوسطة' : '50 Mid-Size'}</span>
                    <span>{isRtl ? '100+ كبرى' : '100+ Enterprise'}</span>
                  </div>
                </div>

                {/* Slider 2: Average Deal Value */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-blue-200 tracking-wide">
                      {isRtl ? 'متوسط قيمة الصفقة العقارية' : 'Average Property Transaction Value'}
                    </span>
                    <span className="text-emerald-400 font-mono text-sm bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-500/40 shadow-inner">
                      {isRtl ? `${avgDealValue.toLocaleString()} ر.ق / د.إ` : `AED / QAR ${avgDealValue.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="range"
                      min="500000"
                      max="10000000"
                      step="250000"
                      value={avgDealValue}
                      onChange={(e) => setAvgDealValue(Number(e.target.value))}
                      className="w-full h-2.5 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-blue-800/60"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-blue-300/60 font-mono">
                    <span>{isRtl ? '500 ألف سوق متوسط' : '500K Mid-Market'}</span>
                    <span>{isRtl ? '5 مليون فاخر' : '5M Luxury'}</span>
                    <span>{isRtl ? '10 مليون+ استثنائي' : '10M+ Prime'}</span>
                  </div>
                </div>

                {/* Real-time Output Metric Cards */}
                <div className="pt-4 border-t border-blue-800/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Recovered Revenue Box */}
                  <div className="bg-[#002859] p-5 rounded-2xl border border-emerald-500/40 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                    <div className="text-xs text-emerald-300 font-medium flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{isRtl ? 'الإيرادات التقديرية المستردة' : 'Est. Recovered Revenue'}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-mono">
                      {isRtl ? `${annualSavedRevenue.toLocaleString()} ر.ق / د.إ` : `AED ${annualSavedRevenue.toLocaleString()}`}
                    </div>
                    <div className="text-[11px] text-blue-200/70 mt-1 font-medium">
                      {isRtl ? 'وفورات سنوية مستردة' : 'per year saved'}
                    </div>
                  </div>

                  {/* Hours Saved Box */}
                  <div className="bg-[#002859] p-5 rounded-2xl border border-sky-500/40 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
                    <div className="text-xs text-sky-300 font-medium flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>{isRtl ? 'ساعات موفرة / شهرياً' : 'Hours Saved / Month'}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-mono">
                      {monthlyHoursSaved} {isRtl ? 'ساعة' : 'Hrs'}
                    </div>
                    <div className="text-[11px] text-blue-200/70 mt-1 font-medium">
                      {isRtl ? 'دون جداول إكسل يدوية' : 'no manual spreadsheets'}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT COLUMN: INSTITUTIONAL PERFORMANCE TELEMETRY TILES            */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              {/* Telemetry Tile 1 */}
              <div className="bg-gradient-to-b from-[#00224D] to-[#001A3D] p-7 rounded-3xl border border-blue-700/60 shadow-xl space-y-3 hover:border-emerald-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                    99.8%
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-base font-bold text-white">
                  {isRtl ? 'استجابة تحت 10 ثوانٍ' : 'Sub-10s Response'}
                </div>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  {isRtl 
                    ? 'توزيع العملاء على الوكلاء النشطين قبل اتصال المنافسين.' 
                    : 'Leads assigned to active agents before competitor calls.'}
                </p>
              </div>

              {/* Telemetry Tile 2 */}
              <div className="bg-gradient-to-b from-[#00224D] to-[#001A3D] p-7 rounded-3xl border border-blue-700/60 shadow-xl space-y-3 hover:border-sky-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="text-4xl sm:text-5xl font-black text-sky-300 font-mono tracking-tight">
                    4.2x
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-300 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-base font-bold text-white">
                  {isRtl ? 'اعتمادات أسرع 4.2 أضعاف' : 'Faster Approvals'}
                </div>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  {isRtl 
                    ? 'اعتماد إلزامي بخطوتين من المدير إلى المحاسبة.' 
                    : 'Enforced 2-step director to accounting deal signoffs.'}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 8. AqarQore PRICING: CLEAN & SIMPLE AGENCY TIERING                         */}
      {/* -------------------------------------------------------------------------- */}
      <section id="pricing" className="py-24 sm:py-32 bg-white text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#0858A8]" />
              <span>{isRtl ? 'أسعار شفافة وبسيطة' : 'TRANSPARENT PRICING'}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              {isRtl ? (
                <>
                  <span>خطط واضحة ومدروسة.</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                    صُممت لتواكب نموك.
                  </span>
                </>
              ) : (
                <>
                  Simple, Predictable Plans.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                    Built to Scale.
                  </span>
                </>
              )}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {isRtl 
                ? 'لا توجد رسوم مزامنة بوابات مخفية أو عقود معقدة. اختر الخطة المناسبة لوكالتك اليوم وقم بالترقية مع نمو فريقك.' 
                : 'No hidden portal sync fees or setup traps. Choose the plan that fits your brokerage today and upgrade as you grow.'}
            </p>
          </div>

          {/* Clean 3-Card Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* 1. Starter Plan */}
            <div className={`bg-white p-8 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 flex flex-col justify-between transition-all duration-200 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    {isRtl ? 'المستوى 01 • البداية' : 'TIER 01 • STARTER'}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {isRtl ? 'وكالة ناشئة' : 'Starter Brokerage'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {isRtl ? 'للفرق النامية حتى 5 وكلاء' : 'For growing teams up to 5 agents'}
                  </p>
                </div>

                <div className="pt-2 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight">$149</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {isRtl ? '/ مقعد / شهرياً' : '/ seat / month'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'توزيع تلقائي للعملاء (توجيه < 10 ث)' : 'Auto Lead Distribution (< 10s routing)'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'مزامنة فورية مع Property Finder و Bayut' : 'Property Finder & Bayut Real-Time Sync'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'تطبيق جوال مع قائمة دون إنترنت وتزامن 5G' : 'Mobile App with Offline Queue & 5G Sync'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'تتبع العملاء وسجل النشاطات الكامل' : 'Lead Tracking & Activity History'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href={demoHref} 
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-all block shadow-sm hover:shadow-md cursor-pointer"
                >
                  {isRtl ? 'احجز عرض الخطة الناشئة' : 'Book Starter Demo'}
                </a>
              </div>
            </div>

            {/* 2. Growth Plan (Recommended / Hero) */}
            <div className={`bg-[#001D42] p-8 sm:p-9 rounded-3xl border-2 border-sky-400/80 text-white shadow-xl flex flex-col justify-between relative transition-all duration-200 transform lg:-translate-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-sky-300 uppercase tracking-widest">
                      {isRtl ? 'المستوى 02 • الموصى بها' : 'TIER 02 • RECOMMENDED'}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">
                      {isRtl ? 'وكالة متنامية' : 'Growth Agency'}
                    </h3>
                    <p className="text-xs text-blue-200/80 mt-1 font-medium">
                      {isRtl ? 'للفرق القائمة من 6 إلى 25 وكيلاً' : 'For established teams 6–25 agents'}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/40">
                    {isRtl ? 'الأكثر طلباً' : 'POPULAR'}
                  </span>
                </div>

                <div className="pt-2 pb-5 border-b border-blue-800/70">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">$199</span>
                    <span className="text-xs text-blue-200/80 font-medium">
                      {isRtl ? '/ مقعد / شهرياً' : '/ seat / month'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-blue-100">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#00D6A3] shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">
                      {isRtl ? 'تشمل جميع ميزات الخطة الناشئة' : 'All Starter Features Included'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#00D6A3] shrink-0 mt-0.5" />
                    <span>{isRtl ? 'روبوت تأهيل العملاء الذكي عبر واتساب ميتا' : 'Meta WhatsApp AI Qualification Bot'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#00D6A3] shrink-0 mt-0.5" />
                    <span>{isRtl ? 'اعتمادات العمولات والصفقات على خطوتين' : '2-Step Deal Commission Approvals'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#00D6A3] shrink-0 mt-0.5" />
                    <span>{isRtl ? 'مؤشرات الأداء اللحظية وسرعة استجابة الوكلاء' : 'Live Agent Telemetry & Response Speed Score'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#00D6A3] shrink-0 mt-0.5" />
                    <span>{isRtl ? 'مصادقة متعددة العوامل (TOTP) وصلاحيات RBAC' : 'Multi-Factor Authentication (TOTP) & RBAC'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href={demoHref} 
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-sky-500 hover:to-[#1078C0] text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-blue-600/30 transition-all block cursor-pointer"
                >
                  {isRtl ? 'احجز عرض خطة النمو' : 'Schedule Growth Demo'}
                </a>
              </div>
            </div>

            {/* 3. Enterprise Plan */}
            <div className={`bg-white p-8 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 flex flex-col justify-between transition-all duration-200 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    {isRtl ? 'المستوى 03 • الشركات الكبرى' : 'TIER 03 • ENTERPRISE'}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {isRtl ? 'مجموعة كبرى' : 'Enterprise Group'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {isRtl ? 'للوكالات العقارية الكبرى (+25 وكيلاً)' : 'For large brokerages (25+ agents)'}
                  </p>
                </div>

                <div className="pt-2 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
                      {isRtl ? 'عرض سعر مخصص' : 'Custom Quote'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">
                      {isRtl ? 'تشمل جميع ميزات خطة النمو' : 'All Growth Features Included'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'مدير حسابات إقليمي مخصص في دبي والدوحة' : 'Dedicated Account Manager in Dubai / Doha'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'تكامل مخصص مع أنظمة ERP والمحاسبة و Zoho' : 'Custom ERP, Accounting & Zoho Integrations'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'خيارات استضافة إقليمية (السعودية / الإمارات)' : 'Regional Data Hosting Options (KSA / UAE)'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{isRtl ? 'اتفاقية مستوى خدمة SLA مخصصة وتدريب VIP' : 'Custom Enterprise SLA & VIP Onboarding'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href={demoHref} 
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-all block shadow-sm hover:shadow-md cursor-pointer"
                >
                  {isRtl ? 'طلب عرض سعر للشركات' : 'Request Enterprise Quote'}
                </a>
              </div>
            </div>

          </div>

          {/* Clean Trust Note */}
          <div className="mt-12 text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {isRtl 
                ? 'جميع الخطط تشمل ربط واتساب السحابي الرسمي من ميتا، وتشفير مصرفي، وتوافق تام مع لوائح بيانات دول مجلس التعاون.' 
                : 'All plans include official Meta WhatsApp Cloud API access, bank-grade encryption, and regional data hosting options.'}
            </span>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 8B. FAQ: PREMIUM ENTERPRISE KNOWLEDGE SECTION (WHITE CANVAS)               */}
      {/* -------------------------------------------------------------------------- */}
      <section id="faq" className="py-24 sm:py-32 bg-white text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Technical Grid Layers */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: INTRO & TECHNICAL RADAR VISUAL (~40% width)           */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className={`lg:col-span-5 lg:sticky lg:top-28 space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow */}
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                  <HelpCircle className="w-3.5 h-3.5 text-[#0858A8]" />
                  <span>{isRtl ? 'الأسئلة الشائعة' : 'FREQUENTLY ASKED'}</span>
                </span>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
                  {isRtl ? (
                    <>
                      <span>كل ما تحتاج لمعرفته</span>{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                        عن المنظومة.
                      </span>
                    </>
                  ) : (
                    <>
                      Everything You Need to{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                        Know.
                      </span>
                    </>
                  )}
                </h2>

                {/* Supporting Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-md">
                  {isRtl ? (
                    'إجابات واضحة ودقيقة لأكثر الأسئلة شيوعاً حول منظومة دول مجلس التعاون وكيف تمكّن وكالتك العقارية من النمو.'
                  ) : (
                    'Clear answers to the most common questions about AqarQore and how it empowers your brokerage.'
                  )}
                </p>
              </div>

              {/* Technical System Radar Visual */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#001738] text-white border border-blue-900/60 shadow-xl relative overflow-hidden group">
                <div className="relative w-full max-w-[280px] h-[260px] mx-auto flex items-center justify-center">
                  
                  {/* Concentric Orbital Rings */}
                  <div className="absolute w-56 h-56 rounded-full border border-sky-500/20 border-dashed animate-spin" style={{ animationDuration: '40s' }} />
                  <div className="absolute w-44 h-44 rounded-full border border-blue-500/30" />
                  <div className="absolute w-32 h-32 rounded-full border border-sky-400/40 bg-sky-500/5 blur-[1px]" />
                  
                  {/* Rotating Laser Scan Sweep */}
                  <motion.div 
                    className="absolute w-52 h-52 rounded-full pointer-events-none"
                    style={{
                      background: 'conic-gradient(from 0deg at 50% 50%, rgba(56, 189, 248, 0.25) 0deg, transparent 60deg, transparent 360deg)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Central Node */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#001026] border-2 border-sky-400/80 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                    <span className="text-sky-300 font-extrabold text-lg font-mono">?</span>
                    <span className="text-[8px] font-mono text-sky-400 tracking-tighter uppercase font-bold">
                      {isRtl ? 'نواة الخليج' : 'GCC CORE'}
                    </span>
                  </div>

                  {/* 4 Satellite System Nodes */}
                  {/* Top Node: SECURE */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#001228] border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold shadow-md">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{isRtl ? 'أمان' : 'SECURE'}</span>
                  </div>

                  {/* Left Node: ANALYTICS */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#001228] border border-sky-500/40 text-sky-300 text-[10px] font-mono font-bold shadow-md">
                    <BarChart3 className="w-3 h-3 text-sky-400" />
                    <span>{isRtl ? 'تحليلات' : 'ANALYTICS'}</span>
                  </div>

                  {/* Right Node: AUTOMATE */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#001228] border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold shadow-md">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>{isRtl ? 'أتمتة' : 'AUTOMATE'}</span>
                  </div>

                  {/* Bottom Node: CLOUD */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#001228] border border-violet-500/40 text-violet-300 text-[10px] font-mono font-bold shadow-md">
                    <Cloud className="w-3 h-3 text-violet-400" />
                    <span>{isRtl ? 'سحابي' : 'CLOUD'}</span>
                  </div>

                </div>

                <div className="mt-4 pt-3 border-t border-blue-900/60 flex items-center justify-between text-[11px] font-mono text-blue-200/70">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isRtl ? 'بنية عقد مستقلة' : 'Autonomous Node Topology'}</span>
                  </span>
                  <span className="text-sky-300 font-semibold">{isRtl ? 'مراقبة 24/7' : '24/7 Monitored'}</span>
                </div>
              </div>
            </motion.div>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT COLUMN: CATEGORY PILLS + FAQ ACCORDION (~60% width)          */}
            {/* ------------------------------------------------------------------ */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Filter Pills */}
              <div className="flex items-center flex-wrap gap-2 pb-2">
                {[
                  { id: 'All Questions', label: isRtl ? 'جميع الأسئلة' : 'All Questions' },
                  { id: 'For Brokers', label: isRtl ? 'للوكلاء والوسطاء' : 'For Brokers' },
                  { id: 'Listings', label: isRtl ? 'القوائم والعقارات' : 'Listings' },
                  { id: 'Payments', label: isRtl ? 'المدفوعات والعمولات' : 'Payments' },
                  { id: 'Security', label: isRtl ? 'الأمان والحماية' : 'Security' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFaqCategory(tab.id)}
                    aria-pressed={faqCategory === tab.id}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      faqCategory === tab.id
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-[#F1F5F9] text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Accordion Cards */}
              <div className="space-y-3.5">
                {[
                  {
                    id: '01',
                    category: 'For Brokers',
                    question: isRtl 
                      ? 'كيف تساعد منصة AqarQore وكالتي العقارية؟' 
                      : 'How does AqarQore help my brokerage?',
                    answer: isRtl 
                      ? 'يتم التقاط وتوزيع استفسارات Property Finder و Bayut و WhatsApp تلقائياً في أقل من 10 ثوانٍ. نقوم بأتمتة تأهيل العملاء، وتسجيل المعاينات الميدانية دون اتصال، واعتماد العمولات المالية بخطوتين في نظام تشغيل متزامن وموحد.' 
                      : 'Inquiries from Property Finder, Bayut, and WhatsApp are captured and auto-assigned in under 10 seconds. We automate lead qualification, offline field logging, and 2-step financial commission workflows into one synchronized operating system.'
                  },
                  {
                    id: '02',
                    category: 'For Brokers',
                    question: isRtl 
                      ? 'ما هي المدة اللازمة لبدء تشغيل النظام في الوكالة؟' 
                      : 'How quickly can I get started?',
                    answer: isRtl 
                      ? 'يمكنك البدء خلال 24 إلى 48 ساعة فقط. سيساعدك فريق الإعداد المتخصص لدينا في تهيئة حسابك واستيراد بياناتك وتدريب فريقك للبدء الفوري.' 
                      : 'You can get started in as little as 24–48 hours. Our onboarding team will help you set up your account, import your data and train your team so you can go live fast.',
                    hasFeatureBox: true
                  },
                  {
                    id: '03',
                    category: 'Listings',
                    question: isRtl 
                      ? 'هل يمكنني ربط المنظومة مع نظام إدارة علاقات العملاء (CRM) الحالي؟' 
                      : 'Can I integrate AqarQore with my existing CRM?',
                    answer: isRtl 
                      ? 'نعم. توفر AqarQore واجهات برمجة ثنائية الاتجاه (Webhooks) وموصلات جاهزة لأنظمة CRM الكبرى، وProperty Finder، وBayut، وقواعد بيانات ERP دون مقاطعة مسارات المبيعات الجارية.' 
                      : 'Yes. AqarQore provides two-way API webhooks and native connectors for major CRM systems, Property Finder, Bayut, and custom ERP databases without interrupting active sales pipelines.'
                  },
                  {
                    id: '04',
                    category: 'Security',
                    question: isRtl 
                      ? 'هل بيانات وكالتي وعملائي آمنة ومحمية؟' 
                      : 'Is my brokerage data secure?',
                    answer: isRtl 
                      ? 'بكل تأكيد. جميع بيانات الوكالة معزولة بضوابط وصول حسب الأدوار (RBAC) مفروضة من الخادم، ومصادقة متعددة العوامل TOTP إلزامية، وإلغاء فوري للجلسات في أقل من 60 ثانية، مع خيارات استضافة إقليمية داخل الإمارات وقطر والسعودية.' 
                      : 'Absolutely. All agency data is isolated with server-enforced role-based access boundaries (RBAC), mandatory TOTP multi-factor authentication, sub-60s session revocation, and regional data hosting options in the UAE, Qatar, and KSA.'
                  },
                  {
                    id: '05',
                    category: 'For Brokers',
                    question: isRtl 
                      ? 'ما نوع الدعم الفني والتشغيلي الذي تقدمونه؟' 
                      : 'What kind of support do you provide?',
                    answer: isRtl 
                      ? 'تحصل كل وكالة على مدير حسابات إقليمي مخصص في دبي والدوحة، ودعم بأولوية 24/7 وفق اتفاقية مستوى الخدمة SLA، وقنوات تصعيد مباشرة عبر واتساب، واستشارات تكامل بنية مخصصة.' 
                      : 'Every agency receives a dedicated regional account manager in Dubai and Doha, 24/7 priority SLA support, live WhatsApp escalation channels, and custom architectural integration consulting.'
                  },
                  {
                    id: '06',
                    category: 'Payments',
                    question: isRtl 
                      ? 'كيف يتم تسعير اشتراكات AqarQore؟' 
                      : 'How is AqarQore priced?',
                    answer: isRtl 
                      ? 'نقدم باقات اشتراك شهرية شفافة لكل مقعد مخصصة للوكالات الناشئة، والوكالات المتنامية، والمجموعات العقارية الكبرى متعددة الفروع، دون أي رسوم مزامنة بوابات خفية أو غرامات خروج.' 
                      : 'We offer transparent per-seat monthly subscription tiers tailored to boutique brokerages, scaling agencies, and multi-branch enterprise groups with zero hidden portal sync fees or exit penalties.'
                  }
                ]
                  .filter((faq) => faqCategory === 'All Questions' || faq.category === faqCategory)
                  .map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <motion.div
                        key={faq.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`rounded-2xl transition-all duration-300 border ${
                          isOpen 
                            ? 'bg-white border-sky-400 shadow-md ring-1 ring-sky-200/50 -translate-y-0.5' 
                            : 'bg-[#F8FAFC] hover:bg-white border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 shadow-2xs'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                          aria-expanded={isOpen}
                          className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left cursor-pointer group"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-xs font-mono font-bold text-[#0858A8] mt-1 shrink-0">
                              {faq.id}
                            </span>
                            <span className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                              isOpen ? 'text-[#001D42]' : 'text-slate-900 group-hover:text-[#0858A8]'
                            }`}>
                              {faq.question}
                            </span>
                          </div>

                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen 
                              ? 'bg-[#0858A8] text-white shadow-xs rotate-180' 
                              : 'bg-slate-200/80 text-slate-600 group-hover:bg-blue-100 group-hover:text-[#0858A8] group-hover:scale-105'
                          }`}>
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className={`px-5 sm:px-6 pb-6 pt-1 ${isRtl ? 'pr-12 sm:pr-14 text-right' : 'pl-12 sm:pl-14 text-left'} text-sm sm:text-[14.5px] text-slate-600 leading-relaxed border-t border-slate-100 space-y-4`}>
                                <p>{faq.answer}</p>

                                {/* 3 Feature Indicators on Expanded Card */}
                                {faq.hasFeatureBox && (
                                  <div className="p-4 rounded-2xl bg-[#F0F7FF] border border-blue-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
                                    <div className="flex items-center sm:items-start gap-2.5">
                                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0858A8] flex items-center justify-center shrink-0 border border-blue-200">
                                        <Rocket className="w-3.5 h-3.5" />
                                      </div>
                                      <div>
                                        <div className="text-[11px] font-bold text-slate-900">
                                          {isRtl ? 'إعداد سريع' : 'Quick Setup'}
                                        </div>
                                        <div className="text-[10px] font-mono text-[#0858A8] font-bold">
                                          {isRtl ? '24–48 ساعة' : '24–48 Hours'}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center sm:items-start gap-2.5">
                                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                                        <Users className="w-3.5 h-3.5" />
                                      </div>
                                      <div>
                                        <div className="text-[11px] font-bold text-slate-900">
                                          {isRtl ? 'تدريب متخصص' : 'Expert Onboarding'}
                                        </div>
                                        <div className="text-[10px] font-mono text-emerald-700 font-bold">
                                          {isRtl ? 'دعم شخصي' : 'Personal Support'}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center sm:items-start gap-2.5">
                                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                                        <Play className="w-3.5 h-3.5" />
                                      </div>
                                      <div>
                                        <div className="text-[11px] font-bold text-slate-900">
                                          {isRtl ? 'انطلاق فوري' : 'Go Live Fast'}
                                        </div>
                                        <div className="text-[10px] font-mono text-amber-700 font-bold">
                                          {isRtl ? 'ابدأ بالنجاح' : 'Start Winning'}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
              </div>

              {/* Bottom Support CTA Prompt */}
              <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-sm font-bold text-slate-900">
                    {isRtl ? 'هل لا تزال لديك استفسارات؟' : 'Still have questions?'}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {isRtl ? 'فريقنا المتخصص جاهز لمساعدتك.' : 'Our team is here to help you.'}
                  </div>
                </div>

                <a
                  href={demoHref}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>{isRtl ? 'تواصل مع الدعم' : 'Contact Support'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 9. FINAL EXECUTIVE CTA BANNER (SLEEK PANORAMIC BAND)                       */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-[#001128] text-white relative border-y border-blue-400/35 overflow-hidden shadow-2xl">
        {/* User-Provided Analytics & Radar Mesh Background */}
        <div 
          className="absolute inset-0 bg-art bg-art-cta pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001128]/80 via-[#001128]/50 to-[#001128]/80 pointer-events-none" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/15 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Column: Scarcity Badge + Headline + Subtext */}
            <div className={`space-y-3 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} max-w-2xl`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>
                  {isRtl ? 'مقاعد انضمام محدودة للربع الثالث في دبي والدوحة' : 'Limited Q3 Onboarding Slots for Dubai & Doha'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {isRtl ? (
                  'توقف عن فقدان عملاء العقارات في الخليج اليوم'
                ) : (
                  <>
                    Stop Losing GCC Real Estate Leads Today.
                  </>
                )}
              </h2>

              <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed font-normal">
                {isRtl ? (
                  'اربط بواباتك العقارية وفعّل روبوت واتساب الذكي وامنع تسرب العملاء في دبي والدوحة والرياض.'
                ) : (
                  'Connect your portals, deploy your Meta WhatsApp AI bot, and eliminate lead leakages across Dubai, Doha, and Riyadh.'
                )}
              </p>
            </div>

            {/* Right Column: Prominent CTA Button + Inline Trust Points */}
            <div className={`flex flex-col items-center ${isRtl ? 'lg:items-start' : 'lg:items-end'} gap-3 shrink-0`}>
              <a
                href={demoHref}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#002859] hover:bg-sky-50 font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border border-white cursor-pointer"
              >
                <span>{isRtl ? 'احجز العرض التوضيحي الآن' : 'Book Your 20-Min Demo Now'}</span>
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 text-[#002859] ${isRtl ? 'rotate-180' : ''}`} />
              </a>

              <div className="flex items-center gap-4 text-[11px] font-medium text-blue-100/80">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  {isRtl ? 'انتقال كامل خلال 48 ساعة' : '48h Full Migration'}
                </span>
                <span className="text-blue-300/40">•</span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  {isRtl ? 'واجهة ميتا الرسمية' : 'Official Meta API'}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      </main>

      {/* -------------------------------------------------------------------------- */}
      {/* 10. FOOTER: PREMIUM ENTERPRISE REAL ESTATE SIGNATURE                       */}
      {/* -------------------------------------------------------------------------- */}
      <footer className={`bg-[#001128] text-blue-200/80 text-xs pt-20 pb-12 border-t border-blue-900/60 relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
        {/* GCC Skyline Mesh Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-art bg-art-skyline pointer-events-none"
        />
        {/* Clean Contrast Gradients for Readability and Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001128]/75 via-[#001128]/65 to-[#001128]/90 z-0 pointer-events-none" />
        {/* Subtle Decorative Technical Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Main Footer Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Brand Signature Column (Col Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <Link href={isRtl ? "/ar/" : "/"} className="flex items-center gap-3.5 group w-fit">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-2 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-slate-200">
                  <img src="/aqarqore-emblem.png" alt="AqarQore home" width="156" height="149" loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold tracking-tight text-white block leading-none">
                    {isRtl ? 'عقار كور' : 'AqarQore'}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 font-semibold block mt-1">
                    {isRtl ? 'نظام تشغيل وكالات العقار بالخليج' : 'GCC Agency OS'}
                  </span>
                </div>
              </Link>

              <p className="text-blue-100/70 text-sm leading-relaxed max-w-sm">
                {isRtl 
                  ? 'نظام التشغيل العقاري الذاتي المصمم خصيصاً لوكالات العقارات الكبرى في قطر والإمارات والمملكة العربية السعودية.' 
                  : 'The autonomous real estate operating system engineered specifically for high-volume GCC brokerages across Qatar, the UAE, and Saudi Arabia.'}
              </p>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-sky-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {isRtl ? 'المراكز الإقليمية: دبي (DIFC) • الدوحة • الرياض' : 'Regional Hubs: Dubai (DIFC) • Doha • Riyadh'}
                </span>
              </div>
            </div>

            {/* Column 2: Platform Architecture (Col Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
                {isRtl ? 'المنصة' : 'Platform'}
              </h4>
              <ul className="space-y-2.5 text-blue-200/70 text-xs">
                {isRtl ? (
                  <>
                    <li><a href="#features" className="hover:text-white transition-colors">سرعة الوصول للعميل</a></li>
                    <li><a href="#features" className="hover:text-white transition-colors">روبوت واتساب الذكي</a></li>
                    <li><a href="#features" className="hover:text-white transition-colors">تطبيق الميدان دون إنترنت</a></li>
                    <li><a href="#features" className="hover:text-white transition-colors">اعتماد العمولات</a></li>
                  </>
                ) : (
                  <>
                    <li><Link href="/features/lead-distribution/" className="hover:text-white transition-colors">Speed to Lead</Link></li>
                    <li><Link href="/features/whatsapp-ai-qualification/" className="hover:text-white transition-colors">WhatsApp AI Bot</Link></li>
                    <li><a href="#features" className="hover:text-white transition-colors">Offline Mobile App</a></li>
                    <li><Link href="/features/commission-approvals/" className="hover:text-white transition-colors">Commission Signoff</Link></li>
                  </>
                )}
                <li><a href="#connected" className="hover:text-white transition-colors">{isRtl ? 'الشبكة المتصلة' : 'Connected Mesh'}</a></li>
              </ul>
            </div>

            {/* Column 3: GCC Markets (Col Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
                {isRtl ? 'أسواق الخليج' : 'GCC Markets'}
              </h4>
              <ul className="space-y-2.5 text-blue-200/70 text-xs">
                <li><a href="#showcase" className="hover:text-white transition-colors">{isRtl ? 'وكالات دبي' : 'Dubai Brokerages'}</a></li>
                <li><a href="#showcase" className="hover:text-white transition-colors">{isRtl ? 'واجهة الدوحة البحرية' : 'Doha Waterfront'}</a></li>
                {!isRtl && (
                  <>
                    <li><Link href="/best-real-estate-crm-saudi-arabia/" className="hover:text-white transition-colors">Real Estate CRM Saudi Arabia</Link></li>
                    <li><Link href="/best-real-estate-crm-qatar/" className="hover:text-white transition-colors">Real Estate CRM Qatar</Link></li>
                  </>
                )}
                <li><a href="#roi" className="hover:text-white transition-colors">{isRtl ? 'حاسبة الإيرادات' : 'Revenue Calculator'}</a></li>
                <li><Link href={pricingHref} className="hover:text-white transition-colors">{isRtl ? 'خطط الوكالات' : 'Agency Plans'}</Link></li>
              </ul>
            </div>

            {/* Column 4: Enterprise Trust & Support (Col Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
                {isRtl ? 'الثقة والأمان' : 'Enterprise Trust'}
              </h4>
              <ul className="space-y-2.5 text-blue-200/70 text-xs">
                <li><a href="#security" className="hover:text-white transition-colors">{isRtl ? 'أمان على مستوى المؤسسات' : 'Institutional Security'}</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">{isRtl ? 'سيادة بيانات الخليج' : 'GCC Data Sovereignty'}</a></li>
                {!isRtl && (
                  <li><Link href="/guides/" className="hover:text-white transition-colors">Brokerage Guides</Link></li>
                )}
                <li><a href="#faq" className="hover:text-white transition-colors">{isRtl ? 'قاعدة المعرفة والأسئلة' : 'Knowledge Base & FAQ'}</a></li>
                <li><a href={demoHref} className="hover:text-sky-300 font-semibold transition-colors">{isRtl ? 'احجز عرضاً مباشراً ←' : 'Book Live Demo →'}</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 border-t border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
            <div>
              {isRtl 
                ? `© ${new Date().getFullYear()} شركة AqarQore للتقنية. جميع الحقوق محفوظة.` 
                : `© ${new Date().getFullYear()} AqarQore Technologies Inc. All rights reserved.`}
            </div>
            <div className="flex items-center gap-6">
              <Link href={isRtl ? "/ar/privacy/" : "/privacy/"} className="hover:text-white transition-colors">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
              <Link href={isRtl ? "/ar/terms/" : "/terms/"} className="hover:text-white transition-colors">{isRtl ? 'شروط الخدمة' : 'Terms of Service'}</Link>
              <span className="text-slate-600">|</span>
              <span className="text-sky-400/90 font-mono text-[11px]">{isRtl ? 'مصمم لوكالات الخليج' : 'Built for GCC Brokerages'}</span>
            </div>
          </div>

        </div>
      </footer>

      {/* VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#003068] border border-blue-500/40 rounded-2xl p-6 text-white shadow-2xl space-y-4">
            <button onClick={() => setIsVideoModalOpen(false)} aria-label="Close video" className="absolute top-4 right-4 text-blue-200 hover:text-white p-1 rounded-lg bg-blue-900/50">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-sm font-bold text-sky-300">
              <Play className="w-4 h-4 fill-current" /> AqarQore 2-Minute Product Overview
            </div>
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center border border-blue-800 text-slate-400 text-xs font-mono">
              [ Interactive Product Walkthrough Video Player ]
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
