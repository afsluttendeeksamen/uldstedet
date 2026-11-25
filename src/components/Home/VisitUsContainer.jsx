import Image from "next/image";

const VisitUsContainer = () => {
  return (
    <div>
      <Image src="/assets/Visit_us.jpg" width={1500} height={1500} alt="En billedeserie med billeder der viser garn fra butikken, butikkens udstillingsvindue samt strikketilbehør, som kan købes hos uldstedet" />
      <div>
        <h1>Besøg os</h1>
        <ul>
          <li>Mandag: 10-18</li>
          <li>Tirsdag: 10-18</li>
          <li>Onsdag: 10-18</li>
          <li>Torsdag: 10-18</li>
          <li>Fredag: 10-18</li>
          <li>Lørdag: 10-16</li>
        </ul>
        <p>Vendersgade 3</p>
        <p>1363 København K</p>
      </div>
    </div>
  );
};

export default VisitUsContainer;
