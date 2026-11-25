import Image from "next/image";
import NumberOfItemContainer from "./NumberOfItemContainer";
import CtaButton from "../GlobalComponents/CtaButton";

const BuyContainer = () => {
  return (
    <div>
      <Image src="/assets/test.png" width={25} height={25} alt="En billedeserie med billeder der viser garn fra butikken, butikkens udstillingsvindue samt strikketilbehør, som kan købes hos uldstedet" />
      <div>
        <p>Gepard Cashmere Lace fv. 101</p>
        <p>På lager</p>
      </div>
      <div>
        <NumberOfItemContainer />
        <CtaButton cta_button_text="Læg i kurv" />
      </div>
    </div>
  );
};

export default BuyContainer;
