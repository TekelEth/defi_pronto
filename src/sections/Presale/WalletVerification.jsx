import Button from 'components/general/Button'
import { useState } from 'react'

function WalletVerification({ click, balance }) {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true)
    }, 3000)
  }

  return (
    <div className='p-5 w-[1/2] md:p-14 py-12  flex mt-10 justify-center flex-col border-2 w-full border-theme-main rounded-[10px] bg-theme-card'>
      <div className='mb-4 w-full '>
        <span className='text-[#A4A4A4] font-orbitron leading-[23px] font-semibold  text-[19px]'>Wallet Address</span>
      </div>
      <form onSubmit={handleVerify} >
        <div className='my-4'>
          <input type='text' placeholder='Enter your wallet address' className='w-full rounded-[8px] focus:outline-none border-2 bg-transparent border-theme-main md:border-[#515050] px-6 py-3  text-lg text-gray-200' required />
        </div>
        <div className='my-4'>{verified ? <Button variant={'contained'} color={(click && balance > 250) ? 'primary' : 'secondary'} title="Register" icon='ri-arrow-right-up-line' /> : <Button variant={'contained'} color={(click && balance > 250) ? 'primary' : 'secondary'} title={loading ? "Verifying..." : "Verify Address"} icon='ri-arrow-right-up-line' disabled={(click && balance > 250) ? false : true} />}</div>
      </form>
    </div>
  )
}

export default WalletVerification