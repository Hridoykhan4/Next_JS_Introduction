import style from '../phone.module.css'


const fetchPhone = async (slug) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const data = await res.json();
    return data.data;
}

export async function generateMetadata({ params }) {
    const slug = (await params).slug;
    const phone = await fetchPhone(slug);
    return {
        title: phone?.name,
        description: phone.slug,
        generator: 'Next.js',
        /* Keywords important */
        // Keywords layout theke inherit kortase, chaile dite pari
        // keywords: ['NextJS', 'iphone', 'samsung'],
        authors: [{name: 'Hridoy'}, {name: "Emon"}],
        creator: "Hridoy CBDL",
        publisher: "Compliance BD",
        formatDetection: {
            email: false,
            address: false
        }
    }
}


const PhoneDetails = async ({ params }) => {
    const { slug } = await params;
    const phone = await fetchPhone(slug);
    
    return (
        <div className={`${style['phone-container']}`}>

            <h1>Name: {phone?.name}</h1>
            <p>brand: {phone?.brand}</p>
            <p>{phone?.releaseDate}</p>
            {
                phone.memory &&

                <p>Memory: {phone?.memory}</p>
            }
            <ul>
                {
                    Object.entries(phone?.mainFeatures).map(([k, v]) => {
                        return Array?.isArray(v) ? <li key={k}>{k}: {v.join(' || ')}</li> : <li key={k}>${k} : ${v}</li>
                    })
                }
            </ul>
            <ul className='flex gap-6'>
                {
                    Object.keys(phone?.others).map(other => <li className='border rounded p-2' key={other}>{other}</li>)
                }
            </ul>

        </div>
    );
};

export default PhoneDetails;