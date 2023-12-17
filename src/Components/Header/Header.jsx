// Header.js
import React from 'react';
import Navbar from "../Navbar/Navbar";
import cls from "./Header.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import Search from "../../Shared/UI/Search/Search";

const Header = ({ setSearchValue }) => {
    return (
        <header className={cls.Header}>
            <Navbar />
            <div className={cls.HeaderH1}>
                APOLLONIAN
            </div>
            <div className={cls.SearchOthDiv}>
                <Search onSearch={setSearchValue} />
                <div className={cls.OtherIcon}>
                    <div><FaRegHeart /></div>
                    <div><AiOutlineShopping /></div>
                    <div><IoPersonOutline /></div>
                </div>
            </div>
        </header>
    )
}

export default Header;
