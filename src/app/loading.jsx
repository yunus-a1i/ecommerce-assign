import { ProductGridSkeleton } from '../components/ui/Skeleton';
import { Skeleton } from '../components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4 space-y-6">
            <Skeleton className="h-8 w-24" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <Skeleton className="h-10 w-48 mb-2" />
            <Skeleton className="h-6 w-72" />
          </div>
          <ProductGridSkeleton count={6} />
        </div>
      </div>
    </div>
  );
}