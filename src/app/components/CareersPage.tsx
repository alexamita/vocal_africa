/**
 * CareersPage Component
 *
 * Lists available job opportunities and volunteer roles.
 * Features:
 * - Values/Culture section.
 * - Job listings with location and type.
 * - Volunteer call to action.
 */
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export const CareersPage = () => {
  const jobs = [
    {
      title: "Advocacy Coordinator",
      location: "Nairobi, Kenya",
      type: "Full-time",
      category: "Program Management",
    },
    {
      title: "Digital Communications Officer",
      location: "Nairobi, Kenya",
      type: "Full-time",
      category: "Communications",
    },
    {
      title: "Regional Mobilization Lead",
      location: "Nairobi, Kenya",
      type: "Full-time",
      category: "Field Operations",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 font-sans">
      {/* Hero */}
      <section className="bg-white text-green-950 py-32 text-center relative border-b border-gray-100 overflow-hidden">
        {/* Minimalist Background Elements */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#064e3b 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-green-900/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Careers
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight leading-tight">
              Work with <span className="text-gray-300 mx-2">/</span> VOCAL
              Africa
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Join a team of dedicated professionals and activists working to
              build a more accountable and just Africa. Your skills can help us
              make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-[0.2em] mb-4">
              Our Culture
            </h2>
            <h3 className="text-3xl font-bold text-green-950 uppercase tracking-tight">
              Why Join Us?
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Impact Driven",
                desc: "Work on projects that directly improve lives and challenge systemic injustice.",
              },
              {
                title: "Pan-African Culture",
                desc: "Join a diverse team representing over 15 African nations.",
              },
              {
                title: "Growth Mindset",
                desc: "We invest in our people through continuous learning and leadership development.",
              },
            ].map((v, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                  <span className="text-green-900 group-hover:text-orange-600 text-lg font-bold">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase text-green-950 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-green-950 mb-2 uppercase tracking-tight">
                Open Opportunities
              </h2>
              <p className="text-gray-500 font-medium">
                Explore current openings at VOCAL Africa.
              </p>
            </div>
            <div className="px-3 py-1 bg-white border border-gray-200 rounded-full">
              <span className="text-[10px] font-black text-green-900 uppercase tracking-widest">
                3 ACTIVE ROLES
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-orange-200 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-2 py-0.5 bg-orange-50 rounded">
                          {job.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-green-950 uppercase tracking-tight mb-4 group-hover:text-orange-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-6">
                        <span className="flex items-center text-sm text-gray-500 font-medium gap-2">
                          <MapPin className="w-4 h-4 text-gray-300" />{" "}
                          {job.location}
                        </span>
                        <span className="flex items-center text-sm text-gray-500 font-medium gap-2">
                          <Clock className="w-4 h-4 text-gray-300" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-gray-200 text-green-900 hover:border-green-900 hover:bg-white group font-bold px-8 py-3 h-auto uppercase tracking-wider rounded-xl"
                    >
                      View Role{" "}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white border border-gray-100 rounded-[32px] p-12 md:p-20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-50"></div>

            <div className="relative z-10">
              <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">
                Get Involved
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-8 uppercase tracking-tight leading-tight">
                Become a <span className="text-orange-600">Volunteer</span>
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed text-lg font-medium max-w-2xl mx-auto">
                Not looking for a full-time role? You can still contribute your
                time and expertise to our campaigns and community programs as a
                VOCAL Volunteer.
              </p>
              <Button
                size="lg"
                className="bg-green-900 hover:bg-green-950 text-white font-bold px-12 py-4 h-auto uppercase tracking-widest rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
