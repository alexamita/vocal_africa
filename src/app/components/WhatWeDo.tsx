/**
 * WhatWeDo Component (Section)
 *
 * A reusable component often used on the HomePage or specific landing pages.
 * It provides a high-level summary of the organization's core pillars:
 * - Documentation & Reporting
 * - Civic Education
 * - Advocacy & Campaigns
 * - Community Engagement
 *
 * It also includes a statistics section (ImpactStats).
 */
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Scale,
  FileText,
  ArrowRight,
  Globe,
  BookOpen,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { Button } from "@/app/components/ui/button";

const pillars = [
  {
    title: "Documentation & Reporting",
    description:
      "We document human rights violations and amplify stories that matter.",
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-red-600",
    image:
      "https://images.unsplash.com/photo-1555997147-e4f60b2c12e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaHVtYW4lMjByaWdodHMlMjBhY3RpdmlzbSUyMGRvY3VtZW50YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3Njk3OTY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/what-we-do",
  },
  {
    title: "Civic Education",
    description:
      "We educate communities on governance, democracy, and social justice.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
    image:
      "https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2Nob29sJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmclMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3Njk3OTY3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/what-we-do",
  },
  {
    title: "Advocacy & Campaigns",
    description:
      "We mobilize action to influence policies and challenge injustices.s",
    icon: <Scale className="w-6 h-6 text-white" />,
    color: "bg-green-600",
    image:
      "https://images.unsplash.com/photo-1604212561359-0c3824ac0539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJvdGVzdCUyMGFkdm9jYWN5JTIwanVzdGljZSUyMGNhbXBhaWdufGVufDF8fHx8MTc2OTc5Njc4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/what-we-do",
  },
  {
    title: "Community Engagement",
    description:
      "We work directly with communities to drive change from the ground up.",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1744973055006-a1c7dd30da62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVldGluZyUyMGVuZ2FnZW1lbnQlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njk3OTY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/what-we-do",
  },
];

const stats = [
  {
    value: "200+",
    label: "Cases of extrajudicial killings documented",
    icon: <FileText className="w-6 h-6 text-orange-500" />,
  },
  {
    value: "86+",
    label: "Number of femicide cases documented",
    icon: <Users className="w-6 h-6 text-orange-500" />,
  },
  {
    value: "20+",
    label: "Number of CBOs reached in Kenya",
    icon: <Globe className="w-6 h-6 text-orange-500" />,
  },
  {
    value: "120+",
    label: "Families of victims supported through advocacy and legal aid.",
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
  },
];

export const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">
            What We Do
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 max-w-3xl mx-auto leading-tight">
            Defending Human Rights, Empowering Communities and Demanding Justice
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            VOCAL works at the intersection of activism, advocacy, and civic
            education to create a just future.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative h-[360px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => navigate(pillar.link)}
            >
              {/* Background Image */}
              <ImageWithFallback
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div
                  className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500`}
                >
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                  {pillar.title}
                </h3>

                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="flex justify-center mb-24">
          <Button
            size="lg"
            onClick={() => navigate("/what-we-do")}
            className="bg-green-900 hover:bg-green-950 text-white font-bold px-12 py-4 h-auto uppercase tracking-widest rounded-2xl transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            Explore Our Work <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Stats Section */}
        <ImpactStats />
      </div>
    </section>
  );
};

export const ImpactStats = () => {
  return (
    <div className="bg-[#050505] rounded-[32px] p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5 group-hover:bg-white/10 transition-colors duration-500">
                {stat.icon}
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              {stat.value}
            </div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-[200px] mx-auto">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
