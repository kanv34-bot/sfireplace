"use client";

import { useState } from "react";

const fallbackColors: Record<string, string> = {
  p1: "from-orange-900/80 to-orange-700/60",
  p2: "from-red-900/80 to-red-700/60",
  p3: "from-blue-900/80 to-blue-700/60",
  p4: "from-purple-900/80 to-purple-700/60",
  p7: "from-yellow-900/80 to-yellow-700/60",
  p6: "from-pink-900/80 to-pink-700/60",
  p88: "from-green-900/80 to-green-700/60",
  p8: "from-gray-900/80 to-gray-700/60",
};

const fallbackIcons: Record<string, string> = {
  p1: "🔥",
  p2: "🔥",
  p3: "🔥",
  p4: "💨",
  p7: "⚡",
  p6: "✨",
  p88: "🏕️",
  p8: "🔧",
};

export default function ProductImage({
  src,
  alt,
  category,
  brand,
  className = "",
}: {
  src: string;
  alt: string;
  category?: string;
  brand?: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${
          fallbackColors[category || ""] || "from-gray-800 to-gray-600"
        } ${className}`}
      >
        <span className="text-4xl mb-1 opacity-80">
          {fallbackIcons[category || ""] || "🔥"}
        </span>
        {brand && (
          <span className="text-white/70 text-xs font-medium px-2 text-center line-clamp-1">
            {brand}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
}
