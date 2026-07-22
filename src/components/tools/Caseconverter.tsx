import { useState } from "react";


const toTitleCase = (str: string) =>
  str.replace(
    /\w\S*/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );

const toSentenceCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

const toCamelCase = (str: string) =>
  str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^[A-Z]/, (c) => c.toLowerCase());

const CaseConverter = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState("");

  const handleCopy = async (value: string, key: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };

  const results = [
    { key: "upper", label: "UPPERCASE", value: text.toUpperCase() },
    { key: "lower", label: "lowercase", value: text.toLowerCase() },
    { key: "title", label: "Title Case", value: toTitleCase(text) },
    { key: "sentence", label: "Sentence case", value: toSentenceCase(text) },
    { key: "camel", label: "camelCase", value: toCamelCase(text) },
  ];

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        rows={6}
        className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 text-sm text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
      />

      <div className="mt-6 space-y-3">
        {results.map((r) => (
          <div
            key={r.key}
            className="flex items-start justify-between gap-4 rounded-xl border border-gray-900 bg-gray-950/20 p-4"
          >
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                {r.label}
              </div>
              <p className="text-sm text-gray-200 break-words">
                {r.value || (
                  <span className="text-gray-600">Nothing to show yet</span>
                )}
              </p>
            </div>
            <button
              onClick={() => handleCopy(r.value, r.key)}
              disabled={!r.value}
              className="shrink-0 text-xs text-gray-400 hover:text-white disabled:opacity-40 disabled:hover:text-gray-400"
            >
              {copied === r.key ? "Copied ✓" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseConverter;