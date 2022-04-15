import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
    return (
        <>
            <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSearch size={20} className='text-gray-400' />
                </div>
                <input
                    type="text"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 pl-10 pr-12 sm:text-sm rounded-md"
                    placeholder="Wyszukaj"
                />
            </div>
        </>
    )
}
