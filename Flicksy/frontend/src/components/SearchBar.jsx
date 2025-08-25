import React from 'react';
import '../styles/SearchBar.css'

const SearchBar = () => {

    const placeholder = `🔍 Search for Maggi, Period Kit, Chips............`

  return (
    <div>
        <div className='search-bar-container'>
            <label htmlFor="searchItem"></label>
            <input type="text" name="searchItem" id="searchItem" className='form-control p-2 border border-3 border-black' placeholder={placeholder} />
        </div>
    </div>
  )
}

export default SearchBar;