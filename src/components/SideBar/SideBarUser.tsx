import React from 'react'

export default function SideBarUser({ companyName, userFullName }: SideBarUserProps) {
    return (
        <div>
            <span className='block'>{companyName}</span>
            <span className='block text-gray-500'>{userFullName}</span>
        </div>
    )
}

interface SideBarUserProps {
    companyName: string;
    userFullName: string;
}