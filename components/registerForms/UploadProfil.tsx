import React, { useState } from 'react';
import Image from 'next/image';

export default function UploadProfil () : JSX.Element {
 const [url , setUrl] = useState('')

 return <div className=' flex flex-col gap-4 p-4 h-60 w-full items-center justify-center'>

    <div className=' border border-gray-400 flex items-center justify-center rounded-full p-2 w-40 h-40'>
        {
            url ? <Image width={150}height={150}  className=' w-full h-full' alt='user' src={url}/> : <p className=' text-gray-500'>No data</p>
        }
        
        
    </div>
        <div className='w-24 rounded border-dashed cursor-pointer border overflow-hidden'>
          <input onChange={() => {
            setUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png')
          }} type="file"  className=' file:bg-transparent file:border-none file:text-white' />
        </div>
    
 
 </div>
}