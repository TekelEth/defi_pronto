import React from 'react'

function Completed() {
  return (
    <div className='flex items-center justify-center flex-col'>
         <i className={`ri-checkbox-circle-line text-[6rem]  cursor-pointer text-green-500`}></i>
         <h1 className="text-white text-[22px] mb-3 leading-[23px] font-orbitron">Registration Completed</h1>
         <span className="max-w-[435px] text-center text-[#AFAFAF] textlbase">It may take a while for your transaction to be confirmed by the blockchain after submitting. You can always check your transaction status in transaction list.</span>
    </div>
  )
}

export default Completed;