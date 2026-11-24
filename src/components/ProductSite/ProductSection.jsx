import ProductCard from "../GlobalComponents/ProductCard";

const ProductSection = ({title}) => {
    return ( 
        <section>
            <h2>{title}</h2>
            <ProductCard title="Product 1" price="$19.99"/>
        </section>
     );
}
 
export default ProductSection;