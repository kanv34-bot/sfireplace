"use client";

import { useState } from "react";
import ProductImage from "@/components/ProductImage";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  fit?: "contain" | "cover";
};

export default function ProductGallery({
  images,
  category,
  brand,
}: {
  images: GalleryImage[];
  category?: string;
  brand?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-[#e5e5ea] bg-white">
        <ProductImage
          src={active.src}
          alt={active.alt}
          category={category}
          brand={brand}
          className={`absolute inset-0 h-full w-full ${
            active.fit === "cover" ? "object-cover" : "object-contain p-6 sm:p-10"
          }`}
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative min-h-16 overflow-hidden rounded-[6px] border bg-white px-2 py-2 text-left text-xs font-medium transition-colors ${
              activeIndex === index
                ? "border-[#c2410c] text-[#c2410c]"
                : "border-[#e5e5ea] text-[#5f5f64] hover:border-[#b9b9bf]"
            }`}
            aria-pressed={activeIndex === index}
          >
            <span className="flex items-center gap-2">
              <img
                src={image.src}
                alt=""
                aria-hidden="true"
                className="h-10 w-14 shrink-0 rounded-[4px] object-cover"
              />
              <span className="line-clamp-2">{image.label}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
