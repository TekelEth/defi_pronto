import {  createContext, useState } from 'react'

export const WalletContext = createContext();

function WalletProvider({ children }) {
    [connected, setConnected] = useState('connected');
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