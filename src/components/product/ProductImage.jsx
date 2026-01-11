'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ProductImage({ images, title }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative bg-white rounded-lg overflow-hidden aspect-square">
        <Image
          src={images}
          alt={title}
          fill
          className={cn(
            'object-contain p-8 transition-transform duration-300',
            isZoomed && 'scale-150 cursor-zoom-out'
          )}
          onClick={() => setIsZoomed(!isZoomed)}
          unoptimized
        />

        <button
          className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>

    </div>
  );
}