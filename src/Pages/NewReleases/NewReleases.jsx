import cls from "./NewReleases.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Jewelry from "../../Shared/UI/Jewelry/Jewelry";
import { useState } from "react";

const NewReleases = () => {
    const initialProducts = [
        { id: 3, type: "ring", name: 'Gemma', src: 'https://i.pinimg.com/originals/80/6a/0d/806a0ddae5a3c295c17842e12afa4f95.jpg', price: 300, popularity: 4 },
        { id: 4, type: "ring", name: 'Ivory', src: 'https://th.bing.com/th/id/OIP.m3ZN0YMX5sEnIwaBtk-skQHaHa?rs=1&pid=ImgDetMain', price: 230, popularity: 10 },
    ];
    const [searchValue, setSearchValue] = useState("");
    const [products] = useState(initialProducts);
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
        <div>
            <Header setSearchValue={setSearchValue}/>
            <div className={cls.NewReleases}>
                <div className={cls.NewReleasesChild}>
                    <div className={cls.HeadH1}>
                        New Releases
                    </div>
                    <div className={cls.Jewelry}>
                        <Jewelry products={filteredProducts} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewReleases;