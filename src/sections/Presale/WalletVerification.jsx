import Button from 'components/general/Button'
import {useState} from 'react'

function WalletVerification({setVerify}) {
    const [value, setValue] = useState('');
    return (
        <div className='p-5 w-[1/2] md:p-14 py-12  flex mt-10 justify-center flex-col border-2 w-full border-theme-main rounded-[10px] bg-theme-card'>
            <div className='mb-4 w-full '>
                <span className='text-[#A4A4A4] font-orbitron leading-[23px] font-semibold  text-[19px]'>Wallet Address</span>
            </div>
          <div className='my-4'>
            <input type='text' onChange={(e) => setValue(e.target.value) } placeholder='Enter your wallet address' className='w-full rounded-[8px] focus:outline-none border-2 bg-transparent border-theme-main md:border-[#515050] px-6 py-3  text-lg text-gray-200'/>
          </div>
            <div className='my-4'><Button variant={'contained'} color={ value?.length > 20 ? 'primary' : 'secondary'} title="Verify Address" icon='ri-arrow-right-up-line' disabled={value?.length > 20 ? false : true} onClick={setVerify} /></div>
        </div>
    )
}

export default WalletVerification