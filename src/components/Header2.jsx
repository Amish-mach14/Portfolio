import React from 'react'

function Header2(props) {
  return (
    <div className='text-white flex items-center'>
        <h2>{props.def}</h2>
        <div className='h-[1px] mt-[4px] w-[100px] ml-[6px] bg-green-500'>
    </div>
    </div>
    
  )
}

export default Header2