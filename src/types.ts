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


export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder name is required"),
  cardNumber: z.string().min(16, "Card number must contain at least 16 digits").max(16, "Card number must contain at most 16 digits"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Expiry date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must contain at least 3 digits").max(3, "CVV must contain at most 3 digits"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;