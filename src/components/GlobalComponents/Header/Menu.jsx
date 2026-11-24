import Link from "next/link";

const Menu = () => {
    return ( 
       <nav>
        <ul>
            <li>
                <Link href="/ProductSite">Garn</Link>
            </li>
            <li>
                <Link href="/">Strikketilbehør</Link>
            </li>
            <li>
                <Link href="/">Bøger</Link>
            </li>
            <li>
                <Link href="/">Opskrifter og kits</Link>
            </li>
            <li>
                <Link href="/">Gavekort</Link>
            </li>
            <li>
                <Link href="/">Om os</Link>
            </li>
        </ul>
       </nav>
     );
}
 
export default Menu;