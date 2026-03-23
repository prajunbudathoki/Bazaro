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
 