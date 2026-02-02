/**
 * HomePage Component
 *
 * The landing page of the application.
 * It serves as the primary gateway for users, featuring:
 * - A Hero section with a call to action.
 * - "What We Do" overview.
 * - Featured stories and latest news/publications.
 * - Multimedia content (Podcasts & Videos).
 * - Integration with various sub-components like MediaPlayerModal and PublicationView.
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Headphones, Play } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";
import { WhatWeDo } from "@/app/components/WhatWeDo";
import { FeaturedStories } from "@/app/components/FeaturedStories";
import { newsArticles, mediaContent } from "@/data/content";
import { PublicationView } from "@/app/components/PublicationView";
import { MediaPlayerModal } from "@/app/components/MediaPlayerModal";
import { ContentItem } from "@/types/content";

export const HomePage = () => {
  const navigate = useNavigate();
  const [selectedPublication, setSelectedPublication] =
    useState<ContentItem | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<ContentItem | null>(null);

  const [activeNewsTab, setActiveNewsTab] = useState("all");
  const [activeMediaTab, setActiveMediaTab] = useState("all");

  const getArticles = (type?: string) => {
    if (!type || type === "all") return newsArticles;
    const typeMap: Record<string, string> = {
      articles: "Article",
      press: "Press Statement",
      reports: "Report",
      publications: "Publication",
    };
    return newsArticles.filter((a) => a.type === typeMap[type]);
  };

  const filteredArticles = getArticles(activeNewsTab);

  const getMedia = (type?: string) => {
    if (!type || type === "all")
      return mediaContent.filter((m) => m.type !== "Photo");
    const typeMap: Record<string, string> = {
      podcasts: "Podcast",
      videos: "YouTube",
    };
    return mediaContent.filter((m) => m.type === typeMap[type]);
  };

  const filteredMedia = getMedia(activeMediaTab);

  if (selectedPublication) {
    return (
      <PublicationView
        item={selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />
    );
  }

  return (
    <>
      <MediaPlayerModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />

      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1543926648-bb1ade2f4dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwbWFyY2glMjBqdXN0aWNlJTIwYWZyaWNhfGVufDF8fHx8MTc2OTc5Mjc2NHww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-white text-sm mb-4 font-bold uppercase tracking-widest opacity-80">
              Voices of Communities, Activists & Leaders of Africa
            </p>
            <h1 className="text-white text-5xl font-bold mb-4 uppercase">
              Change
              <br />
              Begins
              <br />
              With Action.
            </h1>
            <p className="text-white text-lg mb-6 font-bold uppercase tracking-widest opacity-80">
              Empowering civil society to challenge injustice, demand
              accountability, and build a future rooted in human rights and good
              governance.
            </p>
            <Button
              onClick={() => navigate("/what-we-do")}
              className="bg-orange-500 hover:bg-orange-600 font-bold px-10 py-4 h-auto cursor-pointer uppercase tracking-widest shadow-xl"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Featured Stories Section */}
      <FeaturedStories onArticleClick={setSelectedPublication} />

      {/* Latest News & Publications Section */}
      {/* Latest News & Publications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Latest Updates
              </p>
              <h2 className="text-4xl font-bold uppercase text-green-900 tracking-tight leading-none">
                News & Publications
              </h2>
            </div>
            <Button
              variant="link"
              onClick={() => navigate("/newsroom/all")}
              className="text-red-600 hover:text-red-700 cursor-pointer font-bold uppercase tracking-widest text-xs outline-none hidden md:flex"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <Tabs
            defaultValue="all"
            className="mb-12"
            onValueChange={setActiveNewsTab}
          >
            <TabsList className="grid w-full max-w-md grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="press">Press</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.slice(0, 4).map((article) => (
              <Card
                key={article.id}
                onClick={() => setSelectedPublication(article)}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group border-gray-100 rounded-3xl h-full flex flex-col bg-white"
              >
                <div className="h-64 overflow-hidden relative">
                  <ImageWithFallback
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardHeader className="pb-3 flex-grow px-6 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="secondary"
                      className="text-[9px] font-bold uppercase tracking-[0.2em] bg-orange-50 text-orange-600 border-0"
                    >
                      {article.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-2 uppercase group-hover:text-red-600 transition-colors leading-tight tracking-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-3 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <p className="text-sm text-gray-500 line-clamp-3 mb-6 font-medium leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className="text-red-600 p-0 h-auto font-bold uppercase tracking-[0.2em] text-[10px] hover:no-underline group/btn"
                  >
                    {article.type === "Article"
                      ? "Read Full Article"
                      : article.type === "Press Statement"
                        ? "Read Full Statement"
                        : article.type === "Report"
                          ? "Read Full Report"
                          : "Read Full Publication"}{" "}
                    <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts & Videos Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Watch & Listen
              </p>
              <h2 className="text-4xl font-bold uppercase text-green-900 tracking-tight leading-none">
                Podcasts & Videos
              </h2>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="text-red-600 hover:text-red-700 cursor-pointer font-bold uppercase tracking-widest text-xs outline-none hidden md:flex"
                >
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/media/podcasts")}>
                  Podcasts
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/media/videos")}>
                  Videos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs
            defaultValue="all"
            className="mb-8"
            onValueChange={setActiveMediaTab}
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMedia.slice(0, 4).map((media) => (
              <Card
                key={media.id}
                onClick={() => setSelectedMedia(media)}
                className="overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer group border-0 bg-white rounded-[32px] h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={media.imageUrl}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {media.type === "Podcast" ? (
                      <Headphones className="w-12 h-12 text-white" />
                    ) : (
                      <Play className="w-12 h-12 text-white" />
                    )}
                  </div>
                  <Badge className="absolute top-4 left-4 bg-red-600 font-bold uppercase tracking-[0.2em] text-[10px] border-0 rounded-sm">
                    {media.type === "Podcast" ? (
                      <>
                        <Headphones className="w-3 h-3 mr-1" /> Podcast
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 mr-1" /> Video
                      </>
                    )}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="absolute bottom-4 right-4 font-bold text-[10px] bg-white/90 backdrop-blur-sm border-0"
                  >
                    {media.duration}
                  </Badge>
                </div>
                <CardHeader className="pb-3 flex-grow px-6 pt-6">
                  <CardTitle className="text-lg font-bold line-clamp-2 uppercase group-hover:text-red-600 transition-colors leading-tight tracking-tight">
                    {media.title}
                  </CardTitle>
                  <CardDescription className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-2">
                    {media.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 font-medium leading-relaxed">
                    {media.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-red-600 p-0 h-auto font-bold uppercase tracking-[0.2em] text-[10px] group/btn"
                  >
                    {media.type === "Podcast" ? "Listen now" : "Watch now"}{" "}
                    <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
