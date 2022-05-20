import React from 'react'

function Header({header, content}) {
  return (
    <div className='w-full py-8 max-w-[60%] mx-auto text-center flex flex-col items-center bg-red-[500] z-50 justify-center'>
        <span className='mb-3 font-monument font-[400] text-[49px] text-white leading-[59px]'>{header}</span>
        <span className='font-DMSans font-[400] text-[16px] leading-[20.8px] text-[#A4A4A4] w-[70%] text-center'>{content}</span>
    </div>
  )
}

export default Header