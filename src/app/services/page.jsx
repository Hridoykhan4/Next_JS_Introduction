import Link from 'next/link'
import React from 'react'

export default function ServicePage() {
  const data = [
    {
      id: 1,
      title: 'Fire Detection System',
      slug: 'fire-detection-system',
      category: 'Fire Safety',
      price: 25000,
      duration: '7 Days',
      image: '/fire-detection.jpg',
      description:
        'Complete fire detection system installation including smoke detector, heat detector, MCP, sounder, and control panel setup.',
    },
    {
      id: 2,
      title: 'Fire Hydrant System',
      slug: 'fire-hydrant-system',
      category: 'Fire Protection',
      price: 85000,
      duration: '15 Days',
      image: '/fire-hydrant.jpg',
      description:
        'Professional fire hydrant system design, supply, installation, testing, and commissioning for industrial buildings.',
    },
    {
      id: 3,
      title: 'Fire Sprinkler System',
      slug: 'fire-sprinkler-system',
      category: 'Fire Protection',
      price: 120000,
      duration: '20 Days',
      image: '/sprinkler.jpg',
      description:
        'Automatic sprinkler system installation for factory, warehouse, commercial building, and industrial facilities.',
    },
    {
      id: 4,
      title: 'Fire Door Installation',
      slug: 'fire-door-installation',
      category: 'Passive Fire Protection',
      price: 45000,
      duration: '5 Days',
      image: '/fire-door.jpg',
      description:
        'Fire-rated door supply and installation with proper hardware, frame, closer, panic bar, and finishing work.',
    },
    {
      id: 5,
      title: 'CCTV Surveillance System',
      slug: 'cctv-surveillance-system',
      category: 'Security System',
      price: 30000,
      duration: '3 Days',
      image: '/cctv.jpg',
      description:
        'CCTV camera installation, DVR/NVR setup, remote monitoring configuration, and basic user training.',
    },
    {
      id: 6,
      title: 'Lightning Protection System',
      slug: 'lightning-protection-system',
      category: 'Electrical Safety',
      price: 60000,
      duration: '10 Days',
      image: '/lps.jpg',
      description:
        'Lightning protection system installation including air terminal, down conductor, earth pit, and testing support.',
    },
  ]
  return (
    <div className='P-6'>
      <p className="text-3xl font-bold">ServicePage</p>
      <div className="grid grid-cols-3 gap-5">
        {
          data?.map(service => (
            <Link href={`/services/${service.id}`} key={service.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold">{service.title}</h2>

              <p className="text-sm text-gray-500 mt-1">
                Category: {service.category}
              </p>

              {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                View Details
              </button> */}

            </Link>
          ))
        }
      </div>

    </div>
  )
}
