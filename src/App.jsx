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
  Target,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Radio,
  Cpu,
  Flame,
  CircleDot
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

// Live GCC Property Intelligence Data per Market (Villa, Penthouse, Commercial Personalities)
const MARKET_PROPERTIES = {
  doha: [
    {
      id: 'doha-1',
      title: 'Beachfront Standalone Villa',
      category: 'LUXURY VILLA',
      personality: 'ai-match',
      accentColor: 'emerald',
      price: 'QAR 8,500,000',
      location: 'West Bay Lagoon • Doha, Qatar',
      image: PROPERTY_IMAGES.waterfrontVilla,
      specs: [
        { label: '750 sqm', icon: Maximize2 },
        { label: '5 Beds', icon: BedDouble },
        { label: '6 Baths', icon: Bath }
      ],
      aiValueScore: 94,
      demandStatus: 'HIGH DEMAND',
      matchScore: 94,
      matchLabel: 'AI BUYER MATCH',
      liveStatusHeader: 'LIVE LEAD',
      liveStatusSub: 'Buyer verified • Auto-assigned in 3s',
      portalSource: 'Property Finder Qatar',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“High-intent verified buyer searching for waterfront property in Doha with immediate move-in.”',
      timeline: [
        { time: '10:42:01', event: 'Lead captured (Property Finder)' },
        { time: '10:42:03', event: 'AI qualified (94% Intent)' },
        { time: '10:42:04', event: 'Agent assigned (Rashid Al-Dosari)' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    },
    {
      id: 'doha-2',
      title: 'The Pearl Marina Sky Penthouse',
      category: 'SKY PENTHOUSE',
      personality: 'portal-sync',
      accentColor: 'cyan',
      price: 'QAR 6,200,000',
      location: 'Porto Arabia • The Pearl, Qatar',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      specs: [
        { label: '520 sqm', icon: Maximize2 },
        { label: '4 Beds', icon: BedDouble },
        { label: '5 Baths', icon: Bath }
      ],
      aiValueScore: 91,
      demandStatus: 'VIP PIPELINE',
      matchScore: 91,
      matchLabel: 'PORTAL SYNC',
      liveStatusHeader: 'PORTAL AUTO-SYNC',
      liveStatusSub: 'Property Finder Live • 24/7 AI Bot',
      portalSource: 'Property Finder Qatar',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“AI Bot engaged lead in Arabic within 4s. Pre-qualified budget QAR 6.5M and private berth request.”',
      timeline: [
        { time: '09:15:10', event: 'WhatsApp Inquiry Ingested' },
        { time: '09:15:12', event: 'Bot qualified budget & area' },
        { time: '09:15:15', event: 'Dispatched to Mariam Al-Kuwari' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    },
    {
      id: 'doha-3',
      title: 'Lusail Waterfront Commercial Tower',
      category: 'COMMERCIAL ASSET',
      personality: 'deal-intel',
      accentColor: 'gold',
      price: 'QAR 18,500,000',
      location: 'Marina Promenade • Lusail, Qatar',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      specs: [
        { label: '2,800 sqm', icon: Maximize2 },
        { label: '12 Floors', icon: Building },
        { label: 'Grade A', icon: ShieldCheck }
      ],
      aiValueScore: 98,
      demandStatus: 'INSTITUTIONAL',
      matchScore: 98,
      matchLabel: 'DEAL LOCK',
      liveStatusHeader: 'DEAL INTELLIGENCE',
      liveStatusSub: 'Commission: QAR 120,000 • 2-Step Lock',
      portalSource: 'Direct Webhook Sync',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“Commercial investor pipeline locked. 2-Step Sales Director to Accounting signoff enforced.”',
      timeline: [
        { time: '11:02:18', event: 'Term Sheet Submitted' },
        { time: '11:02:40', event: 'Director Nasser Signed' },
        { time: '11:03:00', event: 'Accounting Batch #908 Queued' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    }
  ],
  dubai: [
    {
      id: 'dubai-1',
      title: 'Palm Jumeirah Signature Sky Villa',
      category: 'LUXURY VILLA',
      personality: 'ai-match',
      accentColor: 'emerald',
      price: 'AED 14,900,000',
      location: 'Palm Jumeirah • Dubai, UAE',
      image: PROPERTY_IMAGES.heroPenthouse,
      specs: [
        { label: '580 sqm', icon: Maximize2 },
        { label: '4 Beds', icon: BedDouble },
        { label: '5 Baths', icon: Bath }
      ],
      aiValueScore: 95,
      demandStatus: 'ULTRA HIGH',
      matchScore: 96,
      matchLabel: 'AI BUYER MATCH',
      liveStatusHeader: 'LIVE LEAD',
      liveStatusSub: 'HNW Verified • Assigned in 2s',
      portalSource: 'Property Finder UAE',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“HNW private client looking for private beachfront pool and immediate transfer.”',
      timeline: [
        { time: '14:20:05', event: 'Portal Inquiry Ingested' },
        { time: '14:20:07', event: 'AI intent scored: 96%' },
        { time: '14:20:08', event: 'Routed to Senior Agent Karim' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    },
    {
      id: 'dubai-2',
      title: 'Downtown Burj View Luxury Suite',
      category: 'SKY RESIDENCE',
      personality: 'portal-sync',
      accentColor: 'cyan',
      price: 'AED 8,750,000',
      location: 'Opera District • Downtown Dubai, UAE',
      image: PROPERTY_IMAGES.luxuryInterior,
      specs: [
        { label: '340 sqm', icon: Maximize2 },
        { label: '3 Beds', icon: BedDouble },
        { label: '4 Baths', icon: Bath }
      ],
      aiValueScore: 93,
      demandStatus: 'HIGH VELOCITY',
      matchScore: 92,
      matchLabel: 'PORTAL SYNC',
      liveStatusHeader: 'PORTAL AUTO-SYNC',
      liveStatusSub: 'Bayut & PF Direct • 24/7 AI Bot',
      portalSource: 'Bayut Live UAE',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“Bayut lead synced and routed within 6s. WhatsApp brochure delivered automatically.”',
      timeline: [
        { time: '12:08:14', event: 'Bayut Direct Sync Active' },
        { time: '12:08:16', event: 'WhatsApp AI Brochure Sent' },
        { time: '12:08:19', event: 'Viewing Confirmed for 4 PM' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    },
    {
      id: 'dubai-3',
      title: 'Saadiyat Beachfront Signature Villa',
      category: 'WATERFRONT ESTATE',
      personality: 'deal-intel',
      accentColor: 'gold',
      price: 'AED 21,000,000',
      location: 'Saadiyat Island • Abu Dhabi, UAE',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      specs: [
        { label: '920 sqm', icon: Maximize2 },
        { label: '6 Beds', icon: BedDouble },
        { label: '7 Baths', icon: Bath }
      ],
      aiValueScore: 97,
      demandStatus: 'PRIME ASSET',
      matchScore: 95,
      matchLabel: 'DEAL LOCK',
      liveStatusHeader: 'DEAL INTELLIGENCE',
      liveStatusSub: 'Commission: AED 420,000 • 2-Step Signed',
      portalSource: 'Offline Mobile Sync',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“Field agent viewing signed offline in basement. Replay synced instantly to accounting.”',
      timeline: [
        { time: '16:45:00', event: 'Field Signature Captured' },
        { time: '16:45:22', event: 'Offline Queue Synced 5G' },
        { time: '16:45:30', event: 'Director Signoff Unlocked' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    }
  ],
  riyadh: [
    {
      id: 'riyadh-1',
      title: 'KAFD Corporate Headquarters Tower',
      category: 'COMMERCIAL ASSET',
      personality: 'deal-intel',
      accentColor: 'gold',
      price: 'SAR 24,000,000',
      location: 'KAFD Financial District • Riyadh, KSA',
      image: PROPERTY_IMAGES.riyadhTower,
      specs: [
        { label: '1,400 sqm', icon: Maximize2 },
        { label: '8 Floors', icon: Building },
        { label: 'Grade A', icon: ShieldCheck }
      ],
      aiValueScore: 99,
      demandStatus: 'INSTITUTIONAL',
      matchScore: 97,
      matchLabel: 'DEAL LOCK',
      liveStatusHeader: 'DEAL INTELLIGENCE',
      liveStatusSub: 'Saudi Cloud Hosting • PDPL Compliant',
      portalSource: 'Aqar.fm & Enterprise API',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“Saudi sovereign fund corporate lead. 2-Step director signoff locked with audit timestamp.”',
      timeline: [
        { time: '08:30:10', event: 'Enterprise RFP Ingested' },
        { time: '08:30:25', event: 'KAFD Compliance Verified' },
        { time: '08:30:40', event: 'Deal Room #401 Created' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    },
    {
      id: 'riyadh-2',
      title: 'Al-Hizam Luxury Private Estate',
      category: 'LUXURY ESTATE',
      personality: 'ai-match',
      accentColor: 'emerald',
      price: 'SAR 16,800,000',
      location: 'Al-Hizam Al-Dhahabi • Riyadh, KSA',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      specs: [
        { label: '1,100 sqm', icon: Maximize2 },
        { label: '6 Beds', icon: BedDouble },
        { label: '8 Baths', icon: Bath }
      ],
      aiValueScore: 95,
      demandStatus: 'HIGH DEMAND',
      matchScore: 94,
      matchLabel: 'AI BUYER MATCH',
      liveStatusHeader: 'LIVE LEAD',
      liveStatusSub: 'VIP Arabic Flow • Assigned in 3s',
      portalSource: 'Meta WhatsApp AI Bot',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“AI WhatsApp bot qualified VIP buyer in native Arabic. Budget SAR 17M approved.”',
      timeline: [
        { time: '15:10:02', event: 'WhatsApp VIP Inquiry' },
        { time: '15:10:04', event: 'AI Bot Qualified in Arabic' },
        { time: '15:10:06', event: 'Assigned to Faisal Al-Saud' }
      ],
      actionText: 'VIEW INTELLIGENCE'
    },
    {
      id: 'riyadh-3',
      title: 'Jeddah Corniche Waterfront Residence',
      category: 'WATERFRONT RESIDENCE',
      personality: 'portal-sync',
      accentColor: 'cyan',
      price: 'SAR 11,500,000',
      location: 'North Corniche • Jeddah, KSA',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      specs: [
        { label: '620 sqm', icon: Maximize2 },
        { label: '4 Beds', icon: BedDouble },
        { label: '5 Baths', icon: Bath }
      ],
      aiValueScore: 92,
      demandStatus: 'COASTAL DEMAND',
      matchScore: 93,
      matchLabel: 'PORTAL SYNC',
      liveStatusHeader: 'PORTAL AUTO-SYNC',
      liveStatusSub: 'Aqar.fm Live Sync • Sub-10s',
      portalSource: 'Aqar.fm Direct Live',
      portalStatus: 'LIVE SYNC',
      aiInsight: '“Aqar.fm portal inquiry ingested in 3s. Duplicate listing check passed 100%.”',
      timeline: [
        { time: '13:04:12', event: 'Aqar.fm Webhook Received' },
        { time: '13:04:14', event: 'Duplicate Listing Verified' },
        { time: '13:04:16', event: 'Dispatched to Agent Tariq' }
      ],
      actionText: 'VIEW INTELLIGENCE'
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
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
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
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm' 
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100'
        }`}
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between gap-4">
            
            {/* Left: Brand Emblem + Typography Lockup */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1078C0] rounded-xl p-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src="/aqarqore-emblem.png" alt="AqarQore Emblem" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                    AqarQore
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#0858A8] font-bold font-mono mt-1">
                    GCC Agency OS
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Existing Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
              <a href="#problem" className="hover:text-[#0858A8] transition-colors py-1">Why AqarQore</a>
              <a href="#showcase" className="hover:text-[#0858A8] transition-colors py-1">Live Property Hub</a>
              <a href="#features" className="hover:text-[#0858A8] transition-colors py-1">Features</a>
              <a href="#security" className="hover:text-[#0858A8] transition-colors py-1">Security</a>
              <a href="#roi" className="hover:text-[#0858A8] transition-colors py-1">ROI Calculator</a>
              <a href="#pricing" className="hover:text-[#0858A8] transition-colors py-1">Pricing</a>
            </div>

            {/* Right: Existing Action Items & Primary CTA */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <button
                onClick={toggleLanguage}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
              >
                <span>{isRtl ? 'English' : 'العربية'}</span>
              </button>

              <a
                href={DEMO_CTA_URL}
                className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-sky-500 hover:to-[#1078C0] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-blue-400/30 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{isRtl ? 'احجز عرضاً توضيحياً' : 'Book Live Demo'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
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
                    Why AqarQore
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#showcase"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    Live Property Hub
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#features"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    Features
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#security"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    Security
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#roi"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
                  >
                    ROI Calculator
                  </a>
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    href="#pricing"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0858A8] transition-colors"
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
      {/* 1. HERO SECTION: GCC PROPERTY OPERATING SYSTEM WITH SKYLINE BG & UI MOCKUP */}
      {/* -------------------------------------------------------------------------- */}
      <section 
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-[92vh] lg:min-h-[850px] flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 bg-[#001B3D] text-white overflow-hidden"
      >
        {/* Layer 1: Official GCC Skyline (Dubai • Doha • Riyadh) Connected Network Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-70 filter brightness-75 saturate-110"
          style={{ backgroundImage: 'url(/gcc-hero-bg.jpg)' }}
        />

        {/* Layer 2: Deep Midnight Contrast Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142E]/98 via-[#001B3D]/85 to-[#001B3D]/70 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B3D]/85 via-transparent to-[#001B3D]/95 z-0 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#0878D1]/15 via-[#39BFF5]/10 to-transparent blur-[130px] pointer-events-none z-0" />

        {/* MAIN HERO CONTENT CONTAINER (LEFT COPY + RIGHT VISUAL) */}
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
                  href={DEMO_CTA_URL}
                  className="inline-flex items-center justify-center whitespace-nowrap gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#0878D1] via-[#168FE5] to-[#0878D1] hover:from-[#168FE5] hover:to-[#0878D1] text-white font-bold text-sm sm:text-base shadow-[0_0_28px_rgba(22,143,229,0.45)] hover:shadow-[0_0_36px_rgba(57,191,245,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] border border-[#39BFF5]/40 group cursor-pointer text-center"
                >
                  <span>{isRtl ? 'شاهد نظامك على عقاراتك في 20 دقيقة' : 'See AqarQore on Your Listings in 20 Mins'}</span>
                  <ArrowRight className={`w-4 h-4 text-blue-100 group-hover:translate-x-1.5 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1.5' : ''}`} />
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
                  <span>Meta Official Cloud API Partner</span>
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
                <div className="relative group">
                  {/* Subtle Outer Cyan Glow Aura */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/20 via-[#39BFF5]/25 to-[#0878D1]/20 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* High-Resolution Transparent Command Center Image */}
                  <img 
                    src="/aqarqore-command-center.png" 
                    alt="AqarQore Intelligence Command Center"
                    className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter saturate-105 rounded-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. REAL ESTATE INDUSTRY SHOWCASE HUB: LIVE PROPERTY INTELLIGENCE TERMINALS */}
      {/* -------------------------------------------------------------------------- */}
      <section id="showcase" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Architectural Grid Background Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0858A8] border border-blue-200/60 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Activity className="w-3.5 h-3.5 text-[#1078C0]" />
              <span>{isRtl ? 'نظام بيانات العقارات المباشر' : 'Live Property Intelligence Network'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
              Built for Every Asset Class in the GCC Real Estate Market
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every listing paired with live portal telemetry, instant AI buyer match scoring, and two-step director commission locks.
            </p>

            {/* Editorial City Tabs Navigation */}
            <div className="flex justify-center pt-3">
              <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/70 shadow-inner">
                {[
                  { id: 'doha', label: 'Doha & Pearl Qatar' },
                  { id: 'dubai', label: 'Dubai & Abu Dhabi' },
                  { id: 'riyadh', label: 'Riyadh & Jeddah' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActivePropertyTab(tab.id);
                      setMobileCardIndex(0);
                    }}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activePropertyTab === tab.id
                        ? 'bg-gradient-to-r from-[#1078C0] to-[#0858A8] text-white shadow-md shadow-blue-500/25'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DESKTOP VIEW: EDITORIAL STAGGERED 3-CARD COMPOSITION */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-9 items-start pt-6">
            {(MARKET_PROPERTIES[activePropertyTab] || MARKET_PROPERTIES.doha).map((property, idx) => {
              // Asymmetric vertical stagger: Card 1 (0px), Card 2 (-24px), Card 3 (+12px)
              const staggerOffset = idx === 1 ? 'lg:-translate-y-6' : idx === 2 ? 'lg:translate-y-3' : 'lg:translate-y-0';
              
              // Dynamic Accent Palette per Personality
              const isEmerald = property.accentColor === 'emerald';
              const isCyan = property.accentColor === 'cyan';
              const isGold = property.accentColor === 'gold';

              const accentBorder = isEmerald ? 'hover:border-[#00D6A3]/60' : isCyan ? 'hover:border-[#39BFF5]/60' : 'hover:border-[#F5B91E]/60';
              const accentBadgeBg = isEmerald ? 'bg-[#00D6A3]/15 text-[#00D6A3] border-[#00D6A3]/35' : isCyan ? 'bg-[#39BFF5]/15 text-[#39BFF5] border-[#39BFF5]/35' : 'bg-[#F5B91E]/15 text-[#F5B91E] border-[#F5B91E]/35';
              const accentPing = isEmerald ? 'bg-[#00D6A3]' : isCyan ? 'bg-[#39BFF5]' : 'bg-[#F5B91E]';
              const accentText = isEmerald ? 'text-[#00D6A3]' : isCyan ? 'text-[#39BFF5]' : 'text-[#F5B91E]';

              return (
                <motion.div 
                  key={property.id}
                  initial={{ opacity: 0, y: 50 + idx * 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full max-w-[420px] mx-auto rounded-[32px] bg-[#001B3D] border border-blue-800/45 ${accentBorder} shadow-[0_25px_60px_-15px_rgba(0,27,61,0.85),0_0_30px_rgba(8,120,209,0.12)] hover:shadow-[0_30px_70px_-10px_rgba(0,27,61,0.95),0_0_40px_rgba(57,191,245,0.22)] flex flex-col justify-between overflow-hidden group transition-all duration-500 ${staggerOffset}`}
                >
                  {/* -------------------------------------------------------------- */}
                  {/* TOP 38%: ASYMMETRIC IMMERSIVE VISUAL WITH FLOATING DATA PILLS   */}
                  {/* -------------------------------------------------------------- */}
                  <div className="relative h-[240px] overflow-hidden bg-slate-900">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95" 
                    />
                    
                    {/* Dark gradient overlay for UI contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D] via-black/20 to-black/50 pointer-events-none" />
                    
                    {/* Top Floating Price Module */}
                    <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-[#001B3D]/95 backdrop-blur-xl text-white font-extrabold text-xs sm:text-sm border border-white/20 shadow-xl flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${accentPing} animate-pulse`} />
                      <span className="font-mono tracking-tight">{property.price}</span>
                    </div>

                    {/* Top Floating Portal Live Sync Source */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-[#032653]/95 backdrop-blur-xl border border-sky-400/40 text-sky-200 text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg">
                      <Globe className="w-3 h-3 text-[#39BFF5]" />
                      <span className="truncate max-w-[120px]">{property.portalSource}</span>
                    </div>

                    {/* Bottom Edge Floating Location & Category Pill */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#001B3D]/90 backdrop-blur-md border border-blue-700/50 text-[11px] text-[#A9C9E8] font-medium truncate max-w-[70%]">
                        <MapPin className="w-3.5 h-3.5 text-[#39BFF5] shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg ${accentBadgeBg} border text-[9px] font-mono uppercase font-bold tracking-wider shrink-0`}>
                        {property.category}
                      </span>
                    </div>
                  </div>

                  {/* -------------------------------------------------------------- */}
                  {/* CENTER: LIVE AI PROPERTY PROFILE & OPERATIONAL TELEMETRY       */}
                  {/* -------------------------------------------------------------- */}
                  <div className="p-5 sm:p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                    
                    <div className="space-y-3.5">
                      {/* Property Title */}
                      <h3 className="text-lg font-extrabold text-white group-hover:text-[#39BFF5] transition-colors leading-snug line-clamp-1">
                        {property.title}
                      </h3>

                      {/* Visual Specs Data Grid */}
                      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-[#032653]/80 border border-blue-800/50 text-xs">
                        {property.specs.map((spec, sIdx) => {
                          const IconComponent = spec.icon;
                          return (
                            <div key={sIdx} className="flex flex-col items-center justify-center text-center p-1">
                              <IconComponent className="w-4 h-4 text-[#39BFF5] mb-1 opacity-90" />
                              <span className="text-white font-bold text-[11px] font-mono">{spec.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* AI Intelligence Metrics Strip (Score, Demand, Match) */}
                      <div className="grid grid-cols-3 gap-2">
                        {/* Metric 1: AI Value Score */}
                        <div className="p-2.5 rounded-2xl bg-[#032653]/60 border border-blue-800/40 flex flex-col items-center text-center">
                          <span className="text-[9px] font-mono uppercase text-[#A9C9E8] font-semibold">AI VALUE</span>
                          <span className="text-sm font-black text-white mt-0.5 font-mono">{property.aiValueScore}/100</span>
                          <span className="text-[8px] font-mono text-[#00D6A3] font-bold mt-0.5">Top 2%</span>
                        </div>

                        {/* Metric 2: Demand Indicator */}
                        <div className="p-2.5 rounded-2xl bg-[#032653]/60 border border-blue-800/40 flex flex-col items-center text-center">
                          <span className="text-[9px] font-mono uppercase text-[#A9C9E8] font-semibold">DEMAND</span>
                          <span className="text-[11px] font-black text-[#39BFF5] mt-1 truncate">{property.demandStatus}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#39BFF5] animate-ping mt-1" />
                        </div>

                        {/* Metric 3: Buyer Match */}
                        <div className="p-2.5 rounded-2xl bg-[#032653]/60 border border-blue-800/40 flex flex-col items-center text-center">
                          <span className="text-[9px] font-mono uppercase text-[#A9C9E8] font-semibold">LEAD MATCH</span>
                          <span className={`text-sm font-black ${accentText} mt-0.5 font-mono`}>{property.matchScore}%</span>
                          <span className="text-[8px] font-mono text-emerald-300 font-bold mt-0.5">High Intent</span>
                        </div>
                      </div>

                      {/* Operational Live Status & Micro Activity Timeline */}
                      <div className="p-3.5 rounded-2xl bg-[#00142E] border border-blue-900/80 space-y-2.5 shadow-inner">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${accentPing} animate-ping`} />
                            <span className={`text-[10px] font-mono uppercase font-bold ${accentText}`}>{property.liveStatusHeader}</span>
                          </div>
                          <span className="text-[9.5px] text-sky-300 font-mono font-medium">{property.liveStatusSub}</span>
                        </div>

                        {/* Real-time Activity Log */}
                        <div className="space-y-1 pt-2 border-t border-blue-900/60 text-[9.5px] font-mono">
                          {property.timeline.map((item, tIdx) => (
                            <div key={tIdx} className="flex items-center justify-between gap-2">
                              <span className="text-slate-400 shrink-0">{item.time}</span>
                              <span className="text-white font-medium truncate text-right">{item.event}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* AI Insight Quotation Callout */}
                      <div className="p-3 rounded-2xl bg-[#0878D1]/15 border border-[#39BFF5]/30 flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#39BFF5] shrink-0 mt-0.5" />
                        <p className="text-[11px] text-blue-100 italic leading-relaxed">
                          {property.aiInsight}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* -------------------------------------------------------------- */}
                  {/* BOTTOM ACTION BAR                                              */}
                  {/* -------------------------------------------------------------- */}
                  <div className="px-5 sm:px-6 py-4 bg-[#00142E]/90 border-t border-blue-900/80 flex items-center justify-between group-hover:bg-[#032653] transition-colors">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#39BFF5] group-hover:text-white uppercase transition-colors">
                      {property.actionText}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0878D1]/30 border border-[#39BFF5]/40 flex items-center justify-center text-[#39BFF5] group-hover:bg-[#168FE5] group-hover:text-white group-hover:translate-x-1.5 transition-all">
                      <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180 group-hover:-translate-x-1.5' : ''}`} />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* MOBILE VIEW: INTERACTIVE TOUCH CAROUSEL WITH 1 / 3 PAGINATION */}
          <div className="lg:hidden mt-6 space-y-5">
            {(() => {
              const currentList = MARKET_PROPERTIES[activePropertyTab] || MARKET_PROPERTIES.doha;
              const property = currentList[mobileCardIndex] || currentList[0];
              
              const isEmerald = property.accentColor === 'emerald';
              const isCyan = property.accentColor === 'cyan';
              const isGold = property.accentColor === 'gold';

              const accentBorder = isEmerald ? 'border-[#00D6A3]/60' : isCyan ? 'border-[#39BFF5]/60' : 'border-[#F5B91E]/60';
              const accentBadgeBg = isEmerald ? 'bg-[#00D6A3]/15 text-[#00D6A3] border-[#00D6A3]/35' : isCyan ? 'bg-[#39BFF5]/15 text-[#39BFF5] border-[#39BFF5]/35' : 'bg-[#F5B91E]/15 text-[#F5B91E] border-[#F5B91E]/35';
              const accentPing = isEmerald ? 'bg-[#00D6A3]' : isCyan ? 'bg-[#39BFF5]' : 'bg-[#F5B91E]';
              const accentText = isEmerald ? 'text-[#00D6A3]' : isCyan ? 'text-[#39BFF5]' : 'text-[#F5B91E]';

              return (
                <div className="space-y-4">
                  <motion.div 
                    key={`${activePropertyTab}-${mobileCardIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                    className={`w-full rounded-[28px] bg-[#001B3D] border ${accentBorder} shadow-2xl flex flex-col justify-between overflow-hidden`}
                  >
                    {/* Top Asymmetric Image */}
                    <div className="relative h-[220px] overflow-hidden bg-slate-900">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D] via-black/20 to-black/50" />
                      
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#001B3D]/95 text-white font-extrabold text-xs border border-white/20 flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${accentPing} animate-pulse`} />
                        <span className="font-mono">{property.price}</span>
                      </div>

                      <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-[#032653]/95 border border-sky-400/40 text-sky-200 text-[10px] font-mono font-bold flex items-center gap-1">
                        <Globe className="w-3 h-3 text-[#39BFF5]" />
                        <span>{property.portalSource}</span>
                      </div>

                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#001B3D]/90 border border-blue-700/50 text-[11px] text-[#A9C9E8] font-medium truncate">
                          <MapPin className="w-3 h-3 text-[#39BFF5] shrink-0" />
                          <span className="truncate">{property.location}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-md ${accentBadgeBg} border text-[9px] font-mono uppercase font-bold`}>
                          {property.category}
                        </span>
                      </div>
                    </div>

                    {/* Center Profile */}
                    <div className="p-5 space-y-3.5 text-left">
                      <h3 className="text-base font-extrabold text-white leading-snug line-clamp-1">
                        {property.title}
                      </h3>

                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-[#032653]/80 border border-blue-800/50 text-xs">
                        {property.specs.map((spec, sIdx) => {
                          const IconComponent = spec.icon;
                          return (
                            <div key={sIdx} className="flex flex-col items-center justify-center text-center p-1">
                              <IconComponent className="w-3.5 h-3.5 text-[#39BFF5] mb-1" />
                              <span className="text-white font-bold text-[10px] font-mono">{spec.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* AI Metrics */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-xl bg-[#032653]/60 border border-blue-800/40 flex flex-col items-center text-center">
                          <span className="text-[8px] font-mono uppercase text-[#A9C9E8]">AI VALUE</span>
                          <span className="text-xs font-black text-white mt-0.5 font-mono">{property.aiValueScore}/100</span>
                        </div>
                        <div className="p-2 rounded-xl bg-[#032653]/60 border border-blue-800/40 flex flex-col items-center text-center">
                          <span className="text-[8px] font-mono uppercase text-[#A9C9E8]">DEMAND</span>
                          <span className="text-[10px] font-black text-[#39BFF5] mt-0.5 truncate">{property.demandStatus}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-[#032653]/60 border border-blue-800/40 flex flex-col items-center text-center">
                          <span className="text-[8px] font-mono uppercase text-[#A9C9E8]">MATCH</span>
                          <span className={`text-xs font-black ${accentText} mt-0.5 font-mono`}>{property.matchScore}%</span>
                        </div>
                      </div>

                      {/* Operational Live Status & Micro Activity */}
                      <div className="p-3 rounded-xl bg-[#00142E] border border-blue-900/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-[9px] font-mono uppercase font-bold ${accentText}`}>{property.liveStatusHeader}</span>
                          <span className="text-[8.5px] text-sky-300 font-mono">{property.liveStatusSub}</span>
                        </div>
                        <div className="space-y-0.5 pt-1.5 border-t border-blue-900/60 text-[9px] font-mono">
                          {property.timeline.map((item, tIdx) => (
                            <div key={tIdx} className="flex items-center justify-between gap-1">
                              <span className="text-slate-400">{item.time}</span>
                              <span className="text-white truncate text-right">{item.event}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* AI Insight */}
                      <div className="p-2.5 rounded-xl bg-[#0878D1]/15 border border-[#39BFF5]/30 flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#39BFF5] shrink-0 mt-0.5" />
                        <p className="text-[10.5px] text-blue-100 italic leading-relaxed">
                          {property.aiInsight}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="px-5 py-3.5 bg-[#00142E]/90 border-t border-blue-900/80 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#39BFF5] uppercase">
                        {property.actionText}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#0878D1]/30 border border-[#39BFF5]/40 flex items-center justify-center text-[#39BFF5]">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Carousel Controls (1 / 3 Pagination + Prev/Next) */}
                  <div className="flex items-center justify-between px-2 pt-2">
                    <button
                      onClick={() => setMobileCardIndex((prev) => (prev > 0 ? prev - 1 : currentList.length - 1))}
                      className="p-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                      aria-label="Previous card"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {currentList.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setMobileCardIndex(dotIdx)}
                          className={`h-2 rounded-full transition-all ${
                            mobileCardIndex === dotIdx ? 'w-6 bg-[#0858A8]' : 'w-2 bg-slate-300'
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                      <span className="text-xs font-mono font-bold text-slate-500 ml-2">
                        {mobileCardIndex + 1} / {currentList.length}
                      </span>
                    </div>

                    <button
                      onClick={() => setMobileCardIndex((prev) => (prev < currentList.length - 1 ? prev + 1 : 0))}
                      className="p-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                      aria-label="Next card"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
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
        {/* Layer 1: GCC Telemetry & Holographic Regional Map Artwork */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-80"
          style={{ backgroundImage: 'url(/gcc-telemetry-bg.png)' }}
        />

        {/* Layer 2: Deep Midnight & Rose/Amber Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001738]/85 via-[#001738]/50 to-[#001738]/65 z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001738]/70 via-transparent to-[#001738]/85 z-0 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 blur-[120px] pointer-events-none z-0" />

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
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
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
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
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
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
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
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
      <section id="security" className="py-24 sm:py-32 bg-[#001433] text-white relative border-b border-blue-950/80 overflow-hidden">
        {/* Subtle Decorative Security Grid & Ambient Radial Cyan Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Enterprise-Grade Trust & Compliance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Institutional Security Built for GCC Data Sovereignty
            </h2>
            <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Restrained, server-enforced boundaries designed to eliminate ex-employee leaks, unauthorized access, and compliance violations.
            </p>
          </motion.div>

          {/* 3 Institutional Security Pillars */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Security Pillar 01 */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#001E45]/80 hover:bg-[#002654] p-7 sm:p-8 rounded-2xl border border-blue-800/60 hover:border-sky-400/40 backdrop-blur-md transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/60 border border-blue-500/30 text-sky-400 group-hover:text-emerald-300 group-hover:border-emerald-500/40 flex items-center justify-center transition-all">
                    <Key className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-300/70 bg-blue-950 px-2.5 py-1 rounded border border-blue-800/60">
                    01 // TOTP AUTH
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors mb-3">
                  Multi-Factor Authentication
                </h3>
                <p className="text-sm text-blue-100/75 leading-relaxed font-normal">
                  TOTP-based MFA on every staff login, with throttling after repeated failed attempts and no user-existence disclosure on invalid credentials. Agency data can't be breached by a leaked password alone.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-800/50 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>TOTP • Throttled Anti-Brute-Force</span>
              </div>
            </motion.div>

            {/* Security Pillar 02 */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#001E45]/80 hover:bg-[#002654] p-7 sm:p-8 rounded-2xl border border-blue-800/60 hover:border-sky-400/40 backdrop-blur-md transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/60 border border-blue-500/30 text-sky-400 group-hover:text-emerald-300 group-hover:border-emerald-500/40 flex items-center justify-center transition-all">
                    <Lock className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-300/70 bg-blue-950 px-2.5 py-1 rounded border border-blue-800/60">
                    02 // 403 RBAC
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors mb-3">
                  Role-Based Access Boundaries
                </h3>
                <p className="text-sm text-blue-100/75 leading-relaxed font-normal">
                  Managers see only their own team's leads; agents can never open another agent's record even by direct URL — enforced server-side with 403s.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-800/50 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Server-Side RBAC • Zero URL Leak</span>
              </div>
            </motion.div>

            {/* Security Pillar 03 */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#001E45]/80 hover:bg-[#002654] p-7 sm:p-8 rounded-2xl border border-blue-800/60 hover:border-sky-400/40 backdrop-blur-md transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/60 border border-blue-500/30 text-sky-400 group-hover:text-emerald-300 group-hover:border-emerald-500/40 flex items-center justify-center transition-all">
                    <UserX className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-300/70 bg-blue-950 px-2.5 py-1 rounded border border-blue-800/60">
                    03 // INSTANT REVOKE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-100 transition-colors mb-3">
                  Instant Offboarding
                </h3>
                <p className="text-sm text-blue-100/75 leading-relaxed font-normal">
                  Terminated staff lose all session and token access in under a minute, with their leads automatically reassigned or parked per policy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-800/50 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sub-60s Session Kill • Auto-Reassign</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 6B. ENTIRE AGENCY CONNECTED ⭐ NEW (INTERACTIVE NETWORK VISUALIZATION)     */}
      {/* -------------------------------------------------------------------------- */}
      <section id="connected" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

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
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                ⭐ NEW • ENTIRE AGENCY CONNECTED
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                {isRtl ? (
                  'وكالتك بالكامل متصلة في نظام تشغيل موحد'
                ) : (
                  <>
                    Your Entire Brokerage. Connected Into One System.
                  </>
                )}
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {isRtl ? (
                  'ربط فوري بين عملاء البوابات، وروبوت واتساب الذكي، وتطبيق المعاينات الميدانية، واعتمادات العمولات المحاسبية في لوحة تحكم واحدة متزامنة.'
                ) : (
                  'Connect your portal lead streams, Meta WhatsApp automation, field viewing agents, and accounting signoffs into one synchronized command center.'
                )}
              </p>

              {/* Core Ecosystem Checklist */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-300">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Real-time bidirectional sync across all agency nodes</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-300">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Zero data silos — from first portal click to final payout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-300">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Server-enforced security & compliance across GCC</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-3">
                <a
                  href={DEMO_CTA_URL}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-sky-500 hover:to-[#1078C0] text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 border border-blue-400/35 cursor-pointer"
                >
                  <span>{isRtl ? 'شاهد ربط النظام المباشر' : 'See Live Agency Integration'}</span>
                  <ArrowRight className={`w-4 h-4 text-blue-100 ${isRtl ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </motion.div>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT COLUMN: INTERACTIVE CONNECTED AGENCY NETWORK VISUALIZATION    */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              {/* Network Board Container */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(0,48,104,0.08)]">
                
                {/* Network Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      AGENCY TOPOLOGY • ALL SYSTEMS OPERATIONAL
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0858A8] font-semibold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/70">
                    LATENCY &lt; 10ms
                  </span>
                </div>

                {/* Central Mesh Grid Layout */}
                <div className="space-y-4">
                  
                  {/* Top Row: Portal Ingestion + WhatsApp Bot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Node 1 */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-sky-400 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-sky-100 border border-sky-200 text-[#0858A8] flex items-center justify-center shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#0858A8] transition-colors">Portal Ingestion</div>
                          <div className="text-[10px] text-emerald-600 font-mono font-semibold">Property Finder &amp; Bayut</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Auto-capture and sub-10s round-robin assignment to active agents.
                      </p>
                    </div>

                    {/* Node 2 */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Meta WhatsApp Bot</div>
                          <div className="text-[10px] text-emerald-600 font-mono font-semibold">24/7 AI Buyer Qualification</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Pre-qualifies budget and area conversationally before human handoff.
                      </p>
                    </div>
                  </div>

                  {/* CENTERPIECE: Central Core Hub */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#003068] via-[#0858A8] to-[#003068] text-white border border-blue-400/40 shadow-lg text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 text-left">
                        <div className="w-12 h-12 flex items-center justify-center shrink-0">
                          <img src="/aqarqore-emblem.png" alt="AqarQore Emblem" className="w-full h-full object-contain filter drop-shadow-md" />
                        </div>
                        <div>
                          <div className="text-base font-extrabold text-white">AqarQore Core Engine</div>
                          <div className="text-xs text-sky-200 font-medium">GCC Central Agency Operating System</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-300 bg-[#001D42]/80 px-3 py-1.5 rounded-xl border border-emerald-400/30 shrink-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live Synchronized Backbone
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Mobile Field Sync + Financial Approval Lock */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Node 3 */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-purple-400 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Offline Mobile App</div>
                          <div className="text-[10px] text-purple-600 font-mono font-semibold">Basement &amp; Field Viewings</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Offline viewing sync with instant queue replay once reconnected.
                      </p>
                    </div>

                    {/* Node 4 */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Financial Control</div>
                          <div className="text-[10px] text-amber-600 font-mono font-semibold">2-Step Server Signoff</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        Sales Director to Accounting approval lock with immutable audit.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer Security Badge */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Encrypted GCC Network
                  </span>
                  <span className="text-[#0858A8] font-semibold">100% Data Sovereignty</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 7. AUTOMATION / ROI PROOF & CALCULATOR                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section id="roi" className="py-24 sm:py-32 bg-[#001433] text-white relative border-b border-blue-950/80 overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid & Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: INTERACTIVE FINANCIAL SIMULATION CONSOLE               */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Calculated Revenue Recovery
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Calculate Your Agency's Recovered Revenue
                </h2>

                <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                  Drag the sliders to estimate how much revenue your brokerage loses to unassigned leads and spreadsheet delays each year.
                </p>
              </div>

              {/* Calculator Panel */}
              <div className="bg-[#001E45]/90 rounded-3xl p-6 sm:p-8 border border-blue-800/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(16,120,192,0.15)] backdrop-blur-xl space-y-6">
                
                {/* Slider 1: Active Agents */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-blue-200 tracking-wide">Number of Active Agents</span>
                    <span className="text-sky-300 font-mono text-sm bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-800/60 shadow-inner">
                      {agentCount} Agents
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
                    <span>3 Boutique</span>
                    <span>50 Mid-Size</span>
                    <span>100+ Enterprise</span>
                  </div>
                </div>

                {/* Slider 2: Average Deal Value */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-blue-200 tracking-wide">Average Property Transaction Value</span>
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
                    <span>500K Mid-Market</span>
                    <span>5M Luxury</span>
                    <span>10M+ Prime</span>
                  </div>
                </div>

                {/* Real-time Output Metric Cards */}
                <div className="pt-4 border-t border-blue-800/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Recovered Revenue Box */}
                  <div className="bg-[#002859] p-5 rounded-2xl border border-emerald-500/40 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                    <div className="text-xs text-emerald-300 font-medium flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Est. Recovered Revenue
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-mono">
                      {isRtl ? `${annualSavedRevenue.toLocaleString()} ر.ق/د.إ` : `AED ${annualSavedRevenue.toLocaleString()}`}
                    </div>
                    <div className="text-[11px] text-blue-200/70 mt-1 font-medium">per year saved</div>
                  </div>

                  {/* Hours Saved Box */}
                  <div className="bg-[#002859] p-5 rounded-2xl border border-sky-500/40 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
                    <div className="text-xs text-sky-300 font-medium flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      Hours Saved / Month
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-mono">
                      {monthlyHoursSaved} Hrs
                    </div>
                    <div className="text-[11px] text-blue-200/70 mt-1 font-medium">no manual spreadsheets</div>
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
                <div className="text-base font-bold text-white">Sub-10s Response</div>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  Leads assigned to active agents before competitor calls.
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
                <div className="text-base font-bold text-white">Faster Approvals</div>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  Enforced 2-step director to accounting deal signoffs.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 8. PRICING TEASER                                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section id="pricing" className="py-24 sm:py-32 bg-white relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-bold uppercase tracking-wider shadow-sm">
              Transparent Agency Tiering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
              {isRtl ? (
                'خطط مرنة لكل مقعد مصممة للنمو مع وكالتك'
              ) : (
                <>
                  Simple Per-Seat Plans. Built to Scale With Your Agency.
                </>
              )}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {isRtl ? (
                'بدون رسوم مزامنة بوابات خفية أو فخاخ إعداد. تشمل جميع الخطط التكامل مع واجهة Meta WhatsApp Cloud API الرسمية.'
              ) : (
                'No hidden portal sync fees or setup traps. All plans include Meta WhatsApp Cloud API integration.'
              )}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Starter Brokerage */}
            <motion.div 
              className="bg-white p-8 sm:p-9 rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,48,104,0.05)] hover:shadow-xl hover:border-slate-300 space-y-7 flex flex-col justify-between transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">Tier 01</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Starter Brokerage</h3>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">For growing teams up to 5 agents</p>
                </div>

                <div className="pt-2 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight">$149</span>
                    <span className="text-xs text-slate-500 font-medium">/ seat / month</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Auto Lead Distribution (&lt;10s)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Property Finder &amp; Bayut Sync</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Mobile App (Offline Mode)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href={DEMO_CTA_URL} 
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-all block shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Book Starter Demo
                </a>
              </div>
            </motion.div>

            {/* Card 2: Growth Agency (Featured Highlight) */}
            <motion.div 
              className="bg-gradient-to-b from-[#00224D] via-[#001D42] to-[#001433] p-8 sm:p-9 rounded-3xl border-2 border-blue-400/60 text-white shadow-[0_25px_60px_-15px_rgba(0,34,77,0.5),0_0_35px_rgba(16,120,192,0.2)] space-y-7 flex flex-col justify-between relative transform lg:-translate-y-3 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#1078C0] to-[#0858A8] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg border border-blue-300/40">
                ⭐ Most Popular for GCC Agencies
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-sky-300 uppercase tracking-widest">Tier 02 • Recommended</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">Growth Agency</h3>
                  <p className="text-xs text-blue-200/80 mt-1.5 font-medium">For established teams 6-25 agents</p>
                </div>

                <div className="pt-2 pb-4 border-b border-blue-800/60">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">$199</span>
                    <span className="text-xs text-blue-200/80 font-medium">/ seat / month</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-blue-100">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-white">All Starter Features Included</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Meta WhatsApp AI Qualification Bot</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>2-Step Deal Commission Approvals</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href={DEMO_CTA_URL} 
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] hover:from-sky-500 hover:to-[#1078C0] text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-blue-600/35 transition-all block transform hover:-translate-y-0.5 border border-blue-300/30 cursor-pointer"
                >
                  Schedule Growth Demo
                </a>
              </div>
            </motion.div>

            {/* Card 3: Enterprise Group */}
            <motion.div 
              className="bg-white p-8 sm:p-9 rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,48,104,0.05)] hover:shadow-xl hover:border-slate-300 space-y-7 flex flex-col justify-between transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">Tier 03</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Enterprise Group</h3>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">For large brokerages (25+ agents)</p>
                </div>

                <div className="pt-2 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">Custom Quote</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Dedicated Account Manager in Dubai/Doha</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Custom ERP / Accounting Integrations</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href={DEMO_CTA_URL} 
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm text-center transition-all block shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Request Enterprise Quote
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 8B. FAQ ⭐ NEW (EDITORIAL INTERACTIVE KNOWLEDGE SYSTEM)                    */}
      {/* -------------------------------------------------------------------------- */}
      <section id="faq" className="py-24 sm:py-32 bg-white text-slate-900 relative border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,48,104,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,48,104,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: EDITORIAL FAQ HEADER & REGIONAL SUPPORT CARD          */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-5 lg:sticky lg:top-28 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                ⭐ NEW • FREQUENTLY ASKED QUESTIONS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#001D42] via-[#0858A8] to-[#1078C0]">
                {isRtl ? (
                  'كل ما تحتاج معرفته عن نظام AqarQore'
                ) : (
                  <>
                    Everything You Need to Know. Clear, Upfront Answers.
                  </>
                )}
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {isRtl ? (
                  'كل ما يتعلق بسرعة ربط البوابات، وتوافق واتساب السحابي، ودقة احتساب العمولات، وجدول بدء التشغيل في وكالتك.'
                ) : (
                  'Everything you need to know about migrating your agency, portal sync speed, WhatsApp Cloud API compliance, and onboarding timelines.'
                )}
              </p>

              {/* Regional Support Assistance Card */}
              <div className="pt-4">
                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0858A8] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Custom GCC Architecture Questions?</div>
                      <div className="text-xs text-slate-500">Dedicated specialists in Dubai &amp; Doha</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Have specific regulatory, sovereign data hosting, or custom ERP integration requirements? Speak directly with our solution architects.
                  </p>
                  <a 
                    href={DEMO_CTA_URL}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0858A8] hover:text-[#003068] transition-colors"
                  >
                    <span>Schedule Technical Architecture Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT COLUMN: INTERACTIVE ACCORDION KNOWLEDGE INTERFACE            */}
            {/* ------------------------------------------------------------------ */}
            <motion.div 
              className="lg:col-span-7 space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {[
                {
                  id: '01',
                  question: isRtl 
                    ? 'ما مدى سرعة توزيع العملاء المحتملين من البوابات العقارية؟' 
                    : 'How quickly does AqarQore auto-assign portal leads?',
                  answer: isRtl 
                    ? 'يتم استلام وتوزيع استفسارات Property Finder و Bayut و Meta WhatsApp في أقل من 10 ثوانٍ عبر محرك القواعد الذكي، متجاوزاً الوكلاء المشغولين أو خارج الدوام لضمان التواصل الفوري.'
                    : 'Inquiries from Property Finder, Bayut, and Meta WhatsApp are ingested and auto-assigned by your rule engine in under 10 seconds. The system automatically skips agents who are off-duty or at maximum lead capacity, ensuring hot buyers are contacted immediately.'
                },
                {
                  id: '02',
                  question: isRtl 
                    ? 'هل يتوافق روبوت واتساب مع معايير واجهة Meta الرسمية؟' 
                    : "Is the WhatsApp integration compliant with Meta's official Cloud API?",
                  answer: isRtl 
                    ? 'نعم، يتصل AqarQore مباشرة عبر شريك Meta Cloud API الرسمي، مما يحافظ على علامة التوثيق الخضراء ويحمي بيانات عملائك داخل بيئة الوكالة الرسمية بدلاً من هواتف الوكلاء الشخصية.'
                    : "Yes. AqarQore connects directly via Meta's Official Cloud API partner tier, preserving your business verification badge, operating within the 24-hour customer service window, and preventing personal phone data leaks when agents leave."
                },
                {
                  id: '03',
                  question: isRtl 
                    ? 'كيف يعمل تطبيق المعاينات في الأماكن المغلقة ومواقف السيارات؟' 
                    : 'How does the offline mobile app work during basement or underground viewings?',
                  answer: isRtl 
                    ? 'يستطيع الوكيل استعراض بيانات الوحدات وتسجيل ملاحظات وتوقيع العميل دون الحاجة لإنترنت، وفور توفر شبكة 4G/5G يتم مزامنة كافة البيانات فورياً دون فقدان أي تفاصيل.'
                    : 'Agents can pull listing specs, log client feedback, and capture viewing signatures completely offline in underground parking or thick concrete towers. As soon as the device reconnects to 4G/5G or Wi-Fi, all changes sync automatically without data loss.'
                },
                {
                  id: '04',
                  question: isRtl 
                    ? 'كيف يمنع نظام اعتماد العمولات على خطوتين النزاعات المالية؟' 
                    : 'How does the 2-step deal and commission approval prevent disputes?',
                  answer: isRtl 
                    ? 'تتطلب كل صفقة موافقة إلكترونية متسلسلة تبدأ من مدير المبيعات ثم تنتقل إلى المحاسبة، ولا يمكن تخطي أي خطوة، مما يضمن دقة الصرف وسجل تدقيق مالي ثابت.'
                    : 'Every closed transaction requires sequential signoffs: first from the Sales Director, followed by Accounting verification. Neither party can bypass the other, and payouts are locked to prevent double-crediting and disputed commissions.'
                },
                {
                  id: '05',
                  question: isRtl 
                    ? 'كم يستغرق نقل بيانات الوكالة وبدء التشغيل الفعلي؟' 
                    : 'How long does agency onboarding and portal migration take?',
                  answer: isRtl 
                    ? 'تبدأ معظم الوكالات العمل بالكامل خلال أقل من 48 ساعة بمساعدة فريق الدعم الإقليمي في دبي والدوحة لنقل القوائم وتفعيل محركات التوزيع دون انقطاع.'
                    : 'Most GCC brokerages go live in under 48 hours. Our dedicated regional onboarding team in Dubai and Doha helps import your active listings, configure your agent routing rules, and connect your portal webhook pipelines without agency downtime.'
                }
              ].map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={faq.id}
                    variants={fadeInUp}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen 
                        ? 'bg-white border-blue-300 shadow-[0_8px_30px_-6px_rgba(0,48,104,0.08)]' 
                        : 'bg-[#F8FAFC]/90 hover:bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <span className={`text-xs font-mono font-bold mt-1 shrink-0 ${isOpen ? 'text-[#0858A8]' : 'text-slate-400'}`}>
                          {faq.id}
                        </span>
                        <span className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                          isOpen ? 'text-[#003068]' : 'text-slate-900 group-hover:text-[#0858A8]'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? 'bg-[#0858A8] text-white shadow-md' : 'bg-slate-200/80 text-slate-600 group-hover:bg-blue-100 group-hover:text-[#0858A8]'
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
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 pl-12 sm:pl-14 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 9. FINAL EXECUTIVE CTA BANNER (SLEEK PANORAMIC BAND)                       */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#00224D] via-[#003068] to-[#0858A8] text-white relative border-y border-blue-400/35 overflow-hidden shadow-2xl">
        {/* Subtle Decorative Technical Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/15 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Column: Scarcity Badge + Headline + Subtext */}
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Limited Q3 Onboarding Slots for Dubai &amp; Doha</span>
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
            <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
              <a
                href={DEMO_CTA_URL}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#002859] hover:bg-sky-50 font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border border-white cursor-pointer"
              >
                <span>{isRtl ? 'احجز العرض التوضيحي الآن' : 'Book Your 20-Min Demo Now'}</span>
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 text-[#002859] ${isRtl ? 'rotate-180' : ''}`} />
              </a>

              <div className="flex items-center gap-4 text-[11px] font-medium text-blue-100/80">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  48h Full Migration
                </span>
                <span className="text-blue-300/40">•</span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  Meta Verified
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 10. FOOTER: PREMIUM ENTERPRISE REAL ESTATE SIGNATURE                       */}
      {/* -------------------------------------------------------------------------- */}
      <footer className="bg-[#001128] text-blue-200/80 text-xs pt-20 pb-12 border-t border-blue-900/60 relative overflow-hidden">
        {/* Subtle Decorative Technical Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Main Footer Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Brand Signature Column (Col Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <a href="#" className="flex items-center gap-3.5 group w-fit">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src="/aqarqore-emblem.png" alt="AqarQore Emblem" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold tracking-tight text-white block leading-none">AqarQore</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 font-semibold block mt-1">GCC Agency OS</span>
                </div>
              </a>

              <p className="text-blue-100/70 text-sm leading-relaxed max-w-sm">
                The autonomous real estate operating system engineered specifically for high-volume GCC brokerages across Qatar, the UAE, and Saudi Arabia.
              </p>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-sky-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Regional Hubs: Dubai (DIFC) • Doha • Riyadh</span>
              </div>
            </div>

            {/* Column 2: Platform Architecture (Col Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">Platform</h4>
              <ul className="space-y-2.5 text-blue-200/70 text-xs">
                <li><a href="#features" className="hover:text-white transition-colors">Speed to Lead</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">WhatsApp AI Bot</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Offline Mobile App</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Commission Signoff</a></li>
                <li><a href="#connected" className="hover:text-white transition-colors">Connected Mesh</a></li>
              </ul>
            </div>

            {/* Column 3: GCC Markets (Col Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">GCC Markets</h4>
              <ul className="space-y-2.5 text-blue-200/70 text-xs">
                <li><a href="#showcase" className="hover:text-white transition-colors">Dubai Brokerages</a></li>
                <li><a href="#showcase" className="hover:text-white transition-colors">Doha Waterfront</a></li>
                <li><a href="#showcase" className="hover:text-white transition-colors">Riyadh Towers</a></li>
                <li><a href="#roi" className="hover:text-white transition-colors">Revenue Calculator</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Agency Plans</a></li>
              </ul>
            </div>

            {/* Column 4: Enterprise Trust & Support (Col Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">Enterprise Trust</h4>
              <ul className="space-y-2.5 text-blue-200/70 text-xs">
                <li><a href="#security" className="hover:text-white transition-colors">Institutional Security</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">GCC Data Sovereignty</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Role-Based 403 Access</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Knowledge Base &amp; FAQ</a></li>
                <li><a href={DEMO_CTA_URL} className="hover:text-sky-300 font-semibold transition-colors">Book Live Demo →</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 border-t border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
            <div>
              © {new Date().getFullYear()} AqarQore Technologies Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-slate-600">|</span>
              <span className="text-sky-400/90 font-mono text-[11px]">GCC Compliance Certified</span>
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
