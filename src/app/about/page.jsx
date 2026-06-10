// Eta use korte hobe shobar upore
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutPage = () => {
    // Carefully import koris
    const router = useRouter()
    const isLoggedIn = true

    const handleNavigation = () => {
        if (isLoggedIn) {
            router.push('/about/address')
        }
        else {
            router.push('/')
        }
    }

    return (
        <div>
            <p className="text-3xl font-bold">About Page</p>
            <Link href="/about/address" className="underline">Visit address</Link>
            <button className="block underline decoration-sky-500" type="button" onClick={handleNavigation}>Address Page</button>
        </div>
    );
};

export default AboutPage;