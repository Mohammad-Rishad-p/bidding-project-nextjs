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
            <h1>My Account</h1>
            {user ? (
                <div className='mx-[6%] flex-col flex gap-24 ' >
                    <div className=' flex w-full gap-[10%]'>
                        {/* section 1 */}
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
                        {/* section 2 */}
                        {/* bid winning history */}

                        <div className=' bg-gray-100 w-[45%] py-4 flex-col gap-12 flex dark:text-black'>
                            {/* heading */}
                            <div className='flex items-center justify-center font-serif text-3xl '>
                                Bid Winning history
                            </div>
                            <div className="max-h-96 overflow-y-scroll p-4 border border-gray-300 b-x bg-gray-100">
                                {user.bids.length > 0 ? (
                                    user.bids.map((bid, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between mx-[4%] font-serif text-xl px-2 border- border-gray-400 py-1"
                                        >
                                            <div>{index + 1}</div>
                                            <div>{bid.productName}</div>
                                            <div>₹{bid.bidPrice}</div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center dark:text-black">No bids yet</div>
                                )}
                            </div>

                        </div>
                        <div>
                        </div>
                        
                    </div>
                    {/* section 3 */}
                        {/* profile photo */}
                        <div className=' w-[90%] bg-gray-100 h-[350px] flex items-center justify-center dark:text-black'>
                            <div className='text-3xl'>Profile photo</div>
                            <img  src=""/>
                        </div>


                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
}

export default UserDetails;
