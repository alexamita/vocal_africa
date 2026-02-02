/**
 * WhatWeDoPage Component
 *
 * The dedicated page explaining the organization's mission and activities in detail.
 * Features:
 * - Detailed breakdown of the 4 core pillars with specific sub-activities.
 * - Vision and Mission statement.
 * - Impact statistics.
 * - Help CTA for further engagement.
 */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  FileText,
  GraduationCap,
  Scale,
  Users,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";
import { ImpactStats } from "@/app/components/WhatWeDo";
import { HelpCTA } from "@/app/components/HelpCTA";

export const WhatWeDoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-20 font-sans">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-32 overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579133311477-9121405c78dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2Nob29sJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmclMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3Njk3OTY3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center"
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
              Our Approach
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 uppercase leading-[0.9] tracking-tighter">
              Driving <br />
              <span className="text-orange-500">Systemic Change</span>
            </h1>
            <p className="text-xl text-green-100/80 leading-relaxed max-w-xl">
              At VOCAL Africa, we believe that change begins with action.
              Whether you are an activist, a student, a community leader, or
              simply someone who believes in justice, you have a role to play.
              Together, we shall build a society that upholds human rights,
              demands accountability and empowers communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8 leading-tight">
                VOCAL Africa (Voices of Communities, Activists, and Leaders of
                Africa) is a human rights organization dedicated to advocating
                for social justice, amplifying marginalized voices and holding
                power to account.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed italic">
                We work across Africa to support youth-led movements, document
                human rights violations, and provide civic education on
                governance, democracy and inclusivity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-6">
                Our Vision
              </h2>
              <h3 className="text-4xl font-bold text-green-900 mb-8 uppercase leading-tight tracking-tight">
                A Future Free from <br />
                <span className="text-red-600">Oppression & Fear</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We envision a future where every individual—regardless of
                  their background—can live free from oppression, fear and
                  injustice.
                </p>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <p className="font-bold text-green-900 uppercase text-sm tracking-widest mb-4">
                    A future where:
                  </p>
                  <p className="text-gray-500 italic">
                    "Communities are empowered with knowledge and resources to
                    demand accountability."
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZW1wb3dlcm1lbnQlMjBzdW1taXR8ZW58MXx8fHwxNzY5Nzk2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vision for empowerment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Pillars Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-green-900 mb-6 uppercase tracking-widest">
              Our Core Pillars
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We focus our efforts on four strategic areas to create lasting,
              systemic change across the continent.
            </p>
          </div>

          <div className="space-y-32">
            {/* Pillar 1: Documentation & Reporting */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
                >
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1555997147-e4f60b2c12e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaHVtYW4lMjByaWdodHMlMjBhY3RpdmlzbSUyMGRvY3VtZW50YXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3Njk3OTY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Documentation & Reporting"
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg text-red-600">
                    <FileText className="w-10 h-10" />
                  </div>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                    Documentation & Reporting
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We document human rights violations and amplify marginalized
                    voices. We believe that accurate data is the foundation of
                    justice and that every story matters.
                  </p>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-orange-100 rounded-full text-orange-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Human Rights Monitoring
                        </h4>
                        <p className="text-sm text-gray-500">
                          Systematic tracking and verifying of violations.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-orange-100 rounded-full text-orange-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Community Archiving
                        </h4>
                        <p className="text-sm text-gray-500">
                          Preserving oral histories and local narratives.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-orange-100 rounded-full text-orange-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Evidence-Based Reporting
                        </h4>
                        <p className="text-sm text-gray-500">
                          Producing reports that drive policy change.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Pillar 2: Civic Education */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
                >
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2Nob29sJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmclMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3Njk3OTY3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Civic Education"
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg text-orange-500">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                    Civic Education
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We provide civic education on governance, democracy, and
                    inclusivity. Empowering citizens with the knowledge of their
                    rights is the catalyst for accountability.
                  </p>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-green-100 rounded-full text-green-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Know Your Rights
                        </h4>
                        <p className="text-sm text-gray-500">
                          Workshops demystifying legal and constitutional
                          rights.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-green-100 rounded-full text-green-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Voter Education
                        </h4>
                        <p className="text-sm text-gray-500">
                          Campaigns to encourage informed political
                          participation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-green-100 rounded-full text-green-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Democratic Training
                        </h4>
                        <p className="text-sm text-gray-500">
                          Building capacity for community leadership.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Pillar 3: Advocacy & Campaigns */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
                >
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1604212561359-0c3824ac0539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJvdGVzdCUyMGFkdm9jYWN5JTIwanVzdGljZSUyMGNhbXBhaWdufGVufDF8fHx8MTc2OTc5Njc4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Advocacy & Campaigns"
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg text-green-600">
                    <Scale className="w-10 h-10" />
                  </div>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                    Advocacy & Campaigns
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We must all speak harshly against state violence on its
                    citizens and targeting of Human Rights Defenders. We
                    mobilize action to influence policies and challenge
                    injustices.
                  </p>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-orange-100 rounded-full text-orange-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Legislative Lobbying
                        </h4>
                        <p className="text-sm text-gray-500">
                          Engaging lawmakers to enact pro-human rights policies.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-orange-100 rounded-full text-orange-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Public Campaigns
                        </h4>
                        <p className="text-sm text-gray-500">
                          Mobilizing public opinion for social justice causes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-orange-100 rounded-full text-orange-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Regional Advocacy
                        </h4>
                        <p className="text-sm text-gray-500">
                          Collaborating across borders for continental impact.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Pillar 4: Community Engagement */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
                >
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1744973055006-a1c7dd30da62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVldGluZyUyMGVuZ2FnZW1lbnQlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njk3OTY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community Engagement"
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg text-red-600">
                    <Users className="w-10 h-10" />
                  </div>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                    Community Engagement
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We support youth-led movements and build strong, resilient
                    networks of grassroots activists. We work with communities
                    to drive change from the ground up.
                  </p>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-green-100 rounded-full text-green-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Grassroots Mobilization
                        </h4>
                        <p className="text-sm text-gray-500">
                          Connecting local activists for collective power.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-green-100 rounded-full text-green-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Leadership Development
                        </h4>
                        <p className="text-sm text-gray-500">
                          Training the next generation of human rights
                          defenders.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-1 bg-green-100 rounded-full text-green-600 mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">
                          Sustainable Initiatives
                        </h4>
                        <p className="text-sm text-gray-500">
                          Supporting community-led development projects.
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Summary Section */}
      <section className="py-24 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-8">
                Our Collective Expertise
              </h2>
              <p className="text-2xl md:text-3xl font-bold mb-12 leading-tight uppercase tracking-tight">
                Our team is made up of dedicated human rights defenders,
                activists, legal experts, community organizers, and media
                professionals who are committed to advocating for justice,
                accountability, and social change.
              </p>
              <div className="w-24 h-1 bg-white/20 mx-auto mb-12"></div>
              <p className="text-xl text-green-100/80 leading-relaxed max-w-3xl mx-auto italic">
                We believe in the power of grassroots movements and work
                tirelessly to amplify voices, document injustices and empower
                communities across Africa.
              </p>
              <div className="mt-16">
                <Button
                  onClick={() => navigate("/leadership")}
                  className="bg-white text-green-900 hover:bg-orange-500 hover:text-white font-bold px-10 py-4 h-auto uppercase tracking-widest rounded-xl transition-all shadow-xl"
                >
                  Meet Our Leadership
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ImpactStats />
        </div>
      </div>

      <HelpCTA />

      {/* Additional Context Sections could go here if needed, but for 'matching aesthetic' and 'redesign', reusing the main component is the strongest move for consistency. */}
    </div>
  );
};
