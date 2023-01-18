import React from 'react'

const MailList = () => {
    return (
        <div className='mb-10 px-3 lg:px-36 py-10 flex flex-col justify-center items-center h-56 bg-slate-900 text-white'>
                <h1 className='text-3xl lg:text-4xl font-bold text-center text-sky-400'>Save time, save money!</h1>
                <span className='my-4 text-slate-400'>Sign up and we'll send the best deals to you</span>
                <div className='flex flex-row gap-2'>
                    <input type="email" className='w-64 py-3 px-2 rounded-lg text-gray-500 focus:outline-0' placeholder='Your Email' />
                    <button className='bg-sky-400 text-slate-800 rounded-lg px-2 font-semibold hover:bg-sky-300'>Subscribe</button>
                </div>
        </div>
    )
}

export default MailList