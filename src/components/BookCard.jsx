import React from "react";

const BookCard = ({ book, onFavorited, onWishlisted }) => {
  return (
    <div className='book-card'>
      <img src={book.thumbnailUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.shortDescription}</p>
      <button onClick={() => onFavorited(book)}>
        {book.isFav ? "Remove from favorites" : "Add to favorites"}
      </button>
      <button onClick={() => onWishlisted(book)}>
        {book.read ? "Remove from wishlist" : "Add to wishlist"}
      </button>
    </div>
  );
};

export default BookCard;
