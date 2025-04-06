import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const maxRating = 5;
export const Star = ({ avgRating, totalReviews }) => {
  if (avgRating < 0 || avgRating > 5) {
    return "";
  }

  const halfStar = !Number.isInteger(avgRating);
  const fullStar = Math.floor(avgRating);
  const emptyStar = maxRating - fullStar - (halfStar ? 1 : 0);
  console.log(fullStar, halfStar, emptyStar);

  const showStarts = [];

  //full stars to show
  for (let i = 0; i < fullStar; i++) {
    showStarts.push(<FaStar className="text-warning" />);
  }

  //   Half start to show
  if (halfStar) showStarts.push(<FaStarHalfAlt className="text-warning" />);

  //empty stars to show

  for (let i = 0; i < emptyStar; i++) {
    showStarts.push(<FaStar />);
  }

  return (
    <div>
      {showStarts} {totalReviews && totalReviews + " Reviews"}
    </div>
  );
};
