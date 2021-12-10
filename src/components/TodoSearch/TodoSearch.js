import React from "react";

import './TodoSearch.css';

function TodoSearch ({ search, setSearch}) {
    
    const onSearchValueSearch = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }
   return(
       <input placeholder="Cebolla" 
        className="TodoSearch"
        onChange={onSearchValueSearch}
        value={search}
       />
    ); 
}

export { TodoSearch };