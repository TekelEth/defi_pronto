import { createContext, useContext, useState } from 'react';
import Icon from '../Icons';

const ToastContext = createContext();

export const ToggleToast = () => {
	const { handleClick } = useContext(ToastContext);
	return (
		<button className='text-theme-100 hover:text-theme-light' onClick={handleClick}>
			<Icon icon={'ri-close-fill'} className=' text-2xl' />
		</button>
	);
};

export const ToastInfo = ({ type, message }) => {
	const { toastType } = useContext(ToastContext);

	return (
		<>
			<Icon icon={toastType(type).icon} className={`text-4xl ${toastType(type).status}`} />
			<h6 className='ml-3 font-orbitron font-normal text-xl text-white mx-8'>{message}</h6>
		</>
	);
};

export default function Toast({ children }) {
	const [isClosed, setIsClosed] = useState(false);
	const [isRemoved, setIsRemoved] = useState(false);
	// const [o]
	const toastType = (type) => {
		const status = {
			error: 'text-theme-error',
			success: 'text-theme-success',
			connected: 'text-theme-success',
			disconnected: 'text-theme-error',
		};

		const iconType = {
			error: 'ri-error-warning-line',
			success: 'ri-checkbox-circle-line',
			connected: 'ri-login-box-line',
			disconnected: 'ri-logout-box-line',
		};

		return { status: status[type], icon: iconType[type] };
	};

	const handleClick = () => {
		setIsClosed(!isClosed);
		setTimeout(() => setIsRemoved(!isRemoved), 300);
	};

	return (
		<ToastContext.Provider value={{ handleClick, toastType }}>
			<div className={`fixed top-20 right-10 my-4 ${isClosed && 'opacity-0 ease-out'} ${isRemoved && 'hidden'}`}>
				<div
					id='toast-default'
					className='flex items-center justify-between w-full max-w-lg h-16 p-4 py-8 bg-[#241B23] border-2 border-theme-main rounded-[10px] duration-300'
				>
					{/* <Icon icon={toastType(type).icon} className={`text-4xl ${toastType(type).status}`} /> */}
					{children}
					{/* <h6 className='ml-3 font-orbitron font-normal text-xl text-white mx-8'>{message}</h6> */}
					{/* <button className='text-theme-100 hover:text-theme-light' onClick={handleClick}>
						<Icon icon={'ri-close-fill'} className=' text-2xl' />
					</button> */}
				</div>
			</div>
		</ToastContext.Provider>
	);
}
