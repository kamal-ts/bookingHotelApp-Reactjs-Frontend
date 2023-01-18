import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="lg:px-36 px-3">
                <div className="flex flex-row py-4 justify-between ">
                    <Link to={'/'} className='text-lg font-semibold text-sky-400'>BookingApp</Link>
                    <div>
                        <button className='text-slate-800 rounded-md font-semibold px-4 mr-4 bg-sky-400 hover:bg-sky-300 py-1 text-center transition-all duration-200'>Register</button>
                        <button className='text-white hover:text-white rounded-md font-semibold px-4 bg-slate-700 hover:bg-slate-500 py-1 text-center transition-all duration-200'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar