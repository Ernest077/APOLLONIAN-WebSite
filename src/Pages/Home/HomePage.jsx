// HomePage.js
import React, { useState } from 'react';
import cls from "./HomePage.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Jewelry from "../../Shared/UI/Jewelry/Jewelry";

const HomePage = () => {
    const [searchValue, setSearchValue] = useState("");
    const initialProducts = [
        { id: 1, type: "ring", name: 'Amber', src: 'https://5.imimg.com/data5/SELLER/Default/2022/11/JB/CL/CI/87259759/doc-r-8438-yellow2-500x500.jpg', price: 340, popularity: 5 },
        { id: 2, type: "ring", name: 'Esmeralda', src: 'https://i.pinimg.com/originals/1c/1e/c7/1c1ec79e367afa2a180aecbe69681720.jpg', price: 640, popularity: 3 },
        { id: 3, type: "ring", name: 'Gemma', src: 'https://i.pinimg.com/originals/80/6a/0d/806a0ddae5a3c295c17842e12afa4f95.jpg', price: 300, popularity: 4 },
        { id: 4, type: "ring", name: 'Ivory', src: 'https://th.bing.com/th/id/OIP.m3ZN0YMX5sEnIwaBtk-skQHaHa?rs=1&pid=ImgDetMain', price: 230, popularity: 10 },
        { id: 5, type: "earring", name: 'Jade', src: 'https://th.bing.com/th/id/OIP.tQ_ovtbRVArn3syWDtH1yAHaHa?w=500&h=500&rs=1&pid=ImgDetMain', price: 89.00, popularity: 8 },
        { id: 6, type: "earring", name: 'Opal', src: 'https://th.bing.com/th/id/R.09e6b74d17ad9e15e7d2167d77b25e61?rik=05V2iNk6kFPljg&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2fimage%2fspin_prod_225467601%3f%3fhei%3d64%26wid%3d64%26qlt%3d50&ehk=MKOGkS5MwSV%2bgjCtA23HuCnciaS5b7LCcveKctN1Jqs%3d&risl=&pid=ImgRaw&r=0', price: 99.99, popularity: 7 }
    ];

    const [products, setProducts] = useState(initialProducts);
    const [originalProducts] = useState(initialProducts);

    const sortProductsByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    const sortProductsByType = (type) => {
        if (type === 'all') {
            setProducts(originalProducts);
        } else {
            const sortedProducts = [...originalProducts].filter(product => product.type === type);
            setProducts(sortedProducts);
        }
    };

    const sortProductsByPopularity = () => {
        const sortedProducts = [...products].sort((a, b) => b.popularity - a.popularity);
        setProducts(sortedProducts);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div>
            <Header setSearchValue={setSearchValue} />
            <div className={cls.HomePage}>
                <div className={cls.Main}>
                    <div className={cls.Header}>
                        <div>Earrings</div>
                        <div>Lorem ipsum dolor sit amet.</div>
                    </div>
                    <div className={cls.Content}>
                        <div className={cls.SortDiv}>
                            <div>SORT BY:</div>
                            <div onClick={() => sortProductsByType('all')}>All</div>
                            <div onClick={sortProductsByPopularity}>Popularity</div>
                            <div onClick={() => sortProductsByType('ring')}>Ring</div>
                            <div onClick={() => sortProductsByType('earring')}>Earring</div>
                            <div onClick={sortProductsByPrice}>Price</div>
                        </div>
                        <div className={cls.Jewelry}>
                            <Jewelry products={filteredProducts} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
