import { useState } from "react";


const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState<number | string>(2);
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    if (!input.trim()) {
      setError("");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setOutput("");
    }
  };

  const minifyJson = () => {
    if (!input.trim()) {
      setError("");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setOutput("");
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs uppercase tracking-wide text-gray-500">
              Input
            </label>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste your JSON here, e.g. {"name":"Hasnain","role":"developer"}'
            rows={14}
            spellCheck={false}
            className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 font-mono text-xs text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs uppercase tracking-wide text-gray-500">
              Output
            </label>
            {output && (
              <button
                onClick={handleCopy}
                className="text-xs text-gray-400 hover:text-white"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            )}
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here"
            rows={14}
            spellCheck={false}
            className="w-full rounded-xl border border-gray-800 bg-black/40 p-4 font-mono text-xs text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-red-900/50 bg-red-950/20 px-4 py-3 text-xs text-red-400">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          onClick={formatJson}
          className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-gray-200"
        >
          Format / Validate
        </button>
        <button
          onClick={minifyJson}
          className="rounded-lg border border-gray-800 px-4 py-2 text-xs font-semibold text-gray-200 hover:border-gray-600"
        >
          Minify
        </button>
        <button
          onClick={handleClear}
          className="rounded-lg border border-gray-800 px-4 py-2 text-xs font-semibold text-gray-400 hover:border-gray-600"
        >
          Clear
        </button>

        <div className="ml-auto flex items-center gap-2">
          <label className="text-xs text-gray-500">Indent</label>
          <select
            value={indent}
            onChange={(e) =>
              setIndent(
                e.target.value === "tab" ? "\t" : Number(e.target.value)
              )
            }
            className="rounded-lg border border-gray-800 bg-black/40 px-2 py-2 text-xs text-gray-200 focus:border-gray-600 focus:outline-none"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
            <option value="tab">Tab</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default JsonFormatter;
