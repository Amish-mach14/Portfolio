import React from 'react'
import Header2 from '../components/Header2'
import { BsCaretRightFill } from "react-icons/bs";

const Page2 = () => {
  return (
        <div className='p-28 h-full w-full text-white text-2xl'>
            <Header2 def='ABOUT ME'/>
            <div className='w-full h-[25vw] mt-10 flex flex-row items-center justify-between p-5'>
            <div className='h-[25vw] w-[26%]' style={{
                backgroundImage: `url(https://media.licdn.com/dms/image/v2/D4D03AQEOVlfeOgjs6g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721016075174?e=1737590400&v=beta&t=S8s8Ulpd79ldHmmxzdTfFzAFHgh7lILQL4IvzezPis4)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                
            </div>
            <div className='ml-3 h-[25vw] w-[76%]'>
                <p>Hi there! 👋 I'm Amish Mishra, a passionate 19 year old student living in Mumbai, India. I have a knack for Web Development and I love turning ideas into reality through modern HTML, CSS and Javascript and React js. My journey is fueled by curiosity and the constant pursuit of growth in everything I do.

When I'm not working on any project, you'll probably find me learning a new skill, exploring a new game or reading a book. I strive to blend creativity and logic to craft meaningful solutions and experiences.</p>
            <div className='flex flex-row'>
                <BsCaretRightFill color="green" className='mt-2'/>
                <p className='mt-0.5'><b>WEBSITE:</b> <a href="https://portfolio-amish.netlify.app/" target="_blank"
            rel="noopener noreferrer"> https://portfolio-amish.netlify.app/ </a></p>
            </div>

            <div className='flex flex-row'>
                <BsCaretRightFill color="green" className='mt-2'/>
                <p className='mt-0.5'><b>PHONE:</b> +91-7700900234 </p>
            </div>

            <div className='flex flex-row'>
                <BsCaretRightFill color="green" className='mt-2'/>
                <p className='mt-0.5'><b>EMAIL:</b> amishmishra77@gmail.com </p>
            </div>

            <div className='flex flex-row'>
                <BsCaretRightFill color="green" className='mt-2'/>
                <p className='mt-0.5'><b>LOCATION:</b> Mumbai, India </p>
            </div>

            </div>
            </div>
        </div>
  )
}

export default Page2