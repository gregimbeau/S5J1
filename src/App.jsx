import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import BookCard from "./components/BookCard";
import booksData from "../public/books.json";
import BookList from "./components/BookList"; 


const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filter, setFilter] = useState("");

  const toggleFavorite = (book) => {
    if (favorites.includes(book.id)) {
      setFavorites(favorites.filter((id) => id !== book.id));
    } else {
      setFavorites([...favorites, book.id]);
    }
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
    setBooks(
      booksData.books.flatMap((bookArray) =>
        bookArray.map((book) => ({
          ...book,
          favorite: false,
          wish: false,
        }))
      )
    );
  } else {
    console.error("Fetched books data is not an array:", booksData);
    setBooks([]);
  }
};


  useEffect(() => {
    fetchBooks();
console.log(booksData);
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
  }, [favorites, wishlist]);

  let filteredBooks = books.filter((book) => {
    return book.title
      ? book.title.toLowerCase().includes(searchTerm.toLowerCase())
      : false;
  });

  if (filter === "favorites") {
    filteredBooks = filteredBooks.filter((book) => favorites.includes(book.id));
  }

  if (filter === "wishlist") {
    filteredBooks = filteredBooks.filter((book) => wishlist.includes(book.id));
  }

  return (
    <div>
      <h1>Reading Tracker</h1>
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