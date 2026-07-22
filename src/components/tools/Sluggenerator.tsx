import { useState } from "react";


const toSlug = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const SlugGenerator = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const slug = toSlug(text);

  const handleCopy = async () => {
    if (!slug) return;
    await navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g. My Awesome Blog Post Title!"
        className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 text-sm text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
      />

      <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-gray-900 bg-gray-950/20 p-4">
        <p className="break-all font-mono text-sm text-gray-200">
          {slug || <span className="text-gray-600">your-slug-goes-here</span>}
        </p>
        <button
          onClick={handleCopy}
          disabled={!slug}
          className="shrink-0 text-xs text-gray-400 hover:text-white disabled:opacity-40 disabled:hover:text-gray-400"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default SlugGenerator;