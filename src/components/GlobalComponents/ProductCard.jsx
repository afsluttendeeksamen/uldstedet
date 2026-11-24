import Image from "next/image";

const ProductCard = ({title, price}) => {
    return ( 
        <section>
            <Image/>
            <h5>{title}</h5>
            <p>{price}</p>
        </section>
     );
}
 
export default ProductCard;