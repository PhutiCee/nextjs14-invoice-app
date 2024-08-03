"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center h-[10vh] px-8 border-b-[1px]'>
            <Link href='/' className='text-xl font-extrabold text-blue-700'>
                GetInvoice
            </Link>
            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <button
                        className='bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800'
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Donate
                    </button>
                    {dropdownOpen && (
                        <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg'>
                            <Link href='/' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                                Patreon
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
