import CustomLink from 'components/general/CustomLink'
import React from 'react';

function RegisterContent({ click, setClick, balance }) {
    return (
        <div className='w-[1/2] flex flex-col'>
            <h1 className='max-w-[480px] mb-4 font-orbitron font-normal text-[26px] lg:text-[40px] text-white leading-[35px] lg:leading-[55px]'>To register for the pre-sale, you have to do the following:</h1>
            <div className='py-2 flex items-center'>
                <i className={`ri-checkbox-circle-line text-[#A4A4A4] text-xl cursor-pointer mr-4 ${balance > 250 ? "text-green-500" : ""}`}></i>
                <span className="text-[#DCDCDC] font-DMSans text-[18px] leading-[26px]">Have a minimum balance of 250 ADA in your wallet</span>
            </div>
            <div className='py-2 flex items-center'>
                <i className={`ri-checkbox-circle-line text-[#A4A4A4] text-xl cursor-pointer mr-4 ${click ? "text-green-500" : ""}`}></i>
                <span className="text-[#DCDCDC] font-DMSans text-[18px] leading-[26px]">Join Defi Pronto discord channel</span>
            </div>
            <div className="py-4 md:py-6 my-2">
                <p className='lg:w-[542px] w-full  mt-3 text-left  text-theme-100 text-base   font-DMSans leading-[18px] md:leading-[24px]'>
                    To join our discord use this link <CustomLink href={'#'} ><span className='text-theme-main font-semibold underline' onClick={setClick}> DefiPronto Discord </span></CustomLink>
                </p>
                <p className='lg:w-[542px] w-full mt-3 text-left  text-white text-base  font-DMSans leading-[24px]'>
                    <span className='text-theme-main'> Note:</span> Please note you must have a minimum of 250 ADA to register
                </p>
            </div>
        </div>
    )
}

export default RegisterContent