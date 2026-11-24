import CategoriesCard from "./CategoriesCard";

const CategoriesContainer = () => {
  return (
    <div>
      <CategoriesCard category_image="/assets/categories/Category_Garn.png" category_image_alt_text="Garn" category="Garn" />
      <CategoriesCard category_image="/assets/categories/Category_Bøger.png" category_image_alt_text="Bøger" category="Bøger" />
      <CategoriesCard category_image="/assets/categories/Category_Opskrifter.png" category_image_alt_text="Opskrifter" category="Opskrifter" />
      <CategoriesCard category_image="/assets/categories/Category_Gavekort.png" category_image_alt_text="Gavekort" category="Gavekort" />
      <CategoriesCard category_image="/assets/categories/Category_Strikketilbehør.png" category_image_alt_text="Strikketilbehør" category="Strikketilbehør" />
      <CategoriesCard category_image="/assets/categories/Category_OmOs.png" category_image_alt_text="Om os" category="Om os" />
    </div>
  );
};

export default CategoriesContainer;
