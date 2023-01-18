import React from 'react'

const PropertyList = () => {
    const img = [
        './img/hotels.jpg',
        './img/apartement.jpeg',
        './img/resort.jpeg',
        './img/villa.jpg',
        './img/villa.jpg'
    ];

    return (
        <div className='container mx-auto'>
            <div className='px-3 lg:px-36 pb-10'>
                <h1 className='text-xl font-semibold text-slate-800 capitalize'>Browse by property type</h1>
                <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-3 gap-5 mt-5 justify-items-stretch'>
                    {img.map((m, index) => (

                        <div className="rounded-3xl overflow-hidden outline outline-1 outline-slate-200 cursor-pointer group hover:bg-sky-50 hover:outline-sky-400 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center py-5">
                            <div className='h-20 w-20 bg-cover bg-center rounded-full'
                                style={{ backgroundImage: `url(${m})` }}
                            >

                            </div>
                            <span className='text-lg font-semibold mt-2'>Hotels</span>
                            <span className='text-sm text-slate-400'>233 hotels</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default PropertyList