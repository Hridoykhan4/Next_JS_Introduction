import PhoneSearchInput from './components/PhoneSearchInput';
import style from './phone.module.css'
import Link from 'next/link';
export default async function PhonePage({ searchParams }) {
    const { search } = await searchParams;


    const fetchPhones = async () => {
        try {
            const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
            const data = await res.json();
            return data.data
        }
        catch (err) {
            console.log(err);
        }
    }

    const phones = await fetchPhones()
    return (
        <div className='space-y-6'>
            <h2>Total Phones: {phones?.length}</h2>
            <div>
                <PhoneSearchInput></PhoneSearchInput>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    phones?.map(phone => (
                        <div key={phone?.slug} className={`${style['phone-container']}`} >
                            <h1>Phone: {phone?.phone_name}</h1>
                            <p>Brand: {phone?.brand}</p>
                            <Link href={`/phones/${phone.slug}`}>View Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
