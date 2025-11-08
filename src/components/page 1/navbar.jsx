import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly  w-screen bg-amber-50 py-4 px-10'>
      <h4 className='bg-black text-amber-50 rounded-full py-3 px-4'>Online Banking</h4>
      <button className='bg-black text-amber-50 rounded-4xl py-3 px-4 tracking-wider uppercase text-sm'> Check more</button>
    </div>
  )
}

export default Navbar
