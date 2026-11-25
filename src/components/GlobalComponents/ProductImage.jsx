import Image from "next/image";

const ProductImage = ({ detail_product_image, detail_product_image_alt }) => {
  return (
    <div>
      <Image src={detail_product_image} width={100} height={100} alt={detail_product_image_alt} />
    </div>
  );
};

export default ProductImage;
