"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Define an interface for the form data
interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const MyForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    // Handle change events with proper typing
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission with proper typing
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fullName = `${formData.firstName} ${formData.lastName}`;
        const phoneNumber = formData.phoneNumber;
        console.log('Full Name:', fullName);
        console.log('Phone Number:', phoneNumber);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex gap-5 items-center justify-center pb-4'>
                <input 
                    id='firstName' 
                    name='firstName' 
                    type='text' 
                    placeholder='First Name' 
                    className='rounded-sm h-10 pl-7 w-60' 
                    required 
                    minLength={3} 
                    value={formData.firstName} 
                    onChange={handleChange} 
                />
                <input 
                    id='lastName' 
                    name='lastName' 
                    type='text' 
                    placeholder='Last Name' 
                    className='rounded-sm h-10 pl-7 w-60' 
                    required 
                    minLength={3} 
                    value={formData.lastName} 
                    onChange={handleChange} 
                />
                <input 
                    id='phoneNumber' 
                    name='phoneNumber' 
                    type='text' 
                    placeholder='Phone Number' 
                    className='rounded-sm h-10 pl-7 w-60' 
                    required 
                    minLength={10} 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
