// utils/readTime.ts

/**
 * Blog content ka estimated read time calculate karta hai
 * @param htmlContent - WordPress se aane wala HTML content (content.rendered)
 * @param wordsPerMinute - Average reading speed (default: 200 wpm)
 * @returns Formatted string - e.g. "45 sec read" ya "4 min read"
 */
export function getReadTime(htmlContent: string, wordsPerMinute: number = 200): string {
  // HTML tags remove karke plain text nikalna
  const plainText = htmlContent.replace(/<[^>]*>?/gm, ' ').trim();

  // Words count karna (extra spaces ignore karke)
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;

  // Total seconds calculate karna
  const totalSeconds = Math.ceil((wordCount / wordsPerMinute) * 60);

  // 60 seconds se kam ho to seconds mein, zyada ho to minutes mein
  if (totalSeconds < 60) {
    return `${totalSeconds} sec read`;
  }

  const minutes = Math.ceil(totalSeconds / 60);
  return `${minutes} min read`;
}