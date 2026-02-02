/**
 * ContentCategoryPage Component
 *
 * A reusable page layout for displaying a list of content items (news, reports, videos, etc.).
 * It is used for various routes like "All Articles", "Press Statements", "Videos", etc.
 * Features:
 * - Topic filtering.
 * - Pagination.
 * - Grid display of content cards.
 * - Adapts to different content types (News vs Media).
 */
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";
import { motion } from "framer-motion";
import { ContentItem } from "@/types/content";

interface ContentCategoryPageProps {
  title: string;
  description: string;
  items: ContentItem[];
  contentType: "news" | "media";
  categoryType: string;
}

const ITEMS_PER_PAGE = 12;

export const ContentCategoryPage = ({
  title,
  description,
  items,
  contentType,
  categoryType,
}: ContentCategoryPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTopic, setSelectedTopic] = useState("all");

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const setCurrentPage = (page: number) => {
    setSearchParams(
      (prev) => {
        prev.set("page", page.toString());
        return prev;
      },
      { replace: true },
    );
  };

  const topics = Array.from(
    new Set(items.map((item) => item.category).filter(Boolean) as string[]),
  );

  const filteredItems = items.filter((item) => {
    return selectedTopic === "all" || item.category === selectedTopic;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

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
                {categoryType}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                {title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Groove Filter Bar */}
            <div className="bg-gray-100 rounded-full p-2 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-200">
              {/* Left: Result Count */}
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-6 whitespace-nowrap">
                Found {filteredItems.length} Result
                {filteredItems.length !== 1 ? "s" : ""}
              </div>

              {/* Right: Topic Filter */}
              <div className="w-full md:w-48 pr-0 md:pr-1">
                <Select
                  value={selectedTopic}
                  onValueChange={(val) => {
                    setSelectedTopic(val);
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="bg-white border-0 h-10 font-bold rounded-full shadow-sm text-xs uppercase tracking-wider text-gray-600 focus:ring-0 px-4">
                    <SelectValue placeholder="Topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Topics</SelectItem>
                    {topics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-gray-100 hover:border-green-900/20 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col rounded-[32px] cursor-pointer">
                    <Link
                      to={`/content/${item.type || categoryType}/${item.id}`}
                      className="h-full flex flex-col"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-colors duration-500" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-green-900 font-bold backdrop-blur-sm shadow-sm">
                            {item.category}
                          </Badge>
                        </div>
                        {contentType === "news" && item.type && (
                          <div className="absolute bottom-4 left-4">
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white text-gray-800 shadow-sm border-0"
                            >
                              {item.type}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-8 flex flex-col flex-grow">
                        <div className="text-sm text-gray-500 mb-4 font-medium flex items-center justify-between">
                          <span>{item.date}</span>
                          {item.duration && <span>{item.duration}</span>}
                        </div>
                        <h3 className="text-xl font-bold text-green-900 mb-4 leading-tight group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-3 mb-8 font-medium leading-relaxed flex-grow">
                          {item.excerpt || item.description}
                        </p>
                        <div className="p-0 h-auto text-red-600 font-bold group uppercase tracking-[0.2em] text-[10px] hover:no-underline cursor-pointer flex items-center mt-auto">
                          {contentType === "media"
                            ? item.type === "Podcast"
                              ? "Listen Now"
                              : "Watch Now"
                            : item.type === "Article"
                              ? "Read Full Article"
                              : item.type === "Press Statement"
                                ? "Read Full Statement"
                                : item.type === "Report"
                                  ? "Read Full Report"
                                  : "Read Full Publication"}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
              {filteredItems.length === 0 && (
                <div className="col-span-full text-center py-20 text-gray-500">
                  No articles found matching your search.
                </div>
              )}
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    className={
                      currentPage === totalPages || totalPages === 0
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </div>
  );
};
