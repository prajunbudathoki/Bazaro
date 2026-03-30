import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function PaymentForm({
  setPaymentForm,
}: {
  setPaymentForm: (data: PaymentFormInputs) => void;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema as any),
  });
  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    setPaymentForm(data);
    router.push("/cart?step=4", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="cardHolder" className="text-sm font-medium">
            Card Holder Name
          </label>
          <input
            type="text"
            id="cardHolder"
            {...register("cardHolder")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.cardHolder && (
            <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cardNumber" className="text-sm font-medium">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            {...register("cardNumber")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.cardNumber && (
            <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="expiryDate" className="text-sm font-medium">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            {...register("expiryDate")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.expiryDate && (
            <p className="text-sm text-red-500">{errors.expiryDate.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cvv" className="text-sm font-medium">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            {...register("cvv")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.cvv && (
            <p className="text-sm text-red-500">{errors.cvv.message}</p>
          )}
        </div>
      </div>
      <Button type="submit" className="w-full bg-(--primary-color) text-white">
        Checkout <LogOut className="h-3 w-3" />
      </Button>
    </form>
  );
}
