import ProductInformationCard from "./ProductInformationCard";

const ProductInformationContainer = () => {
  return (
    <div>
      <ProductInformationCard product_information_icon="/assets/icons/Strikkefasthed.svg" product_information_alt="Strikkefasthed" product_information="18 m pr. 10 cm" />
      <ProductInformationCard product_information_icon="/assets/icons/Anbefaldede_Pinde.svg" product_information_alt="Anbefalede pinde" product_information="p. 3" />
      <ProductInformationCard product_information_icon="/assets/icons/Løbelængde.svg" product_information_alt="Løbelængde" product_information="225 m / 25g" />
      <ProductInformationCard product_information_icon="/assets/icons/Vask.svg" product_information_alt="Vask" product_information="30 håndvask" />
    </div>
  );
};

export default ProductInformationContainer;
