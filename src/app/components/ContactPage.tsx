/**
 * ContactPage Component
 *
 * Provides a way for users to get in touch with the organization.
 * Features:
 * - Contact information display (address, email, phone, working hours).
 * - "Send an inquiry" form connected to a backend or email service.
 * - Social media links.
 * - Location map (visual representation).
 */
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Navigation,
  ExternalLink,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20 font-sans selection:bg-green-100">
      {/* Header */}
      <section className="bg-green-900 text-white py-32 overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500 transform skew-x-12 translate-x-1/3 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-[0.3em] mb-8 rounded-sm">
              Connect With Us
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 uppercase leading-[0.9] tracking-tighter">
              Let's Start a <br />
              <span className="text-orange-500">Conversation</span>
            </h1>
            <p className="text-xl text-green-100/80 leading-relaxed max-w-xl">
              Whether you're looking to partner, advocate, or simply learn more
              about our mission, our team is here to engage with you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-green-900 to-transparent opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-12 pt-8 md:pt-16">
              <div>
                <h2 className="text-sm font-bold text-orange-500 mb-4 uppercase tracking-[0.3em]">
                  Our Details
                </h2>
                <h3 className="text-4xl font-bold text-green-900 uppercase leading-none mb-8">
                  Get in touch
                </h3>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-green-900 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Office Location
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      Nairobi, Kenya
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-green-900 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      info@vocalafrica.org
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-green-900 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-orange-600 transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Website
                    </p>
                    <p className="text-lg font-bold text-gray-800 underline decoration-orange-200 underline-offset-4">
                      www.vocalafrica.org
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-green-900 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-orange-600 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      +254 58555444
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="group flex flex-col gap-6 p-8 rounded-2xl bg-orange-50 border border-orange-100 shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-green-900 transition-colors">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">
                        Working Hours
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        Mon – Fri: 8:00am – 5:00pm
                      </p>
                      <p className="text-xs text-gray-500">
                        (Africa/Nairobi time)
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-orange-200/50 flex gap-4 items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      For urgent matters outside office hours, please use our
                      hotline or submit a case through the report form.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-2xl border-0 bg-white overflow-hidden rounded-[40px]">
                  <CardContent className="p-8 md:p-16">
                    <div className="mb-12">
                      <h3 className="text-sm font-bold text-orange-500 mb-4 uppercase tracking-[0.3em]">
                        Direct Message
                      </h3>
                      <h2 className="text-4xl font-bold text-green-900 uppercase mb-4">
                        Send an inquiry
                      </h2>
                      <p className="text-gray-500">
                        Fill out the form below and our advocacy team will get
                        back to you within 24 hours.
                      </p>
                    </div>

                    <form className="space-y-12">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3 group">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-green-900 transition-colors">
                            Full Name
                          </label>
                          <Input
                            placeholder="John Doe"
                            className="h-14 bg-gray-50 border-gray-100 focus:bg-white focus:border-green-900 focus:ring-4 focus:ring-green-900/5 transition-all rounded-xl font-bold"
                          />
                        </div>
                        <div className="space-y-3 group">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-green-900 transition-colors">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="h-14 bg-gray-50 border-gray-100 focus:bg-white focus:border-green-900 focus:ring-4 focus:ring-green-900/5 transition-all rounded-xl font-bold"
                          />
                        </div>
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-green-900 transition-colors">
                          Subject
                        </label>
                        <Input
                          placeholder="How can we help?"
                          className="h-14 bg-gray-50 border-gray-100 focus:bg-white focus:border-green-900 focus:ring-4 focus:ring-green-900/5 transition-all rounded-xl font-bold"
                        />
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-green-900 transition-colors">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-[250px] bg-gray-50 border-gray-100 focus:bg-white focus:border-green-900 focus:ring-4 focus:ring-green-900/5 transition-all rounded-xl font-bold p-6"
                        />
                      </div>
                      <div className="pt-8">
                        <Button className="w-full bg-red-600 hover:bg-green-900 text-white font-bold px-12 py-6 h-auto uppercase tracking-[0.2em] rounded-xl shadow-xl hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group">
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="pb-24 pt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xs font-bold text-gray-400 mb-12 uppercase tracking-[0.4em]">
              Message us on social media
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                {
                  icon: Twitter,
                  label: "X / Twitter",
                  href: "https://twitter.com/vocalafrica",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com/vocalafrica",
                },
                {
                  icon: Facebook,
                  label: "Facebook",
                  href: "https://facebook.com/vocalafrica",
                },
                {
                  icon: MessageCircle,
                  label: "TikTok",
                  href: "https://tiktok.com/@vocalafrica",
                },
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-20 h-20 bg-white rounded-[32px] flex items-center justify-center text-gray-900 border border-gray-100 shadow-sm group-hover:scale-110 group-hover:bg-green-900 group-hover:text-white group-hover:shadow-2xl transition-all duration-500">
                    <social.icon className="w-8 h-8" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-green-900 transition-colors">
                    {social.label}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-orange-500 mb-4 uppercase tracking-[0.3em]">
                Our Headquarters
              </h2>
              <h3 className="text-5xl font-bold text-green-900 mb-8 uppercase leading-tight">
                Visit us in <br />
                <span className="text-red-600 underline decoration-4 underline-offset-8">
                  Nairobi
                </span>
              </h3>
              <p className="text-gray-600 text-xl mb-12 leading-relaxed font-medium">
                Our main office serves as the strategic nerve center for VOCAL
                Africa's continental operations, coordinating impact across all
                our regional hubs.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-lg mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                    Office Address
                  </h4>
                  <p className="text-xl font-bold text-gray-800 leading-tight">
                    736 Tabere Cres,
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-lg mb-4">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                    Nearest Landmark
                  </h4>
                  <p className="text-xl font-bold text-gray-800 leading-tight">
                    Lavington Area,
                    <br />
                    Strategic Hub
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=736+Tabere+Cres,+Nairobi`,
                      "_blank",
                    )
                  }
                  className="bg-green-900 hover:bg-orange-500 text-white font-bold px-10 py-4 h-auto uppercase tracking-widest shadow-2xl hover:shadow-orange-500/30 transition-all flex items-center gap-3 cursor-pointer group rounded-xl"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-green-600/10 rounded-[60px] transform rotate-3"></div>
              <div className="relative rounded-[50px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] aspect-[4/3] border-[12px] border-white group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1741991110666-88115e724741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWlyb2JpJTIwY2l0eSUyMG1hcCUyMG1pbmltYWwlMjBzYXRlbGxpdGUlMjB2aWV3fGVufDF8fHx8MTc2OTgwNzc0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nairobi Location Map"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-900/60 via-transparent to-transparent"></div>

                {/* Visual Pin on the Map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-10 bg-red-600/30 rounded-full animate-ping"></div>
                    <div className="absolute -inset-6 bg-red-600/20 rounded-full animate-pulse"></div>
                    <div className="bg-red-600 text-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(220,38,38,0.5)] relative z-10 border-4 border-white">
                      <MapPin className="w-10 h-10" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white/40 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">
                        Primary Headquarters
                      </p>
                      <p className="text-xl font-bold text-green-900 uppercase tracking-tighter">
                        736 Tabere Cres, Nairobi
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-900">
                      <Navigation className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
