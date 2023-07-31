import React from "react";

const Book = ({
  book,
  toggleFavorite,
  toggleWishlist,
  isFavorite,
  isWishlist,
}) => {
  return (
    <div className='book'>
      <img src={book.thumbnailUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.shortDescription}</p>
      <button onClick={() => toggleFavorite(book)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button onClick={() => toggleWishlist(book)}>
        {isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default Book;
