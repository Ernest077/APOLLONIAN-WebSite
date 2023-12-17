import cls from "./Jewelry.module.scss";

const Jewelry = ({ products }) => {
    return (
        <div className={cls.MainProduct}>
            {products.map((product, index) => (
                <div key={index} type={product.type} className={cls.JewelryDiv}>
                    <img src={product.src} alt={product.name} />
                    <div className={cls.BuyNow}>Buy now</div>
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                </div>
            ))
            }
        </div>
    )
}

export default Jewelry;