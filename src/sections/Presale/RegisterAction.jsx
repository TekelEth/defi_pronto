import Button from 'components/general/Button'
import CustomLink from 'components/general/CustomLink'
import { useState } from 'react'
import Completed from './CompleteRegistration'

const RegisterContent = ({ click, balance, setRegister, loading }) => {
    return (
        <div className="flex justify-center flex-col">
            <div className='flex items-center mb-4 w-full justify-between'>
                <span className='text-[#A4A4A4] font-orbitron leading-[23px] font-semibold  text-[15px] md:text-[19px]'>Wallet Balance</span>
                <h1 className='md:text-[36px] text-[20px] leading-[43px] text-white font-orbitron font-semibold'>{balance} ADA</h1>
            </div>
            <div className='my-4 border-2  w-full rounded-[8px] border-theme-main flex items-center justify-between px-4 py-3'>
                <span className='text-[#515050] font-orbitron font-[700]'>Minimum Required</span>
                <span className='text-white font-DMSans font-[700]'>250 ADA</span>
            </div>
            <div className='my-4'><Button variant={'contained'} color={(click && balance > 250) ? 'primary' : 'secondary'} title={loading ? "Registering..." : "Register Now"} icon='ri-arrow-right-up-line' disabled={(click && balance > 250) ? false : true} onClick={setRegister} /></div>
            <p className='lg:w-[480px] w-full  mt-3 text-left  text-white md:text-base text-[12.8px]  font-DMSans leading-[24px]'>
                This will construct a transction for you to review, alternatively if you would prefer you can <CustomLink href={'/presale/register_manually'} ><span className='text-theme-main font-semibold underline'> Register Manually</span></CustomLink>
            </p>
        </div>
    )
}

function RegisterAction({ click, balance }) {
    const [register, setRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleRegister = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setRegister(true);
        }, 3000)
    }
    return (
        <div className='p-5 w-[1/2] md:p-14 flex mt-10 justify-center flex-col border-2 w-full border-theme-main rounded-[10px] bg-theme-card'>
            {
                register ? <Completed /> : <RegisterContent click={click} balance={balance} loading={loading} setRegister={handleRegister} />
            }
        </div>
    )
}

export default RegisterAction