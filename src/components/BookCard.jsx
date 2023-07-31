import React from "react";

const BookCard = ({
  book,
  onFavorited,
  onWishlisted,
  isFavorite,
  isWishlist,
}) => {
  return (
    <div className='book-card'>
      <img src={book.thumbnailUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.shortDescription}</p>
      <button
        className={isFavorite ? "added-favorite" : ""}
        onClick={() => onFavorited(book)}>
        {isFavorite ? "Added to Favorites" : "Add to Favorites"}
      </button>
      <button
        className={isWishlist ? "added-wishlist" : ""}
        onClick={() => onWishlisted(book)}>
        {isWishlist ? "Added to Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default BookCard;
