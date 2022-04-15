import React from 'react'
import SideBarItem from './SideBarItem'
import { FiLogOut, FiSend } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { BiCoinStack } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { FiSettings, FiArchive } from "react-icons/fi";
import { ReactComponent as JSHLogo } from '../../assets/hamilton-logo.svg';
import SideBarUser from './SideBarUser';

export default function SideBar() {
    return (
        <div className='flex flex-col h-full p-8 border-r-2'>
            <div className='text-3xl pb-8'>
                <JSHLogo />
            </div>
            <div className='flex flex-grow flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                    <SideBarItem
                        icon={<FiSend />}
                        name="Zlecenia" />
                    <SideBarItem
                        icon={<GrDocumentText />}
                        name="Sprawozdania"
                        isActive={true} />
                    <SideBarItem
                        icon={<BiCoinStack />}
                        name="Faktury" />
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <SideBarItem
                            icon={<FiSend />}
                            name="Oferta" />
                        <SideBarItem
                            icon={<FiSettings />}
                            name="Ustawienia" />
                        <SideBarItem
                            icon={<FiArchive />}
                            name="Archiwum" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <SideBarItem
                            icon={<IoHelpBuoyOutline />}
                            name="Pomoc" />
                        <SideBarItem
                            icon={<BsChat />}
                            name="Kontakt" />
                    </div>
                    <div className='flex flex-row justify-between items-center border-t-2 pt-4'>
                        <SideBarUser
                            companyName='Januszex Sp. z o.o.'
                            userFullName='Jan Kowalski' />
                        <FiLogOut className='text-gray-500' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}
