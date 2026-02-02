/**
 * FeaturedStories Component (Section)
 *
 * Displays a highlighted "Hero" story and a few smaller side stories.
 * Used on the HomePage to showcase important updates or campaigns.
 */
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";
import { newsArticles } from "@/data/content";
import { ContentItem } from "@/types/content";

export const FeaturedStories = ({
  onArticleClick,
}: {
  onArticleClick: (article: ContentItem) => void;
}) => {
  // Select specific articles to feature (e.g., Impact Report, Policy Change, Youth Activism)
  const heroStory = newsArticles.find((a) => a.id === 3) || newsArticles[0];
  const sideStories = newsArticles
    .filter((a) => a.id !== heroStory.id)
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-4 uppercase tracking-tight">
              Featured Stories
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl text-lg">
              Highlighting the most critical movements, reports, and voices
              shaping our future.
            </p>
          </div>
          <Link
            to="/newsroom/all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden md:flex text-orange-600 hover:text-orange-700 font-bold uppercase tracking-widest text-sm items-center"
          >
            View Newsroom <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Hero Story */}
          <div
            className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl h-[500px] lg:h-[600px]"
            onClick={() => onArticleClick(heroStory)}
          >
            <ImageWithFallback
              src={heroStory.imageUrl}
              alt={heroStory.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0 font-bold uppercase tracking-widest text-xs px-3 py-1">
                  Featured
                </Badge>
                <Badge
                  variant="outline"
                  className="text-white border-white/30 font-bold uppercase tracking-widest text-xs px-3 py-1 backdrop-blur-sm"
                >
                  {heroStory.category}
                </Badge>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight uppercase group-hover:text-orange-400 transition-colors">
                {heroStory.title}
              </h3>
              <p className="text-gray-200 text-lg mb-6 line-clamp-3 max-w-xl leading-relaxed">
                {heroStory.excerpt}
              </p>
              <div className="flex items-center text-white/80 text-xs font-bold uppercase tracking-widest">
                <Calendar className="w-4 h-4 mr-2" /> {heroStory.date}
              </div>
            </div>
          </div>

          {/* Side Stories List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideStories.map((story) => (
              <div
                key={story.id}
                className="flex gap-4 group cursor-pointer bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex-1"
                onClick={() => onArticleClick(story)}
              >
                <div className="w-32 h-32 md:w-40 md:h-full shrink-0 rounded-xl overflow-hidden relative">
                  <ImageWithFallback
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Badge
                    variant="secondary"
                    className="w-fit mb-2 text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-600 border-0"
                  >
                    {story.category}
                  </Badge>
                  <h4 className="text-lg font-bold text-green-950 leading-tight mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 uppercase">
                    {story.title}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    <Calendar className="w-3 h-3 mr-1.5" /> {story.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/newsroom/all"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-orange-600 hover:text-orange-700 font-bold uppercase tracking-widest text-sm inline-flex items-center"
          >
            View Newsroom <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
