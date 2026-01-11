import { Star, StarHalf } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Rating({ value, count, showCount = true, size = 'md' }) {
  const sizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizes[size], 'fill-yellow-400 text-yellow-400')}
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className={cn(sizes[size], 'text-gray-300')} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star
                className={cn(sizes[size], 'fill-yellow-400 text-yellow-400')}
              />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={cn(sizes[size], 'text-gray-300')} />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-sm text-gray-500">({count})</span>
      )}
    </div>
  );
}