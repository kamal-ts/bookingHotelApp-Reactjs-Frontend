import React from 'react'

const Modal2 = () => {
    return (
        <div className='fixed inset-0 flex justify-center items-center bg-opacity-20 bg-black backdrop-blur-sm'>
            <div className='bg-white p-10 rounded-lg w-96 h-96 relative'>
                <span>Modal</span>
                <div className='absolute -top-5 left-1/2 rounded-full w-10 h-10 bg-red-200 flex cursor-pointer -translate-x-1/2'>
                    <span className='m-auto font-bold text-red-600 text-xl '>
                        X
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Modal2