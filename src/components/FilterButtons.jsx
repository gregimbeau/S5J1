import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className='filter-buttons'>
      <button onClick={() => setFilter("favorites")}>
        {filter === "favorites"
          ? "Remove Favorite Filter"
          : "Filter by Favorites"}
      </button>
      <button onClick={() => setFilter("wishlist")}>
        {filter === "wishlist"
          ? "Remove wishlist Filter"
          : "Filter by wishlist"}
      </button>
    </div>
  );
}

export default FilterButtons;