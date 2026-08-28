import React, { useState, useRef, useEffect } from 'react';
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
  Target
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

const DEMO_CTA_URL = "/book-a-demo";

// Curated Property Images (High Resolution Architecture & Real Estate)
const PROPERTY_IMAGES = {
  heroPenthouse: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
  waterfrontVilla: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  riyadhTower: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1200&q=80",
  luxuryInterior: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  keyHandover: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  modernApartment: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
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

export default function App() {
  const [isRtl, setIsRtl] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [agentCount, setAgentCount] = useState(15);
  const [avgDealValue, setAvgDealValue] = useState(1200000);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activePropertyTab, setActivePropertyTab] = useState('doha');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

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

  const toggleLanguage = () => {
    const nextRtl = !isRtl;
    setIsRtl(nextRtl);
    document.documentElement.dir = nextRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = nextRtl ? 'ar' : 'en';
  };

  const annualSavedRevenue = Math.round(agentCount * (avgDealValue * 0.02) * 1.8);
  const monthlyHoursSaved = agentCount * 14;

  return (
    <div className={`min-h-screen bg-[#F7F9FB] text-slate-900 overflow-x-hidden ${isRtl ? 'font-tajawal' : ''}`}>
      
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
            ? 'bg-[#00224D]/95 backdrop-blur-xl border-b border-blue-400/25 shadow-lg' 
            : 'bg-[#003068]/85 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
            
            {/* Left: Existing Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1078C0] rounded-xl p-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1078C0] to-[#0858A8] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform border border-blue-400/20">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight text-white leading-tight">
                    AqarQore
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold">
                    GCC Agency OS
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Existing Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-blue-100/90">
              <a href="#problem" className="hover:text-white transition-colors py-1">Why AqarQore</a>
              <a href="#showcase" className="hover:text-white transition-colors py-1">Live Property Hub</a>
              <a href="#features" className="hover:text-white transition-colors py-1">Features</a>
              <a href="#security" className="hover:text-white transition-colors py-1">Security</a>
              <a href="#roi" className="hover:text-white transition-colors py-1">ROI Calculator</a>
              <a href="#pricing" className="hover:text-white transition-colors py-1">Pricing</a>
            </div>

            {/* Right: Existing Action Items & Primary CTA */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-400/30 hover:border-blue-300 text-xs font-semibold text-blue-100 hover:text-white hover:bg-blue-800/40 transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-300" />
                <span>{isRtl ? 'English' : 'العربية (RTL)'}</span>
              </button>

              <a
                href={DEMO_CTA_URL}
                className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-blue-600 hover:to-[#1078C0] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-blue-400/30 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{isRtl ? 'احجز عرضاً توضيحياً' : 'Book Live Demo'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-blue-200 hover:text-white hover:bg-blue-800/50 border border-blue-400/20 transition-colors cursor-pointer"
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
                className="md:hidden w-full bg-[#00244D] border-t border-blue-800/80 px-4 py-3 shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col space-y-1 text-sm font-medium text-blue-100">
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#problem"
                    className="px-3 py-2 rounded-lg hover:bg-blue-800/40 hover:text-white transition-colors"
                  >
                    Why AqarQore
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#showcase"
                    className="px-3 py-2 rounded-lg hover:bg-blue-800/40 hover:text-white transition-colors"
                  >
                    Live Property Hub
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#features"
                    className="px-3 py-2 rounded-lg hover:bg-blue-800/40 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#security"
                    className="px-3 py-2 rounded-lg hover:bg-blue-800/40 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#roi"
                    className="px-3 py-2 rounded-lg hover:bg-blue-800/40 hover:text-white transition-colors"
                  >
                    ROI Calculator
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#pricing"
                    className="px-3 py-2 rounded-lg hover:bg-blue-800/40 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* -------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION: ASYMMETRIC ENTERPRISE PRODUCT COMMAND CENTER EXPERIENCE    */}
      {/* -------------------------------------------------------------------------- */}
      <section 
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[92vh] flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 bg-[#001D42] text-white overflow-hidden tech-grid"
      >
        {/* Layer 1: Background Architectural Photo Overlay & Subtle Radial Lighting */}
        <div 
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center filter saturate-150 transform scale-105 pointer-events-none" 
          style={{ backgroundImage: `url(${PROPERTY_IMAGES.heroPenthouse})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001D42]/90 via-[#00244D]/95 to-[#001738] z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,120,192,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,120,192,0.07)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] z-0 pointer-events-none" />
        
        {/* Soft Radial Illumination behind Product Visual */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-500/15 via-[#1078C0]/10 to-transparent blur-[110px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-center">
            
            {/* ---------------------------------------------------------------------- */}
            {/* LEFT COLUMN: DOMINANT TYPOGRAPHIC & VALUE PROPOSITION HERO ENGINE     */}
            {/* ---------------------------------------------------------------------- */}
            <motion.div 
              className="lg:col-span-6 space-y-6 text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Clean Dominant Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
              >
                {isRtl ? (
                  <>حويل اتصالات العقارات إلى صفقات مؤكدة <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-200 to-white">بدون إهدار أي عميل.</span></>
                ) : (
                  <>
                    Stop Losing High-Value Property Leads.
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-200 to-white">
                      Run Your Entire Agency Automatically.
                    </span>
                  </>
                )}
              </motion.h1>

              {/* Supporting Paragraph */}
              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed">
                {isRtl ? (
                  'توزيع تلقائي لعملاء Property Finder و Bayut و WhatsApp في أقل من 10 ثوانٍ مع التأكد من توثيق العمولات والصفقات.'
                ) : (
                  'Auto-assign leads from Property Finder, Bayut, and Meta WhatsApp in under 10 seconds. AI buyer qualification, offline mobile app, and 2-step commission signoffs in one unified GCC system.'
                )}
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={DEMO_CTA_URL}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-sky-500 hover:to-[#1078C0] text-white font-bold text-sm shadow-lg shadow-blue-600/35 hover:shadow-blue-500/45 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-blue-400/35 group cursor-pointer text-center"
                >
                  <span>{isRtl ? 'شاهد نظامك على عقاراتك في 20 دقيقة' : 'See AqarQore on Your Listings in 20 Mins'}</span>
                  <ArrowRight className={`w-4 h-4 text-blue-100 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </a>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-950/80 hover:bg-blue-900/90 text-blue-100 font-semibold text-sm border border-blue-400/25 transition-all hover:border-blue-400/50 backdrop-blur-md cursor-pointer text-center"
                >
                  <Play className="w-4 h-4 fill-current text-sky-400" />
                  <span>{isRtl ? 'شاهد جولة النظام' : 'Watch 2-Min Product Tour'}</span>
                </button>
              </motion.div>

              {/* Partner Badges */}
              <motion.div variants={fadeInUp} className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-blue-200/80 font-medium">
                <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Meta Official Cloud API Partner</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Property Finder & Bayut Live Sync</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Go Live in Under 48 Hours</div>
              </motion.div>
            </motion.div>

            {/* ---------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: SLEEK HIGH-END ENTERPRISE PRODUCT COMMAND CENTER          */}
            {/* ---------------------------------------------------------------------- */}
            <motion.div 
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Interactive Product Window */}
              <motion.div 
                style={{
                  x: mouseOffset.x,
                  y: mouseOffset.y,
                  transition: 'transform 0.15s ease-out'
                }}
                className="relative rounded-2xl bg-gradient-to-b from-[#002B5E]/90 via-[#001E45]/95 to-[#001433] border border-blue-400/30 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_45px_rgba(16,120,192,0.2)] backdrop-blur-2xl overflow-hidden"
              >
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#001838]/90 border-b border-blue-800/60">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] text-blue-300/80 font-mono hidden sm:inline">aqarqore.com / gcc-brokerage-dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-300 font-semibold bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Sync: Dubai • Doha • Riyadh
                  </div>
                </div>

                {/* Top Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 sm:p-4 bg-[#001D42]/60 border-b border-blue-900/50">
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                    <div className="text-[10px] uppercase tracking-wider text-blue-300/90 font-semibold truncate">Speed to Lead</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-0.5">4.2s</div>
                    <div className="text-[10px] text-emerald-400 font-medium">↓ 98% faster reply</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                    <div className="text-[10px] uppercase tracking-wider text-blue-300/90 font-semibold truncate">WhatsApp AI Bot</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-0.5">12 Handlers</div>
                    <div className="text-[10px] text-sky-300 font-medium">24/7 Auto-Qualify</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                    <div className="text-[10px] uppercase tracking-wider text-blue-300/90 font-semibold truncate">Commission Signoffs</div>
                    <div className="text-base sm:text-lg font-extrabold text-amber-400 mt-0.5">3 Pending</div>
                    <div className="text-[10px] text-amber-300 font-medium">2-Step Server Lock</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                    <div className="text-[10px] uppercase tracking-wider text-blue-300/90 font-semibold truncate">Closed Volume</div>
                    <div className="text-base sm:text-lg font-extrabold text-emerald-400 mt-0.5">AED 42.8M</div>
                    <div className="text-[10px] text-emerald-300 font-medium">Reconciled to Audit</div>
                  </div>
                </div>

                {/* Dashboard Main Workspace */}
                <div className="p-4 sm:p-5 space-y-4">
                  
                  {/* Workspace Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    
                    {/* Left Panel: Live Property Lead Stream */}
                    <div className="md:col-span-7 bg-[#001D42]/80 border border-blue-800/60 rounded-xl p-3.5 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-blue-900/60">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-xs font-bold text-white tracking-wide">Live Property Lead Stream</span>
                        </div>
                        <span className="text-[9.5px] font-mono text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">Rule Queue: Active</span>
                      </div>

                      <div className="space-y-2.5">
                        {/* Lead 1 */}
                        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0858A8]/20 hover:bg-[#0858A8]/30 border border-blue-500/30 transition-all">
                          <img 
                            src={PROPERTY_IMAGES.heroPenthouse} 
                            alt="Dubai Penthouse" 
                            className="w-12 h-11 rounded-lg object-cover border border-blue-400/40 shrink-0" 
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-white truncate">Palm Jumeirah Penthouse</span>
                              <span className="text-[9px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">4s Ago</span>
                            </div>
                            <div className="text-[10px] text-blue-200 truncate">Source: Property Finder • Budget: AED 14.5M</div>
                            <div className="mt-0.5 flex items-center gap-1 text-[9.5px] text-emerald-300 font-medium">
                              <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" /> Auto-Assigned → Agent Karim (Dubai)
                            </div>
                          </div>
                        </div>

                        {/* Lead 2 */}
                        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0858A8]/15 hover:bg-[#0858A8]/25 border border-blue-700/30 transition-all">
                          <img 
                            src={PROPERTY_IMAGES.waterfrontVilla} 
                            alt="Pearl Qatar Villa" 
                            className="w-12 h-11 rounded-lg object-cover border border-blue-400/40 shrink-0" 
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-white truncate">West Bay Lagoon Villa</span>
                              <span className="text-[9px] text-sky-300 font-mono bg-sky-500/10 px-1.5 py-0.5 rounded">12s Ago</span>
                            </div>
                            <div className="text-[10px] text-blue-200 truncate">Source: WhatsApp AI Bot • Budget: QAR 6.8M</div>
                            <div className="mt-0.5 flex items-center gap-1 text-[9.5px] text-sky-300 font-medium">
                              <Bot className="w-3 h-3 text-sky-400 shrink-0" /> AI Qualified → Viewing Booked for Sat
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Panel: Deal Approval Chain */}
                    <div className="md:col-span-5 bg-[#001D42]/80 border border-blue-800/60 rounded-xl p-3.5 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-blue-900/60">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-xs font-bold text-white tracking-wide">Deal Approval Chain</span>
                          </div>
                          <span className="text-[9px] font-mono text-sky-300 bg-sky-950/80 px-1.5 py-0.5 rounded border border-sky-800/60">2-STEP</span>
                        </div>

                        <div className="mt-2.5 p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/50 space-y-2 text-xs">
                          <div className="flex justify-between font-bold text-white text-[11px]">
                            <span>Deal #908 - Lusail Marina</span>
                            <span className="text-emerald-400 font-mono">QAR 120,000 Comm.</span>
                          </div>
                          <div className="space-y-1 text-[10px] pt-1">
                            <div className="flex justify-between text-emerald-300">
                              <span>1. Agent Verification</span>
                              <span>✓ Completed</span>
                            </div>
                            <div className="flex justify-between text-emerald-300">
                              <span>2. Director Signoff</span>
                              <span>✓ Signed by N. Al-Thani</span>
                            </div>
                            <div className="flex justify-between text-amber-300 font-medium">
                              <span>3. Payout Batch</span>
                              <span>⏱ Queued #42</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-blue-900/60 flex items-center justify-between text-[10px] text-blue-300">
                        <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-400" /> Server Audit</span>
                        <span className="text-sky-300 font-mono">GCC-SEC-99</span>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. REAL ESTATE INDUSTRY SHOWCASE HUB WITH SCROLL MOTION                    */}
      {/* -------------------------------------------------------------------------- */}
      <section id="showcase" className="py-24 sm:py-28 bg-[#FBFDFE] text-slate-900 relative border-b border-slate-200/80">
        {/* Subtle Architectural Grid Background Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#0858A8] border border-blue-200/60 text-xs font-bold uppercase tracking-wider shadow-sm">
              {isRtl ? 'مركز إدارة العقارات المباشر' : 'Live Property & Lead Hub'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Built for Every Asset Class in the GCC Real Estate Market
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Manage luxury residential penthouses, waterfront Qatar villas, and Riyadh commercial developments seamlessly.
            </p>

            {/* Editorial City Tabs Navigation */}
            <div className="flex justify-center pt-3">
              <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-inner">
                {[
                  { id: 'doha', label: 'Doha & Pearl Qatar' },
                  { id: 'dubai', label: 'Dubai & Abu Dhabi' },
                  { id: 'riyadh', label: 'Riyadh & Jeddah' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePropertyTab(tab.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activePropertyTab === tab.id
                        ? 'bg-[#003068] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* EDITORIAL PROPERTY CARDS GRID */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {/* Property Card 1: Doha Waterfront */}
            <motion.div 
              variants={fadeInUp} 
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between ${
                activePropertyTab === 'doha' 
                  ? 'border-[#1078C0]/50 shadow-[0_16px_35px_-8px_rgba(16,120,192,0.15)] ring-2 ring-[#1078C0]/20' 
                  : 'border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,48,104,0.06)] hover:shadow-[0_20px_35px_-10px_rgba(0,48,104,0.12)]'
              }`}
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={PROPERTY_IMAGES.waterfrontVilla} 
                    alt="West Bay Waterfront Villa" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-[#003068]/95 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg">
                    QAR 8,500,000
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-lg bg-emerald-500 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                    <CheckCircle className="w-3.5 h-3.5" /> Auto-Assigned in 3s
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#1078C0] shrink-0" /> West Bay Lagoon • Doha, Qatar
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1078C0] transition-colors leading-snug">
                    Beachfront Standalone Villa
                  </h3>
                  
                  {/* Specifications Bar */}
                  <div className="flex items-center gap-4 text-xs text-slate-600 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-slate-400" /> 5 Beds</span>
                    <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-slate-400" /> 6 Baths</span>
                    <span className="flex items-center gap-1.5"><Maximize2 className="w-4 h-4 text-slate-400" /> 750 sqm</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Strip */}
              <div className="px-5 sm:px-6 pb-5">
                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-[#0858A8] font-semibold flex justify-between items-center">
                  <span>WhatsApp Lead Qualification</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded">Buyer Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Property Card 2: Dubai Penthouse */}
            <motion.div 
              variants={fadeInUp} 
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between ${
                activePropertyTab === 'dubai' 
                  ? 'border-[#1078C0]/50 shadow-[0_16px_35px_-8px_rgba(16,120,192,0.15)] ring-2 ring-[#1078C0]/20' 
                  : 'border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,48,104,0.06)] hover:shadow-[0_20px_35px_-10px_rgba(0,48,104,0.12)]'
              }`}
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={PROPERTY_IMAGES.heroPenthouse} 
                    alt="Dubai Marina Luxury Penthouse" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-[#003068]/95 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg">
                    AED 12,900,000
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-lg bg-sky-600 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                    <Bot className="w-3.5 h-3.5 text-sky-200" /> AI Bot Active 24/7
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#1078C0] shrink-0" /> Palm Jumeirah • Dubai, UAE
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1078C0] transition-colors leading-snug">
                    Sky Penthouse with Private Pool
                  </h3>
                  
                  {/* Specifications Bar */}
                  <div className="flex items-center gap-4 text-xs text-slate-600 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-slate-400" /> 4 Beds</span>
                    <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-slate-400" /> 5 Baths</span>
                    <span className="flex items-center gap-1.5"><Maximize2 className="w-4 h-4 text-slate-400" /> 580 sqm</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Strip */}
              <div className="px-5 sm:px-6 pb-5">
                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-[#0858A8] font-semibold flex justify-between items-center">
                  <span>Commission Signoff</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded">2-Step Director Lock</span>
                </div>
              </div>
            </motion.div>

            {/* Property Card 3: Riyadh Commercial */}
            <motion.div 
              variants={fadeInUp} 
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between ${
                activePropertyTab === 'riyadh' 
                  ? 'border-[#1078C0]/50 shadow-[0_16px_35px_-8px_rgba(16,120,192,0.15)] ring-2 ring-[#1078C0]/20' 
                  : 'border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,48,104,0.06)] hover:shadow-[0_20px_35px_-10px_rgba(0,48,104,0.12)]'
              }`}
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={PROPERTY_IMAGES.riyadhTower} 
                    alt="Riyadh Commercial Tower" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-[#003068]/95 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg">
                    SAR 24,000,000
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-lg bg-emerald-500 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                    <ShieldCheck className="w-3.5 h-3.5" /> Duplicate Protection
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#1078C0] shrink-0" /> KAFD Financial District • Riyadh, KSA
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1078C0] transition-colors leading-snug">
                    Commercial Corporate Headquarters
                  </h3>
                  
                  {/* Specifications Bar */}
                  <div className="flex items-center gap-4 text-xs text-slate-600 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1.5"><Building className="w-4 h-4 text-slate-400" /> Grade A</span>
                    <span className="flex items-center gap-1.5"><Maximize2 className="w-4 h-4 text-slate-400" /> 1,400 sqm</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Strip */}
              <div className="px-5 sm:px-6 pb-5">
                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-[#0858A8] font-semibold flex justify-between items-center">
                  <span>Portal Listing Status</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded">100% Unique Verified</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 3. AGENCY OWNER VALUE PROPOSITION: EXECUTIVE PERFORMANCE SYSTEM            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-24 sm:py-28 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid & Line Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#0858A8] border border-blue-200/60 text-xs font-bold uppercase tracking-wider shadow-sm">
              Real Estate Operations Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Designed for Agency Owners Who Refuse to Lose Market Share
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              From luxury residential handovers to multi-tower commercial developments, AqarQore gives your sales directors complete visibility while protecting client data.
            </p>
          </motion.div>

          {/* Executive 4-Metric Performance System */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Subtle Progress Performance Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-blue-200 via-sky-300 to-blue-200 -translate-y-1/2 z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              
              {/* Metric 01 */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,48,104,0.06)] hover:shadow-[0_16px_35px_-8px_rgba(0,48,104,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#1078C0] transition-colors">METRIC 01</span>
                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#003068] transition-colors">
                    10 Seconds
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                    Max lead assignment window
                  </div>
                </div>
              </motion.div>

              {/* Metric 02 */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,48,104,0.06)] hover:shadow-[0_16px_35px_-8px_rgba(0,48,104,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">METRIC 02</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    100% Audit
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                    Reconciled commission signoffs
                  </div>
                </div>
              </motion.div>

              {/* Metric 03 */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,48,104,0.06)] hover:shadow-[0_16px_35px_-8px_rgba(0,48,104,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-amber-600 transition-colors">METRIC 03</span>
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#003068] transition-colors">
                    Meta Verified
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                    Official WhatsApp Cloud API
                  </div>
                </div>
              </motion.div>

              {/* Metric 04 */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,48,104,0.06)] hover:shadow-[0_16px_35px_-8px_rgba(0,48,104,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-purple-600 transition-colors">METRIC 04</span>
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#003068] transition-colors">
                    Offline App
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                    Basement viewing sync
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 4. PROBLEM / AGITATION SECTION: 74% REVENUE LEAK CONNECTED SYSTEM          */}
      {/* -------------------------------------------------------------------------- */}
      <section id="problem" className="py-24 sm:py-32 bg-[#001738] text-white relative border-b border-blue-950/80 overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid & Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,120,192,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,120,192,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-rose-500/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: THE 74% VISUAL ANCHOR & EDITORIAL PROBLEM STATEMENT   */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3.5 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider shadow-sm">
                The GCC Brokerage Reality
              </span>

              {/* Dominant 74% Visual Impact Anchor */}
              <div className="space-y-1">
                <div className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-rose-300 to-amber-200 leading-none">
                  74%
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-rose-300/80 font-mono">
                  Inquiries Lost to Competitors
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Why 74% of GCC Real Estate Inquiries Never Turn Into Viewings
              </h2>

              <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed font-normal">
                Running a high-performing brokerage on WhatsApp groups and manual Excel spreadsheets creates silent revenue leaks at every step of the funnel.
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
              <div className="hidden sm:block absolute top-8 bottom-8 left-6 w-[2px] bg-gradient-to-b from-rose-500/50 via-amber-500/40 to-blue-500/30 z-0 pointer-events-none" />

              <div className="space-y-5 relative z-10">
                
                {/* Problem Node 01 */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative sm:pl-16 group"
                >
                  {/* Connected Tree Dot */}
                  <div className="hidden sm:flex absolute left-3.5 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-[#001738] border-2 border-rose-400 items-center justify-center shadow-[0_0_12px_rgba(244,63,94,0.6)] group-hover:scale-125 transition-transform z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-rose-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                        Unassigned Weekend Leads
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      Property Finder & Bayut leads arrive at 9 PM or Friday afternoon. By Monday morning, the buyer has already signed with a competitor.
                    </p>
                  </div>
                </motion.div>

                {/* Problem Node 02 */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative sm:pl-16 group"
                >
                  {/* Connected Tree Dot */}
                  <div className="hidden sm:flex absolute left-3.5 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-[#001738] border-2 border-amber-400 items-center justify-center shadow-[0_0_12px_rgba(251,191,36,0.6)] group-hover:scale-125 transition-transform z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-amber-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                        WhatsApp Silos & Chaos
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      Agents message prospects from personal phones. When an agent leaves, your client history, listing conversations, and lead data walk out the door with them.
                    </p>
                  </div>
                </motion.div>

                {/* Problem Node 03 */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative sm:pl-16 group"
                >
                  {/* Connected Tree Dot */}
                  <div className="hidden sm:flex absolute left-3.5 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-[#001738] border-2 border-purple-400 items-center justify-center shadow-[0_0_12px_rgba(192,132,252,0.6)] group-hover:scale-125 transition-transform z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-purple-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                        Commission Disputes
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      Without server-enforced approval steps, deal signoffs get skipped, double payouts happen, and top agents lose trust in accounting.
                    </p>
                  </div>
                </motion.div>

                {/* Problem Node 04 */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative sm:pl-16 group"
                >
                  {/* Connected Tree Dot */}
                  <div className="hidden sm:flex absolute left-3.5 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-[#001738] border-2 border-sky-400 items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.6)] group-hover:scale-125 transition-transform z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>

                  <div className="bg-[#00224D]/80 border border-blue-800/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-sky-400/50 hover:bg-[#002859] transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                        Duplicate Portal Listings
                      </h3>
                    </div>
                    <p className="text-sm text-blue-100/75 leading-relaxed pl-0.5">
                      Multiple agents post the exact same unit with different prices, embarrassing the agency brand and causing portal penalty demotions.
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
              Complete Feature Engine
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Engineered Specifically for High-Volume GCC Brokerages
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Every story built to solve a real friction point reported by Qatar, Dubai, and Riyadh agency owners.
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
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[#1078C0] border border-blue-200/60 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" /> Feature 01 • Speed to Lead
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Never Lose a Hot Lead to a Slow Response
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                Every new lead is auto-assigned by a rule pipeline in under 10 seconds, skipping agents who are at capacity, off-hours, or unavailable, with a full decision trail stored for every assignment. No lead sits unassigned; every inquiry reaches an available agent while the prospect is still hot.
              </p>
              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Sub-10 second round-robin and capacity distribution</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Enforced audit trail for every lead assignment decision</span>
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
                    <span className="text-[11px] text-blue-300 font-mono ml-2">AUTOMATED RULE PIPELINE LOG</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">00:00:04s Execution</span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-4 rounded-xl bg-[#0858A8]/30 border border-blue-500/30">
                    <div className="flex justify-between items-center font-bold text-white text-sm">
                      <span>Inquiry: Lusail Marina Tower 2BR</span>
                      <span className="text-xs text-sky-300 font-mono bg-sky-950 px-2 py-0.5 rounded border border-sky-800">QAR 2.8M</span>
                    </div>
                    <div className="mt-3.5 space-y-2 text-blue-100 text-xs">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-amber-400">✕</span> Checking Agent #104 (Off-duty Friday) → Skipped
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-amber-400">✕</span> Checking Agent #109 (At Max 25 Active Leads) → Skipped
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300 font-semibold pt-1 border-t border-blue-700/40">
                        <span className="text-emerald-400">✓</span> Assigned to Agent #112 (Rashid Al-Dosari) → Actioned
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between text-[11px] text-blue-300 font-mono">
                  <span>Rule: Geo-Match + Capacity</span>
                  <span className="text-emerald-400">Verified & Logged</span>
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
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5 text-emerald-600" /> Feature 02 • Conversational AI
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Qualify Buyer Budget & Area Automatically 24/7
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                The bot greets, qualifies budget/area/property type conversationally, presents matching listings as cards, then hands off to a human agent with full captured context inside Meta's 24-hour messaging window. Agents open every WhatsApp chat already knowing what the customer wants — no repeated questions, faster response, higher close rate.
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
                        <div className="font-bold text-sm">AqarQore AI Assistant</div>
                        <div className="text-[10px] text-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Official Meta API Verified
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Bubbles */}
                  <div className="p-4 space-y-3 text-xs bg-[#0B141A]">
                    <div className="bg-[#202C33] text-slate-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-700/50 shadow-sm leading-relaxed">
                      Hello! Looking for a 3BR villa in West Bay Lagoon under QAR 4M?
                    </div>
                    <div className="bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-sm max-w-[80%] ml-auto text-right shadow-sm leading-relaxed">
                      Yes, budget up to 4.2M QAR. Ready to view this Saturday.
                    </div>
                    <div className="bg-[#182229] text-slate-200 p-3.5 rounded-xl border border-emerald-500/40 shadow-md">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-1.5">
                        ⚡ Instant Handoff to Human Agent
                      </span>
                      <div className="text-xs text-blue-100 space-y-1 font-medium">
                        <div>• Buyer Profile: <span className="text-white font-bold">Verified Buyer</span></div>
                        <div>• Budget: <span className="text-emerald-400 font-bold">QAR 4.2M</span> • Preferred: West Bay</div>
                        <div>• Assigned Agent: <span className="text-sky-300 font-bold">Mariam Al-Kuwari</span></div>
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
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-bold uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5 text-amber-600" /> Feature 03 • Financial Control
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Dispute-Proof Commission Signoffs & Approvals
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                Every closed deal moves through an enforced Sales Director → Accounting approval chain (neither can skip or bypass the other), with commissions auto-calculated on approval and idempotency-protected payout batches. Agents trust their payout numbers, and leadership gets clean, dispute-proof financial control.
              </p>
            </div>

            {/* Feature 3 Mockup: Financial Control Ledger */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-b from-[#002B5E] to-[#001738] p-5 sm:p-6 border border-blue-800/80 shadow-[0_20px_50px_-15px_rgba(0,48,104,0.3)] text-white">
                <div className="text-xs font-bold text-blue-200 pb-3 mb-4 border-b border-blue-800/60 flex items-center justify-between">
                  <span>ENFORCED APPROVAL WORKFLOW</span>
                  <span className="text-emerald-400 font-mono text-[11px] bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">STRICT SERVER 2-STEP</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Step 1: Sales Director Signoff</div>
                        <div className="text-[11px] text-emerald-300">Signed by Nasser Al-Thani</div>
                      </div>
                    </div>
                    <span className="text-emerald-300 font-bold px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px]">APPROVED</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-blue-950/70 border border-blue-700/50 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Clock className="w-5 h-5 animate-spin" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Step 2: Accounting Payout Batch #902</div>
                        <div className="text-[11px] text-amber-300">Dispute-Proof Lock Active</div>
                      </div>
                    </div>
                    <span className="text-amber-300 font-bold px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-[10px]">QUEUED</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between text-[11px] text-blue-300 font-mono">
                  <span>Audit Stamp: Immutable Ledger</span>
                  <span className="text-sky-300">100% Payout Accuracy</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 6. SECURITY & TRUST SECTION                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section id="security" className="py-24 bg-[#001D42] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise-Grade Trust & Compliance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Institutional Security Built for GCC Data Sovereignty
            </h2>
            <p className="text-blue-200/80 text-base">
              Restrained, server-enforced boundaries designed to eliminate ex-employee leaks, unauthorized access, and compliance violations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#003068]/70 p-6 rounded-2xl border border-blue-800/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/80 text-sky-400 flex items-center justify-center border border-blue-600/30">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Factor Authentication</h3>
              <p className="text-xs text-blue-200/80 leading-relaxed">
                TOTP-based MFA on every staff login, with throttling after repeated failed attempts and no user-existence disclosure on invalid credentials. Agency data can't be breached by a leaked password alone.
              </p>
            </div>

            <div className="bg-[#003068]/70 p-6 rounded-2xl border border-blue-800/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/80 text-sky-400 flex items-center justify-center border border-blue-600/30">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Role-Based Access Boundaries</h3>
              <p className="text-xs text-blue-200/80 leading-relaxed">
                Managers see only their own team's leads; agents can never open another agent's record even by direct URL — enforced server-side with 403s.
              </p>
            </div>

            <div className="bg-[#003068]/70 p-6 rounded-2xl border border-blue-800/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/80 text-sky-400 flex items-center justify-center border border-blue-600/30">
                <UserX className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Instant Offboarding</h3>
              <p className="text-xs text-blue-200/80 leading-relaxed">
                Terminated staff lose all session and token access in under a minute, with their leads automatically reassigned or parked per policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 7. AUTOMATION / ROI PROOF & CALCULATOR                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section id="roi" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
                Calculated Revenue Recovery
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Calculate Your Agency's Recovered Revenue
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Drag the sliders to estimate how much revenue your brokerage loses to unassigned leads and spreadsheet delays each year.
              </p>

              <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Number of Active Agents</span>
                    <span className="text-sky-400 text-sm">{agentCount} Agents</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="100"
                    value={agentCount}
                    onChange={(e) => setAgentCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1078C0]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Average Property Transaction Value</span>
                    <span className="text-emerald-400 text-sm">
                      {isRtl ? `${avgDealValue.toLocaleString()} ر.ق / د.إ` : `AED / QAR ${avgDealValue.toLocaleString()}`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="10000000"
                    step="250000"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1078C0]"
                  />
                </div>

                <div className="pt-4 border-t border-slate-700/80 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400 font-medium">Est. Recovered Revenue</div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                      {isRtl ? `${annualSavedRevenue.toLocaleString()} ر.ق/د.إ` : `AED ${annualSavedRevenue.toLocaleString()}`}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">per year saved</div>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400 font-medium">Hours Saved / Month</div>
                    <div className="text-2xl font-extrabold text-sky-400 mt-1">
                      {monthlyHoursSaved} Hrs
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">no manual spreadsheets</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="bg-[#003068] p-6 rounded-2xl border border-blue-700/60 text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400">99.8%</div>
                <div className="text-sm font-bold text-white">Sub-10s Response</div>
                <p className="text-xs text-blue-200/80">Leads assigned to active agents before competitor calls.</p>
              </div>

              <div className="bg-[#003068] p-6 rounded-2xl border border-blue-700/60 text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-sky-300">4.2x</div>
                <div className="text-sm font-bold text-white">Faster Approvals</div>
                <p className="text-xs text-blue-200/80">Enforced 2-step director to accounting deal signoffs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 8. PRICING TEASER                                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-[#0858A8] text-xs font-bold uppercase tracking-wider">
              Transparent Agency Tiering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Simple Per-Seat Plans Built to Scale With Your Agency
            </h2>
            <p className="text-slate-600 text-base">
              No hidden portal sync fees or setup traps. All plans include Meta WhatsApp Cloud API integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F9FB] p-8 rounded-2xl border border-slate-200 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Starter Brokerage</h3>
                <p className="text-xs text-slate-500 mt-1">For growing teams up to 5 agents</p>
                <div className="mt-4 text-3xl font-extrabold text-slate-900">
                  $149 <span className="text-xs text-slate-500 font-normal">/ seat / month</span>
                </div>
                <ul className="mt-6 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Auto Lead Distribution (&lt;10s)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Property Finder & Bayut Sync</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Mobile App (Offline Mode)</li>
                </ul>
              </div>
              <a href={DEMO_CTA_URL} className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs text-center transition-colors block">
                Book Starter Demo
              </a>
            </div>

            <div className="bg-[#003068] p-8 rounded-2xl border-2 border-[#1078C0] text-white shadow-xl space-y-6 flex flex-col justify-between relative transform lg:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#1078C0] text-white text-[10px] font-bold uppercase tracking-wider">
                Most Popular for GCC Agencies
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Growth Agency</h3>
                <p className="text-xs text-blue-200 mt-1">For established teams 6-25 agents</p>
                <div className="mt-4 text-3xl font-extrabold text-white">
                  $199 <span className="text-xs text-blue-200 font-normal">/ seat / month</span>
                </div>
                <ul className="mt-6 space-y-3 text-xs text-blue-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> All Starter Features Included</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Meta WhatsApp AI Qualification Bot</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 2-Step Deal Commission Approvals</li>
                </ul>
              </div>
              <a href={DEMO_CTA_URL} className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] text-white font-bold text-xs text-center shadow-lg transition-colors block">
                Schedule Growth Demo
              </a>
            </div>

            <div className="bg-[#F7F9FB] p-8 rounded-2xl border border-slate-200 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Enterprise Group</h3>
                <p className="text-xs text-slate-500 mt-1">For large brokerages (25+ agents)</p>
                <div className="mt-4 text-3xl font-extrabold text-slate-900">
                  Custom Quote
                </div>
                <ul className="mt-6 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Dedicated Account Manager in Dubai/Doha</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Custom ERP / Accounting Integrations</li>
                </ul>
              </div>
              <a href={DEMO_CTA_URL} className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs text-center transition-colors block">
                Request Enterprise Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 9. FINAL STICKY CTA BAND                                                   */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-r from-[#003068] via-[#0858A8] to-[#1078C0] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sky-200 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Limited Q3 Onboarding Slots for Dubai & Doha</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Stop Losing GCC Real Estate Leads Today
          </h2>

          <div className="pt-2">
            <a
              href={DEMO_CTA_URL}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-white text-[#003068] hover:bg-blue-50 font-extrabold text-base shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <span>{isRtl ? 'احجز العرض التوضيحي الآن' : 'Book Your 20-Min Demo Now'}</span>
              <ArrowRight className={`w-5 h-5 text-[#003068] ${isRtl ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 10. FOOTER                                                                 */}
      {/* -------------------------------------------------------------------------- */}
      <footer className="bg-[#001D42] text-blue-200/80 text-xs py-14 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <div>
              © {new Date().getFullYear()} AqarQore Technologies Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#003068] border border-blue-500/40 rounded-2xl p-6 text-white shadow-2xl space-y-4">
            <button onClick={() => setIsVideoModalOpen(false)} className="absolute top-4 right-4 text-blue-200 hover:text-white p-1 rounded-lg bg-blue-900/50">
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
