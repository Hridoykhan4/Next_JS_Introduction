'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactPage = () => {
    const router = useRouter();
    const isLoggedIn = false
    const handleOffice = () => {
        if (isLoggedIn) {
            router.push('/contact/offices')
        } else {
            router.push('/')
        }
    }

    return (
        <div>
            <p className="text-3xl font-bold">Contact Page</p>
            <Link href="/contact/offices" className="underline">Visit Offices</Link>
            {/* Type submit dis */}
            <button type="button" className="block underline decoration-red-600" onClick={handleOffice}>Visit Offices</button>
        </div>
    );
};

export default ContactPage;