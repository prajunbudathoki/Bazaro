"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Shirt,
  ShoppingBag,
  Footprints,
  Watch,
  Briefcase,
  Gem,
  ChevronDown,
  Layers2,
} from "lucide-react";

const categories = [
  { name: "Men Wear", icon: Shirt },
  { name: "Women Wear", icon: ShoppingBag },
  { name: "Footwear", icon: Footprints },
  { name: "Accessories", icon: Watch },
  { name: "Bags", icon: Briefcase },
  { name: "Luxury", icon: Gem },
];

const Explorecat = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = useCallback(
    (categoryName: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const slug = categoryName.toLowerCase().replace(/\s+/g, "-");
      params.set("category", slug);
      router.push(`?${params.toString()}`);
    },
    [router, searchParams],
  );

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-(--primary-color) py-6 px-5 text-white tracking-wider hover:bg-(--hero-color) transition-all duration-300 ease-in-out border-none shadow-md hover:shadow-lg rounded-xl"
          >
            <Layers2 className="w-5 h-5 mr-3" />
            <span className="font-semibold">Explore All Categories</span>
            <ChevronDown className="w-4 h-4 ml-3 opacity-70" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-64 p-2 mt-2 rounded-xl border border-gray-100 shadow-xl bg-white/95 backdrop-blur-sm">
          {categories.map((cat) => (
            <DropdownMenuItem
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="flex items-center gap-3 p-3 cursor-pointer rounded-lg transition-colors hover:bg-gray-50 focus:bg-gray-50 group"
            >
              <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                <cat.icon className="w-4 h-4 text-(--primary-color)" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {cat.name}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Explorecat;
