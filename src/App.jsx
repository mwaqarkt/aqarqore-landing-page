import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
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

  // Scroll Progress Bar calculation
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Parallax Scroll Transformations
  const heroY = useTransform(scrollY, [0, 600], [0, -60]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.96]);
  const imageParallaxY = useTransform(scrollY, [300, 1400], [40, -40]);
  const galleryRotateX = useTransform(scrollY, [800, 1800], [6, -2]);

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
      <header className="sticky top-0 z-40 glass-dark text-white border-b border-blue-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1078C0] rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1078C0] to-[#0858A8] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                AqarQore
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold">
                GCC Agency OS
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-100/90">
            <a href="#problem" className="hover:text-white transition-colors">Why AqarQore</a>
            <a href="#showcase" className="hover:text-white transition-colors">Live Property Hub</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
            <a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-400/30 hover:border-blue-300 text-xs font-semibold text-blue-100 hover:bg-blue-800/40 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isRtl ? 'English' : 'العربية (RTL)'}</span>
            </button>

            <a
              href={DEMO_CTA_URL}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-blue-600 hover:to-[#1078C0] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>{isRtl ? 'احجز عرضاً توضيحياً' : 'Book Live Demo'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION WITH REAL ESTATE BACKGROUND IMAGE & SCROLL MOTION          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 bg-[#003068] text-white overflow-hidden">
        {/* Background Property Photo Overlay with Blur & Gradient */}
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center filter saturate-150 transform scale-105" style={{ backgroundImage: `url(${PROPERTY_IMAGES.heroPenthouse})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003068]/90 via-[#003068]/95 to-[#001D42] z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1078c00d_1px,transparent_1px),linear-gradient(to_bottom,#1078c00d_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Trust Pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/70 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isRtl ? 'النظام التلقائي لإدارة الوكالات العقارية في الخليج' : 'Autonomous Real Estate CRM for UAE, Qatar & KSA'}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              {isRtl ? (
                <>حويل اتصالات العقارات إلى صفقات مؤكدة <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-300 to-white">بدون إهدار أي عميل.</span></>
              ) : (
                <>Stop Losing High-Value Property Leads — <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-300 to-white">Run Your Entire Agency Automatically.</span></>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-blue-100/90 font-normal leading-relaxed">
              {isRtl ? (
                'توزيع تلقائي لعملاء Property Finder و Bayut و WhatsApp في أقل من 10 ثوانٍ مع التأكد من توثيق العمولات والصفقات.'
              ) : (
                'Auto-assign leads from Property Finder, Bayut, and Meta WhatsApp in under 10 seconds. AI buyer qualification, offline mobile app, and 2-step commission signoffs in one unified GCC system.'
              )}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DEMO_CTA_URL}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-blue-500 hover:to-[#1078C0] text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-blue-400/30"
              >
                <span>{isRtl ? 'شاهد نظامك على عقاراتك في 20 دقيقة' : 'See AqarQore on Your Listings in 20 Mins'}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-blue-950/70 hover:bg-blue-900 text-blue-100 font-semibold text-base border border-blue-400/20 transition-colors flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <Play className="w-4 h-4 fill-current text-sky-400" />
                <span>{isRtl ? 'شاهد جولة النظام' : 'Watch 2-Min Product Tour'}</span>
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200/80 font-medium">
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Meta Official Cloud API Partner</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Property Finder & Bayut Live Sync</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Go Live in Under 48 Hours</div>
            </motion.div>
          </motion.div>

          {/* DYNAMIC SCROLL PARALLAX PRODUCT & PROPERTY DASHBOARD */}
          <motion.div 
            style={{ y: heroY, scale: heroScale }}
            className="mt-14 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl p-2 sm:p-4 bg-gradient-to-b from-blue-400/20 to-blue-950/60 border border-blue-400/30 shadow-2xl backdrop-blur-xl">
              
              {/* Window Bar Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#001D42]/90 rounded-t-xl border-b border-blue-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-blue-300/70 font-mono hidden sm:inline">aqarqore.com / gcc-brokerage-dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Sync: Dubai • Doha • Riyadh
                </div>
              </div>

              {/* Dashboard Content Grid */}
              <div className="bg-[#031730] p-4 sm:p-6 rounded-b-xl grid grid-cols-1 lg:grid-cols-12 gap-5 text-slate-100">
                
                {/* Metric Strip */}
                <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#0858A8]/30 border border-blue-700/40 p-3.5 rounded-xl">
                    <div className="text-xs text-blue-300 font-medium">Speed to Lead</div>
                    <div className="text-2xl font-bold text-white mt-1">4.2 Seconds</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">↓ 98% faster reply</div>
                  </div>
                  <div className="bg-[#0858A8]/30 border border-blue-700/40 p-3.5 rounded-xl">
                    <div className="text-xs text-blue-300 font-medium">WhatsApp AI Bot</div>
                    <div className="text-2xl font-bold text-white mt-1">12 Active Handlers</div>
                    <div className="text-[11px] text-sky-300 mt-0.5">24/7 Buyer Auto-Qualify</div>
                  </div>
                  <div className="bg-[#0858A8]/30 border border-blue-700/40 p-3.5 rounded-xl">
                    <div className="text-xs text-blue-300 font-medium">Commission Signoffs</div>
                    <div className="text-2xl font-bold text-white mt-1">3 Pending</div>
                    <div className="text-[11px] text-amber-300 mt-0.5">2-Step Server Lock</div>
                  </div>
                  <div className="bg-[#0858A8]/30 border border-blue-700/40 p-3.5 rounded-xl">
                    <div className="text-xs text-blue-300 font-medium">Monthly Closed Volume</div>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">AED 42.8M</div>
                    <div className="text-[11px] text-emerald-300 mt-0.5">Reconciled to Audit</div>
                  </div>
                </div>

                {/* Left Column: Live Property Lead Stream with Real Photo Cards */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-[#00244D]/80 border border-blue-800/60 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <h3 className="text-sm font-bold text-white">Live Property Lead Stream</h3>
                      </div>
                      <span className="text-xs text-sky-300 font-mono">Rule Queue: Active</span>
                    </div>

                    <div className="space-y-3">
                      {/* Property Lead Item 1 with Image */}
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0858A8]/40 border border-blue-500/30">
                        <img 
                          src={PROPERTY_IMAGES.heroPenthouse} 
                          alt="Dubai Penthouse" 
                          className="w-16 h-14 rounded-lg object-cover border border-blue-400/40" 
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs text-white truncate">Palm Jumeirah Penthouse</span>
                            <span className="text-[10px] text-emerald-400 font-mono">4s Ago</span>
                          </div>
                          <div className="text-[11px] text-blue-200 truncate">Source: Property Finder • Budget: AED 14.5M</div>
                          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-emerald-300 font-semibold">
                            <CheckCircle className="w-3 h-3" /> Auto-Assigned → Agent Karim (Dubai)
                          </div>
                        </div>
                      </div>

                      {/* Property Lead Item 2 with Image */}
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0858A8]/30 border border-blue-700/30">
                        <img 
                          src={PROPERTY_IMAGES.waterfrontVilla} 
                          alt="Pearl Qatar Villa" 
                          className="w-16 h-14 rounded-lg object-cover border border-blue-400/40" 
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs text-white truncate">West Bay Lagoon Villa</span>
                            <span className="text-[10px] text-sky-300 font-mono">12s Ago</span>
                          </div>
                          <div className="text-[11px] text-blue-200 truncate">Source: WhatsApp AI Bot • Budget: QAR 6.8M</div>
                          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-sky-300 font-semibold">
                            <Bot className="w-3 h-3 text-sky-400" /> AI Qualified → Viewing Booked for Sat
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Commission & Audit Card */}
                <div className="lg:col-span-5 bg-[#00244D]/80 border border-blue-800/60 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <h3 className="text-sm font-bold text-white">Deal Approval Chain</h3>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-700/40">
                        <div className="flex justify-between font-bold text-white">
                          <span>Deal #908 - Lusail Marina</span>
                          <span className="text-emerald-400 font-mono">QAR 120,000 Comm.</span>
                        </div>
                        <div className="mt-2 space-y-1 text-[11px]">
                          <div className="flex justify-between text-emerald-300">
                            <span>1. Agent Verification</span>
                            <span>✓ Completed</span>
                          </div>
                          <div className="flex justify-between text-emerald-300">
                            <span>2. Sales Director Signoff</span>
                            <span>✓ Signed by N. Al-Thani</span>
                          </div>
                          <div className="flex justify-between text-amber-300 font-semibold">
                            <span>3. Accounting Payout Batch</span>
                            <span>⏱ Queued #42</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between text-[11px] text-blue-300">
                    <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-400" /> Immutable Server Audit</span>
                    <span className="text-sky-300 font-mono">GCC-SEC-99</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. REAL ESTATE INDUSTRY SHOWCASE HUB WITH SCROLL MOTION                    */}
      {/* -------------------------------------------------------------------------- */}
      <section id="showcase" className="py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-[#0858A8] text-xs font-bold uppercase tracking-wider">
              {isRtl ? 'مركز إدارة العقارات المباشر' : 'Live Property & Lead Hub'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Every Asset Class in the GCC Real Estate Market
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Manage luxury residential penthouses, waterfront Qatar villas, and Riyadh commercial developments seamlessly.
            </p>

            {/* City Tabs */}
            <div className="flex justify-center gap-3 pt-2">
              {[
                { id: 'doha', label: 'Doha & Pearl Qatar' },
                { id: 'dubai', label: 'Dubai & Abu Dhabi' },
                { id: 'riyadh', label: 'Riyadh & Jeddah' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePropertyTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activePropertyTab === tab.id
                      ? 'bg-[#003068] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* SCROLL-ANIMATED PROPERTY CARDS GRID */}
          <motion.div 
            style={{ rotateX: galleryRotateX }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Property Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#F7F9FB] rounded-2xl overflow-hidden border border-slate-200 shadow-md group hover:shadow-xl transition-all">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={PROPERTY_IMAGES.waterfrontVilla} 
                  alt="West Bay Waterfront Villa" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#003068]/90 backdrop-blur-md text-white text-xs font-bold">
                  QAR 8,500,000
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow">
                  <CheckCircle className="w-3 h-3" /> Auto-Assigned in 3s
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#1078C0]" /> West Bay Lagoon • Doha, Qatar
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1078C0] transition-colors">
                  Beachfront Standalone Villa
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-2 border-t border-slate-200">
                  <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5 text-slate-400" /> 5 Beds</span>
                  <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-slate-400" /> 6 Baths</span>
                  <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-slate-400" /> 750 sqm</span>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 text-[11px] text-[#0858A8] font-semibold flex justify-between items-center">
                  <span>WhatsApp Lead Qualification</span>
                  <span className="text-emerald-700 font-bold">Buyer Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Property Card 2 */}
            <motion.div variants={fadeInUp} className="bg-[#F7F9FB] rounded-2xl overflow-hidden border border-slate-200 shadow-md group hover:shadow-xl transition-all">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={PROPERTY_IMAGES.heroPenthouse} 
                  alt="Dubai Marina Luxury Penthouse" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#003068]/90 backdrop-blur-md text-white text-xs font-bold">
                  AED 12,900,000
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-sky-600 text-white text-[11px] font-semibold flex items-center gap-1 shadow">
                  <Bot className="w-3 h-3 text-sky-200" /> AI Bot Active 24/7
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#1078C0]" /> Palm Jumeirah • Dubai, UAE
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1078C0] transition-colors">
                  Sky Penthouse with Private Pool
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-2 border-t border-slate-200">
                  <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5 text-slate-400" /> 4 Beds</span>
                  <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-slate-400" /> 5 Baths</span>
                  <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-slate-400" /> 580 sqm</span>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 text-[11px] text-[#0858A8] font-semibold flex justify-between items-center">
                  <span>Commission Signoff</span>
                  <span className="text-emerald-700 font-bold">2-Step Director Lock</span>
                </div>
              </div>
            </motion.div>

            {/* Property Card 3 */}
            <motion.div variants={fadeInUp} className="bg-[#F7F9FB] rounded-2xl overflow-hidden border border-slate-200 shadow-md group hover:shadow-xl transition-all">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={PROPERTY_IMAGES.riyadhTower} 
                  alt="Riyadh Commercial Tower" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#003068]/90 backdrop-blur-md text-white text-xs font-bold">
                  SAR 24,000,000
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow">
                  <ShieldCheck className="w-3 h-3" /> Duplicate Protection
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#1078C0]" /> KAFD Financial District • Riyadh, KSA
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1078C0] transition-colors">
                  Commercial Corporate Headquarters
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-2 border-t border-slate-200">
                  <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5 text-slate-400" /> Grade A</span>
                  <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-slate-400" /> 1,400 sqm</span>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 text-[11px] text-[#0858A8] font-semibold flex justify-between items-center">
                  <span>Portal Listing Status</span>
                  <span className="text-emerald-700 font-bold">100% Unique Verified</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 3. PARALLAX FULL-WIDTH PROPERTY IMAGE BANNER                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative py-28 bg-[#001D42] text-white overflow-hidden">
        <motion.div 
          style={{ y: imageParallaxY, backgroundImage: `url(${PROPERTY_IMAGES.luxuryInterior})` }}
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center filter saturate-150 transform scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003068]/95 via-[#003068]/85 to-[#001D42]/95 z-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
            Real Estate Operations Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Designed for Agency Owners Who Refuse to Lose Market Share
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            From luxury residential handovers to multi-tower commercial developments, AqarQore gives your sales directors complete visibility while protecting client data.
          </p>

          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#003068]/80 border border-blue-500/30 backdrop-blur-md">
              <div className="text-2xl font-extrabold text-sky-300">10 Seconds</div>
              <div className="text-xs text-blue-200 mt-1">Max lead assignment window</div>
            </div>
            <div className="p-4 rounded-xl bg-[#003068]/80 border border-blue-500/30 backdrop-blur-md">
              <div className="text-2xl font-extrabold text-emerald-400">100% Audit</div>
              <div className="text-xs text-blue-200 mt-1">Reconciled commission signoffs</div>
            </div>
            <div className="p-4 rounded-xl bg-[#003068]/80 border border-blue-500/30 backdrop-blur-md">
              <div className="text-2xl font-extrabold text-amber-300">Meta Verified</div>
              <div className="text-xs text-blue-200 mt-1">Official WhatsApp Cloud API</div>
            </div>
            <div className="p-4 rounded-xl bg-[#003068]/80 border border-blue-500/30 backdrop-blur-md">
              <div className="text-2xl font-extrabold text-purple-300">Offline App</div>
              <div className="text-xs text-blue-200 mt-1">Basement viewing sync</div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 4. PROBLEM / AGITATION SECTION                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section id="problem" className="py-20 bg-[#F7F9FB] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
              The GCC Brokerage Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why 74% of GCC Real Estate Inquiries Never Turn Into Viewings
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Running a high-performing brokerage on WhatsApp groups and manual Excel spreadsheets creates silent revenue leaks at every step of the funnel.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Unassigned Weekend Leads</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Property Finder & Bayut leads arrive at 9 PM or Friday afternoon. By Monday morning, the buyer has already signed with a competitor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp Silos & Chaos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Agents message prospects from personal phones. When an agent leaves, your client history, listing conversations, and lead data walk out the door with them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Commission Disputes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Without server-enforced approval steps, deal signoffs get skipped, double payouts happen, and top agents lose trust in accounting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0858A8] flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Duplicate Portal Listings</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Multiple agents post the exact same unit with different prices, embarrassing the agency brand and causing portal penalty demotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 5. 10 FEATURE SECTIONS WITH IMAGES & SCROLL ANIMATION                      */}
      {/* -------------------------------------------------------------------------- */}
      <section id="features" className="py-24 bg-white space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-[#0858A8] text-xs font-bold uppercase tracking-wider">
              Complete Feature Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Engineered Specifically for High-Volume GCC Brokerages
            </h2>
            <p className="text-slate-600 text-base">
              Every story built to solve a real friction point reported by Qatar, Dubai, and Riyadh agency owners.
            </p>
          </div>

          {/* FEATURE 1: Automated Lead Distribution */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#1078C0] tracking-wider">
                <Zap className="w-4 h-4" /> Feature 01 • Speed to Lead
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Never Lose a Hot Lead to a Slow Response
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Every new lead is auto-assigned by a rule pipeline in under 10 seconds, skipping agents who are at capacity, off-hours, or unavailable, with a full decision trail stored for every assignment. No lead sits unassigned; every inquiry reaches an available agent while the prospect is still hot.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Sub-10 second round-robin and capacity distribution</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Enforced audit trail for every lead assignment decision</li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-[#003068] p-6 rounded-2xl border border-blue-900 shadow-xl text-white">
              <div className="text-xs text-blue-300 font-mono mb-3">AUTOMATED RULE PIPELINE LOG</div>
              <div className="space-y-3 font-sans text-xs">
                <div className="p-3 rounded-lg bg-[#0858A8]/40 border border-blue-400/30">
                  <div className="flex justify-between font-bold text-white">
                    <span>Inquiry: Lusail Marina Tower 2BR</span>
                    <span className="text-emerald-400">00:00:04s</span>
                  </div>
                  <div className="mt-2 text-blue-200 space-y-1 text-[11px]">
                    <div>• Checking Agent #104 (Off-duty Friday) → Skipped</div>
                    <div>• Checking Agent #109 (At Max 25 Active Leads) → Skipped</div>
                    <div className="text-emerald-300 font-semibold">• Assigned to Agent #112 (Rashid Al-Dosari) → Actioned</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <hr className="border-slate-100" />

          {/* FEATURE 2: AI WhatsApp Bot */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="lg:col-span-6 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#1078C0] tracking-wider">
                <Bot className="w-4 h-4" /> Feature 02 • Conversational AI
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Qualify Buyer Budget & Area Automatically 24/7
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                The bot greets, qualifies budget/area/property type conversationally, presents matching listings as cards, then hands off to a human agent with full captured context inside Meta's 24-hour messaging window. Agents open every WhatsApp chat already knowing what the customer wants — no repeated questions, faster response, higher close rate.
              </p>
            </div>
            <div className="lg:col-span-6 lg:order-1 bg-[#031730] p-6 rounded-2xl border border-blue-900 shadow-xl">
              <div className="max-w-sm mx-auto bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
                <div className="bg-[#075E54] px-4 py-2.5 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center font-bold text-[10px]">AQ</div>
                    <div>
                      <div className="font-bold">AqarQore AI Assistant</div>
                      <div className="text-[9px] text-emerald-200">Official Meta API Verified</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 space-y-2.5 text-xs">
                  <div className="bg-slate-800 text-slate-200 p-2.5 rounded-lg max-w-[85%]">
                    Hello! Looking for a 3BR villa in West Bay Lagoon under QAR 4M?
                  </div>
                  <div className="bg-[#056162] text-white p-2.5 rounded-lg max-w-[80%] ml-auto text-right">
                    Yes, budget up to 4.2M QAR. Ready to view this Saturday.
                  </div>
                  <div className="bg-slate-800 text-slate-200 p-2 rounded-lg max-w-[85%] border-l-2 border-emerald-400">
                    <span className="text-[10px] text-emerald-400 font-bold block mb-1">HANDOFF TO HUMAN AGENT</span>
                    Buyer Profile: Verified • Budget QAR 4.2M • Preferred: West Bay • Agent Assigned: Mariam
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <hr className="border-slate-100" />

          {/* FEATURE 3: Two-Step Deal & Commission Approval */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#1078C0] tracking-wider">
                <DollarSign className="w-4 h-4" /> Feature 03 • Financial Control
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Dispute-Proof Commission Signoffs & Approvals
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Every closed deal moves through an enforced Sales Director → Accounting approval chain (neither can skip or bypass the other), with commissions auto-calculated on approval and idempotency-protected payout batches. Agents trust their payout numbers, and leadership gets clean, dispute-proof financial control.
              </p>
            </div>
            <div className="lg:col-span-6 bg-[#003068] p-6 rounded-2xl border border-blue-800 shadow-xl text-white">
              <div className="text-xs font-bold text-blue-200 mb-4 flex items-center justify-between">
                <span>ENFORCED APPROVAL WORKFLOW</span>
                <span className="text-emerald-400 font-mono">STRICT SERVER 2-STEP</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Step 1: Sales Director Signoff</span>
                  </div>
                  <span className="text-emerald-300 font-bold">APPROVED</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-blue-900/60 border border-blue-500/40 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 animate-spin" />
                    <span>Step 2: Accounting Payout Batch #902</span>
                  </div>
                  <span className="text-amber-300 font-bold">QUEUED</span>
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
