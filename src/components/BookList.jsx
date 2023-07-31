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
          key={book.title}
          book={book}
          onFavorited={toggleFavorite}
          onWishlisted={toggleWishlist}
          isFavorite={favorites.some(
            (favorite) => favorite.title === book.title
          )}
          isWishlist={wishlist.includes(book.title)}
        />
      ))}
    </div>
  );
};



export default BookList;
