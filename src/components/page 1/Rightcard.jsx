import React from 'react'

const Rightcard = (props) => {
  return (
    <div className='h-full w-1/3 shrink-0 bg-pink-600  rounded-3xl overflow-hidden relative'>
      <img className='h-full w-full object-cover'src={props.img}></img>
      <div className='absolute top-0 left-0 h-full w-full  p-2 flex flex-col justify-between'>
        <h2 className='bg-blue-500 rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div className='text-sm text-amber-100'>
          <p className='text-shadow-2xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad laborum maxime perferendis reprehenderit nostrum?</p>
        <div className='text-xl text-amber-50'>
          <button className='bg-blue-400 font-medium px-2 py-2 rounded-full'>statified</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Rightcard
