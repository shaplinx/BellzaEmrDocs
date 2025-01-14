import Link from '@docusaurus/Link';
import React, { useState } from 'react';

const Pricing = () => {

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Make every step user-centric</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit</p>
                </div>

                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/4 mt-48 hidden lg:block">
                        <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                            <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">Domain</p>
                            <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Sumber Daya</p>
                            <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Kemudahan</p>
                            <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Pengelola</p>
                            <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Kode Sumber</p>
                            <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Akses Penuh Server</p>
                            <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Jaminan Uptime 99%</p>
                        </div>
                    </div>
                    <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
                        <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                <h3 className="tracking-widest">QUICK</h3>
                                <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">Rp 100K
                                    <span className="text-gray-600 text-base ml-1">/bulan</span>
                                </h2>
                                <span className="text-sm text-gray-600">Rp 1.200K per tahun</span>

                            </div>
                            <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">*.emr.bellza.id</p>
                            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Terbatas</p>
                            <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Sangat Mudah</p>
                            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Kami</p>
                            <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>
                            <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>
                            <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>

                            <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
                                <Link
                                    className="inline-flex items-center px-6 py-4 font-semibold text-black hover:text-white transition-all duration-200 bg-lime-500 rounded-lg  hover:bg-lime-600 focus:bg-lime-600"
                                    to="/#contact-us">
                                    Hubungi Kami
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
                            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                <h3 className="tracking-widest">PRO</h3>
                                <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">Rp 200k
                                    <span className="text-gray-600 text-base ml-1">/bulan</span>
                                </h2>
                                <span className="text-sm text-gray-600">Rp 2.400K per tahun</span>
                            </div>
                            <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Bebas</p>
                            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Lebih Banyak</p>
                            <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Sangat Mudah</p>
                            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Kami</p>
                            <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>
                            <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </p>
                            <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <div className="p-6 text-center border-t border-gray-300">
                                <Link
                                    className="inline-flex items-center px-6 py-4 font-semibold text-black hover:text-white transition-all duration-200 bg-lime-500 rounded-lg  hover:bg-lime-600 focus:bg-lime-600"
                                    to="/#contact-us">
                                    Hubungi Kami
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                <h3 className="tracking-widest">BUSINESS</h3>
                                <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">Call
                                </h2>
                                <span className="text-sm text-gray-600">Harga Spesial </span>
                            </div>
                            <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Bebas</p>
                            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Bebas</p>
                            <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Perlu Keahlian Teknis</p>
                            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Anda Sendiri</p>
                            <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                            </p>
                            <div className="p-6 text-center border-t border-gray-300">
                                <Link
                                    className="inline-flex items-center px-6 py-4 font-semibold text-black hover:text-white transition-all duration-200 bg-lime-500 rounded-lg  hover:bg-lime-600 focus:bg-lime-600"
                                    to="/#contact-us">
                                    Hubungi Kami
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Pricing;