import { ProductList } from "@/components/Productlist";
import Filters from "@/components/Filters";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    size?: string;
    color?: string;
  }>;
}) {
  const { category, minPrice, maxPrice, size, color } = await searchParams;
  return (
    <div className="container mx-auto px-4 pt-8 pb-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar for Filters */}
        <aside className="lg:w-1/4">
          <Filters />
        </aside>

        {/* Main Content for Product List */}
        <main className="lg:w-3/4">
          <div className="flex flex-col gap-6">
            <header className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight capitalize">
                  {category ? category.replace("-", " ") : "All Products"}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Discover our curated collection of premium fashion.
                </p>
              </div>
            </header>

            <ProductList
              category={category}
              minPrice={minPrice}
              maxPrice={maxPrice}
              size={size}
              color={color}
              showViewAll={false}
              isFullWidth={false}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
