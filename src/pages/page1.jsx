import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'

const Page1 = () => {
  const tiltref = useRef(null)
  const [Xval, setXval] = useState(0)
  const [Yval, setYval] = useState(0)

  const mouseMoving = (e) => {
    setXval((e.clientX-tiltref.current.getBoundingClientRect().x-tiltref.current.getBoundingClientRect().width/2)/50)
    setYval(-(e.clientY-tiltref.current.getBoundingClientRect().y-tiltref.current.getBoundingClientRect().height/2)/20)

    tiltref.current.style.transform = `rotateX(${Yval}deg) rotateY(${Xval}deg)`
  }
  
  return (
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
    }} className="h-screen relative">
        <div id='page1-in' className="relative shadow-xl p-28 shadow-gray-700 h-full w-full rounded-[50px] bg-[url(https://3.bp.blogspot.com/-2o90pia4k3w/Tqncz2uyO_I/AAAAAAAAADc/nsjvFQc8_Iw/s1600/background_image.jpg)]">
          <TiltText abc={tiltref}/>
        </div>
    </div>
  )
}

export default Page1