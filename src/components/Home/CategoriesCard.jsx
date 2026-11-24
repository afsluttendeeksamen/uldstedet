import Image from "next/image";

const CategoriesCard = (category_image, category_image_alt_text, category) => {
  return (
    <div>
      <Image src={category_image} width={50} height={50} alt={category_image_alt_text} />
      <div className="overlay"></div>
      <h1>{category}</h1>
    </div>
  );
};

export default CategoriesCard;
