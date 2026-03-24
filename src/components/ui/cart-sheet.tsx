"use client";

import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    price: 27.49,
    oldPrice: 39.99,
    quantity: 1,
    size: "M",
    color: "Black",
    image: "/products/1g.png",
  },
  {
    id: 2,
    name: "Nike Air Max 270",
    price: 27.49,
    oldPrice: 39.99,
    quantity: 1,
    size: "42",
    color: "White",
    image: "/products/6w.png",
  },
];

export default function CartSheet() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const updateQuantity = (id: number, change: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-yellow-400 p-3 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition">
            <ShoppingCart className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-sm font-medium">Cart</p>
            <p className="text-sm text-gray-500">
              {totalCount} - ${subtotal.toFixed(2)}
            </p>
          </div>
        </div>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md bg-white rounded-l-3xl p-6 flex flex-col">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-lg font-semibold">
            Cart Products
          </SheetTitle>
          <p className="text-sm text-gray-500">{totalCount} Item in Cart</p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <Button
                        variant={"outline"}
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      Color: {item.color}, Size: {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400 line-through">
                        ${item.oldPrice.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                      <Button
                        variant={"outline"}
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>

                      <span className="px-2 text-sm font-medium">
                        {item.quantity}
                      </span>

                      <Button
                        variant={"outline"}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 opacity-60">
              <ShoppingCart className="w-10 h-10 text-gray-300" />
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-3">
              <Link href="/cart">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl py-6 text-sm"
                >
                  View Cart
                </Button>
              </Link>
              <Button className="flex-1 rounded-xl py-6 text-sm bg-(--hero-color)">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
