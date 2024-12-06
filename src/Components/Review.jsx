import React from "react";

function Review() {
    return (
        <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Reviews (10)</h3>
        <div className="space-y-3">
          {[
            { rating: 5.0, percentage: 66 },
            { rating: 4.0, percentage: 33 },
            { rating: 3.0, percentage: 16 },
            { rating: 2.0, percentage: 8 },
            { rating: 1.0, percentage: 6 },
          ].map((review, index) => (
            <div className="flex items-center" key={index}>
              <p className="text-sm font-bold text-gray-800">
                {review.rating}
              </p>
              <svg
                className="w-5 h-5 fill-blue-800 ml-1"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <div className="bg-gray-300 rounded w-full h-2 ml-3">
                <div
                  className="h-full rounded bg-blue-800"
                  style={{ width: `${review.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm font-bold text-gray-800 ml-3">
                {review.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Review;
