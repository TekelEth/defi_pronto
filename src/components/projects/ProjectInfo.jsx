import React from 'react'
import Info from './Info'


function ProjectInfo() {
  return (
    <div className='w-full   bg-[#2F282E] rounded-md py-8 flex justify-around'>
        <Info amount="400,000" token="ADA" text="total raised" />
        <Info amount="14,000,000" token="$HDM" text="0.00005 ADA Per Token " />
        <Info amount="2,000" token="ADA" text="Max. Allocation" />
    </div>
  )
}

export default ProjectInfo