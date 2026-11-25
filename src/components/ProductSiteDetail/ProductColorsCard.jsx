import Image from "next/image";

const ProductColorsCard = ({ product_color_image, product_color_image_alt, product_color_number }) => {
  return (
    <div>
      <Image src={product_color_image} width={25} height={25} alt={product_color_image_alt} />
      <p>{product_color_number}</p>
    </div>
  );
};

export default ProductColorsCard;
