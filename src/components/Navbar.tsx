import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
           <Link href="/">
            <h1>Bazaro</h1>
           </Link>
        </nav>
    );
}