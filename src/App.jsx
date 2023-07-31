import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import BookList from "./components/BookList";
import booksData from "../public/books.json";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Inside the filterBooks function in App.jsx
  const filterBooks = () => {
    let newFilteredBooks = [...books];

    if (filter === "favorites") {
      newFilteredBooks = newFilteredBooks.filter((book) =>
        favorites.some((favorite) => favorite.id === book.id)
      );
      console.log("Filtered by favorites: ", newFilteredBooks); // Add this line
    }

    if (filter === "wishlist") {
      newFilteredBooks = newFilteredBooks.filter((book) =>
        wishlist.includes(book.id)
      );
      console.log("Filtered by wishlist: ", newFilteredBooks); // Add this line
    }

    setFilteredBooks(newFilteredBooks);
  };

  const toggleFavorite = (book) => {
    if (favorites.some((favoriteBook) => favoriteBook.id === book.id)) {
      setFavorites(
        favorites.filter((favoriteBook) => favoriteBook.id !== book.id)
      );
      // Set favorite to false for this book in books.
      setBooks((prevBooks) =>
        prevBooks.map((b) => (b.id === book.id ? { ...b, favorite: false } : b))
      );
    } else {
      console.log("Add to fav ok");
      setFavorites((prevFavorites) => [...prevFavorites, book]);
      // Set favorite to true for this book in books.
      setBooks((prevBooks) =>
        prevBooks.map((b) => (b.id === book.id ? { ...b, favorite: true } : b))
      );
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
    setBooks((prevBooks) => prevBooks.map((b) => ({ ...b, favorite: false })));
  };

  const toggleWishlist = (book) => {
    console.log(book);
    if (wishlist.includes(book.id)) {
      setWishlist(wishlist.filter((id) => id !== book.id));
    } else {
      setWishlist([...wishlist, book.id]);
    }
  };

  const fetchBooks = () => {
    if (Array.isArray(booksData.books)) {
      const flattenedBooks = booksData.books.flat();
      setBooks(
        flattenedBooks.map((book) => ({
          ...book,
          favorite: false,
          wish: false,
        }))
      );
    } else {
      console.error("Fetched books data is not an array:", booksData);
      setBooks([]);
    }
  };

  useEffect(() => {
    fetchBooks();
    const localFavorites = localStorage.getItem("favorites");
    const localWishlist = localStorage.getItem("wishlist");

    if (localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }

    if (localWishlist) {
      setWishlist(JSON.parse(localWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    filterBooks();
  }, [filter, favorites, wishlist]);

  return (
    <div>
      <h1>Reading Tracker</h1>
      <button onClick={clearFavorites}>Clear Favorites</button>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <BookList
        books={filteredBooks}
        toggleFavorite={toggleFavorite}
        toggleWishlist={toggleWishlist}
        favorites={favorites}
        wishlist={wishlist}
      />
    </div>
  );
};

export default App;
