import React from 'react'
import img from '../../public/coin.webp'
import check from '../../public/new-check-mark.png'
const Benefits = () => {
    return (
        <>
      
              <div className='w-[100vw] flex items-center justify-evenly font-poppins'>
            <div>
                <h1 className='font-bold text-[2rem] uppercase'>Some of the benefits that can help<br />you qualify for a free boiler</h1>
              
<p className='text-[1.2rem] mt-4 flex items-center gap-3'> <img src={check} className='w-[50px]'/>Housing Benefits</p>

<p className='text-[1.2rem] mt-4 flex items-center gap-3'><img src={check} className='w-[50px]'/>Working tax credits</p>

<p className='text-[1.2rem] mt-4 flex items-center gap-3'><img src={check} className='w-[50px]'/>Income Support</p>

<p className='text-[1.2rem] mt-4 flex items-center gap-3'><img src={check} className='w-[50px]'/>Pension credit guarantee</p>
            </div>
            <img src={img} className='w-[500px]'/>
          
        </div>
        <button className='rounded-[0.6rem] bg-[#E21E24] text-white p-[7px] ml-12 mb-6 uppercase text-[14px] w-[140px]'>Apply now</button>
        </>
       
    )
}

export default Benefits