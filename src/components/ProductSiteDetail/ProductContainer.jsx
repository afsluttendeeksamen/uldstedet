import ProductImage from "../GlobalComponents/ProductImage";
import ProductColorsContainer from "./ProductColorsContainer";
import ProductInformationContainer from "./ProductInformationContainer";
import ByeContainer from "./BuyContainer";

const ProductContainer = () => {
  return (
    <div>
      <ProductImage />
      <div>
        <h1>Produkt navn</h1>
        <h4>100% Cashmere</h4>
        <ProductInformationContainer />
        <ProductColorsContainer />
        <ByeContainer />
        <h4>Beskrivelse</h4>
        <div className="line"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
};

export default ProductContainer;
