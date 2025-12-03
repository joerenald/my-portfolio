import React, { useEffect, useState } from "react";

export default function CGPAProgress({ value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < value) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 40);
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center">
      <svg className="w-20 h-20">
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="#333"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="#3b82f6"
          strokeWidth="8"
          fill="none"
          strokeDasharray="219.8"
          strokeDashoffset={219.8 - (219.8 * progress) / 100}
          strokeLinecap="round"
        />
      </svg>
      <span className="mt-2 font-bold text-xl">{progress}%</span>
    </div>
  );
}
