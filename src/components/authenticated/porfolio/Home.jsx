import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import React from 'react';
import Header from './Header';

function Home() {
	return (
		<div className='w-full my-12 flex justify-between'>
			<Header heading='my portfolio' />
			<div className='flex space-x-4 items-center'>
				<CustomLink href={'/'}>
					<Button title='KYC Verification' variant={'outlined'} color='primary' icon='ri-user-3-line' order />
				</CustomLink>
				<CustomLink href={'/'}>
					<Button
						title='Buy DFP'
						variant={'outlined'}
						color='primary'
						icon='ri-money-dollar-circle-line'
						order
					/>
				</CustomLink>
				<CustomLink href={'/'}>
					<Button title='Stake' variant={'contained'} color='primary' icon='ri-arrow-right-up-line' />
				</CustomLink>
			</div>
		</div>
	);
}

export default Home;
