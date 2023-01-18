import React from 'react'

const Modal = ({ visible, onCloseModal, componen }) => {

  const handleOnClose = (e) => {
    if (e.target.id === "container") onCloseModal();
  }

  if (!visible) return null;
  return (
    <div
      id='container'
      onClick={handleOnClose}
      className='fixed inset-0 bg-black h-screen bg-opacity-30 backdrop-blur-sm flex justify-center items-center transition-all duration-300 z-20'>
      <div id='element' className='bg-white p-4 rounded-lg relative'>
        {componen}
        <div
          id='container'
          className='absolute -top-4 -right-4 rounded-full w-8 h-8 bg-red-100 border border-red-500 flex cursor-pointer '
        >
          <span
            id='container'
            className='m-auto font-bold text-red-500 text-sm'>
            X
          </span>
        </div>
      </div>
    </div>
  )
}

export default Modal