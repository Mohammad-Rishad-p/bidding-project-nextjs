// signUpMongo.tsx
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Checkbox, Label } from 'flowbite-react';
import Link from 'next/link';
import { Button } from './ui/button';

const SignUpMongo = () => {
    type User = {
        firstName: string,
        lastName: string,
        userName: string,
        password: string,
        email: string,
        phoneNumber: number,
        aadhar: number,
        pan: string,
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<number | "">("");
    const [aadhar, setAadhar] = useState<number | "">("");
    const [pan, setPan] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName || !lastName || !userName || !password || !email || !phoneNumber || !aadhar || !pan) {
            alert("Please fill all the fields");
            return;
        }

        const newUser: User = {
            firstName,
            lastName,
            userName,
            password,
            email,
            phoneNumber: Number(phoneNumber),
            aadhar: Number(aadhar),
            pan, // Keep pan as a string
        };

        try {
            console.log("Sending user data:", newUser);
            const res = await fetch('/api/users/addUser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser),
            });
            if (res.ok) {
                alert("User added successfully");
                setFirstName("");
                setLastName("");
                setUserName("");
                setPassword("");
                setEmail("");
                setPhoneNumber("");
                setAadhar("");
                setPan("");
            } else {
                const errorData = await res.json();
                console.error("Error from server:", errorData);
                alert(`Error: ${errorData.message}`);
            }
        } catch (error: any) {
            console.error("Error while adding user:", error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className='bg-slate-400 w-[40%] h-400 pb-4 text-black dark:text-white rounded-lg'>
            <div className='flex items-center flex-col pb-4'>
                <h1 className='text-5xl pb-2'>Free Sign Up</h1>
                <h5 className='text-sm'>Sign-up takes less than 30 seconds. Get 5 Free Credits on Joining.</h5>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='flex gap-5 items-center justify-center pb-4'>
                    <Input id='firstName' name='firstName' type='text' placeholder='First Name' className='rounded-sm h-10 pl-7 w-60' required minLength={3} onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    <Input id='lastName' name='lastName' type='text' placeholder='Last Name' className='rounded-sm h-10 pl-7 w-60' required minLength={3} onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className='flex gap-5 items-center justify-center pb-4'>
                    <Input id='userName' name='userName' type='text' placeholder='username' className='rounded-sm h-10 pl-7 w-60' required minLength={3} onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <Input id='password' name='password' type='password' placeholder='password' className='rounded-sm h-10 pl-7 w-60' required minLength={3} onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className='flex gap-5 items-center justify-center pb-4'>
                    <Input id='email' name='email' type='text' placeholder='Enter email' className='rounded-sm h-10 pl-7 w-60' required onChange={(e) => setEmail(e.target.value)} value={email} />
                    <Input id='phoneNumber' name='phoneNumber' type='number' placeholder='phone number' className='rounded-sm h-10 pl-7 w-60' maxLength={10} onChange={(e) => setPhoneNumber(Number(e.target.value))} value={phoneNumber} />
                </div>
                <div className='flex gap-5 items-center justify-center pb-4'>
                    <Input id='aadhar' name='aadhar' type='text' placeholder='enter aadhar number' className='rounded-sm h-10 pl-7 w-60' required minLength={12} onChange={(e) => setAadhar(Number(e.target.value))} value={aadhar} />
                    <Input id='pan' name='pan' type='text' placeholder='enter pan number' className='rounded-sm h-10 pl-7 w-60' required minLength={3} onChange={(e) => setPan(e.target.value)} value={pan} />
                </div>
                <div className='flex gap-3 items-center justify-center text-white pb-4'>
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-orange-600 hover:underline dark:text-cyan-500">
                            terms and conditions&nbsp;
                        </Link> of easy bidder
                    </Label>
                </div>
                <div className='flex gap-4 items-center justify-center text-white'>
                    <div className='flex bg-orange-600 items-center justify-center rounded-md hover:bg-[#db534c]'>
                        <Button variant='destructive' className='bg-orange-600 text-lg hover:bg-[#db534c]' type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 pl-2 pr-2 border-r-[0.5px] border-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            Sign up
                        </Button>
                    </div>
                    
                    <div className='flex bg-blue-700 hover:bg-blue-800 items-center justify-center rounded-md'>
                        
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUpMongo;
