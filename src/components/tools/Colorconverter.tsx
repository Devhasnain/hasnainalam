import { useState } from "react";


const hexToRgb = (hex: string) => {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean.split("").map((c) => c + c).join("")
      : clean;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return { r, g, b };
};

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const ColorConverter = () => {
  const [hex, setHex] = useState("#D97757");
  const [copied, setCopied] = useState("");

  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const handleCopy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };

  const rows = rgb
    ? [
        { key: "hex", label: "HEX", value: hex.toUpperCase() },
        { key: "rgb", label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
        {
          key: "hsl",
          label: "HSL",
          value: `hsl(${hsl!.h}, ${hsl!.s}%, ${hsl!.l}%)`,
        },
      ]
    : [];

  return (
    <div>
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={rgb ? hex : "#000000"}
          onChange={(e) => setHex(e.target.value)}
          className="h-14 w-14 cursor-pointer rounded-xl border border-gray-800 bg-black/40"
        />
        <input
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          placeholder="#D97757"
          className="flex-1 rounded-xl border border-gray-800 bg-black/40 p-3 font-mono text-sm text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
        />
      </div>

      {!rgb && (
        <p className="mt-3 text-xs text-red-400">
          Enter a valid hex color, e.g. #D97757 or #fff.
        </p>
      )}

      {rgb && (
        <div className="mt-6 space-y-3">
          {rows.map((r) => (
            <div
              key={r.key}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-900 bg-gray-950/20 p-4"
            >
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  {r.label}
                </div>
                <p className="font-mono text-sm text-gray-200">{r.value}</p>
              </div>
              <button
                onClick={() => handleCopy(r.value, r.key)}
                className="shrink-0 text-xs text-gray-400 hover:text-white"
              >
                {copied === r.key ? "Copied ✓" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorConverter;