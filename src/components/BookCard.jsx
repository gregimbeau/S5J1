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
      <img
        src={
          book.thumbnailUrl
            ? book.thumbnailUrl
            : "https://image.noelshack.com/fichiers/2023/30/1/1690204228-noavailable.png"
        }
        alt={book.title}
      />
      <div className='button-container'>
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
      <h2>{book.title}</h2>
      <p>
        {book.shortDescription
          ? book.shortDescription
          : "Description indisponible"}
      </p>
    </div>
  );
};

export default BookCard;
