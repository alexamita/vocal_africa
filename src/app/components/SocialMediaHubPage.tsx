/**
 * SocialMediaHubPage Component
 *
 * Aggregates social media feeds (Twitter, Instagram, LinkedIn, Facebook).
 * Allows users to view latest posts without leaving the site.
 * *Note: This currently uses mock data for demonstration.*
 */
import { useState } from "react";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Repeat,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialPost {
  id: number;
  handle: string;
  date: string;
  content: string;
  imageUrl?: string;
  stats: {
    likes: string;
    comments: string;
    shares?: string;
  };
}

interface SocialFeeds {
  [key: string]: SocialPost[];
}

const socialFeeds: SocialFeeds = {
  twitter: [
    {
      id: 1,
      handle: "@vocalafrica",
      date: "2h ago",
      content:
        "Justice delayed is justice denied. Today we stand with the families of #MlolongoFour in their quest for accountability. We will not stop until the truth is revealed. 🌍✊ #HumanRights #Accountability",
      stats: { likes: "1.2k", shares: "450", comments: "89" },
    },
    {
      id: 2,
      handle: "@vocalafrica",
      date: "5h ago",
      content:
        "The shrinking civic space in East Africa is a concern for all. Join our upcoming webinar on 'Decriminalising Dissent' this Friday. Link in bio! 💻 #CivicSpace #Webinar",
      stats: { likes: "850", shares: "210", comments: "45" },
    },
    {
      id: 3,
      handle: "@vocalafrica",
      date: "Jan 30",
      content:
        "Thank you to everyone who joined our Regional Summit on Civic Space in Nairobi. Together, we are stronger. Check out the highlights on our YouTube channel. 🎥✨ #RegionalSummit2026",
      stats: { likes: "2.1k", shares: "720", comments: "120" },
    },
  ],
  instagram: [
    {
      id: 1,
      handle: "vocalafrica",
      date: "1d ago",
      imageUrl:
        "https://images.unsplash.com/photo-1655102718560-19dd4971f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      content:
        "Capturing moments of resilience and unity at the Nairobi Civic Space Summit. The energy in the room was palpable as leaders shared their visions for a more just Africa. ❤️📍 Nairobi, Kenya",
      stats: { likes: "4.5k", comments: "230" },
    },
    {
      id: 2,
      handle: "vocalafrica",
      date: "3d ago",
      imageUrl:
        "https://images.unsplash.com/photo-1759521528494-fd6ceb6049e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      content:
        "Community outreach in action. Our teams are visiting rural districts to empower citizens with knowledge of their rights. Knowledge is power! 📖✨",
      stats: { likes: "3.2k", comments: "145" },
    },
  ],
  linkedin: [
    {
      id: 1,
      handle: "VOCAL Africa",
      date: "2d ago",
      content:
        "We are proud to release our Annual Impact Report for 2025. Over the past year, we've supported 500+ local organizations and advocated for critical legislative reforms. Read the full report on our website. #ImpactReport #SocialImpact #NonProfit",
      stats: { likes: "1.8k", comments: "56", shares: "12" },
    },
  ],
  facebook: [
    {
      id: 1,
      handle: "VOCAL Africa Official",
      date: "1w ago",
      content:
        "Join our community group to stay connected with grassroots activists across the continent. Share your stories and find resources to help your advocacy work.",
      stats: { likes: "5.6k", comments: "890", shares: "1.2k" },
    },
  ],
};

const PlatformIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "twitter":
      return <Twitter className="w-5 h-5 text-[#1DA1F2]" />;
    case "instagram":
      return <Instagram className="w-5 h-5 text-[#E4405F]" />;
    case "linkedin":
      return <Linkedin className="w-5 h-5 text-[#0A66C2]" />;
    case "facebook":
      return <Facebook className="w-5 h-5 text-[#1877F2]" />;
    default:
      return null;
  }
};

export const SocialMediaHubPage = () => {
  const [activeTab, setActiveTab] = useState("twitter");

  return (
    <div className="min-h-screen bg-white pt-16 font-sans">
      {/* Header */}
      <section className="bg-white pt-2 pb-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-0">
            <div className="max-w-2xl">
              <Badge
                variant="outline"
                className="text-red-600 border-red-200 mb-1 px-3 py-1 uppercase tracking-widest font-bold"
              >
                Media Center
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                Social Media Hub
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Stay connected with our real-time updates and join the
                conversation across our social platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs / Platform Switcher */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Groove Filter Bar Style Tabs */}
          <div className="bg-gray-100 rounded-full p-2 mb-12 flex items-center justify-between border border-gray-200 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1 bg-gray-200/50 rounded-full p-1 min-w-full md:min-w-0">
              {Object.keys(socialFeeds).map((platform) => (
                <button
                  key={platform}
                  onClick={() => setActiveTab(platform)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeTab === platform
                      ? "bg-green-900 text-white shadow-sm"
                      : "text-gray-500 hover:text-green-900"
                  }`}
                >
                  <PlatformIcon type={platform} />
                  {platform}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2 pr-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Connect: @vocalafrica
              </span>
            </div>
          </div>

          {/* Feed Content */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {socialFeeds[activeTab as keyof typeof socialFeeds].map(
                  (post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden border-gray-100 hover:border-green-900/10 hover:shadow-xl transition-all duration-500 rounded-[32px]"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center p-0.5`}
                            >
                              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden">
                                <PlatformIcon type={activeTab} />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-extrabold text-green-900 mb-0.5">
                                {post.handle}
                              </h4>
                              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                                {post.date}
                              </span>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-green-900 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>

                        {activeTab === "instagram" && post.imageUrl && (
                          <div className="relative aspect-square md:aspect-video mb-6 rounded-2xl overflow-hidden border border-gray-100">
                            <img
                              src={post.imageUrl}
                              alt="Social feed"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                          {post.content}
                        </p>

                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-8">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group">
                              <Heart className="w-5 h-5 group-hover:fill-current" />
                              <span className="text-xs font-bold">
                                {post.stats.likes}
                              </span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-green-900 transition-colors">
                              <MessageCircle className="w-5 h-5" />
                              <span className="text-xs font-bold">
                                {post.stats.comments}
                              </span>
                            </button>
                            {post.stats.shares && (
                              <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                                {activeTab === "twitter" ? (
                                  <Repeat className="w-5 h-5" />
                                ) : (
                                  <Share2 className="w-5 h-5" />
                                )}
                                <span className="text-xs font-bold">
                                  {post.stats.shares}
                                </span>
                              </button>
                            )}
                          </div>
                          <button className="text-xs font-extrabold text-green-900 uppercase tracking-[0.2em] hover:text-red-600 transition-colors">
                            View Original
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
