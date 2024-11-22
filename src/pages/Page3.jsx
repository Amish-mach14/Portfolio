import React from 'react'
import Header2 from '../components/Header2'
import LoadingBar from '../components/LoadingBar'

function Page3() {
  return (
    <div className='h-[fir-content] pl-28 pr-28 pd-28 w-screen text-white text-2xl'>
        <Header2 def='SKILLS'/>
        <div className='m-5 h-[3vw] flex flex-row'>
        <div className='w-[50%] h-full text-[15px]'>
            <div className='w-[25vw] flex flex-row justify-between items-center'>
            <p><b>HTML</b></p>
            <span><b>85%</b></span>
            </div>
            <LoadingBar per='85'/>
          </div>

          <div className='w-[50%] h-full text-[15px]'>
            <div className='w-[25vw] flex flex-row justify-between items-center'>
            <p><b>REACT</b></p>
            <span><b>75%</b></span>
            </div>
            <LoadingBar per='75'/>
          </div>

        </div>

        <div className='m-5 h-[3vw] flex flex-row'>
        <div className='w-[50%] h-full text-[15px]'>
            <div className='w-[25vw] flex flex-row justify-between items-center'>
            <p><b>CSS</b></p>
            <span><b>80%</b></span>
            </div>
            <LoadingBar per='80'/>
          </div>

          <div className='w-[50%] h-full text-[15px]'>
            <div className='w-[25vw] flex flex-row justify-between items-center'>
            <p><b>JAVA</b></p>
            <span><b>80%</b></span>
            </div>
            <LoadingBar per='80'/>
          </div>

        </div>

        <div className='m-5 h-[3vw] flex flex-row'>
        <div className='w-[50%] h-full text-[15px]'>
            <div className='w-[25vw] flex flex-row justify-between items-center'>
            <p><b>JAVASCRIPT</b></p>
            <span><b>75%</b></span>
            </div>
            <LoadingBar per='75'/>
          </div>

          <div className='w-[50%] h-full text-[15px]'>
            <div className='w-[25vw] flex flex-row justify-between items-center'>
            <p><b>SQL</b></p>
            <span><b>70%</b></span>
            </div>
            <LoadingBar per='70'/>
          </div>

        </div>

    </div>
  )
}

export default Page3