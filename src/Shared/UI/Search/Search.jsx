// Search.js
import React from 'react';
import cls from "./Search.module.scss";
import { IoIosSearch } from "react-icons/io";

const Search = ({ onSearch }) => {
    return (
        <div className={cls.Search}>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className={cls.SearchIcon}><IoIosSearch /></div>
        </div>
    )
}

export default Search;
