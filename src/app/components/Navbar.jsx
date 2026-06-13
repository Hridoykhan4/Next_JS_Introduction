'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

/* 
 () diye next js route organize kora jay
*/
const Navbar = () => {
    const pathname = usePathname()
    const hideNav = pathname === '/login' || pathname === '/register' || pathname.includes('dashboard')
    if(hideNav) return null
    return (
        <div>
            <nav className="flex justify-center">
                <ul className="flex justify-between gap-6">
                    <Link className="testing" href="/"><li>Home</li></Link>
                    <Link href="/services"><li>Services</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                    <Link href="/posts"><li>Posts</li></Link>
                    <Link href="/meals"><li>Meals</li></Link>
                    <Link href="/phones"><li>Phones</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;