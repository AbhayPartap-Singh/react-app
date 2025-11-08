import React from 'react'

import { ArrowUpRight } from 'lucide-react';

const Leftcontent = () => {
  return (
    <div className='flex flex-col justify-between gap-7  h-full w-1/3 bg-amber-50 py-10 px-10 rounded-3xl'>
    <div>
   <h1 className='text-5xl'>User <br/><span className='text-gray-600'>perspectives</span><br/></h1>
   <br></br>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos voluptatum consequatur ut? Veniam placeat voluptate, accusantium ratione commodi quia temporibus necessitatibus vero quis, deleniti sapiente doloremque distinctio saepe deserunt.</p>
    </div>
    <div >
    
    <ArrowUpRight size={70}/>
    </div>
    </div>
  )
}

export default Leftcontent
