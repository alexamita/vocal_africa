/**
 * Main Application Component
 *
 * This component handles the core layout and routing configuration of the application.
 * It includes:
 * - Application-wide routing using React Router
 * - The main Navigation Header with Mega Menus (Desktop)
 * - Mobile Navigation Menu
 * - Scroll-to-top behavior on route changes
 * - Global layout structure
 */
import { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Users,
  BookOpen,
  Briefcase,
  Globe,
  Megaphone,
  ArrowRight,
  FileText,
  Menu,
  X,
  ChevronDown,
  Camera,
  Video,
  Mic,
  Share2,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";

import { HomePage } from "@/app/components/HomePage";
import { WhatWeDoPage } from "@/app/components/WhatWeDoPage";
import { LeadershipPage } from "@/app/components/LeadershipPage";
import { CareersPage } from "@/app/components/CareersPage";
import { ContentCategoryPage } from "@/app/components/ContentCategoryPage";
import { ContentDetailPage } from "@/app/components/ContentDetailPage";
import { PhotoGalleryPage } from "@/app/components/PhotoGalleryPage";
import { ContactPage } from "@/app/components/ContactPage";
import { DonatePage } from "@/app/components/DonatePage";
import { Footer } from "@/app/components/Footer";

import { newsArticles, mediaContent } from "@/data/content";
import { NewsAndPublicationsPage } from "@/app/components/NewsAndPublicationsPage";
import { SocialMediaHubPage } from "@/app/components/SocialMediaHubPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top on route change
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    // More aggressive fallback for complex layouts
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10); // Small delay to allow layout shifts/menu closing

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

export default function App() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (activeMenu || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeMenu, isMobileMenuOpen]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-[60] transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={closeAllMenus}
                  className="flex items-center cursor-pointer"
                >
                  <motion.img
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    src={logo}
                    alt="VOCAL Africa Logo"
                    className="h-14 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-10 h-full ml-auto">
                <Link
                  to="/"
                  onMouseEnter={() => setActiveMenu(null)}
                  onClick={closeAllMenus}
                  className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 hover:text-red-600 transition-colors h-full flex items-center cursor-pointer relative group"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>

                <div
                  className="h-full flex items-center relative"
                  onMouseEnter={() => setActiveMenu("about")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    onClick={() =>
                      setActiveMenu(activeMenu === "about" ? null : "about")
                    }
                    className={`text-xs font-black uppercase tracking-[0.2em] hover:text-red-600 transition-colors h-full flex items-center cursor-pointer relative group ${activeMenu === "about" ? "text-red-600" : "text-gray-900"}`}
                  >
                    <span className="relative z-10">About Us</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300 origin-left ${activeMenu === "about" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    ></span>
                  </button>

                  {/* About Mega Menu */}
                  <AnimatePresence>
                    {activeMenu === "about" && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed top-16 left-0 w-full bg-white border-b border-gray-100 shadow-2xl z-50 overflow-hidden"
                        style={{ height: "550px" }}
                      >
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500 transform skew-x-12 translate-x-1/2 opacity-5 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-900/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-16 flex relative z-10">
                          <div className="w-1/3 pr-16 border-r border-gray-100 flex flex-col justify-between">
                            <Link
                              to="/what-we-do"
                              onClick={closeAllMenus}
                              className="group text-left cursor-pointer w-full"
                            >
                              <div className="inline-block px-3 py-1 bg-green-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-sm">
                                The Foundation
                              </div>
                              <h3 className="text-4xl font-bold mb-6 text-green-900 group-hover:text-red-600 transition-colors uppercase tracking-tighter leading-none">
                                About <br />
                                VOCAL Africa
                              </h3>
                              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
                                We are a pan-African movement dedicated to
                                amplifying the voices of the marginalized and
                                fostering leadership that serves the community.
                              </p>
                              <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-green-900/10 border-4 border-white group-hover:-translate-y-2 transition-transform duration-500">
                                <ImageWithFallback
                                  src="https://images.unsplash.com/photo-1655102718560-19dd4971f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaHVtYW4lMjBjb21tdW5pdHklMjBsZWFkZXJzJTIwYWR2b2NhY3l8ZW58MXx8fHwxNzY5Nzk5ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                  alt="About VOCAL"
                                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="w-2/3 pl-16 grid grid-cols-2 gap-12">
                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase mb-10 border-b border-orange-100 pb-2">
                                Our Foundation
                              </h4>
                              <div className="space-y-6">
                                <Link
                                  to="/what-we-do"
                                  onClick={closeAllMenus}
                                  className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                    <Globe className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                      What we do
                                    </span>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                      Our core pillars of advocacy, community
                                      organizing, and policy influence.
                                    </p>
                                  </div>
                                </Link>

                                <Link
                                  to="/leadership"
                                  onClick={closeAllMenus}
                                  className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                                    <Users className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                      Leadership
                                    </span>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                      Meet the activists and visionaries leading
                                      our mission across Africa.
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <h4 className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase mb-10 border-b border-orange-100 pb-2">
                                Work With Us
                              </h4>
                              <div className="space-y-6 flex-grow">
                                <Link
                                  to="/careers"
                                  onClick={closeAllMenus}
                                  className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <Briefcase className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                      Careers
                                    </span>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                      Join our dynamic team and contribute to
                                      meaningful social change.
                                    </p>
                                  </div>
                                </Link>
                              </div>

                              <Link
                                to="/contact"
                                onClick={closeAllMenus}
                                className="mt-6 p-8 bg-green-900 rounded-[32px] group text-left cursor-pointer hover:bg-red-600 transition-all duration-500 block w-full relative overflow-hidden shadow-2xl"
                              >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700"></div>
                                <h5 className="font-bold text-white text-xl mb-2 uppercase tracking-tight group-hover:text-white transition-colors">
                                  Want to collaborate?
                                </h5>
                                <p className="text-sm text-green-100/70 mb-6 font-medium">
                                  We're always looking for partners and
                                  volunteers to join our cause.
                                </p>
                                <div className="text-orange-500 font-bold uppercase tracking-widest text-[10px] flex items-center group-hover:text-white transition-colors">
                                  Partner With Us{" "}
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className="h-full flex items-center relative"
                  onMouseEnter={() => setActiveMenu("newsroom")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === "newsroom" ? null : "newsroom",
                      )
                    }
                    className={`text-xs font-black uppercase tracking-[0.2em] hover:text-red-600 transition-colors h-full flex items-center cursor-pointer relative group ${activeMenu === "newsroom" ? "text-red-600" : "text-gray-900"}`}
                  >
                    <span className="relative z-10">Newsroom</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300 origin-left ${activeMenu === "newsroom" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    ></span>
                  </button>

                  {/* Newsroom Mega Menu */}
                  <AnimatePresence>
                    {activeMenu === "newsroom" && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed top-16 left-0 w-full bg-white border-b border-gray-100 shadow-2xl z-50 overflow-hidden"
                        style={{ height: "550px" }}
                      >
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600 transform skew-x-12 translate-x-1/2 opacity-5 pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-16 flex relative z-10">
                          <div className="w-1/3 pr-16 border-r border-gray-100 flex flex-col justify-between">
                            <Link
                              to="/newsroom/all"
                              onClick={closeAllMenus}
                              className="group text-left cursor-pointer w-full"
                            >
                              <div className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-sm shadow-lg shadow-red-600/20">
                                Direct Updates
                              </div>
                              <h3 className="text-4xl font-bold mb-6 text-green-900 group-hover:text-red-600 transition-colors uppercase tracking-tighter leading-none">
                                VOCAL <br />
                                Newsroom
                              </h3>
                              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
                                Stay updated with our latest activities,
                                official stances, and in-depth research shaping
                                the continental discourse.
                              </p>
                              <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-red-900/10 border-4 border-white group-hover:-translate-y-2 transition-transform duration-500">
                                <ImageWithFallback
                                  src="https://images.unsplash.com/photo-1682617367233-a44415de6361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwam91cm5hbGlzbSUyMG5ld3Nyb29tJTIwbWVkaWF8ZW58MXx8fHwxNzY5Nzk5ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                  alt="Newsroom"
                                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="w-2/3 pl-16 grid grid-cols-2 gap-12">
                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.3em] text-red-600 uppercase mb-10 border-b border-red-100 pb-2">
                                Updates & Media
                              </h4>
                              <div className="space-y-6">
                                <Link
                                  to="/newsroom/articles"
                                  onClick={closeAllMenus}
                                  className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                    <Newspaper className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                      Articles
                                    </span>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                      Latest stories and feature pieces from our
                                      work across Africa.
                                    </p>
                                  </div>
                                </Link>

                                <Link
                                  to="/newsroom/press-statements"
                                  onClick={closeAllMenus}
                                  className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                                    <Megaphone className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                      Press Releases
                                    </span>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                      Official announcements and VOCAL Africa's
                                      position on current events.
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-[10px] font-bold tracking-[0.3em] text-red-600 uppercase mb-10 border-b border-red-100 pb-2">
                                Resources
                              </h4>
                              <div className="space-y-6">
                                <Link
                                  to="/resources/publications"
                                  onClick={closeAllMenus}
                                  className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <BookOpen className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                      Publications
                                    </span>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                      In-depth guides, research papers, and
                                      educational materials.
                                    </p>
                                  </div>
                                </Link>

                                <Link
                                  to="/newsroom/reports"
                                  onClick={closeAllMenus}
                                  className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                    <FileText className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                      Reports
                                    </span>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                      Annual reports and thematic findings on
                                      human rights and governance.
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className="h-full flex items-center relative"
                  onMouseEnter={() => setActiveMenu("media")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    onClick={() =>
                      setActiveMenu(activeMenu === "media" ? null : "media")
                    }
                    className={`text-xs font-black uppercase tracking-[0.2em] hover:text-red-600 transition-colors h-full flex items-center cursor-pointer relative group ${activeMenu === "media" ? "text-red-600" : "text-gray-900"}`}
                  >
                    <span className="relative z-10">Media</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300 origin-left ${activeMenu === "media" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    ></span>
                  </button>

                  {/* Media Mega Menu */}
                  <AnimatePresence>
                    {activeMenu === "media" && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed top-16 left-0 w-full bg-white border-b border-gray-100 shadow-2xl z-50 overflow-hidden"
                        style={{ height: "600px" }}
                      >
                        <div className="absolute top-0 right-0 w-1/4 h-full bg-green-900 transform skew-x-12 translate-x-1/2 opacity-[0.02] pointer-events-none"></div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-16 flex relative z-10">
                          {/* Column 1: Media Hub Hero */}
                          <div className="w-1/3 pr-16 border-r border-gray-100 flex flex-col">
                            <div className="inline-block px-3 py-1 bg-green-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-fit rounded-sm">
                              Visual Stories
                            </div>
                            <h3 className="text-4xl font-bold mb-6 text-green-900 uppercase tracking-tighter leading-[0.9]">
                              VOCAL <br />
                              MEDIA HUB
                            </h3>
                            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                              Explore our multimedia library capturing the heart
                              of our advocacy, community stories, and the voices
                              driving change.
                            </p>
                            <div className="mt-auto w-full aspect-[16/9] rounded-[32px] overflow-hidden border-4 border-white shadow-2xl shadow-green-900/10">
                              <ImageWithFallback
                                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk4OTk3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Media Hub"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Column 2: Visual Content */}
                          <div className="w-1/3 px-12">
                            <h4 className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase mb-10 border-b border-orange-100 pb-2">
                              Visual Content
                            </h4>
                            <div className="space-y-6">
                              <Link
                                to="/media/gallery"
                                onClick={closeAllMenus}
                                className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[160px]"
                              >
                                <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                  <Camera className="w-7 h-7" />
                                </div>
                                <div>
                                  <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                    Photo Gallery
                                  </span>
                                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    Visual archives of our field work, events,
                                    and community summits.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                to="/media/videos"
                                onClick={closeAllMenus}
                                className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[160px]"
                              >
                                <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                  <Video className="w-7 h-7" />
                                </div>
                                <div>
                                  <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                    Videos
                                  </span>
                                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    Documentaries, interviews, and our YouTube
                                    channel highlights.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Column 3: Audio & Social */}
                          <div className="w-1/3 pl-12">
                            <h4 className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase mb-10 border-b border-orange-100 pb-2">
                              Audio & Social
                            </h4>
                            <div className="space-y-6">
                              <Link
                                to="/media/podcasts"
                                onClick={closeAllMenus}
                                className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[160px]"
                              >
                                <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-purple-500 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                                  <Mic className="w-7 h-7" />
                                </div>
                                <div>
                                  <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                    Podcasts
                                  </span>
                                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    Weekly episodes featuring insights from
                                    leaders and activists.
                                  </p>
                                </div>
                              </Link>

                              <Link
                                to="/media/social"
                                onClick={closeAllMenus}
                                className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[160px]"
                              >
                                <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                  <Share2 className="w-7 h-7" />
                                </div>
                                <div>
                                  <span className="block text-xl font-bold text-green-900 uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                                    Social Media
                                  </span>
                                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    Connect with us on Twitter, Facebook, and
                                    Instagram.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact"
                  onMouseEnter={() => setActiveMenu(null)}
                  onClick={closeAllMenus}
                  className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 hover:text-red-600 transition-colors h-full flex items-center cursor-pointer relative group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link
                  to="/donate"
                  onMouseEnter={() => setActiveMenu(null)}
                  onClick={closeAllMenus}
                  className="bg-red-600 hover:bg-red-700 text-white font-black px-6 py-2.5 rounded-full transition-all duration-300 text-[10px] uppercase tracking-[0.2em] shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5"
                >
                  Donate
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center pr-2">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-900 hover:text-red-600 transition-colors"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-8 h-8" />
                  ) : (
                    <Menu className="w-8 h-8" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-16 bg-white z-[100] lg:hidden overflow-y-auto"
            >
              <div className="px-6 py-8 space-y-4">
                <Link
                  to="/"
                  onClick={closeAllMenus}
                  className="block text-2xl font-black text-green-900 uppercase tracking-tight py-4 border-b border-gray-50"
                >
                  Home
                </Link>

                {/* About Us Mobile */}
                <div>
                  <button
                    onClick={() =>
                      setMobileSubmenu(
                        mobileSubmenu === "about" ? null : "about",
                      )
                    }
                    className="w-full flex justify-between items-center text-2xl font-black text-green-900 uppercase tracking-tight py-4 border-b border-gray-50"
                  >
                    About Us
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${mobileSubmenu === "about" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileSubmenu === "about" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-2xl mt-2"
                      >
                        <div className="p-4 space-y-4">
                          <Link
                            to="/what-we-do"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Globe className="w-5 h-5 text-green-600" />
                            <span className="font-bold text-green-900">
                              What we do
                            </span>
                          </Link>
                          <Link
                            to="/leadership"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Users className="w-5 h-5 text-orange-600" />
                            <span className="font-bold text-green-900">
                              Leadership
                            </span>
                          </Link>
                          <Link
                            to="/careers"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Briefcase className="w-5 h-5 text-blue-600" />
                            <span className="font-bold text-green-900">
                              Careers
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Newsroom Mobile */}
                <div>
                  <button
                    onClick={() =>
                      setMobileSubmenu(
                        mobileSubmenu === "newsroom" ? null : "newsroom",
                      )
                    }
                    className="w-full flex justify-between items-center text-2xl font-black text-green-900 uppercase tracking-tight py-4 border-b border-gray-50"
                  >
                    Newsroom
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${mobileSubmenu === "newsroom" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileSubmenu === "newsroom" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-2xl mt-2"
                      >
                        <div className="p-4 space-y-4">
                          <Link
                            to="/newsroom/articles"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Newspaper className="w-5 h-5 text-orange-600" />
                            <span className="font-bold text-green-900">
                              Articles
                            </span>
                          </Link>
                          <Link
                            to="/newsroom/press-statements"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Megaphone className="w-5 h-5 text-red-600" />
                            <span className="font-bold text-green-900">
                              Press Releases
                            </span>
                          </Link>
                          <Link
                            to="/resources/publications"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            <span className="font-bold text-green-900">
                              Publications
                            </span>
                          </Link>
                          <Link
                            to="/newsroom/reports"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <FileText className="w-5 h-5 text-purple-600" />
                            <span className="font-bold text-green-900">
                              Reports
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Media Mobile */}
                <div>
                  <button
                    onClick={() =>
                      setMobileSubmenu(
                        mobileSubmenu === "media" ? null : "media",
                      )
                    }
                    className="w-full flex justify-between items-center text-2xl font-black text-green-900 uppercase tracking-tight py-4 border-b border-gray-50"
                  >
                    Media
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${mobileSubmenu === "media" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileSubmenu === "media" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-2xl mt-2"
                      >
                        <div className="p-4 space-y-4">
                          <Link
                            to="/media/gallery"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Camera className="w-5 h-5 text-orange-600" />
                            <span className="font-bold text-green-900">
                              Photo Gallery
                            </span>
                          </Link>
                          <Link
                            to="/media/videos"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Video className="w-5 h-5 text-blue-500" />
                            <span className="font-bold text-green-900">
                              Videos
                            </span>
                          </Link>
                          <Link
                            to="/media/podcasts"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Mic className="w-5 h-5 text-purple-600" />
                            <span className="font-bold text-green-900">
                              Podcasts
                            </span>
                          </Link>
                          <Link
                            to="/media/social"
                            onClick={closeAllMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                          >
                            <Share2 className="w-5 h-5 text-blue-600" />
                            <span className="font-bold text-green-900">
                              Social Media
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className="block text-2xl font-black text-green-900 uppercase tracking-tight py-4 border-b border-gray-50"
                >
                  Contact Us
                </Link>

                <div className="pt-8 flex justify-start">
                  <Link
                    to="/donate"
                    onClick={closeAllMenus}
                    className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3 rounded-full transition-all duration-300 text-xs uppercase tracking-[0.2em] shadow-lg shadow-red-600/30 active:scale-95"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route
            path="/newsroom/articles"
            element={
              <ContentCategoryPage
                title="All Articles"
                description="In-depth analysis, stories, and feature pieces exploring the intersection of community leadership and social justice across Africa."
                items={newsArticles.filter((a) => a.type === "Article")}
                contentType="news"
                categoryType="Articles"
              />
            }
          />
          <Route
            path="/newsroom/press-statements"
            element={
              <ContentCategoryPage
                title="Press Statements"
                description="Official announcements, media briefings, and VOCAL Africa's position on current events and systemic issues."
                items={newsArticles.filter((a) => a.type === "Press Statement")}
                contentType="news"
                categoryType="Press Statements"
              />
            }
          />
          <Route
            path="/resources/publications"
            element={
              <ContentCategoryPage
                title="Publications"
                description="Strategic guides, research papers, and educational materials designed to empower activists and inform policy makers."
                items={newsArticles.filter((a) => a.type === "Publication")}
                contentType="news"
                categoryType="Publications"
              />
            }
          />

          <Route
            path="/newsroom/reports"
            element={
              <ContentCategoryPage
                title="Impact Reports"
                description="Transparency is core to our mission. Explore our annual findings, financial statements, and thematic impact assessments."
                items={newsArticles.filter((a) => a.type === "Report")}
                contentType="news"
                categoryType="Reports"
              />
            }
          />
          <Route path="/newsroom/all" element={<NewsAndPublicationsPage />} />
          <Route
            path="/media/gallery"
            element={
              <PhotoGalleryPage
                items={mediaContent.filter((m) => m.type === "Photo")}
              />
            }
          />
          <Route
            path="/media/videos"
            element={
              <ContentCategoryPage
                title="Videos & Documentaries"
                description="Watch the stories of change-makers, documentary shorts, and highlights from our summits and workshops."
                items={mediaContent
                  .filter((m) => m.type === "YouTube")
                  .map((m) => ({ ...m, category: "Video" }))}
                contentType="media"
                categoryType="Videos"
              />
            }
          />
          <Route
            path="/media/podcasts"
            element={
              <ContentCategoryPage
                title="VOCAL Podcasts"
                description="Listen to conversations with African leaders, activists, and thinkers shaping the future of the continent."
                items={mediaContent
                  .filter((m) => m.type === "Podcast")
                  .map((m) => ({ ...m, category: "Podcast" }))}
                contentType="media"
                categoryType="Podcasts"
              />
            }
          />
          <Route path="/media/social" element={<SocialMediaHubPage />} />
          <Route path="/content/:type/:id" element={<ContentDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
