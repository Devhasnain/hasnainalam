import { useState } from "react";


const WordCounterTool = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.trim()
    ? (text.match(/[.!?]+(?=\s|$)/g) || []).length
    : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        rows={10}
        className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 text-sm text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
      />
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Words", value: words },
          { label: "Characters", value: characters },
          { label: "Characters (no spaces)", value: charactersNoSpaces },
          { label: "Sentences", value: sentences },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-900 bg-gray-950/20 p-4 text-center"
          >
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">
        Estimated reading time: ~{readingTime} min
      </p>
    </div>
  );
};
export default WordCounterTool;
