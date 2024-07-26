// import React, { useState } from 'react';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

// const LoginMongo = () => {
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!userName || !password) {
//             alert("Please enter username and password");
//             return;
//         }

//         const credentials = {
//             userName,
//             password,
//         };
//         //admin login
//         try {
//             const res = await fetch("/api/admin", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(credentials),
//             });

//             if (res.ok) {
//                 // Store username in localStorage
//                 localStorage.setItem('userName', userName);
//                 setUserName("");
//                 setPassword("");

//                 // Display success toast using react-toastify
//                 toast.success('Login successful!', {
//                     position: "top-center",
//                     autoClose: 3000, // Close toast after 3 seconds
//                     hideProgressBar: true, // Hide progress bar
//                 });

//                 window.location.href = await `/admin`;
//             } else {
//                 alert("Enter correct username and password");
//             }
//         } catch (error: any) {
//             alert(`Error: ${error.message}`);
//         }


//         // user login
//         try {
//             const res = await fetch("/api/users/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(credentials),
//             });

//             if (res.ok) {
//                 // Store username in localStorage
//                 localStorage.setItem('userName', userName);
//                 setUserName("");
//                 setPassword("");

//                 // Display success toast using react-toastify
//                 toast.success('Login successful!', {
//                     position: "top-center",
//                     autoClose: 3000, // Close toast after 3 seconds
//                     hideProgressBar: true, // Hide progress bar
//                 });

//                 window.location.href = await `/products/getProducts?userName=${encodeURIComponent(userName)}`;
//             } else {
//                 alert("Enter correct username and password");
//             }
//         } catch (error: any) {
//             alert(`Error: ${error.message}`);
//         }
//     };

//     return (
//         <div className='flex gap-5'>
//             <form onSubmit={handleSubmit}>
//                 <div className='flex gap-5 items-center justify-center pt-[1.5px]'>
//                     <Input
//                         id='username'
//                         name='userName'
//                         type='text'
//                         placeholder='Username'
//                         className='rounded-sm h-9 pl-7 w-40'
//                         required
//                         minLength={3}
//                         value={userName}
//                         onChange={(e) => setUserName(e.target.value)}
//                     />
//                     <Input
//                         id='password'
//                         name='password'
//                         type='password'
//                         placeholder='Password'
//                         className='rounded-sm h-9 pl-7 w-40'
//                         required
//                         minLength={3}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <Button
//                         variant='destructive'
//                         className='bg-orange-600 text-lg hover:bg-[#db534c] pl-1'
//                         type='submit'
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 pl-2 pr-2 border-r-[0.5px] border-red-500">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//                         </svg>
//                         Login
//                     </Button>
//                 </div>
//             </form>
            
//             <ToastContainer />
//         </div>
//     );
// };

// export default LoginMongo;


import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

const LoginMongo = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userName || !password) {
            alert("Please enter username and password");
            return;
        }

        const credentials = {
            userName,
            password,
        };

        // Admin login
        try {
            const res = await fetch("/api/admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (res.ok) {
                // Store username in localStorage
                localStorage.setItem('userName', userName);
                setUserName("");
                setPassword("");

                // Display success toast using react-toastify
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 3000, // Close toast after 3 seconds
                    hideProgressBar: true, // Hide progress bar
                });

                window.location.href = await `/admin`;
                return; // Exit the function if admin login is successful
            }
        } catch (error: any) {
            console.error(`Admin login error: ${error.message}`);
        }

        // User login
        try {
            const res = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (res.ok) {
                // Store username in localStorage
                localStorage.setItem('userName', userName);
                setUserName("");
                setPassword("");

                // Display success toast using react-toastify
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 3000, // Close toast after 3 seconds
                    hideProgressBar: true, // Hide progress bar
                });

                window.location.href = await `/products/getProducts?userName=${encodeURIComponent(userName)}`;
            } else {
                alert("Enter correct username and password");
            }
        } catch (error: any) {
            alert(`User login error: ${error.message}`);
        }
    };

    return (
        <div className='flex gap-5'>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-5 items-center justify-center pt-[1.5px]'>
                    <Input
                        id='username'
                        name='userName'
                        type='text'
                        placeholder='Username'
                        className='rounded-sm h-9 pl-7 w-40'
                        required
                        minLength={3}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        className='rounded-sm h-9 pl-7 w-40'
                        required
                        minLength={3}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant='destructive'
                        className='bg-orange-600 text-lg hover:bg-[#db534c] pl-1'
                        type='submit'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 pl-2 pr-2 border-r-[0.5px] border-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        Login
                    </Button>
                </div>
            </form>
            
            <ToastContainer />
        </div>
    );
};

export default LoginMongo;
