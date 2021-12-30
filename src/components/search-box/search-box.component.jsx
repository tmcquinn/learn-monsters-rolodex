import React from 'react';
import './search-box.styles.css'

//functional component just needs to return html, doesnt really need state/lifestyle
// export needed for importting doi lol
export const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
);


// this doesnt need to change when state changes