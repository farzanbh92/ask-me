import React from 'react';
import plus from '../../assets/images/plus.jpg';

const LandingPage = () => {
    return (
        <>
       <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/5 md:order-2 md:h-screen bg-gray-900'>

            <div className='grid grid-cols-3 gap-2 h-20 content-center mx-2'>

            <div className='border-2 border-white rounded-lg pt-2 h-12'>
               <p className='text-white cursor-pointer'>sidetoggle</p> 
            </div>

             <div className='col-span-2 border-2 border-white  rounded-lg h-12'> 

             <div className='grid grid-cols-2 items-center cursor-pointer'>
           
             <div className='mx-auto text-white'>چت جدید</div>
             <div className='mx-auto text-white text-3xl'>+</div>
             </div>
             
             </div>
             
            </div>
           
        </div>
        <div className='w-full md:w-4/5 md:order-1 md:h-screen'>b</div>
       </div>
        </>
    );
};

export default LandingPage;