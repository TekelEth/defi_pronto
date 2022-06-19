import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [connected, setConnected] = useState(false);

	const connect = () => {
		setConnected(true);
	};

	const disconnect = () => {
		setConnected(false);
	};
	return <AuthContext.Provider value={{ connected, connect, disconnect }}>{children}</AuthContext.Provider>;
}
