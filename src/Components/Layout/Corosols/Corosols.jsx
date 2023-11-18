import React from 'react';
import multivendor from "./multi-vendor.jpg";
import shoppingcart from "./shoppingcart.jpg";

const Corosols = () => {
  return (
    <div id="default-carousel" class="relative w-full" data-carousel="slide">

    <div class="relative h-56 overflow-hidden  md:h-96">
  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={multivendor} class="absolute block w-1/3 h-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/850/400/image/6532bde94b7ba239.jpg?q=90" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item style={{backgroundColor:"rgb(77,210,253)"}}>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-2 mx-4 md:mx-10'>
            <div className='text-xs md:text-3xl text-red-700 ml-4 md:ml-14 mx-2 my-2 font-title'>
                <div>Multi-Vendor Platform</div>
                <div>Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:grid-cols-6 to only apply the grid-cols-6 utility on hover.</div>
                </div> 
            <div className='m-2 border-2'><img src={multivendor} class="absolute block w-1/3 h-2/3 md:h-full -translate-x-14 -translate-y-1/2 top-1/2 right-2" alt="Vendors"/></div>
            </div>
            </div>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div className='flex' style={{backgroundColor:"rgb(77,210,253)"}}>
                <div>
            <div className='text-xs md:text-3xl text-red-700 mx-2 my-2 font-title'>Multi-Vendor Platform</div> 
            <div className='m-4 border-4'><img src={shoppingcart} className=''/></div>
            </div>
            </div>
        </div>
 
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
 
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
  )
}

export default Corosols;