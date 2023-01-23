import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'

const Hotel = () => {
  const urlImage = [
    'https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/09/guest-room-29.jpg',
    'https://cdn.kiwicollection.com/media/room_images/PR005453/xl/005453-king-pier-view-room-detaili.jpg',
    'https://cdn.kiwicollection.com/media/property/PR005453/xl/005453-01-MalibuBeachInn_317_Balcony-0029_-Malibu%20Beach%20Inn-.jpg?cb=1632251361',
    'https://cdn.kiwicollection.com/media/room_images/PR005453/xl/005453-14-king-premiere-ocean-front-roommalibu-beach-inn-hotel-spa-2019.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/195888875.jpg?k=36067abb3107686533ade5d2aa42f58a9810022a928a48723a998d67b85751f4&o=&hp=1',
    'https://q-xx.bstatic.com/xdata/images/hotel/max750/183146599.jpg?k=349a165f4fec4e10c000b5af4cebce9786e49381e03f8c623c958cd7e508400e&o='
  ];

  const [selectImage, setSelectImage] = useState(urlImage[0]);



  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar />
        <Header type={"list"} />
      </div>
      <div className='container mx-auto px-3 lg:px-36 py-5 text-slate-800'>
        <div className='flex flex-col gap-2 relative'>
          <h1 className='lg:text-4xl text-2xl font-bold'>Grand Hotel</h1>
          <button className='absolute right-0 invisible sm:visible mt-2 py-2 px-3 rounded-xl font-bold bg-sky-400 border-2 border-sky-400 text-slate-800 text-base hover:text-sky-500 hover:bg-transparent transition duration-300'>Reserve or Book Now</button>
          <div className='flex flex-row text-sm items-center gap-x-2 bg-slate-200 self-start px-1 rounded-lg'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className='text-sky-700 text-base'>Excell location - 500m from center</span>
          <span className='text-base'>Book a stay over $114 at this property and get a free airport taxi</span>
          <div className='flex sm:flex-row flex-col justify-between'>
            <div className='flex-grow h-[30rem] bg-cover bg-center rounded-xl  transition-all duration-200 delay-150'
              style={{ backgroundImage: `url(${selectImage})` }}
            >
            </div>
            <div className='flex-none max-h-[30rem] sm:w-44 sm:h-auto flex sm:flex-col flex-row items-center gap-4 overflow-y-auto sm:py-2 py-3 sm:px-0 px-1 scrollbar-hide'>

              {urlImage.map((h, index) => (
                <div key={index} className={`flex-shrink-0 sm:h-20 h-20 w-20 sm:w-32 bg-cover bg-center rounded-xl transition-all duration-200 delay-150 cursor-pointer ${selectImage === h ? 'shadow-md ease-in-out -translate-y-1 sm:-translate-x-1 scale-110' : 'brightness-75 hover:filter-none'}`}
                  style={{ backgroundImage: `url(${h})` }}
                  onClick={() => { setSelectImage(h) }}
                ></div>
              ))}
            </div>
          </div>
          <div className='flex flex-col lg:flex-row my-5'>
            <div className='lg:w-2/3 lg:pr-5 pb-5 lg:pb-0'>
              <h1 className='text-2xl font-bold'>Stay in the heart of Krakow</h1>
              <p className='text-sm mt-2 text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam amet unde reiciendis maxime, quidem cum praesentium minima asperiores nulla vitae ullam incidunt aliquid ab illum. Molestias dolore, quisquam ratione provident et sit dolor similique, culpa suscipit inventore aperiam harum consequatur est assumenda officiis corporis pariatur mollitia iure. Quos, cumque.</p>
            </div>
            <div className='border rounded-3xl p-4 lg:w-4/12 self-start'>
              <h1 className='font-bold text-2xl'>$945 <span className='font-normal'>(9 nights)</span></h1>
              <div><FontAwesomeIcon icon={faStar} color='#FFD700' />
                <span className='mx-3 font-bold text-sm'>4.8</span>
                <span className='font-light text-sm text-slate-400'>(256 reviews)</span>
              </div>

              <div className='bg-slate-100 my-3 p-3 rounded-2xl'>
                <h1 className='text-xl font-bold'>Perfect for a 9-nigh stay!</h1>
                <p className='text-sm'>Located in the real heart of Krakow, this property has an axcellent location score of 9.8!</p>
              </div>
              <button className='mt-3 w-full py-2 rounded-xl font-bold bg-sky-400 border-2 border-sky-400 text-slate-800 text-base hover:text-sky-500 hover:bg-transparent transition duration-300'>Reserve or Book Now!</button>
            </div>

          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel