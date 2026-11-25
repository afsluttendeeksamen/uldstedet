import Image from "next/image";

const ProductIformationCard = ({ product_information_icon, product_information_alt, product_information }) => {
  return (
    <div>
      <Image src={product_information_icon} width={25} height={25} alt={product_information_alt} />
      <p>{product_information}</p>
    </div>
  );
};

export default ProductIformationCard;
