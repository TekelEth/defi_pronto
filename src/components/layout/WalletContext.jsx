import {  createContext, useState } from 'react'

export const WalletContext = createContext();

function WalletProvider({ children }) {
    const [connected, setConnected] = useState(false);
    return (
        <WalletContext.Provider
            value={{
                connected,
                setConnected
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}

export default WalletProvider