import { Skeleton } from '../../../components/ui/Skeleton';

export default function ProductLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Skeleton className="aspect-square rounded-lg" />

        <div className="space-y-6">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-12 w-40" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-12 w-32" />
          <div className="flex gap-4">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}