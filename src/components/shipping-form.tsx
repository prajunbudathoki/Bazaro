import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

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
    setShippingForm(false);
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
    </form>
  );
}
