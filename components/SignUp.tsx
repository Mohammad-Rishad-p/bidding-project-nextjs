import React from 'react'
import { Button } from './ui/button'
import Login from './Login'
import { Checkbox, Label } from 'flowbite-react'
import Link from 'next/link'


function SignUp() {
    return (
        <div className=' bg-slate-400 w-[40%] h-400 pb-4 text-black dark:text-white '>
            {/* heading part */}
            <div className='flex items-center flex-col pb-4'>
                <h1 className='text-5xl pb-2'>Free Sign Up</h1>
                <h5 className=' text-sm'>Sign-up takes less than 30 seconds. Get 5 Free Credits on Joining.</h5>
            </div>

            {/* form */}
            <form>
                {/* first, lasn name */}
                <div className='flex gap-5 items-center justify-center pb-4'>
                    <input name='firstName' type='text' placeholder='First Name' className=' rounded-sm h-10 pl-7 w-60' required minLength={3} />
                    <input name='lirstName' type='text' placeholder='Lirst Name' className=' rounded-sm h-10 pl-7 w-60' required minLength={3} />
                </div>
                {/* user name, password */}
                <div className='flex gap-5 items-center justify-center pb-4'>
                    <input name='userName' type='text' placeholder='username' className=' rounded-sm h-10 pl-7 w-60' required minLength={3} />
                    <input name='password' type='password' placeholder='password' className=' rounded-sm h-10 pl-7 w-60' required minLength={3} />
                </div>
                {/* email, phone nuber */}
                <div className='flex gap-5 items-center justify-center pb-4'>
                    <input name='email' type='text' placeholder='Enter email' className=' rounded-sm h-10 pl-7 w-60' required />
                    <input name='phoneNumber' type='tel' placeholder='phone number' className=' rounded-sm h-10 pl-7 w-60' required minLength={10} maxLength={10} />
                </div>
                {/* checkbox, terms and policy */}
                <div className='flex gap-3 items-center justify-center text-white pb-4'>
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-orange-600 hover:underline dark:text-cyan-500">
                            terms and conditions &nbsp;
                        </Link> of easy bidder
                    </Label>
                </div>
                {/* signup button */}
                <div className='flex gap-4 items-center justify-center text-white'>
                    {/* signup icon,button */}
                    <div className=' flex bg-orange-600 items-center justify-center rounded-md hover:bg-[#db534c]'>
                        {/* signup button */}
                        <Button variant='destructive' className=' bg-orange-600  text-lg hover:bg-[#db534c]'>
                            {/* signup icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 pl-2 pr-2 border-r-[0.5px] border-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            Sign up</Button>
                    </div>
                    <h1>OR</h1>
                    {/* facebook signup */}
                    <div className=' flex bg-blue-700 hover:bg-blue-800  items-center justify-center rounded-md'>
                        <Button variant='destructive' className='bg-blue-700 hover:bg-blue-800 text-md' type='submit'>
                            <svg className=" w-9 h-6 text-blue-200  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                            </svg>
                            Sign Up With Facebook
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp