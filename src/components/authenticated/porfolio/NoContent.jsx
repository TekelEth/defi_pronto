import Icon from 'components/general/Icons';
import React from 'react';

function NoContent({ message }) {
	return (
		<div className='py-32 flex flex-col justify-center items-center '>
			<Icon icon='ri-indeterminate-circle-line' className='text-[#514E4E] mb-4 text-[100px]' />

			<span className='text-[31px] font-[400] font-monument text-[#514E4E] leading-[38px] text-center'>
				{message}
			</span>
		</div>
	);
}

export default NoContent;
