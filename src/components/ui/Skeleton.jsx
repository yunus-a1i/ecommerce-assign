import { cn } from '../../lib/utils';

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
      {...props}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}