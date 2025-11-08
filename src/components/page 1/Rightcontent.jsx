import React from 'react'
import Rightcard from './Rightcard'
const Rightcontent = (props) => {
  return (
    <div className='flex flex-nowrap gap-10  overflow-x-auto bg-amber-50 h-full w-2/3 rounded-3xl px-3 py-3 '>
    {props.users.map(function(elem){
      return <Rightcard img={elem.img}/>
    })}
    </div>
  )
}

export default Rightcontent
