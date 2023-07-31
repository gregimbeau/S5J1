import React from "react";
import BookCard from "./BookCard";

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
          isFavorite={favorites.some((favorite) => favorite.id === book.id)}
          isWishlist={wishlist.includes(book.id)}
        />
      ))}
    </div>
  );
};

export default BookList;
