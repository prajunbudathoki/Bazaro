"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

const categories = [
  "All",
  "Men Wear",
  "Women Wear",
  "Footwear",
  "Accessories",
  "Bags",
  "Luxury",
];
const sizes = ["S", "M", "L", "XL", "XXL", "40", "42", "43", "44"];
const colors = [
  { name: "White", value: "white" },
  { name: "Black", value: "black" },
  { name: "Gray", value: "gray" },
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Pink", value: "pink" },
  { name: "Purple", value: "purple" },
];

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("minPrice") || "",
    max: searchParams.get("maxPrice") || "",
  });

  const updateFilters = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "All") {
        params.set(name, value.toLowerCase().replace(/\s+/g, "-"));
      } else {
        params.delete(name);
      }
      router.push(`?${params.toString()}`);
    },
    [router, searchParams],
  );

  const clearFilters = () => {
    router.push("/products");
    setPriceRange({ min: "", max: "" });
  };

  return (
    <div className="w-full lg:w-64 flex flex-col gap-8 p-6 bg-white/50 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm sticky top-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-xs font-medium text-(--primary-color) hover:underline flex items-center gap-1"
        >
          <X className="w-3 h-3" /> Clear All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Category
        </h3>
        <div className="flex flex-wrap lg:flex-col gap-2">
          {categories.map((cat) => {
            const isActive =
              (searchParams.get("category") || "all") ===
              cat.toLowerCase().replace(/\s+/g, "-");
            return (
              <button
                key={cat}
                onClick={() => updateFilters("category", cat)}
                className={`text-sm px-3 py-2 rounded-lg text-left transition-all ${
                  isActive
                    ? "bg-(--primary-color) text-white shadow-md font-semibold"
                    : "text-gray-600 hover:bg-gray-50 bg-gray-50/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Price Range
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, min: e.target.value }))
            }
            onBlur={() => updateFilters("minPrice", priceRange.min)}
            className="w-full text-sm p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/20"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, max: e.target.value }))
            }
            onBlur={() => updateFilters("maxPrice", priceRange.max)}
            className="w-full text-sm p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Size
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => {
            const isActive = searchParams.get("size") === size.toLowerCase();
            return (
              <button
                key={size}
                onClick={() => updateFilters("size", size)}
                className={`text-xs p-2 rounded-lg border transition-all ${
                  isActive
                    ? "bg-(--primary-color) text-white border-(--primary-color) shadow-sm"
                    : "border-gray-200 text-gray-600 hover:border-(--primary-color) hover:text-(--primary-color)"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Colors
        </h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => {
            const isActive = searchParams.get("color") === color.value;
            return (
              <button
                key={color.value}
                onClick={() => updateFilters("color", color.value)}
                className={`w-6 h-6 rounded-full border-2 transition-all p-0.5 ${
                  isActive
                    ? "border-(--primary-color) scale-110"
                    : "border-transparent"
                }`}
                title={color.name}
              >
                <div
                  className="w-full h-full rounded-full border border-gray-100 shadow-inner"
                  style={{ backgroundColor: color.value }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
