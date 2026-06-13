'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

/* 
 () diye next js route organize kora jay
*/
const Navbar = () => {
    const pathname = usePathname()
    if (pathname.includes('dashboard'))  return null
    return (
        <div>
            <nav className="flex justify-center">
                <ul className="flex justify-between gap-6">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/services"><li>Services</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                    <Link href="/posts"><li>Posts</li></Link>
                    <Link href="/meals"><li>Meals</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;