import React from 'react'

const FeaturedProperties = () => {

    const card = 'rounded-3xl overflow-hidden outline outline-1 outline-slate-200 cursor-pointer group hover:bg-sky-50 hover:outline-sky-400 transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-lg';

    return (
        <div className='px-3 lg:px-36 pb-10 container mx-auto'>
            <h1 className='text-xl font-semibold text-slate-800 capitalize'>Home guests love</h1>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5 mt-5 justify-items-stretch'>
                <div className={card}>
                    <div className='h-60 bg-cover bg-center '
                        style={{ backgroundImage: "url('./img/hotels.jpg')" }}
                    >
                    </div>
                    <div className=' flex flex-col my-2 mx-2 text-gray-600'>
                        <span className='text-base font-bold'>Aparthotel Stare Miasto</span>
                        <span className='text-sm'>Madrid</span>
                        <span className='text-sm font-semibold'>Starting from $120</span>
                        <div>
                            <button className='bg-slate-800 px-2 py-1  text-sm mr-2 font-semibold rounded-bl-2xl text-white'>8.9</button>
                            <span>Excellent</span>
                        </div>
                    </div>

                </div>
                <div className={card}>
                    <div className='h-60 bg-cover bg-center '
                        style={{ backgroundImage: "url('./img/apartement.jpeg')" }}
                    >
                    </div>
                    <div className=' flex flex-col my-2 mx-2 text-gray-600'>
                        <span className='text-base font-bold'>Aparthotel Stare Miasto</span>
                        <span className='text-sm'>Madrid</span>
                        <span className='text-sm font-semibold'>Starting from $120</span>
                        <div>
                            <button className='bg-slate-800 px-2 py-1 text-sm mr-2 font-semibold rounded-bl-2xl text-white'>8.9</button>
                            <span>Excellent</span>
                        </div>
                    </div>

                </div>
                <div className={card}>
                    <div className='h-60 bg-cover bg-center '
                        style={{ backgroundImage: "url('./img/resort.jpeg')" }}
                    >
                    </div>
                    <div className=' flex flex-col my-2 mx-2 text-gray-600'>
                        <span className='text-base font-bold'>Aparthotel Stare Miasto</span>
                        <span className='text-sm'>Madrid</span>
                        <span className='text-sm font-semibold'>Starting from $120</span>
                        <div>
                            <button className='bg-slate-800 px-2 py-1 text-sm mr-2 font-semibold rounded-bl-2xl text-white'>8.9</button>
                            <span>Excellent</span>
                        </div>
                    </div>

                </div>
                <div className={card}>
                    <div className='h-60 bg-cover bg-center '
                        style={{ backgroundImage: "url('./img/villa.jpg')" }}
                    >
                    </div>
                    <div className=' flex flex-col my-2 mx-2 text-gray-600'>
                        <span className='text-base font-bold'>Aparthotel Stare Miasto</span>
                        <span className='text-sm'>Madrid</span>
                        <span className='text-sm font-semibold'>Starting from $120</span>
                        <div>
                            <button className='bg-slate-800 px-2 py-1 text-sm mr-2 font-semibold rounded-bl-2xl text-white'>8.9</button>
                            <span>Excellent</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties