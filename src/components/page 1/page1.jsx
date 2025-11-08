import React from 'react'
import Page1content from './Page1content'
import Navbar from './navbar'

const Page1 = (props) => {
  return (
    <div className='h-screen w-screen bg-cyan-300'>
      <Navbar/>
      <Page1content users={props.users}/>
    </div>
  )
}

export default Page1

