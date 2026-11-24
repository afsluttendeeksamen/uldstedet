import Image from "next/image";

const SubHero = ({ title, description }) => {
    return ( 
        <section>
            <Image />
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

        </section>
     );
};
 
export default SubHero;