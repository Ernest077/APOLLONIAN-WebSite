import cls from "./LocationPage.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const LocationPage = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <Header setSearchValue={setSearchValue}/>
            <div className={cls.LocationPage}>
                <div className={cls.LocationPageChild}>
                    <div className={cls.HeadH1}>Location</div>
                    <div className={cls.LocImgDiv}>
                        <img src="https://th.bing.com/th/id/R.816a2b0dd8d93da8d3051c427f808fac?rik=lfmkqH7xu7bpvw&riu=http%3a%2f%2fw0.fast-meteo.com%2flocationmaps%2fNew-York.10.gif&ehk=HD%2b1iYdHTJV9IrrOn9VQdsYkhN0kR%2fTD8l4AyduAOOE%3d&risl=&pid=ImgRaw&r=0" alt="location" />
                    </div>
                    <div className={cls.LocInfo}>New York,NY</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LocationPage