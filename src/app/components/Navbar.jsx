import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-center">
                <ul className="flex justify-between gap-6">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/services"><li>Services</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;