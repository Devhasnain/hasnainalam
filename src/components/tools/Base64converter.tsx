import { useState } from "react";


const Base64Converter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setError("");
    } catch {
      setError("Couldn't encode this text.");
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setError("");
    } catch {
      setError("This doesn't look like valid Base64.");
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or Base64 string..."
        rows={6}
        spellCheck={false}
        className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 font-mono text-xs text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={encode}
          className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-gray-200"
        >
          Encode
        </button>
        <button
          onClick={decode}
          className="rounded-lg border border-gray-800 px-4 py-2 text-xs font-semibold text-gray-200 hover:border-gray-600"
        >
          Decode
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-red-900/50 bg-red-950/20 px-4 py-3 text-xs text-red-400">
          {error}
        </div>
      )}

      {output && (
        <div className="mt-4 rounded-xl border border-gray-900 bg-gray-950/20 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              Result
            </span>
            <button
              onClick={handleCopy}
              className="text-xs text-gray-400 hover:text-white"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
          <p className="break-all font-mono text-xs text-gray-200">
            {output}
          </p>
        </div>
      )}
    </div>
  );
};

export default Base64Converter;