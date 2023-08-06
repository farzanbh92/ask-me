import React from 'react';
import plus from '../../assets/images/plus.jpg';

const LandingPage = () => {
    return (
        <>
       <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/5 md:order-2 md:h-screen bg-gray-900 p-2'>
            <div className='grid grid-cols-3 gap-2 h-20 bg-yellow-200 p-4'>
             <div className='border-solid border-white bg-green-200 rounded-lg pt-2 h-12'>sidetoggle</div>
             <div className='col-span-2 border-solid border-white bg-red-300 pt-2 h-12'>چت جدید
             <img src={plus} alt='add' className='w-8'/>
             چت جدید
             </div>
             
            </div>
           
        </div>
        <div className='w-full md:w-4/5 md:order-1 md:h-screen'>b</div>
       </div>
        </>
    );
};

export default LandingPage;