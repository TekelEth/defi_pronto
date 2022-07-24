import {  createContext, useState } from 'react'

export const WalletContext = createContext();

function WalletProvider({ children }) {
    const [connected, setConnected] = useState(false);
    const [showWallet, setShowWallet] = useState(false);
    return (
        <WalletContext.Provider
            value={{
                connected,
                setConnected,
                showWallet,
                setShowWallet
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}

export default WalletProvider