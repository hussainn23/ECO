import React from 'react'
import back from '../../public/background2.jpg'
const Steps = () => {
  return (
    <div className='text-center relative bg-[#DBE1DA] pt-11 w-[100vw] h-[40vh] px-[3rem] font-poppins flex items-center justify-center'>
     <div className="absolute left-0 top-0 z-0 h-full">
             <img src={back} />
            </div>
        <div className='w-[85%] z-10 mt-11'>
        <h1 className='text-[2rem] font-bold mt-11 '>Why Take This Crucial Step?</h1>
        <p className='text-[1rem] text-center mt-4'>It is important for both you and the environment as you slowly turn your home into a greener one, helping you save energy and reduce your bills. The boilers we install come with extended warranties ensuring the fact that you will not pay in fixing them like your old boilers. We do recommend annual check-up and maintenance in order for your boiler to live a for long. Knowing you have a warranty for more than a year with the possibility of extension makes most of our customers opt straight away to have their boilers replaced. We then make sure that they are glad they took a step towards this positive change in their lives and homes, by treating the whole project sacredly, making sure that survey and install done in suitable times and professionally. We do sometimes require photos of your old boilers if it is the only aspect you wish to change and replace, which in this case means you only have to reserve one appointment. Do not hesitate, fill in the form in less than 60 seconds or call us if you have any questions.</p>
        </div>

       
    </div>
  )
}

export default Steps