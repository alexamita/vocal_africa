/**
 * MediaPlayerModal Component
 *
 * A modal overlay for playing video (YouTube) or audio (Podcast) content without leaving the page.
 * Features:
 * - Responsive video/audio embed.
 * - Content metadata display (Title, Duration, Date).
 * - Social sharing functionality.
 * - Support for external platform links.
 */
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Headphones, Share2, ExternalLink, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { toast } from "sonner";
import { ContentItem } from "@/types/content";

interface MediaPlayerModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export const MediaPlayerModal = ({ item, onClose }: MediaPlayerModalProps) => {
  if (!item) return null;

  const isVideo = item.type === "YouTube" || item.type === "Video";
  const embedUrl =
    item.embedUrl ||
    (isVideo
      ? "https://www.youtube.com/embed/dQw4w9WgXcQ" // Fallback
      : "https://open.spotify.com/embed/episode/7m76MhpSBY98I9X8S7tTf6"); // Fallback

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = `VOCAL Africa Media: ${item.title}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: item.description || item.excerpt || "",
          url: shareUrl,
        });
        toast.success("Shared successfully");
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast.error("Could not share content");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied to clipboard", {
          description: "Share the link with your network.",
          icon: <Check className="w-4 h-4 text-green-500" />,
        });
      } catch {
        toast.error("Failed to copy link");
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl bg-[#121212] rounded-[32px] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Player Side */}
            <div className="flex-grow lg:w-2/3 aspect-video lg:aspect-auto">
              <iframe
                src={embedUrl}
                title={item.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Info Side */}
            <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-between bg-linear-to-b from-[#1a1a1a] to-[#121212]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  {isVideo ? (
                    <div className="p-2 bg-red-600/20 rounded-lg text-red-500">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  ) : (
                    <div className="p-2 bg-green-600/20 rounded-lg text-green-500">
                      <Headphones className="w-5 h-5" />
                    </div>
                  )}
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                    NOW {isVideo ? "WATCHING" : "LISTENING"}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight leading-none">
                  {item.title}
                </h2>

                <div className="flex items-center gap-4 mb-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  <span>{item.duration}</span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {item.description || item.excerpt}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button className="flex-grow bg-white hover:bg-orange-500 text-black font-bold uppercase tracking-widest h-14 rounded-xl transition-all border-0 cursor-pointer">
                    {isVideo ? "Subscribe" : "Follow Podcast"}
                  </Button>
                  <Button
                    onClick={handleShare}
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 w-14 rounded-xl p-0 cursor-pointer flex items-center justify-center transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      isVideo ? "https://youtube.com" : "https://spotify.com",
                      "_blank",
                    )
                  }
                  className="w-full text-center text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-[0.3em] transition-colors py-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  View on {isVideo ? "YouTube" : "Spotify"}{" "}
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
