import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
    return (
        <div className='flex justify-center items-center flex-col h-50'>
            <div>

                <h1>404 Not Found</h1>
                <Link href="/">Back to Home</Link>
            </div>
        </div>
    )
}
