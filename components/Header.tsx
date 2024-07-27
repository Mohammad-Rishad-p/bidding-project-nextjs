"use client"
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import ItemInHeader from './ItemInHeader';
import { ThemeToggler } from './ThemeToggler';

function Header() {
    const [userName, setUserName] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        setUserName(storedUserName || '');
    }, []);

    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('userName');
        // Optionally, redirect to the login page
        window.location.href = '/';
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header className='bg-[#5a686d] py-3'>
            <div className='flex w-full pl-14'>
                {/* first part in header */}
                <div className='w-[30%]'>
                    {/* title */}
                    <div className='text-5xl text-white'>
                        Easy <span className='text-orange-600'>Bidder</span>
                    </div>
                </div>
                {/* second part in header */}
                <div className='flex w-[60%] items-center gap-12 justify-start'>
                    {/* Auction Home */}
                    <ItemInHeader text='Auction Home' link={`/products/getProducts?userName=${encodeURIComponent(userName || '')}`} />
                    {/* How it works */}
                    <ItemInHeader text='How It Works' link='' />
                    {/* contact us */}
                    <ItemInHeader text='Contact Us' link='' />
                    {/* my Account */}
                    <div className='relative'>
                        <Button onClick={toggleDropdown} className='focus:outline-none'>
                            {userName.length > 1 ? `${userName} - My Account ${dropdownVisible ? '▲' : '▽'}` : `${userName} My Account ${dropdownVisible ? '▲' : '▽'}`}
                        </Button>
                        {dropdownVisible && (
                            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg'>
                                <a href='/users/userDetails' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>User Details</a>
                                <button onClick={handleLogout} className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left'>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
                {/* third part */}
                <div className='rounded-full w-[10%] flex justify-center items-center'>
                    <ThemeToggler />
                </div>
            </div>
        </header>
    );
}

export default Header;
