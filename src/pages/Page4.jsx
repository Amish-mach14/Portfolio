import React from 'react'
import langingpgbg from "../assets/langingpgbg.png";
import Header2 from '../components/Header2';
import { SlSocialInstagram} from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
function Page4() {
  return (
    <div className='h-screen p-28 w-screen text-black text-2xl'>
        <Header2 def='MY PROJECTS'/>
        <div className='flex flex-row'>
        <a href='https://amish-mach14.github.io/Course/' target="_blank" rel="noopener noreferrer">
        <div className='pt-12'>
            <div className='w-[20vw] h-[12vw]' style={{
                backgroundImage: `url(${langingpgbg})`,
                backgroundSize: 'cover',
            }}>

            </div>
            <div className='bg-yellow-400 w-[20vw] h-[2vw] flex items-center justify-center'>
                <p>Course</p>
            </div>
        </div>
        </a>
        </div>

        <div className='mt-20'>
        <div className='flex flex-row'>
        <a
            href="https://www.instagram.com/amishmishraa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 hover:bg-green-400 hover:rounded-[5px] p-2"
        >
            <SlSocialInstagram color="white" size={30} />
        </a>
            

        <div className='text-white text-[15px] pl-3 mt-2.5'>
            <p>Instagram</p>
            </div>
        </div>
        
        <div className='flex flex-row'>
        <a
            href="https://www.linkedin.com/in/amish-mishra-4236b32b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 hover:bg-green-400 hover:rounded-[5px] p-2"
        >
            <TiSocialLinkedin color="white" size={30} />
        </a>
            

        <div className='text-white text-[15px] pl-3 mt-2.5'>
            <p>Linked In</p>
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Page4