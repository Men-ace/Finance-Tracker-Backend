import { Star } from "@components/star/Star";
import React from "react";
import { formatDistance, subDays } from "date-fns";

const reviews = [
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto mollitia porro eaque eveniet, inventore asperiores repellat voluptas accusantium nam ab?",
    reviewedBy: "Prem Acharya",
    createdAt: "22-2-2020",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto mollitia porro eaque eveniet, inventore asperiores repellat voluptas accusantium nam ab?",
    reviewedBy: "Prem Acharya",
    createdAt: "22-2-2020",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto mollitia porro eaque eveniet, inventore asperiores repellat voluptas accusantium nam ab?",
    reviewedBy: "Prem Acharya",
    createdAt: "22-2-2020",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto mollitia porro eaque eveniet, inventore asperiores repellat voluptas accusantium nam ab?",
    reviewedBy: "Prem Acharya",
    createdAt: "22-2-2020",
  },
  {
    title: "This is awesome book",
    rating: 4.5,
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto mollitia porro eaque eveniet, inventore asperiores repellat voluptas accusantium nam ab?",
    reviewedBy: "Prem Acharya",
    createdAt: "22-2-2020",
  },
];
export const Reviews = () => {
  return (
    <div className="reviews-tab">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="border rounded p-3 shadow-lg d-flex review-item gap-3"
        >
          <div className="left d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center fs-3 fw-bold ">
              PA
            </div>
          </div>
          <div className="right">
            <h3>{r.title}</h3>
            <div className="d-flex gap-3">
              <Star avgRating={r.rating} />
              <span> 6 Months ago</span>
            </div>

            <p>{r.details}</p>
            <div className="text-end">- {r.reviewedBy}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
