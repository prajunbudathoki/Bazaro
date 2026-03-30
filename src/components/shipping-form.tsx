import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ShippingForm({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema as any),
  });
  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("address")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="text-sm font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="state" className="text-sm font-medium">
            State
          </label>
          <input
            type="text"
            id="state"
            {...register("state")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.state && (
            <p className="text-sm text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="zip" className="text-sm font-medium">
            Zip Code
          </label>
          <input
            type="text"
            id="zip"
            {...register("zip")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.zip && (
            <p className="text-sm text-red-500">{errors.zip.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <input
            type="text"
            id="country"
            {...register("country")}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          {errors.country && (
            <p className="text-sm text-red-500">{errors.country.message}</p>
          )}
        </div>
      </div>
      <Button type="submit" className="w-full bg-(--primary-color) text-white">
        Continue ▶
      </Button>
    </form>
  );
}
