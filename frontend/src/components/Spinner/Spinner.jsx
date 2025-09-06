import React from 'react'

const Spinner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-12 h-12 border-4 border-dashed animate-spin text-white border-blue-400 rounded-full'></div>
        </div>
    )
}

export default Spinner