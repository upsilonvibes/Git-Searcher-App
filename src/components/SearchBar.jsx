import React, { useState } from 'react';
import { Search } from 'lucide-react';

// We receive the 'onSearch' function as a prop from App.jsx
function SearchBar({ onSearch }) {
  // 1. Local state to hold the text the user is currently typing
  const [inputText, setInputText] = useState('');

  // 2. Handler function for when the form gets submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the page from refreshing
    
    if (inputText.trim()) { 
      onSearch(inputText.trim()); // Fires the fetch function in App.jsx with the clean input
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="input-container">
        <Search size={20} className="search-icon" />
        {/* 3. Controlled Input */}
        <input 
          type="text" 
          placeholder="Search GitHub username..." 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;