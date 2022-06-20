import React from 'react';
import { assets } from '../../../../utils/assets';
import NoContent from './NoContent';

export const AssetDetails = ({ name, amount, shift, symbol, first }) => (
	<div className={`flex flex-col ${shift && 'mr-[8%]'}  items-start`}>
		<span className='text-[#E74141] capitalize font-orbitron mb-2 md:mb-1 text-[10px] md:text-[12px] leading-[12px] md:leading-[14.4px]'>
			{name}
		</span>
		{first ? (
			<span className='text-white text-[14px] md:text-[20px] leading-[16px] md:leading-[24px] font-orbitron'>
				{symbol}
				{amount}
			</span>
		) : (
			<span className='text-white  text-[14px] md:text-[20px] leading-[16px] md:leading-[24px] font-orbitron'>
				{amount}
				{symbol}
			</span>
		)}
	</div>
);

const MobileAsset = ({ img, asset_name, staked_amount, earnings, apy_rate, token_price, token_symbol }) => (
	<div className='flex md:hidden mb-4 w-[90%] px-6 mx-auto flex-col items-center rounded-[20px] bg-[#2F282E] py-12 hover:shadow-shadow-card'>
		<div className='flex mb-2 w-[80px] h-[80px]'>
			<img src={img} alt='assets' className='object-cover rounded-full' />
		</div>
		<span className='font-orbitron   text-white text-center my-6 w-[179px] text-left  font-[400] leading-[24px]  text-[20px]'>
			{asset_name}{' '}
		</span>
		<div className='flex w-full mb-6 justify-between'>
			<AssetDetails name='Amount Staked' amount={staked_amount} symbol={token_symbol} />
			<AssetDetails name='Earned Tokens' amount={earnings} symbol='DFP' />
		</div>
		<div className='flex w-full  items-center  justify-between'>
			<AssetDetails name='Apy Rate' amount={apy_rate} symbol='%' />
			<AssetDetails name='Token Price' amount={token_price} symbol='$' first shift />
		</div>
	</div>
);

const EachAsset = ({ img, asset_name, staked_amount, earnings, apy_rate, token_price, token_symbol }) => {
	return (
		<div className='w-full bg-[#2F282E] flex flex-col md:flex-row py-10 md:py-6 md:px-12 hover:shadow-shadow-card rounded-[20px] items-center mb-4 justify-between'>
			<div className='flex  w-[80px] h-[80px]'>
				<img src={img} alt='assets' className='object-cover rounded-full' />
			</div>
			<span className='font-orbitron  text-white text-center my-6 w-[179px] text-left  font-[400] leading-[24px]  text-[20px]'>
				{asset_name}{' '}
			</span>
			{/* <div className="flex justify-between  bg-red-500 col-span-2 flex-row"> */}
			<AssetDetails name='Amount Staked' amount={staked_amount} symbol={token_symbol} />
			<AssetDetails name='Earned Tokens' amount={earnings} symbol='DFP' />
			{/* </div> */}

			<AssetDetails name='Apy Rate' amount={apy_rate} symbol='%' />
			<AssetDetails name='Token Price' amount={token_price} symbol='$' first />
			{/* </div> */}
		</div>
	);
};

function Assets() {
	return (
		<div>
			<div className='w-full hidden md:flex flex-col'>
				{assets && assets.length > 0 ? (
					assets.map((asset, index) => (
						<EachAsset
							key={index}
							earnings={asset.earning}
							staked_amount={asset.staked_amount}
							img={asset.img}
							asset_name={asset.asset_name}
							token_price={asset.token_price}
							token_symbol={asset.token_symbol}
							apy_rate={asset.apy_rate}
						/>
					))
				) : (
					<NoContent message='No Assets Found' />
				)}
			</div>
			{assets && assets.length > 0 ? (
				assets.map((asset, index) => (
					<MobileAsset
						key={index}
						earnings={asset.earning}
						staked_amount={asset.staked_amount}
						img={asset.img}
						asset_name={asset.asset_name}
						token_price={asset.token_price}
						token_symbol={asset.token_symbol}
						apy_rate={asset.apy_rate}
					/>
				))
			) : (
				<NoContent message='No Assets Found' />
			)}
		</div>
	);
}

export default Assets;
