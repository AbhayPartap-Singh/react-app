import React from 'react'
import Page1 from './components/page 1/page1'
const App = () => {
  const users=[
     {
    id: 1,
    img: 'https://i.pinimg.com/1200x/c1/e6/1f/c1e61f587deecaf96554ed7ca249f213.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad laborum maxime perferendis reprehenderit nostrum?',
    btn: 'Satisfied',
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/736x/0e/33/3a/0e333a70c93f67764a7e8453a9730f1a.jpg',
    text: 'Quisquam pariatur assumenda provident minus nostrum architecto voluptate hic dignissimos perspiciatis!',
    btn: 'Loved it',
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/736x/0b/3d/46/0b3d46b271f1ea7f5fb790f8103ddac4.jpg',
    text: 'Aperiam, fuga deserunt! Nemo aliquam labore atque voluptas!',
    btn: 'Good one',
  },
  {
    id: 4,
    img: 'https://i.pinimg.com/1200x/b7/fc/18/b7fc18555f0ab518c716222ee35c8417.jpg',
    text: 'Minima fugiat eius laboriosam tempore, voluptate perspiciatis cumque doloremque est.',
    btn: 'Awesome',
  },
  {
    id: 5,
    img: 'https://i.pinimg.com/736x/47/94/3b/47943bf6bf660c8a37dceef27b8a53cf.jpg',
    text: 'Beatae, obcaecati. Aliquam commodi recusandae inventore explicabo aspernatur deleniti aliquid.',
    btn: 'Perfect',
  }
  ]
  return (
    <div>
      <Page1 users={users}/>
      
      </div>
  )
}

export default App

