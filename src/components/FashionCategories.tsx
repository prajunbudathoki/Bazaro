import {
  Shirt,
  Footprints,
  Watch,
  Glasses,
  ShoppingBag,
  Gem,
} from "lucide-react";

export default function FashionCategories() {
  const categories = [
    { name: "Men Wear", icon: Shirt },
    { name: "Footwear", icon: Footprints },
    { name: "Accessories", icon: Watch },
    { name: "Eyewear", icon: Glasses },
    { name: "Bags", icon: ShoppingBag },
    { name: "Luxury", icon: Gem },
  ];

  return (
    <div className="py-8 px-6 rounded-xl mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="p-4 rounded-full border border-gray-300">
                <Icon className="w-8 h-8 text-gray-600" />
              </div>

              <p className="text-sm font-medium text-gray-700">{cat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
