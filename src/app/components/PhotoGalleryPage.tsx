/**
 * PhotoGalleryPage Component
 *
 * Displays a masonry grid of photo items.
 * Features:
 * - Search functionality by title, description, or location.
 * - Responsive masonry layout.
 * - Lightbox/Modal view for high-resolution images with details.
 * - Filter and display of photo metadata (date, location).
 */
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Calendar, MapPin, Maximize2 } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";

interface PhotoItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  location?: string;
  type: string;
}

interface PhotoGalleryPageProps {
  items: PhotoItem[];
}

export const PhotoGalleryPage: React.FC<PhotoGalleryPageProps> = ({
  items,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.location &&
          item.location.toLowerCase().includes(searchQuery.toLowerCase())),
    );
  }, [items, searchQuery]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4 uppercase tracking-tighter">
              Photo Gallery
            </h1>
            <p className="text-lg text-gray-500 uppercase tracking-widest font-bold opacity-70">
              Capturing the heartbeat of advocacy across the continent.
            </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors w-5 h-5" />
            <Input
              placeholder="Search by campaign, location or date..."
              className="pl-12 h-14 bg-gray-50 border-none rounded-none border-b-2 border-gray-200 focus-visible:ring-0 focus-visible:border-red-600 transition-all font-bold uppercase text-sm tracking-widest"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key="gallery-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                  <Masonry gutter="24px">
                    {filteredItems.map((photo, index) => (
                      <motion.div
                        key={photo.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="relative group cursor-pointer overflow-hidden bg-gray-100"
                        onClick={() => setSelectedImage(photo)}
                      >
                        <ImageWithFallback
                          src={photo.imageUrl}
                          alt={photo.title}
                          className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-green-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                              {photo.date}
                            </span>
                            <h3 className="text-white text-2xl font-bold uppercase leading-tight mb-3">
                              {photo.title}
                            </h3>
                            <p className="text-white/70 text-sm mb-6 line-clamp-2 font-medium">
                              {photo.description}
                            </p>
                            <div className="flex items-center text-white/50 text-[10px] uppercase font-bold tracking-widest">
                              <Maximize2 className="w-3 h-3 mr-2" /> View Full
                              Image
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-32 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-300 uppercase tracking-widest">
                  No matching moments found
                </h3>
                <Button
                  variant="link"
                  onClick={() => setSearchQuery("")}
                  className="text-red-600 mt-4 font-bold uppercase tracking-widest"
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <div
              className="max-w-6xl w-full grid md:grid-cols-3 gap-12 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:col-span-2 relative overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              <div className="text-white space-y-8">
                <div>
                  <Badge className="bg-red-600 mb-6 font-bold uppercase tracking-widest rounded-none px-4 py-1">
                    GALLERY ARCHIVE
                  </Badge>
                  <h2 className="text-4xl font-bold uppercase mb-4 leading-tight">
                    {selectedImage.title}
                  </h2>
                  <div className="flex flex-col gap-3 text-white/50 text-sm font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-500" />{" "}
                      {selectedImage.date}
                    </span>
                    {selectedImage.location && (
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />{" "}
                        {selectedImage.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-px bg-white/10 w-24" />

                <p className="text-white/70 leading-relaxed text-lg">
                  {selectedImage.description}
                </p>

                <div className="pt-4">
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                    © 2026 VOCAL AFRICA ARCHIVE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`inline-block px-2 py-1 text-[10px] ${className}`}>
    {children}
  </span>
);
