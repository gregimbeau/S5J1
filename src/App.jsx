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
  const [filter, setFilter] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const filterBySearchTerm = () => {
    if (searchTerm !== "") {
      setFilteredBooks(
        Object.values(books).filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredBooks(Object.values(books));
    }
  };

  const filterBooks = () => {
    let newFilteredBooks = Object.values(books);

    if (searchTerm) {
      newFilteredBooks = newFilteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    let favoritesFiltered = [];
    let wishlistFiltered = [];

    if (filter.includes("favorites")) {
      favoritesFiltered = newFilteredBooks.filter((book) =>
        favorites.some((favoriteBook) => favoriteBook.title === book.title)
      );
    }

    if (filter.includes("wishlist")) {
      wishlistFiltered = newFilteredBooks.filter((book) =>
        wishlist.some((wishlistBook) => wishlistBook.title === book.title)
      );
    }

    if (filter.includes("favorites") && filter.includes("wishlist")) {
      newFilteredBooks = [...favoritesFiltered, ...wishlistFiltered];
    } else if (filter.includes("favorites")) {
      newFilteredBooks = favoritesFiltered;
    } else if (filter.includes("wishlist")) {
      newFilteredBooks = wishlistFiltered;
    }

    setFilteredBooks(newFilteredBooks);
  };

  const toggleFavorite = (book) => {
    if (favorites.some((favoriteBook) => favoriteBook.title === book.title)) {
      setFavorites(
        favorites.filter((favoriteBook) => favoriteBook.title !== book.title)
      );
      setBooks((prevBooks) => ({
        ...prevBooks,
        [book.title]: { ...book, favorite: false },
      }));
    } else {
      console.log("Add to fav ok");
      setFavorites((prevFavorites) => [...prevFavorites, book]);
      setBooks((prevBooks) => ({
        ...prevBooks,
        [book.title]: { ...book, favorite: true },
      }));
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
    setBooks((prevBooks) => {
      const updatedBooks = { ...prevBooks };
      Object.keys(updatedBooks).forEach((bookTitle) => {
        updatedBooks[bookTitle].favorite = false;
      });
      return updatedBooks;
    });
  };

  const toggleWishlist = (book) => {
    if (wishlist.some((wishlistBook) => wishlistBook.title === book.title)) {
      setWishlist(
        wishlist.filter((wishlistBook) => wishlistBook.title !== book.title)
      );
      setBooks((prevBooks) => ({
        ...prevBooks,
        [book.title]: { ...book, wishlist: false },
      }));
    } else {
      console.log("Add to wish ok");
      setWishlist((prevWishlist) => [...prevWishlist, book]);
      setBooks((prevBooks) => ({
        ...prevBooks,
        [book.title]: { ...book, wishlist: true },
      }));
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    setBooks((prevBooks) => {
      const updatedBooks = { ...prevBooks };
      Object.keys(updatedBooks).forEach((bookTitle) => {
        updatedBooks[bookTitle].wishlist = false;
      });
      return updatedBooks;
    });
  };

  const fetchBooks = () => {
    if (Array.isArray(booksData.books)) {
      const flattenedBooks = booksData.books.flat();
      setBooks(
        flattenedBooks.reduce((acc, book) => {
          acc[book.title] = { ...book, favorite: false, wish: false };
          return acc;
        }, {})
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
      <button onClick={clearWishlist}>Clear Wishlist</button>
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
