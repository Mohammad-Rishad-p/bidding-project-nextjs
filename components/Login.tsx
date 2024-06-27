"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface FormData {
    userName: string;
    password: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        userName: '',
        password: '',
    });

    // Handle change events with proper typing
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission with proper typing
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { userName, password } = formData;
        // You can perform further actions here, such as sending data to a backend or validating the form
        // console.log('Form submitted with:', userName, password);
    
    };

    return (
        <div className='flex gap-5'>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-5 items-center justify-center pt-[1.5px]'>
                    <Input id='username' name='userName' type='text' placeholder='Username' className='rounded-sm h-9 pl-7 w-40' required minLength={3} value={formData.userName} onChange={handleChange} />
                    <Input id='password' name='password' type='password' placeholder='Password' className='rounded-sm h-9 pl-7 w-40' required minLength={3} value={formData.password} onChange={handleChange} />
                    <Button variant='destructive' className='bg-orange-600 text-lg hover:bg-[#db534c] pl-1' type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 pl-2 pr-2 border-r-[0.5px] border-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        Login
                    </Button>
                </div>
            </form>
            <Button variant='destructive' className='bg-blue-700 hover:bg-blue-800 text-md'>
                <svg className="w-9 h-6 text-blue-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                </svg>
                Facebook Login
            </Button>
        </div>
    );
};

export default Login;
