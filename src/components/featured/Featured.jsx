import React from 'react'

const Featured = () => {
    return (
        <div className='container mx-auto'>

            <div className='px-3 lg:px-36 pt-16 pb-10 lg:pt-0 flex flex-row justify-between gap-5 overflow-x-auto z-10 '>

                <div className='relative px-28 lg:w-80 h-72 lg:h-96 rounded-xl overflow-hidden group cursor-pointer'>
                    <div className='absolute w-full h-full left-0 bg-cover bg-center group-hover:scale-125 transition-all duration-500 brightness-75 group-hover:filter-none'
                        style={{ backgroundImage: 'url(./img/dublin.jpg)' }}
                    ></div>
                    <div className='absolute bottom-5 left-5 text-white w-full '>
                        <h1 className='text-4xl font-semibold'>Dublin</h1>
                        <h2 className='text-2xl font-semibold'>123 properties</h2>
                    </div>
                </div>
                <div className='relative px-28 lg:w-80 h-72 lg:h-96 rounded-xl overflow-hidden group cursor-pointer'>
                    <div className='absolute w-full h-full left-0 bg-cover bg-center group-hover:scale-125 transition-all duration-500 brightness-75 group-hover:filter-none'
                        style={{ backgroundImage: 'url(./img/austin.jpg)' }}
                    ></div>
                    <div className='absolute bottom-5 left-5 text-white w-full'>
                        <h1 className='text-4xl font-semibold'>Austin</h1>
                        <h2 className='text-2xl font-semibold'>123 properties</h2>
                    </div>
                </div>
                <div className='relative px-28 lg:w-80 h-72 lg:h-96 rounded-xl overflow-hidden group cursor-pointer'>
                    <div className='absolute w-full h-full left-0 bg-cover bg-center group-hover:scale-125 transition-all duration-500 brightness-75 group-hover:filter-none'
                        style={{ backgroundImage: 'url(./img/reno.jpg)' }}
                    ></div>
                    <div className='absolute bottom-5 left-5 text-white w-full'>
                        <h1 className='text-4xl font-semibold'>Reno</h1>
                        <h2 className='text-2xl font-semibold'>123 properties</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured