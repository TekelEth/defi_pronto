import React from 'react'

const Wallet = ({ img, name, close }) => {
    return (
        <div className='py-4 mb-4 px-6 md:px-8 w-full flex bg-[#2F282E] rounded-[10px] justify-between items-center'>
            <div className="flex items-center">
                <img src={img} alt="wallet logo" className="w-[20%] mr-2 md:mr-8 w-full" />
                <span className="font-monument leading-[24px] text-[14px] md:text-[20px] text-white font-[400] capitalize">{name}</span>
            </div>
            <input type="checkbox" className='accent-[#E74141]' onClick={close} />
        </div>
    )
}

function WalletConnect({ close, showWallet }) {
    return (
        <div className={`${showWallet ? "w-screen h-screen fixed  bg-[rgba(0,0,0,0.3)]" : "fixed"
            } duration-500 md:block`}>
            <div className={`h-screen flex flex-col items-center justify-center duration-500  ${showWallet ? "translate-x-0" : "-translate-x-[100%]"} transition-all`}>
                <div className="bg-[#241B23] rounded-[10px] shadow-lg z-50 md:w-[40%] mx-auto flex flex-col items-start justify-start py-8 px-4 md:px-8">
                    <h1 className="font-monument font-[400] text-[20px] md:text-[25.25px] leading-[37.5px] text-white">Connect Wallet</h1>
                    <div className="my-6 flex items-center">
                        <input type="checkbox" className="mr-3 accent-[#E74141]" />
                        <span className="font-DMSans text-white text-[16px]  leading-[21px]"> I have read and accepted the <a className='text-[#E74141]'>Terms and Conditions</a></span>
                    </div>
                    <div className='flex flex-col w-full'>
                        <Wallet img="/assets/wallets/naimi.png" name="Naimi Wallet" close={close} />
                        <Wallet img="/assets/wallets/etherni.png" name="Etherni Wallet" close={close} />
                        <Wallet img="/assets/wallets/typhon.png" name="Typhoon Wallet" close={close} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletConnect