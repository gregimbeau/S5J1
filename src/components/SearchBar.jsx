import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Rechercher livre par titre'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
