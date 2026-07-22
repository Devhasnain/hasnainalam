import { useState } from "react";


const CHARS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}",
};

const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let pool = CHARS.lower;
    if (useUpper) pool += CHARS.upper;
    if (useNumbers) pool += CHARS.numbers;
    if (useSymbols) pool += CHARS.symbols;

    const bytes = new Uint32Array(length);
    crypto.getRandomValues(bytes);
    const result = Array.from(bytes, (n) => pool[n % pool.length]).join("");
    setPassword(result);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div className="flex items-center gap-3 rounded-xl border border-gray-900 bg-gray-950/20 p-4">
        <p className="flex-1 break-all font-mono text-sm text-gray-200">
          {password || (
            <span className="text-gray-600">Click generate to start</span>
          )}
        </p>
        {password && (
          <button
            onClick={handleCopy}
            className="shrink-0 text-xs text-gray-400 hover:text-white"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Length</span>
            <span>{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useUpper}
              onChange={(e) => setUseUpper(e.target.checked)}
            />
            Uppercase
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={(e) => setUseNumbers(e.target.checked)}
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={(e) => setUseSymbols(e.target.checked)}
            />
            Symbols
          </label>
        </div>

        <button
          onClick={generate}
          className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-gray-200"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;