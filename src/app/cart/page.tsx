"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "shopping cart",
  },
  {
    id: 2,
    title: "shipping address",
  },
  {
    id: 3,
    title: "payment method",
  },
];

// temp data will change later
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

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-14">
      <h1 className="text-2xl font-medium">Your shopping Cart</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* cart procedure details */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          1
        </div>
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2>Cart details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Subtotal</p>
              <p className="text-sm font-medium">
                ${" "}
                {INITIAL_ITEMS.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
                ).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Discount</p>
              <p className="text-sm font-medium">$0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Shipping</p>
              <p className="text-sm font-medium">$0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-sm font-medium">
                ${" "}
                {INITIAL_ITEMS.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
                ).toFixed(2)}
              </p>
            </div>
          </div>
          <Button
            onClick={() => router.push("/cart?step=2")}
            className="w-full bg-(--primary-color) text-white"
          >
            Continue ▶
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
