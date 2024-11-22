import React from 'react'

function LoadingBar(props) {
  return (
    <div className='h-[6px] w-[25vw] flex flex-row items-center justify-between'>
        <div className='bg-green-500 h-full' style={{ width: `${props.per}%`}}>
            
        </div>
        <div className='bg-gray-900 h-full' style={{ width: `${100 - props.per}%`}}>
            
        </div>
    </div>
  )
}

export default LoadingBar