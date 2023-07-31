import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  const toggleFilter = (filterType) => {
    if (filter.includes(filterType)) {
      setFilter(filter.filter((f) => f !== filterType));
    } else {
      setFilter([...filter, filterType]);
    }
  };

  return (
    <div className='filter-buttons'>
      <button onClick={() => toggleFilter("favorites")}>
        {filter.includes("favorites")
          ? "Remove Favorite Filter"
          : "Filter by Favorites"}
      </button>
      <button onClick={() => toggleFilter("wishlist")}>
        {filter.includes("wishlist")
          ? "Remove Wishlist Filter"
          : "Filter by Wishlist"}
      </button>
    </div>
  );
};

export default FilterButtons;
