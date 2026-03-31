import React from 'react'

const Links = ({nav}) => {
    return (
        <li className='text-[#101727] font-semibold'><a href={nav.path}>{nav.pathname}</a></li>
    )
}

export default Links