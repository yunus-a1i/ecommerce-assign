import { Sidebar } from "../components/layout/Sidebar";
import { ProductGrid } from "../components/product/ProductGrid";
import { Suspense } from "react";
import { ProductGridSkeleton } from "../components/ui/Skeleton";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar />

        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Product listing
            </h1>
          </div>

          <Suspense fallback={<ProductGridSkeleton count={6} />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
