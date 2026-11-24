import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/assets/Logo.png" width={50} height={50} alt="Logo" />
    </div>
  );
};

export default Logo;
