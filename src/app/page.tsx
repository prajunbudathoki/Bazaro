import FashionCategories from "@/components/FashionCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <div className="bg-(--hero-color) w-full min-h-[10vh] rounded-2xl px-10 py-12 flex items-center justify-between">
        <div className="max-w-xl space-y-6 text-white">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Exclusive offer</span>
            <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
              25% OFF
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Shop Smarter,
            <br />
            Not Harder
          </h1>
          <p className="text-white/80 text-lg">
            Premium products — everything you need at your doorstep.
          </p>
          <button className="flex items-center gap-2 bg-(--primary-color) text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Shop Now
          </button>
        </div>
        <div className="hidden md:block">
          <Image
            src="/hero-img.png"
            alt="hero"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
      <FashionCategories />
    </div>
  );
}
