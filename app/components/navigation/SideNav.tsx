"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Toggle Button for Mobile Screens */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 lg:w-64 lg:relative lg:h-screen lg:block transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="overflow-y-auto py-5 px-3 h-full">
                    <ul className="space-y-2">
                        <li>
                            <Link href="/dashboard" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" fillRule="evenodd"></path>
                                </svg>
                                <span className="ml-3">Invoice</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/settings" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span className="ml-3">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/customers" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" fillRule="evenodd"></path>
                                </svg>
                                <span className="ml-3">Customers</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                </svg>
                                <span className="ml-3">Authentication</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200">
                        <li>
                            <Link href="/history" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                    <path clipRule="evenodd" fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"></path>
                                </svg>
                                <span className="ml-3">History</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 3a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm9 9a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="ml-3">Help</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
