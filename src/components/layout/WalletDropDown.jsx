import CustomLink from 'components/general/CustomLink';
import React, { useContext } from 'react'
import { WalletContext } from './WalletContext';
import { useRouter } from 'next/router';
import Porfolio from 'pages/auth/portfolio';

function WalletDropDown({ setWalletDropdown, setIsMenuOpen = () => { } }) {
    const router = useRouter()
    const disConnect = () => {
        setConnected(false);
        setWalletDropdown(false)
        setIsMenuOpen(false)
        router.push('/');
    }
    const Portfolio = () => {
        setWalletDropdown(false)
        setIsMenuOpen(false)
    }

    const { setConnected } = useContext(WalletContext);
    return (
        <div className='bg-[#2F282E] absolute mt-2 w-full items-center rounded-[10px] shadow-xl p-3 flex flex-col'>
            <CustomLink href={'/auth/portfolio/'}>
                <div className='flex items-center py-4 border-b-[1px] border-[#413D3D]' onClick={Portfolio} >
                    <i className="ri-wallet-2-line mr-4 text-lg text-[#909090]"></i>
                    <span className='text-white font-orbitron text-base'>My Portfolio</span>
                </div>
            </CustomLink>
            <div className='flex items-center py-4 font-semibold ' >
                <i className="ri-logout-box-r-line  text-lg mr-4 text-[#E74141]"></i>
                <button className='text-[#E74141] font-orbitron text-base' onClick={disConnect}>Disconnect</button>
            </div>
        </div>
    )
}

export default WalletDropDown