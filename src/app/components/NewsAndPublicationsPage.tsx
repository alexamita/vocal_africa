/**
 * NewsAndPublicationsPage Component
 *
 * A comprehensive list of all news items, reports, and publications.
 * Features:
 * - Filtering by type (Article, Press Statement, Report).
 * - Filtering by topic.
 * - Pagination.
 * - Grid layout of content cards.
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
import { newsArticles } from "@/data/content";

const ITEMS_PER_PAGE = 12;

export const NewsAndPublicationsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState("all");
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

  // Extract unique types and categories
  const types = Array.from(new Set(newsArticles.map((item) => item.type)));
  const topics = Array.from(new Set(newsArticles.map((item) => item.category)));

  // Reset page when filters change

  const filteredItems = newsArticles.filter((item) => {
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesTopic =
      selectedTopic === "all" || item.category === selectedTopic;

    return matchesType && matchesTopic;
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
                Newsroom
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                News & Publications
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Browse all our latest updates, articles, press statements,
                reports, and publications in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Groove Filter Bar */}
            <div className="bg-gray-100 rounded-full p-2 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-200">
              {/* Left: Result Count */}
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-6 whitespace-nowrap hidden md:block">
                Found {filteredItems.length} Result
                {filteredItems.length !== 1 ? "s" : ""}
              </div>

              {/* Center: Resource Type Tabs */}
              <div className="flex items-center gap-1 bg-gray-200/50 rounded-full p-1 overflow-x-auto max-w-full no-scrollbar">
                <button
                  onClick={() => {
                    setSelectedType("all");
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedType === "all"
                      ? "bg-green-900 text-white shadow-sm"
                      : "text-gray-500 hover:text-green-900"
                  }`}
                >
                  All
                </button>
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setCurrentPage(1);
                    }}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                      selectedType === type
                        ? "bg-green-900 text-white shadow-sm"
                        : "text-gray-500 hover:text-green-900"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Right: Topic Filter */}
              <div className="w-full md:w-48 pr-0 md:pr-1">
                <Select
                  value={selectedTopic}
                  onValueChange={(value) => {
                    setSelectedTopic(value);
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
                      to={`/content/${item.type}/${item.id}`}
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
                        <div className="absolute bottom-4 left-4">
                          <Badge
                            variant="secondary"
                            className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white text-gray-800 shadow-sm border-0"
                          >
                            {item.type}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-8 flex flex-col flex-grow">
                        <div className="text-sm text-gray-500 mb-4 font-medium flex items-center justify-between">
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-green-900 mb-4 leading-tight group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-3 mb-8 font-medium leading-relaxed flex-grow">
                          {item.excerpt}
                        </p>
                        <div className="p-0 h-auto text-red-600 font-bold group uppercase tracking-[0.2em] text-[10px] hover:no-underline cursor-pointer flex items-center mt-auto">
                          {item.type === "Article"
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
              {paginatedItems.length === 0 && (
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
