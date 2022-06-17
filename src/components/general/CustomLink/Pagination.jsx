import React, { useState } from 'react'

const items = [1, 2, 3, 4, 5]

const PaginationItem = ({ value, border_color, clicked, active, id, isNum }) => {
    return <div className={`mr-3 w-[64px] rounded-md h-[64px] flex items-center border-[1px] justify-center  ${border_color} ${(isNum === true && active === id) ? 'bg-[#E74141]' : 'bg-transparent'}`} onClick={clicked}>
        <span className={`text-center  ${(isNum === true && active === id) ? 'text-white' : 'text-[#E74141]'} text-[20px] font-semibold leading-[20px]`}>{value}</span>
    </div >
}

function Pagination() {
    const [active, setactive] = useState(1);
    return (
        <div className="mx-auto hidden mb-[100px] md:flex justify-center items-center">
            <PaginationItem value={<i className={`ri-arrow-left-s-line ${active === 1 ? "text-[#E5E5E5]" : "text-[#E74141]"}`}></i>} border_color="border-[#E5E5E5]" isNum={false} />
            {
                items.map((x, i) => (
                    <PaginationItem value={x} key={i} border_color="border-[#E74141]" clicked={() => setactive(x)} active={active} id={x} isNum={true} />
                ))
            }
            <PaginationItem value={<i className={`ri-arrow-right-s-line  ${active === items[items.length - 1] ? "text-[#E5E5E5]" : "text-[#E74141]"} `}></i>} border_color="border-[#E5E5E5]" isNum={false} />
        </div>
    )
}

export default Pagination