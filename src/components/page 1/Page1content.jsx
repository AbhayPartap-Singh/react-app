import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Page1content = (props) => {
  return (
    <div className='flex items-center gap-4  py-10 px-18 h-[90vh] bg-amber-50'>
<Leftcontent/>
<Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
 