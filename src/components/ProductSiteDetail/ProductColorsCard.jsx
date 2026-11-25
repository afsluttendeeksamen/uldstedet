import Image from "next/image";

const ProductColorsCard = ({ product_colors_image, product_colors_image_alt, product_colors_number }) => {
  return (
    <div>
      <Image src={product_colors_image} width={25} height={25} alt={product_colors_image_alt} />
      <p>{product_colors_number}</p>
    </div>
  );
};

export default ProductColorsCard;
