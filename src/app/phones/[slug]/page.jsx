import style from '../phone.module.css'
const PhoneDetails = async ({ params }) => {
    const { slug } = await params;
    const fetchPhone = async () => {
        const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
        const data = await res.json();
        return data.data;
    }
    const phone = await fetchPhone();
    /* {
     mainFeatures: {
       storage: '32GB storage, no card slot',
       displaySize: '1.9 inches',
       chipSet: 'Apple S7',
       memory: '32GB',
       sensors: Array(8) [
         'Accelerometer', 'gyro', 'heart rate', 'barometer', 'always-on altimeter',
         'compass', 'SpO2', 'VO2max'
       ]
     },
     slug: 'apple_watch_series_7_aluminum-11107',
     name: 'Watch Series 7 Aluminum',
     releaseDate: 'Released 2021, October 15',
   
   } */
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
                        return Array?.isArray(v) ? <li>{k}: {v.join(' || ')}</li> : <li>${k} : ${v}</li>
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