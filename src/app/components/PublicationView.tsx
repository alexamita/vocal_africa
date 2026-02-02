/**
 * PublicationView Component
 *
 * The detail view for a specific publication or article.
 * Features:
 * - Full article reading experience.
 * - PDF download and Print functionality.
 * - Social sharing options.
 * - "Related Articles" section at the bottom.
 */
import { useLayoutEffect } from "react";
import {
  ChevronLeft,
  Download,
  Share2,
  Printer,
  Calendar,
  User,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { newsArticles } from "@/data/content";
import { ContentItem } from "@/types/content";

interface PublicationViewProps {
  item: ContentItem;
  onClose: () => void;
  categoryTitle?: string;
}

export const PublicationView = ({
  item,
  onClose,
  categoryTitle,
}: PublicationViewProps) => {
  // Use useLayoutEffect to ensure scroll reset happens before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [item.id]); // Re-run if item changes while component is mounted

  const handleDownload = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
      loading: "Preparing publication for download...",
      success: () => {
        const link = document.createElement("a");
        link.href = "#";
        link.setAttribute(
          "download",
          `${item.title.toLowerCase().replace(/\s+/g, "-")}.pdf`,
        );
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return `${item.type || "Publication"} has been downloaded successfully.`;
      },
      error: "Failed to generate PDF. Please try again.",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.excerpt || item.description,
          url: window.location.href,
        });
        toast.success("Shared successfully");
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast.error("Could not share content");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard", {
          description: "You can now share it manually.",
          icon: <Check className="w-4 h-4 text-green-500" />,
        });
      } catch {
        toast.error("Failed to copy link");
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Find related articles (same category, different ID)
  const relatedArticles = newsArticles
    .filter((a) => a.category === item.category && a.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-20 font-sans animate-in fade-in duration-500 print:pt-0">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          nav, footer, .no-print, button, .sticky { display: none !important; }
          .print-content { margin-top: 0 !important; padding: 0 !important; }
          article { max-width: 100% !important; margin: 0 !important; }
          .aspect-video { aspect-ratio: auto !important; height: 300px !important; }
          body { background: white !important; }
          .min-h-screen { min-height: auto !important; padding-top: 0 !important; }
        }
      `,
        }}
      />

      {/* Top Bar Navigation */}
      <div className="bg-gray-50 border-b border-gray-100 sticky top-16 z-40 no-print">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-green-900 font-bold uppercase tracking-widest text-[10px] hover:text-red-600 transition-colors cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
            Back {categoryTitle ? `to ${categoryTitle}` : "to Home"}
          </button>
          <div className="flex items-center gap-4">
            {item.type !== "Photo" && item.type !== "Image" && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="text-gray-500 hover:text-green-900 cursor-pointer text-xs h-8"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" /> PDF
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrint}
              className="text-gray-500 hover:text-green-900 cursor-pointer hidden md:flex text-xs h-8"
            >
              <Printer className="w-3.5 h-3.5 mr-1.5" /> Print
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:flex lg:gap-16">
        {/* Sticky Sidebar Sharing */}
        <div className="hidden lg:block w-12 shrink-0">
          <div className="sticky top-40 flex flex-col items-center gap-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 mb-4">
              Share
            </p>
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all group">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-100 hover:bg-blue-50 transition-all group">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-800 hover:border-blue-100 hover:bg-blue-50 transition-all group">
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-green-900 hover:border-green-100 hover:bg-green-50 transition-all group"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow max-w-4xl mx-auto">
          <article className="print-content">
            <header className="mb-12">
              <div className="mb-6">
                <Badge className="bg-red-600 text-white font-bold uppercase tracking-[0.2em] rounded-sm py-1 mb-6">
                  {item.type || "Publication"}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black text-green-900 uppercase leading-[0.9] tracking-tighter">
                  {item.title}
                </h1>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-6 py-4 border-y border-gray-100 mb-12">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-900 text-white rounded-full flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Written by
                      </p>
                      <p className="text-xs font-bold text-gray-900 uppercase">
                        VOCAL Africa Team
                      </p>
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-gray-100"></div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </div>
                </div>

                <div className="lg:hidden flex items-center gap-3">
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-400 hover:text-green-900"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-video rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl no-print mb-12">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Lead Summary */}
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-green-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                Summary
                <div className="h-px grow bg-gray-100"></div>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                {item.excerpt || item.description}
              </p>
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-700 font-serif font-medium leading-relaxed
                prose-headings:font-sans prose-headings:text-green-900 prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tighter
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-l-8 prose-h2:border-red-600 prose-h2:pl-8
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                prose-p:mb-8 prose-strong:text-green-900 prose-strong:font-black
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
                prose-li:mb-2
                prose-a:text-red-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{
                __html:
                  item.content ||
                  `<p>Full content for this publication is currently being digitized and will be available shortly. VOCAL Africa is committed to providing comprehensive research and advocacy materials to our community.</p>`,
              }}
            />

            {/* Custom Interactive Elements (IJM Style) */}
            <div className="my-16 p-8 md:p-12 bg-green-900 rounded-[32px] md:rounded-[48px] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-4">
                  Passionate about this issue?
                </h3>
                <p className="text-green-100/70 text-lg mb-8 max-w-xl">
                  Your support helps us continue our investigative work and
                  advocacy across the continent. Join us in making a difference.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="block">
                    <Button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold h-auto py-4 px-8 rounded-xl uppercase tracking-widest transition-all border-2 border-red-600 cursor-pointer">
                      Involve Yourself
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-900 font-bold h-auto py-4 px-8 rounded-xl uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Share This Story
                  </Button>
                </div>
              </div>
            </div>

            <footer className="mt-20 pt-10 border-t border-gray-100 no-print">
              <div className="flex flex-col items-center text-center">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-12">
                  End of Publication
                </h4>

                {relatedArticles.length > 0 && (
                  <div className="w-full mb-20">
                    <h3 className="text-2xl font-bold text-green-900 uppercase tracking-tight mb-10 text-left flex items-center gap-4">
                      Related Articles
                      <div className="h-px grow bg-gray-100"></div>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {relatedArticles.map((article) => (
                        <Link
                          key={article.id}
                          to={`/content/${article.type || "Article"}/${article.id}`}
                          className="group text-left"
                        >
                          <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-4 shadow-lg">
                            <ImageWithFallback
                              src={article.imageUrl}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-2">
                            {article.type}
                          </p>
                          <h4 className="text-lg font-bold text-green-900 uppercase leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={onClose}
                    className="bg-green-900 hover:bg-red-600 text-white font-bold px-10 py-4 h-auto uppercase tracking-widest transition-all rounded-xl cursor-pointer"
                  >
                    Return to Library
                  </Button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-gray-50 hover:bg-gray-100 text-green-900 font-bold px-10 py-4 rounded-xl uppercase tracking-widest transition-all group"
                  >
                    Partner With Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};
