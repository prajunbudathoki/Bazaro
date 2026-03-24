import Link from "next/link";
import Searchbar from "./Searchbar";
import { ShoppingCart } from "lucide-react";
import CartSheet from "./ui/cart-sheet";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/90 border-b border-gray-200 py-3 px-6 shadow-sm">
      <Link href="/">
        <h1 className="text-md font-medium tracking-wider">Bazaro</h1>
      </Link>
      <div className="flex items-center">
        <Searchbar />
      </div>
      {/* cart icon */}
      {/* <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-3 rounded-full flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 text-black" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-light">Cart</p>
          <p className="text-sm text-gray-500">0 - $0.00</p>
        </div>
      </div> */}
      <CartSheet />
    </div>
  );
}
