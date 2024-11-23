import React from 'react'
import Page1 from './page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Bg from "../assets/Bg.png";

function Page() {
  return ( 
    <>
    <div className='p-7 w-full min-h-screen' style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }}>
    <div className='rounded-[50px] bg-black/50'>
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    </div>
    </div>
    </>
  )
}

export default Page