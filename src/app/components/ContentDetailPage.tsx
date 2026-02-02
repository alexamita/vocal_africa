/**
 * ContentDetailPage Component
 *
 * A wrapper/router component that determines which detail view to show based on content type.
 * - Redirects to `MediaPlayerModal` for video/audio content.
 * - Renders `PublicationView` for text-based content.
 * - Handles 404 state if content is not found.
 */
import { useParams, useNavigate } from "react-router-dom";
import { newsArticles, mediaContent } from "@/data/content";
import { PublicationView } from "@/app/components/PublicationView";
import { MediaPlayerModal } from "@/app/components/MediaPlayerModal";
import { ContentItem } from "@/types/content";

export const ContentDetailPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  // Combine logic to find item
  const allContent = [...newsArticles, ...mediaContent] as ContentItem[];
  const item = allContent.find(
    (c) => c.id === Number(id) && (c.type === type || c.category === type),
  );

  // If not found, redirect to 404 or home (handling simplified here)
  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Content not found</h2>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 underline mt-4"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  // Determine view type
  // PublicationView handles articles, publications, reports, press statements
  // MediaPlayerModal handles video, podcast

  // Note: MediaPlayerModal is built as a modal with fixed positioning.
  // We might want to adjust it or wrap it.
  // Ideally, if visited as a page, we might want it to look like a page or open the modal immediately.
  // Since the user asked for browser navigation, having a dedicated URL implies a "page" state.

  if (["Video", "Podcast", "YouTube"].includes(item.type)) {
    // MediaPlayerModal expects an 'item' and an 'onClose'.
    // On close, we should go back.
    return <MediaPlayerModal item={item} onClose={() => navigate(-1)} />;
  }

  // Default to PublicationView for text content
  return (
    <PublicationView
      item={item}
      onClose={() => navigate(-1)}
      categoryTitle={
        type ? type.charAt(0).toUpperCase() + type.slice(1) : "Back"
      }
    />
  );
};
