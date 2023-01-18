import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList';
import Modal from '../../components/modal/Modal';
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

  const location = useLocation();

  if (!location.state) {
    location.state = {
      destination: '',
      date: [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ],
      option: {
        adult: 1,
        children: 0,
        room: 1
      }
    }
  };

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);

  const img = [11, 12, 13, 14, 15, 16, 17, 18, 19, 110]

  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar />
        <Header type='list' />
      </div>
      <div className='container mx-auto'>
        <div className='px-3 lg:px-36 flex justify-center text-base'>
          <div className='flex flex-col lg:flex-row justify-between items-stretch w-full gap-5 py-5 text-slate-800'>
            <div className='bg-slate-50 border border-slate-300 w-full lg:w-64 p-4 rounded-3xl self-start lg:sticky relative lg:top-3'>
              <h1 className='text-2xl font-bold'>Search</h1>
              <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="destination" className='font-semibold'>Destination</label>
                <input className='px-2 py-3 rounded-lg focus:outline-sky-400' type="text" defaultValue={destination} placeholder='Destination' id="destinaion" />
              </div>
              <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="date" className='font-semibold'>Check-in Date</label>
                <span className='px-2 py-3 rounded-lg bg-white cursor-pointer'
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                <Modal
                  visible={openDate}
                  onCloseModal={() => setOpenDate(false)}
                  componen={
                    <DateRange
                      className=''
                      editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                    />
                  }
                />
              </div>
              <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="date" className='font-semibold'>Options</label>
                <div className='flex flex-row ml-4'>
                  <span className='flex-1 text-sm'>Min price per night</span>
                  <input className='w-16 rounded-sm pl-2 py- focus:outline-sky-400' type="number" name="" id="" placeholder='0' />
                </div>
                <div className='flex flex-row ml-4'>
                  <span className='flex-1 text-sm'>Max price per night</span>
                  <input className='w-16 rounded-sm pl-2 py- focus:outline-sky-400' type="number" name="" id="" placeholder='0' />
                </div>
                <div className='flex flex-row ml-4'>
                  <span className='flex-1 text-sm'>Adult</span>
                  <input className='w-16 rounded-sm pl-2 py- focus:outline-sky-400' min={1} type="number" name="" id="" placeholder='0' defaultValue={option.adult} />
                </div>
                <div className='flex flex-row ml-4'>
                  <span className='flex-1 text-sm'>Children</span>
                  <input className='w-16 rounded-sm pl-2 py- focus:outline-sky-400' min={0} type="number" name="" id="" placeholder='0' defaultValue={option.children} />
                </div>
                <div className='flex flex-row ml-4'>
                  <span className='flex-1 text-sm'>Room</span>
                  <input className='w-16 rounded-sm pl-2 py- focus:outline-sky-400' min={1} type="number" name="" id="" placeholder='0' defaultValue={option.room} />
                </div>
              </div>
              <button className='w-full bg-slate-800 font-semibold text-slate-300 mt-4 py-2 rounded-2xl hover:bg-slate-500 transition-all duration-200'>Search</button>
            </div>
            <div className='flex-auto'>
              {img.map((i, index) => (
                <div key={index}>
                  <SearchItem idImg={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default List