import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className='filter-buttons'>
      <button
        onClick={() => setFilter(filter === "favorites" ? "" : "favorites")}>
        {filter === "favorites"
          ? "Remove Favorite Filter"
          : "Filter by Favorites"}
      </button>
      <button
        onClick={() => setFilter(filter === "wishlist" ? "" : "wishlist")}>
        {filter === "wishlist"
          ? "Remove Wishlist Filter"
          : "Filter by Wishlist"}
      </button>
    </div>
  );
};

export default FilterButtons;
