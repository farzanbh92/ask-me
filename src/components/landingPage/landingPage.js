import React from 'react';
import sidetoggle from '../../assets/images/sidebar toggle.png';

const LandingPage = () => {


    return (
        <>
    <div className='flex flex-col md:flex-row'>

{/*sidebar*/}

        <div className='w-full md:w-1/5 md:order-2  bg-gray-900'>

            <div className='grid grid-cols-3 gap-2 h-16 content-center mx-2'>
             
            <div className='border border-gray-100 rounded-lg pt-1 h-12'>
           <img src={sidetoggle} alt='' className='w-8 mx-auto' />
            </div>

             <div className='col-span-2 border border-gray-100 rounded-lg h-12'> 

             <div className='grid grid-cols-2 items-center cursor-pointer'>
           
             <div className='mx-auto text-white'>چت جدید</div>
             <div className='mx-auto text-white text-3xl'>+</div>
             </div>
             
             </div>
             
            </div>
           
        </div>

{/*content*/}

        <div className='w-full md:w-4/5 md:order-1'>

           <div className='grid grid-cols-1 w-full'>

            <div className='grid grid-cols-1 content-center w-full h-28 md:h-52'>

             <div className='text-3xl font-bold'>از من بپرس</div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 pt-20 md:px-28 px-8'>

             <div className='grid grid-cols-1 gap-y-4 mb-8'>

             <div className='p-4'>مثال ها</div>

                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>مثال 1</div>
                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>مثال 2</div>
                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>مثال 3</div>
               
             </div>
             
              <div className='grid grid-cols-1 gap-y-4 mb-8'>

             <div className='p-4'>توانایی ها </div>

                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>توانایی 1</div>
                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>توانایی 2</div>
                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>توانایی 3</div>
               
             </div>

              <div className='grid grid-cols-1 gap-y-4 mb-8'>

             <div className='p-4'>محدودیت ها </div>

                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>محدودیت 1</div>
                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>محدودیت 2</div>
                <div className='bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300'>محدودیت 3</div>
               
             </div>
             
             
            </div>

           </div>

        </div>

    </div>
        </>
    );
};

export default LandingPage;