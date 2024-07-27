// import React from 'react'
// import { ThemeToggler } from './ThemeToggler'
// import LoginMongo from './LoginMongo'
// import { Button } from './ui/button'

// const HeaderAdmin = () => {
//   return (
//     <header className=' w-full'>
//       <div className='bg-[#5a686d] py-3 flex items-center justify-between  '>
//         {/* title */}
//         <div className='w-[30%]'>
//           {/* title */}
//           <div className=' text-5xl pl-6 text-white'>Easy <span className=' text-orange-600'>Bidder</span></div>
//         </div>
//        <div className='pr-[3%]'>
//        <Button variant='secondary' className=' rounded-3xl '>Logout</Button>
//        </div>
        
//       </div>
//     </header>
//   )
// }

// export default HeaderAdmin

import React from 'react';
import { ThemeToggler } from './ThemeToggler';
import { Button } from './ui/button';

const HeaderAdmin = () => {
  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('userName');
    // Redirect to the home page
    window.location.href = '/';
  };

  return (
    <header className='w-full'>
      <div className='bg-[#5a686d] py-3 flex items-center justify-between'>
        {/* title */}
        <div className='w-[30%]'>
          <div className='text-5xl pl-6 text-white'>
            Easy <span className='text-orange-600'>Bidder</span>
          </div>
        </div>
        <div className='pr-[3%]'>
          <Button variant='secondary' className='rounded-3xl' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
