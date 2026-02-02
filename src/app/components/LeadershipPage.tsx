/**
 * LeadershipPage Component
 *
 * Displays the key figures and leadership team of the organization.
 * Features:
 * - Hero section introducing the team.
 * - Grid of team members with bio, role, and social links.
 * - Call to action for careers/involvement.
 */
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";
import { useNavigate } from "react-router-dom";

export const LeadershipPage = () => {
  const navigate = useNavigate();
  const team = [
    {
      name: "Dr. Sarah Mensah",
      role: "Executive Director",
      bio: "A veteran activist with over 20 years of experience in pan-African advocacy and human rights.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwYWZyaWNhfGVufDF8fHx8MTc2OTgwMTU1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "John Okechukwu",
      role: "Head of Advocacy",
      bio: "Specialist in legal reform and community mobilization across West Africa.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMGFmcmVpY2F8ZW58MXx8fHwxNzY5ODAxNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Fatima Diop",
      role: "Director of Communications",
      bio: "Expert in strategic media relations and digital advocacy for social justice.",
      image:
        "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2OTgwMTU1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "David Kamau",
      role: "Regional Coordinator - East Africa",
      bio: "Driving grassroots leadership and policy engagement in the East African community.",
      image:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODAxNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 font-sans">
      {/* Hero */}
      <section className="bg-white text-green-950 py-32 text-center relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Who We Are
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight leading-tight">
              Leadership <span className="text-gray-300 mx-2">&</span> Team
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Our diverse team of activists, visionaries, and professionals is
              dedicated to driving systemic change and empowering communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="relative mb-6 aspect-[5/6] overflow-hidden rounded-2xl bg-gray-50">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Social Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-950 mb-1 uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-bold uppercase tracking-widest text-[9px] mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-950 mb-6 uppercase tracking-tight">
            Work With Us
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto font-medium">
            Join our mission to defend human rights and empower communities
            across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate("/careers")}
              className="bg-green-900 text-white hover:bg-green-950 font-bold px-8 py-3 h-auto uppercase tracking-wider rounded-xl transition-all"
            >
              Careers
            </Button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 rounded-xl border border-gray-200 text-green-900 font-bold uppercase tracking-wider hover:bg-white hover:border-green-900 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
