import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import heroBackgroundImg from '@site/static/img/hero.png';
import KominfoLogo from "@site/static/img/kominfo.svg";
import BpjsLogo from "@site/static/img/bpjs.svg";

import Link from '@docusaurus/Link';




const Hero = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className="bg-gradient-to-b from-primary-light relative to-primary">
            <section className="relative max-h-fit md:max-h-screen pt-24 pb-24 sm:pb-16 lg:pb-24">
                <div className='flex flex-col md:flex-row items-center'>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 relative z-20 w-8/12">
                        <div className="max-w-xl mx-auto text-center">
                            <h1 className="text-5xl font-bold md:text-6xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">{siteConfig.title} </span>
                            </h1>
                            <p className="mt-5 text-base text-white sm:text-xl">{siteConfig.tagline}</p>
                            <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-2">
                                <Link
                                    className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black hover:text-white transition-all duration-200 bg-lime-500 rounded-lg sm:mt-16 hover:bg-lime-600 focus:bg-lime-600"
                                    to="/docs/pengenalan">
                                    Mulai Sekarang!
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                                <Link
                                    className="inline-flex items-center px-6 py-4 font-semibold text-black hover:text-white transition-all duration-200 bg-amber-500 rounded-lg hover:bg-amber-600 focus:bg-amber-600"
                                    to="/docs/demo">
                                    Demo Gratis
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 px-20 mt-12 text-left gap-x-12 gap-y-8 md:grid-cols-3 sm:px-0">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 10 10" className='w-10'>
                                        <g id="layer1">
                                            <g id="g259" transform="scale(.1)">
                                                <path
                                                    id="rect32-2-1-1"
                                                    fill="#d1dd25"
                                                    fillOpacity="1"
                                                    strokeWidth="0.251"
                                                    d="M0 36.973a11.668 11.669 0 0 0 11.668 11.58 11.668 11.669 0 0 0 .43-.008h36.556V12.53a11.668 11.669 0 0 0 .032-.86A11.668 11.669 0 0 0 37.017 0a11.668 11.669 0 0 0-11.668 11.668 11.668 11.669 0 0 0 .002.163h-.033v13.377H11.512v.01A11.668 11.669 0 0 0 0 36.885a11.668 11.669 0 0 0 0 .089z"
                                                ></path>
                                                <circle
                                                    id="path202"
                                                    cx="12.606"
                                                    cy="12.035"
                                                    r="11.813"
                                                    fill="#d1dd25"
                                                    fillOpacity="1"
                                                    strokeWidth="0.25"
                                                ></circle>
                                                <path
                                                    id="path206"
                                                    fill="#0bb4ac"
                                                    fillOpacity="1"
                                                    strokeWidth="0.281"
                                                    d="M59.772 99.526c-4.41-1.576-7.392-5.056-7.93-9.256-.115-.895-.175-9.935-.134-20.089l.074-18.461h18.683c21.181 0 21.27.008 24.268 2.01 2.815 1.879 4.49 4.424 5.111 7.762.883 4.748-2.07 10.173-6.724 12.355l-1.615.757-8.354.085-8.353.086-.006 6.653c-.003 3.66-.13 7.516-.283 8.57-.572 3.96-3.026 7.267-6.65 8.962-2.415 1.13-5.836 1.37-8.087.566z"
                                                ></path>
                                                <path
                                                    id="path210"
                                                    fill="#000"
                                                    fillOpacity="0"
                                                    strokeWidth="0.281"
                                                    d="M33.655 99.304c-3.13-1.268-5.24-3.253-6.828-6.42l-.856-1.71-.284-8.08c-.156-4.442-.364-8.158-.462-8.257s-3.802-.243-8.23-.32l-8.049-.14-1.835-1.034c-2.345-1.32-4.45-3.427-5.438-5.444-.694-1.418-.776-1.888-.776-4.473 0-2.594.081-3.056.793-4.533 1.011-2.097 3.434-4.548 5.483-5.547 1.48-.722 1.959-.795 6.598-1.016 2.752-.131 11.625-.307 19.718-.39l14.716-.152-.166 20.072-.167 20.072-.916 1.601c-1.75 3.059-4.011 4.945-6.964 5.809-1.94.567-4.887.55-6.337-.038"
                                                ></path>
                                                <path
                                                    id="path216"
                                                    fill="#0bb4ac"
                                                    fillOpacity="1"
                                                    strokeWidth="0.281"
                                                    d="m51.859 28.533.077-20.012.908-1.844C55.064 2.17 60.29-.61 64.946.241c4.885.892 8.803 4.852 9.595 9.697.152.926.277 4.733.278 8.46l.002 6.774 7.791.132c7.278.124 7.903.175 9.477.778 3.182 1.219 5.347 3.177 6.817 6.168.69 1.406.764 1.85.764 4.643 0 2.768-.079 3.256-.757 4.704-.928 1.98-3.128 4.359-4.947 5.349-2.93 1.594-3.01 1.6-23.423 1.6H51.782z"
                                                ></path>
                                                <path
                                                    id="path206-9"
                                                    fill="#0bb4ac"
                                                    fillOpacity="1"
                                                    strokeWidth="0.281"
                                                    d="M.849 59.71c1.576-4.41 5.056-7.392 9.255-7.93.895-.115 9.935-.175 20.089-.134l18.462.074v18.683c0 21.181-.008 21.27-2.01 24.269-1.88 2.814-4.425 4.49-7.763 5.11-4.748.883-10.173-2.07-12.354-6.724l-.757-1.615-.086-8.354-.085-8.353-6.654-.006c-3.659-.003-7.515-.13-8.57-.283-3.959-.572-7.266-3.026-8.962-6.65C.284 65.383.044 61.962.85 59.71Z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="ml-3 mb-0 text-sm text-white">Terintegerasi Satu-Sehat</p>
                                </div>

                                <div className="flex items-center">
                                    <KominfoLogo className='w-16 h-16'></KominfoLogo>
                                    <p className="ml-3 mb-0 text-sm text-white">Tersertifikasi PSE Kominfo</p>
                                </div>

                                <div className="col-span-2 md:col-span-1 flex items-center">
                                    <BpjsLogo className='w-10'></BpjsLogo>
                                    <p className="ml-3 mb-0 text-sm text-white">BPJS (Segera Hadir)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="hidden md:block w-4/12" src={heroBackgroundImg} alt="" />

                </div>

            </section>
        </div>

    )
}
export default Hero;