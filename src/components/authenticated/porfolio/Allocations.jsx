import { useState } from 'react';
import Assets from './Assets';
import Header from './Header';
import Transactions from './Transactions';

const Tab = ({ text, clicked, current, type }) => {
	return (
		<span
			onClick={clicked}
			className={`font-orbitron duration-300 leading-[16.8px] md:leading-[24px] hover:cursor-pointer text-[17px] md:text-[20px] mr-8 font-[400] ${
				current === type ? 'text-white border-b-[5px] border-b-[#E74141]' : 'text-[#898888]'
			} py-2 `}
		>
			{text}
		</span>
	);
};

function Allocations() {
	const [current, setCurrent] = useState('assets');
	return (
		<div className='mb-8'>
			<Header heading='My Allocations' />
			<div className='w-full my-12 border-b-[1px] flex items-center border-[#606060]'>
				<div className='flex-wrap flex -mb-px'>
					<Tab text='Assets' clicked={() => setCurrent('assets')} type='assets' current={current} />
					<Tab
						text='Transactions'
						type='transactions'
						clicked={() => setCurrent('transactions')}
						current={current}
					/>
				</div>
			</div>
			{current === 'assets' ? <Assets /> : <Transactions />}
		</div>
	);
}

export default Allocations;
