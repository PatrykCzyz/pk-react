import React from 'react'

export default function Badge({ text }: any) {
    return (
        <span className='bg-sky-100 text-sky-700 font-semibold text-sm p-1 pl-2 pr-2 rounded-3xl m-1'>{text}</span>
    )
}
