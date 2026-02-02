/**
 * Content Types
 *
 * Defines the TypeScript interfaces and types used for content items throughout the application.
 * Includes definitions for ContentItem, which covers articles, media, and other resources.
 */
export interface ContentItem {
  id: number;
  title: string;
  excerpt?: string;
  description?: string;
  date: string;
  category?: string; // Optional in mediaContent
  imageUrl: string;
  duration?: string;
  type: string; // Required for discrimination
  content?: string;
  embedUrl?: string;
  location?: string;
}
