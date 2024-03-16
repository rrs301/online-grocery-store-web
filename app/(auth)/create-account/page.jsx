"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function CreateAccount() {
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const router=useRouter();
    const [loader,setLoader]=useState();


    useEffect(()=>{
        const jwt=sessionStorage.getItem('jwt');
        if(jwt)
        {
            router.push('/')
        }
    },[])
    const onCreateAccount=()=>{
        setLoader(true)
        GlobalApi.registerUser(username,email,password).then(resp=>{
            console.log(resp.data.user)
            console.log(resp.data.jwt)
            sessionStorage.setItem('user',JSON.stringify(resp.data.user));
            sessionStorage.setItem('jwt',resp.data.jwt);
            toast("Account Created Successfully")
            router.push('/');
            setLoader(false)
        },(e)=>{
            setLoader(false)
            toast(e?.response?.data?.error?.message)
        })
    }
  return (
    <div className='flex items-baseline justify-center my-20'>
        <div className='flex flex-col items-center justify-center
        p-10 bg-slate-100 border border-gray-200'>
            <Image src='/logo.png' width={200} height={200} alt='logo'/>
            <h2 className='font-bold text-3xl'>Create an Account</h2>
            <h2 className='text-gray-500'>Enter your Email and Password to Create an account</h2>
            <div className='w-full flex flex-col gap-5 mt-7'>
                <Input placeholder='Username' 
                onChange={(e)=>setUsername(e.target.value)}
                />
                <Input placeholder='name@example.com' 
                onChange={(e)=>setEmail(e.target.value)}/>
                <Input type='password' 
                placeholder='Password' 
                onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={()=>onCreateAccount()}
                    disabled={!(username||email||password)}
                >
                   {loader?<LoaderIcon className='animate-spin'/>:'Create an Account'} </Button>
                   
                <p>Already have an account  
                    <Link href={'/sign-in'} className='text-blue-500'>
                         Click here to Sign In
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount