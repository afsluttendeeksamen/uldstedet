import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <Image src="/assets/Strikkeprojekt.jpg" width={1000} height={1000} alt="" />
      <div>
        <h1>Find dit næste strikkeprojekt</h1>
        <p>Lad dig inspirere af vores opskrifter, og find dit næste projekt blandt vores udvalg af garn og strikkekits.</p>
        <div>
          <HiArrowLongRight />
          <Link href="/">Udforsk opskrifter</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
