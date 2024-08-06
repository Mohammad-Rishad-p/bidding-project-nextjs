"use client";
import React, { useEffect, useState } from 'react';
import { Input } from './ui/input';
import Product from '@/models/product';

type User = {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    email: string,
    phoneNumber: number,
    aadhar: number,
    pan: string,
    bids: any[],
};

const UserDetails = () => {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState<User | null>(null); // Update to store a single user object

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        setUserName(storedUserName || '');
        if (storedUserName) {
            fetchUsers(storedUserName);
        }
    }, []);

    const fetchUsers = async (userName: string) => {
        const credentials = {
            userName,
        };
        try {
            const res = await fetch(`/api/users/userDetails`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            const userData: User = await res.json();
            setUser(userData);
        } catch (error: any) {
            console.error("Error while fetching user:", error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className='mx-[6%] my-[4%] w-full'>
            <h1 className=' text-4xl pl-[8%]'>Profile Photo</h1>
            {user ? (
                <div className='mx-[6%] flex-col flex gap-24 ' >
                    <div className=' flex w-full gap-[10%] items-center justify-start'>
                        {/* section 1 */}
                        <div className=' rounded-full w-[250px] h-[250px] bg-slate-400'>
                            <img src='data:image/png;base64,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' className=' w-full h-full rounded-full' />
                        </div>

                        {/* section 2 */}
                        {/* user details */}
                        <div className='  bg-gray-100 px-6 w-[45%]'>
                            {/* first name */}
                            <div className='flex items-center gap-6 w-[90%] py-3'>
                                <label className='w-[30%] font-serif text-xl dark:text-black'>First Name:</label>
                                <input className='w-[70%] text-xl font-serif' value={user.firstName} />
                            </div>
                            {/* last name */}
                            <div className='flex items-center gap-6 w-[90%] py-3'>
                                <label className='w-[30%] font-serif text-xl dark:text-black'>Last Name:</label>
                                <input className='w-[70%] font-serif text-xl' value={user.lastName} />
                            </div>
                            {/* email id */}
                            <div className='flex items-center gap-6 w-[90%] py-3'>
                                <label className='w-[30%] font-serif text-xl dark:text-black'>Email id:</label>
                                <input className='w-[70%] font-serif text-xl' value={user.email} />
                            </div>
                            {/* phone number */}
                            <div className='flex items-center gap-6 w-[90%] py-3'>
                                <label className='w-[30%] font-serif text-xl dark:text-black'>Phone Number:</label>
                                <input className='w-[70%] font-serif text-xl' value={user.phoneNumber} />
                            </div>
                            {/* aadhar */}
                            <div className='flex items-center gap-6 w-[90%] py-3'>
                                <label className='w-[30%] font-serif text-xl dark:text-black'>Aadhar number:</label>
                                <input className='w-[70%] font-serif text-xl' value={user.aadhar} />
                            </div>
                            {/* pan */}
                            <div className='flex items-center gap-6 w-[90%] py-3'>
                                <label className='w-[30%] font-serif text-xl dark:text-black'>PAN Number:</label>
                                <input className='w-[70%] font-serif text-xl' value={user.pan} />
                            </div>
                        </div>
                        <div>
                        </div>

                    </div>
                    {/* section 3 */}
                    <div className='bg-gray-100 w-[90%] py-4 flex-col gap-12 flex dark:text-black'>
                        {/* heading */}
                        <div className='flex items-center justify-center font-serif text-3xl'>
                            Bid Winning History
                        </div>
                        <div className="max-h-96 overflow-y-scroll p-4 border border-gray-300 bg-gray-100">
                            <table className='w-full border-collapse'>
                                <thead>
                                    <tr className='bg-gray-200 text-gray-600'>
                                        <th className='border border-gray-400 p-2 text-left'>Sl No</th>
                                        <th className='border border-gray-400 p-2 text-left'>Product Name</th>
                                        <th className='border border-gray-400 p-2 text-left'>Bid Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.bids.length > 0 ? (
                                        user.bids.map((bid, index) => (
                                            <tr key={index} className='border-b border-gray-400'>
                                                <td className='p-2'>{index + 1}</td>
                                                <td className='p-2'>{bid.productName}</td>
                                                <td className='p-2'>₹ {bid.bidPrice}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={3} className='text-center p-4'>No bids yet</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>




                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
}

export default UserDetails;
