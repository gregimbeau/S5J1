import React from "react";

const FavoritesAndWishlistInfo = () => {
  const numberOfFavorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites")).length
    : 0;
  const numberOfWishlist = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist")).length
    : 0;

  return (
    <div className='favorites-wishlist-info'>
      <p>books in fav. : {numberOfFavorites}</p>
      <p>books in wish. : {numberOfWishlist}</p>
    </div>
  );
};

export default FavoritesAndWishlistInfo;
