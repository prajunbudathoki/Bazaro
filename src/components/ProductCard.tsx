"use client";

import { ProductsType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductsType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-6/7">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      {/* details */}
      <div className="flex flex-col gap-4 p-4">
        <Link href={`/product/${product.id}`}>
          <h1 className="font-medium hover:underline">{product.name}</h1>
        </Link>
        <p className="text-sm text-gray-400">{product.short_description}</p>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                e.stopPropagation();
                handleProductType({ type: "size", value: e.target.value });
              }}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer border ${productTypes.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductType({ type: "color", value: color });
                  }}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <Button
            className="bg-(--primary-color) text-white px-6 py-5 font-medium hover:scale-105 transition"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
