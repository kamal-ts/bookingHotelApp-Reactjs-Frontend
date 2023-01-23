import React from 'react'

const SearchItem = ({ idImg }) => {
    return (
        <div className='relative flex flex-col lg:flex-row p-3 border border-slate-300 rounded-3xl mb-5 gap-3 justify-between transition-all'>
            <div className='w-full lg:w-56 h-56 bg-cover bg-center rounded-2xl'
                style={{ backgroundImage: `url('https://picsum.photos/500/600?random=${idImg}')` }}></div>
            <div className='flex flex-col text-sm justify-between flex-auto'>
                <h1 className='text-xl font-bold text-slate-800'>Tower Street Apartments</h1>
                <span>500m from center</span>
                <span className='bg-slate-100 text-slate-800 self-start px-1 rounded-md'>Free.airport taxi</span>
                <span className='font-bold'>Studio Apartment with Air conditioning</span>
                <span>Entire studio. 1 batroom, 21m<sup>2</sup> 1 full bed</span>
                <span className='font-bold text-green-700'>Free cancellation</span>
                <span className='text-green-700'>You can cancel later, so lock in this great price today!</span>
            </div>
            <div className='flex flex-col justify-between w-full lg:w-36'>
                <div className='flex flex-row justify-between'>
                    <span className='text-lg font-semibold'>Excellent</span>
                </div>
                <div className='text-end'>
                    <h1 className='text-3xl'>$112</h1>
                    <span className='text-sm'>Includes taxes and fees</span>
                    <button className='mt-3 w-full py-1 rounded-3xl font-bold bg-sky-400 border-2 border-sky-400 text-slate-800 text-sm hover:text-sky-500 hover:bg-transparent transition duration-300'>See avilability</button>
                </div>
            </div>
            <span className='absolute rounded-tr-2xl right-3 text-white bg-slate-800 font-bold px-2 py-1 text-sm'>8.9</span>
        </div>
    )
}

export default SearchItem