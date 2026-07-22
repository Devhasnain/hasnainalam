// Central data source for the Tools section.
// Add a new object here to publish a new tool — the index page and
// dynamic [slug] page both read from this single list.

export type Tool = {
  slug: string;
  name: string;
  shortDescription: string; // used on the card (index page)
  description: string; // longer, used on the tool page for SEO content
  category: string;
  icon: string; // emoji or icon key, kept simple/dependency-free
  keywords: string[]; // helps you keep meta/description on-brief
};

export const tools: Tool[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    shortDescription:
      "Count words, characters, sentences and reading time instantly.",
    description:
      "A free online word counter that gives you an instant, accurate count of words, characters (with and without spaces), sentences, paragraphs, and estimated reading time. Useful for writers, students, and developers checking meta description or content length.",
    category: "Text Tools",
    icon: "WholeWord",
    keywords: [
      "word counter",
      "character counter",
      "free word count tool",
      "reading time calculator",
    ],
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    shortDescription: "Format, validate and beautify JSON in your browser.",
    description:
      "A free JSON formatter and validator that beautifies minified JSON, highlights syntax errors, and helps developers debug API responses without leaving the browser or installing an extension.",
    category: "Developer Tools",
    icon: "Braces",
    keywords: ["json formatter", "json validator", "beautify json online"],
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    shortDescription:
      "Convert text to uppercase, lowercase, title case and more.",
    description:
      "Convert any block of text between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase instantly. Handy for developers naming variables and writers formatting headings.",
    category: "Text Tools",
    icon: "CaseSensitive",
    keywords: ["case converter", "text case tool", "camel case converter"],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    shortDescription:
      "Generate strong, secure, and random passwords instantly for your online accounts.",
    description:
      "Create secure passwords with customizable length, uppercase letters, lowercase letters, numbers, and special characters. Protect your accounts with strong passwords that are difficult to crack. Perfect for personal, business, and developer use.",
    category: "Security Tools",
    icon: "Key",
    keywords: [
      "password generator",
      "random password generator",
      "secure password",
      "strong password generator",
      "online password tool",
      "create secure password"
    ],
  },
  {
    slug: "base64-converter",
    name: "Base64 Converter",
    shortDescription:
      "Encode and decode Base64 text instantly with a fast online converter.",
    description:
      "Convert plain text to Base64 encoding or decode Base64 strings back into readable text. Useful for developers, APIs, JSON data, email encoding, and web applications. Fast, secure, and works directly in your browser.",
    category: "Developer Tools",
    icon: "FileCode",
    keywords: [
      "base64 converter",
      "base64 encoder",
      "base64 decoder",
      "encode text",
      "decode base64",
      "developer tools"
    ],
  },
  {
    slug: "slug-generator",
    name: "Slug Generator",
    shortDescription:
      "Generate clean, SEO-friendly URL slugs from any text instantly.",
    description:
      "Convert titles or phrases into SEO-friendly URL slugs for websites, blogs, WordPress, Next.js, and other CMS platforms. Automatically removes special characters, spaces, and unsupported symbols for clean URLs.",
    category: "SEO Tools",
    icon: "Link",
    keywords: [
      "slug generator",
      "seo slug generator",
      "url slug",
      "clean url generator",
      "friendly url",
      "seo tools"
    ],
  },
  {
    slug: "timestamp-converter",
    name: "Timestamp Converter",
    shortDescription:
      "Convert Unix timestamps to readable dates and vice versa instantly.",
    description:
      "Easily convert Unix timestamps into human-readable dates and convert dates back into Unix timestamps. Supports seconds and milliseconds, making it ideal for developers, APIs, databases, and debugging.",
    category: "Developer Tools",
    icon: "Timer",
    keywords: [
      "timestamp converter",
      "unix timestamp",
      "epoch converter",
      "date to timestamp",
      "timestamp to date",
      "developer tool"
    ],
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    shortDescription:
      "Convert HEX, RGB, HSL, HSV, and CSS color formats instantly.",
    description:
      "Convert colors between HEX, RGB, HSL, HSV, and other popular formats with real-time preview. Perfect for web developers, designers, and UI/UX professionals creating consistent color palettes.",
    category: "Color Tools",
    icon: "PaintBucket",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hex",
      "hsl converter",
      "css color converter",
      "web color tool"
    ],
  },
];

export const getToolBySlug = (slug: string) =>
  tools.find((tool) => tool.slug === slug);