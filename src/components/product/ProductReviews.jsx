'use client';

import { useState } from 'react';
import { Rating } from '../../components/ui/Rating';
import { Button } from '../../components/ui/Button';
import { User, ThumbsUp } from 'lucide-react';

const mockReviews = [
  {
    id: 1,
    user: 'John D.',
    rating: 5,
    date: '2024-01-15',
    title: 'Excellent product!',
    comment:
      'This product exceeded my expectations. Great quality and fast shipping.',
    helpful: 12,
  },
  {
    id: 2,
    user: 'Sarah M.',
    rating: 4,
    date: '2024-01-10',
    title: 'Good value for money',
    comment:
      'Very satisfied with my purchase. Would recommend to others.',
    helpful: 8,
  },
  {
    id: 3,
    user: 'Mike R.',
    rating: 5,
    date: '2024-01-05',
    title: 'Perfect!',
    comment:
      'Exactly what I was looking for. The quality is outstanding.',
    helpful: 5,
  },
];

export function ProductReviews({ productId }) {
  const [reviews] = useState(mockReviews);
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Customer Reviews
      </h2>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">4.7</div>
            <Rating value={4.7} showCount={false} size="md" />
            <div className="text-sm text-gray-500 mt-1">
              Based on {reviews.length} reviews
            </div>
          </div>

          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-sm w-8">{star}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width: `${star === 5 ? 70 : star === 4 ? 20 : 10}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-0"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">
                    {review.user}
                  </span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <Rating value={review.rating} showCount={false} size="sm" />
                <h4 className="font-medium text-gray-900 mt-2">
                  {review.title}
                </h4>
                <p className="text-gray-600 mt-1">{review.comment}</p>
                <button className="flex items-center gap-1 mt-3 text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="h-4 w-4" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 2 && (
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : `View All ${reviews.length} Reviews`}
          </Button>
        </div>
      )}
    </div>
  );
}