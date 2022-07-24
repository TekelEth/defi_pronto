import { useState } from 'react'
import RegisterContent from 'sections/Presale/RegisterContent';
import WalletVerification from 'sections/Presale/WalletVerification';

function RegisterManually() {
    const [clickDiscord, setClickDiscord] = useState(false);
    const BALANCE = 3000;
    return (
        <div className='container px-4 md:px-0 py-10 relative h-full md:py-20 w-full mx-auto bg-[url("/assets/backgrounds/presale_bg.svg")] bg-no-repeat bg-cover bg-center' >
            <div className='w-full flex-col flex md:flex-row justify-between items-center lg:space-x-36'>
                <RegisterContent click={clickDiscord} setClick={() => setClickDiscord(true)} balance={BALANCE} />
                <WalletVerification balance={BALANCE} click={clickDiscord} />
            </div>
        </div>
    )
}

export default RegisterManually;