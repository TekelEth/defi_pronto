import React, { useState } from 'react'
import RegisterAction from './RegisterAction'
import RegisterContent from './RegisterContent'
import WalletVerification from './WalletVerification';


function Register() {
    const [clickDiscord, setClickDiscord] = useState(false);
    const BALANCE = 3000;
    return (
        <div className='w-full flex-col flex md:flex-row justify-between items-center lg:space-x-36'>
            <RegisterContent click={clickDiscord} setClick={() => setClickDiscord(true)} balance={BALANCE} />
            <RegisterAction balance={BALANCE} click={clickDiscord} />
        </div>

    )
}

export default Register