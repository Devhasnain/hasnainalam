import { useState } from "react";


const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useState("");
  const [dateInput, setDateInput] = useState("");

  const fromTimestamp = () => {
    const n = Number(timestamp);
    if (!timestamp || Number.isNaN(n)) return null;
    // Accept both seconds and milliseconds
    const ms = timestamp.length > 10 ? n : n * 1000;
    const d = new Date(ms);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const parsedDate = fromTimestamp();

  const handleNow = () => {
    setTimestamp(Math.floor(Date.now() / 1000).toString());
  };

  const handleDateToTimestamp = () => {
    if (!dateInput) return;
    const d = new Date(dateInput);
    if (Number.isNaN(d.getTime())) return;
    setTimestamp(Math.floor(d.getTime() / 1000).toString());
  };

  return (
    <div className="space-y-8">
      <div>
        <label className="text-xs uppercase tracking-wide text-gray-500 mb-2 block">
          Unix Timestamp → Date
        </label>
        <div className="flex flex-wrap gap-3">
          <input
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="e.g. 1753142400"
            className="flex-1 min-w-[200px] rounded-xl border border-gray-800 bg-black/40 p-3 font-mono text-sm text-gray-200 placeholder-gray-600 focus:border-gray-600 focus:outline-none"
          />
          <button
            onClick={handleNow}
            className="rounded-lg border border-gray-800 px-4 py-2 text-xs font-semibold text-gray-200 hover:border-gray-600"
          >
            Use current time
          </button>
        </div>

        {timestamp && (
          <div className="mt-3 rounded-xl border border-gray-900 bg-gray-950/20 p-4 text-sm text-gray-200">
            {parsedDate ? (
              <>
                <p>Local: {parsedDate.toString()}</p>
                <p className="text-gray-400 mt-1">
                  UTC: {parsedDate.toUTCString()}
                </p>
              </>
            ) : (
              <p className="text-red-400 text-xs">Not a valid timestamp.</p>
            )}
          </div>
        )}
      </div>

      <div>
        <label className="text-xs uppercase tracking-wide text-gray-500 mb-2 block">
          Date → Unix Timestamp
        </label>
        <div className="flex flex-wrap gap-3">
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="flex-1 min-w-[200px] rounded-xl border border-gray-800 bg-black/40 p-3 text-sm text-gray-200 focus:border-gray-600 focus:outline-none"
          />
          <button
            onClick={handleDateToTimestamp}
            className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-gray-200"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimestampConverter;