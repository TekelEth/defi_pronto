import React, { useState } from 'react'
import RegisterAction from './RegisterAction'
import RegisterContent from './RegisterContent'
import WalletVerification from './WalletVerification';


function Register() {
    const [click, setClick] = useState(false);
    const [step, setStep] = useState(1);
    const [verify, setVerify] = useState(false);
    return (
        <div className='w-full flex-col flex md:flex-row justify-between items-center lg:space-x-36'>
            <RegisterContent click={click} setClick={() => setClick(!click)} step={step} setStep={setStep} />
            {verify ? <RegisterAction click={click} step={step} /> : <WalletVerification verify={verify} setVerify={() => setVerify(true)} />}
        </div>

    )
}

export default Register