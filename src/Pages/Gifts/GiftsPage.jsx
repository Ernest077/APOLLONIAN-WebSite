import cls from "./GiftsPage.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const GiftsPage = () =>{
    const [searchValue, setSearchValue] = useState("");
    return(
        <div>
            <Header setSearchValue={setSearchValue}/>
            <div className={cls.GiftsPage}>
                You don't have GIFTS
            </div>
            <Footer/>
        </div>
    )
}

export default GiftsPage;