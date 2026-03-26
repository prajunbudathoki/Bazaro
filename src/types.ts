import { z } from "zod";

export type ProductsType = {
  id: string | number;
  name: string;
  short_description: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Email is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number must contain at least 10 digits"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
  country: z.string().min(1, "Country is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
