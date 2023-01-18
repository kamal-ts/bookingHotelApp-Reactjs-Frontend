import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import Modal from '../modal/Modal';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {

    const navigate = useNavigate();
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const handleOnCloseModal = () => {
        setOpenDate(false)
        setOpenOption(false)
    }

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOption, setOpenOption] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const hanleOption = (name, operation) => {
        setOption(prev => {
            return {
                ...prev,
                [name]: operation === 'i' ? option[name] + 1 : option[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate("hotels", {
            state: {
                destination,
                date: state,
                option
            }
        });
    }

    const menu = [
        'Stays',
        'Flights',
        'Car rentals',
        'Atractions',
        'Airport Taxis'
    ];
    const [selectMenu, setSelectMenu] = useState(menu[0])

    return (
        <div className='container mx-auto lg:px-36'>

            <div className={` pt-2 text-slate-400 relative w-full ${type !== 'list' ? 'pb-28' : ' pb-12'}`}>
                <div className='px-3 lg:px-0 flex flex-row lg:gap-5 overflow-x-auto lg:overflow-visible py-4 '>

                    {menu.map((m, index) => (
                        <div key={index} className={`cursor-pointer text-sm lg:text-lg font-semibold flex-shrink-0  px-4 py-2 group `}
                            onClick={() => setSelectMenu(m)}
                        >
                            <span className={`transition-all ${selectMenu === m ? 'text-sky-400' : ''}`}>{m}</span>
                            <div className={`mt-3 transition-all w-auto group-hover:scale-x-150 group-hover:border-b-2 border-slate-400 ${selectMenu === m ? 'border-b-2  w-auto scale-x-150 border-sky-400' : ''}`}></div>
                        </div>
                    ))}
                </div>

                {type !== 'list' &&
                    <>

                        <div className='px-3 lg:px-0'>
                            <h1 className='text-4xl mt-12 font-bold capitalize text-sky-400'>Lorem ipsum dolor sit amet.</h1>
                            <p className='text-lg mt-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium sequi similique soluta! Blanditiis, ullam vitae?</p>
                            <button className='transition-all duration-200 hover:bg-sky-300 mt-5 py-2 px-4 bg-sky-400 text-slate-800 shadow-lg rounded-full font-semibold'>Sign in / Register</button>

                        </div>
                        <div className='px-3 lg:px-0 lg:-bottom-7 -bottom-24 absolute w-full'>

                            <div className='py-2 px-4 lg:px-2 rounded-xl shadow-lg bg-white flex flex-col lg:flex-row justify-between text-slate-600 items-center text-lg '>
                                <div className='flex flex-row gap-3 items-center border-b border-gray-200 lg:w-72 w-full py-1 lg:py-auto'>
                                    <FontAwesomeIcon className='w-10' icon={faBed} />
                                    <input type="text"
                                        placeholder='Where are you going?'
                                        className='focus:outline-0 w-full'
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>

                                <div className='relative flex flex-row gap-3 items-center border-b border-gray-200 lg:w-72 w-full py-1 lg:py-auto cursor-pointer '>
                                    <FontAwesomeIcon className='w-10' icon={faCalendarDays} onClick={() => setOpenDate(!openDate)} />
                                    <span
                                        onClick={() => setOpenDate(!openDate)}
                                        className='w-full'>{`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(state[0].endDate, "MM/dd/yyyy")}`}</span>
                                </div>

                                <div className='relative flex flex-row gap-3 items-center border-b border-gray-200 lg:w-72 w-full py-1 lg:py-auto cursor-pointer'>
                                    <FontAwesomeIcon className='w-10' icon={faPerson} onClick={() => setOpenOption(!openOption)} />
                                    <span className='w-full'
                                        onClick={() => setOpenOption(!openOption)}
                                    >{`${option.adult} adult, ${option.children} children, ${option.room} room`}</span>
                                </div>

                                <button className='transition bg-sky-400 text-slate-800 hover:bg-sky-300 py-1 px-4 lg:rounded-full rounded-md font-semibold lg:w-10 lg:h-10 w-full mt-2 lg:mt-auto flex justify-center items-center lg:gap-0 gap-3' onClick={handleSearch}>
                                    <FontAwesomeIcon icon={faSearch} /><span className='lg:invisible lg:w-0'>Search</span>
                                </button>

                                <Modal
                                    visible={openDate}
                                    onCloseModal={handleOnCloseModal}
                                    componen={
                                        <DateRange
                                            className=''
                                            editableDateInputs={true}
                                            onChange={item => setState([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={state}
                                        />
                                    }
                                />

                                <Modal

                                    visible={openOption}
                                    onCloseModal={handleOnCloseModal}

                                    componen={<div className='flex flex-col gap-y-4 cursor-default w-72'>
                                        <div className='flex justify-between text-gray-500 font-normal'>
                                            <span>Adult</span>
                                            <div className='flex items-center gap-3 '>
                                                <button className='w-8 outline outline-2 outline-blue-300 rounded-sm disabled:cursor-not-allowed '
                                                    onClick={() => hanleOption('adult', 'd')}
                                                    disabled={option.adult <= 1}
                                                >-</button>
                                                <span className='w-8 text-center'>{option.adult}</span>
                                                <button className='w-8 outline outline-2 outline-blue-300 rounded-sm disabled:cursor-not-allowed '
                                                    onClick={() => hanleOption('adult', 'i')}
                                                >+</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between text-gray-500 font-normal'>
                                            <span>Children</span>
                                            <div className='flex items-center gap-3 '>
                                                <button className='w-8 outline outline-2 outline-blue-300 rounded-sm disabled:cursor-not-allowed '
                                                    onClick={() => hanleOption('children', 'd')}
                                                    disabled={option.children <= 0}
                                                >-</button>
                                                <span className='w-8 text-center'>{option.children}</span>
                                                <button className='w-8 outline outline-2 outline-blue-300 rounded-sm disabled:cursor-not-allowed '
                                                    onClick={() => hanleOption('children', 'i')}
                                                >+</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between text-gray-500 font-normal'>
                                            <span>Room</span>
                                            <div className='flex items-center gap-3 '>
                                                <button className='w-8 outline outline-2 outline-blue-300 rounded-sm disabled:cursor-not-allowed '
                                                    onClick={() => hanleOption('room', 'd')}
                                                    disabled={option.room <= 1}
                                                >-</button>
                                                <span className='w-8 text-center'>{option.room}</span>
                                                <button className='w-8 outline outline-2 outline-blue-300 rounded-sm disabled:cursor-not-allowed '
                                                    onClick={() => hanleOption('room', 'i')}
                                                >+</button>
                                            </div>
                                        </div>
                                    </div>}
                                />

                            </div>

                        </div>
                    </>}
            </div>
        </div >
    )
}

export default Header
