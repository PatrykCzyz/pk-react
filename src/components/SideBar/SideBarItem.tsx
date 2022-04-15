import React, { ReactElement } from 'react'

export default function SideBarItem({ icon, name, isActive }: SideBarItemProps) {
    return (
        <div className={
                'flex items-center gap-2 text-lg p-2 rounded-md hover:bg-gray-300 hover:cursor-pointer text-gray-700' 
                + (isActive === true ? ' bg-gray-200' : '')}>
            <div>
                {icon}
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}

interface SideBarItemProps {
    name: string;
    icon: ReactElement;
    isActive?: boolean;
}
