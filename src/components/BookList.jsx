import React from "react";
import BookCard from "./BookCard"; // Assurez-vous d'importer BookCard.

const BookList = ({
  books,
  toggleFavorite,
  toggleWishlist,
  favorites,
  wishlist,
}) => {
  return (
    <div className='book-list'>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onFavorited={toggleFavorite}
          onWishlisted={toggleWishlist}
        />
      ))}
    </div>
  );
};

export default BookList;
