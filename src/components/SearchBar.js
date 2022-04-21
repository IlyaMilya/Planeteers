import React, {useState} from "react";


function SearchBar({search, setSearch}) {

  return (
    <div className="search">
      <input type="text" placeholder="Find your planeteer" value={search}
      onChange={(e)=> setSearch(e.target.value)}/>
      
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
